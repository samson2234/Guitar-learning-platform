"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';

// Constants
const STRINGS = 6;
const FRETS = 8;
const STRING_NOTES = ['E4', 'B3', 'G3', 'D3', 'A2', 'E2'];
const NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

const CHORDS: Record<string, { frets: number[], fingers: (number | null)[] }> = {
    'C': { frets: [-1, 1, 0, 2, 3, -1], fingers: [null, 1, null, 2, 3, null] },
    'G': { frets: [3, 0, 0, 0, 2, 3], fingers: [2, null, null, null, 1, 3] },
    'Am': { frets: [0, 1, 2, 2, 0, -1], fingers: [null, 1, 2, 3, null, null] },
    'F': { frets: [1, 1, 2, 3, 3, 1], fingers: [1, 1, 2, 3, 4, 1] },
    'D': { frets: [2, 3, 2, 0, -1, -1], fingers: [1, 3, 2, null, null, null] },
    'Em': { frets: [0, 0, 0, 2, 2, 0], fingers: [null, null, null, 1, 2, null] }
};

const SONGS: Record<string, { name: string, tempo: number, notes: [number, number, number][] }> = {
    greensleeves: {
        name: 'Greensleeves',
        tempo: 400,
        notes: [
            [2, 0, 1], [1, 1, 1], [0, 3, 2], [0, 5, 1], [0, 3, 1], [0, 1, 2],
            [1, 0, 1], [2, 0, 1], [1, 1, 2], [2, 0, 1], [1, 1, 1], [0, 0, 2],
            [0, 0, 1], [1, 0, 1], [0, 1, 2], [0, 3, 1], [0, 5, 1], [0, 3, 2],
            [0, 1, 1], [1, 0, 1], [2, 0, 2], [1, 1, 1], [2, 0, 1], [1, 1, 2]
        ]
    },
    houseoftherisingsun: {
        name: 'House of the Rising Sun',
        tempo: 350,
        notes: [
            [4, 0, 1], [3, 2, 1], [2, 2, 1], [1, 1, 1], [2, 2, 1], [3, 2, 1],
            [4, 2, 1], [3, 2, 1], [2, 0, 1], [1, 1, 1], [2, 0, 1], [3, 2, 1],
            [4, 0, 1], [3, 2, 1], [2, 1, 1], [1, 0, 1], [2, 1, 1], [3, 2, 1],
            [4, 2, 1], [3, 2, 1], [2, 2, 1], [1, 1, 1], [2, 2, 1], [3, 2, 1]
        ]
    },
    amazinggrace: {
        name: 'Amazing Grace',
        tempo: 500,
        notes: [
            [3, 0, 1], [2, 0, 2], [1, 1, 1], [2, 0, 1], [1, 1, 2], [1, 0, 1],
            [2, 0, 3], [3, 2, 1], [3, 0, 2], [2, 0, 1], [1, 1, 1], [2, 0, 1],
            [1, 1, 2], [0, 0, 1], [0, 3, 3], [0, 3, 1], [0, 0, 2], [1, 1, 1],
            [2, 0, 1], [1, 1, 2], [1, 0, 1], [2, 0, 3]
        ]
    }
};

export default function GuitarFretboard() {
    const [activeMarkers, setActiveMarkers] = useState<{ string: number, fret: number, playing: boolean }[]>([]);
    const [soundEnabled, setSoundEnabled] = useState(true);
    const [currentSongKey, setCurrentSongKey] = useState('greensleeves');
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [activeChord, setActiveChord] = useState<string | null>(null);

    const audioCtxRef = useRef<AudioContext | null>(null);
    const compressorRef = useRef<DynamicsCompressorNode | null>(null);
    const songTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const noteIndexRef = useRef(0);

    // Audio Context Initialization
    const getAudioContext = useCallback(() => {
        if (!audioCtxRef.current) {
            const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
            const ctx = new AudioContextClass();

            const compressor = ctx.createDynamicsCompressor();
            compressor.threshold.value = -24;
            compressor.knee.value = 30;
            compressor.ratio.value = 12;
            compressor.attack.value = 0.003;
            compressor.release.value = 0.25;
            compressor.connect(ctx.destination);

            audioCtxRef.current = ctx;
            compressorRef.current = compressor;
        }
        if (audioCtxRef.current.state === 'suspended') {
            audioCtxRef.current.resume();
        }
        return { ctx: audioCtxRef.current, compressor: compressorRef.current };
    }, []);

    // Helper functions
    const getNoteAtPosition = (string: number, fret: number) => {
        const baseNote = STRING_NOTES[string];
        const baseNoteIndex = NOTE_NAMES.indexOf(baseNote.slice(0, -1).replace('b', '#'));
        const noteIndex = (baseNoteIndex + fret + 1) % 12;
        return NOTE_NAMES[noteIndex];
    };

    const getFrequency = (string: number, fret: number) => {
        const baseFreqs = [329.63, 246.94, 196.00, 146.83, 110.00, 82.41];
        return baseFreqs[string] * Math.pow(2, fret / 12);
    };

    const playNote = useCallback((string: number, fret: number, showVisual = true) => {
        if (showVisual) {
            setActiveMarkers(prev => {
                // Remove existing for this string
                const filtered = prev.filter(m => m.string !== string);
                return [...filtered, { string, fret, playing: true }];
            });

            // Remove 'playing' class after animation (300ms)
            setTimeout(() => {
                setActiveMarkers(prev => prev.map(m =>
                    (m.string === string && m.fret === fret) ? { ...m, playing: false } : m
                ));
            }, 300);
        }

        if (!soundEnabled) return;

        try {
            const { ctx, compressor } = getAudioContext();
            if (!ctx || !compressor) return;

            const freq = getFrequency(string, fret);

            const osc1 = ctx.createOscillator();
            const osc2 = ctx.createOscillator();
            const gainNode = ctx.createGain();
            const filter = ctx.createBiquadFilter();

            osc1.type = 'triangle';
            osc2.type = 'sine';
            osc1.frequency.value = freq;
            osc2.frequency.value = freq * 2;

            filter.type = 'lowpass';
            filter.frequency.value = 1800;
            filter.Q.value = 0.7;

            osc1.connect(filter);
            osc2.connect(filter);
            filter.connect(gainNode);
            gainNode.connect(compressor);

            const now = ctx.currentTime;
            gainNode.gain.setValueAtTime(0.001, now);
            gainNode.gain.exponentialRampToValueAtTime(0.15, now + 0.015);
            gainNode.gain.exponentialRampToValueAtTime(0.08, now + 0.1);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

            osc1.start(now);
            osc2.start(now);
            osc1.stop(now + 1.2);
            osc2.stop(now + 1.2);
        } catch (e) {
            console.error('Audio error:', e);
        }
    }, [soundEnabled, getAudioContext]);


    const stopSong = useCallback(() => {
        setIsPlaying(false);
        if (songTimeoutRef.current) {
            clearTimeout(songTimeoutRef.current);
            songTimeoutRef.current = null;
        }
        noteIndexRef.current = 0;
        setProgress(0);
        setActiveMarkers([]);
    }, []);

    const showChord = (chordName: string) => {
        stopSong();
        setActiveChord(chordName);

        const chord = CHORDS[chordName];
        const newMarkers: { string: number, fret: number, playing: boolean }[] = [];
        const notesToPlay: { string: number, fret: number }[] = [];

        chord.frets.forEach((fret, string) => {
            if (fret >= 0) {
                const actualFret = fret === 0 ? 0 : fret - 1;
                newMarkers.push({ string, fret: actualFret, playing: false });
                notesToPlay.push({ string, fret: actualFret });
            }
        });

        setActiveMarkers(newMarkers);

        // Strumbing effect
        if (soundEnabled) {
            notesToPlay.reverse().forEach((note, i) => {
                setTimeout(() => playNote(note.string, note.fret, false), i * 40);
            });
        }
    };

    const clearNotes = () => {
        setActiveMarkers([]);
        setActiveChord(null);
    };

    const playSong = () => {
        if (isPlaying) {
            stopSong();
            return;
        }

        getAudioContext(); // Ensure audio context is ready
        setIsPlaying(true);
        noteIndexRef.current = 0;
    };

    // Effect for playing song loop
    useEffect(() => {
        if (isPlaying) {
            const song = SONGS[currentSongKey];

            const loop = () => {
                if (noteIndexRef.current >= song.notes.length) {
                    stopSong(); // This sets isPlaying false, which triggers Effect cleanup.
                    return;
                }

                const [string, fret, duration] = song.notes[noteIndexRef.current];

                // Clear previous marker?
                // The original cleared previous and showed current.
                // setActiveMarkers will replace state.
                setActiveMarkers([{ string, fret, playing: true }]);
                playNote(string, fret, false); // Don't add marker again via playNote, we already set it.

                // Update progress
                setProgress(((noteIndexRef.current + 1) / song.notes.length) * 100);

                noteIndexRef.current++;
                songTimeoutRef.current = setTimeout(loop, song.tempo * duration);
            };

            loop();
        }
        return () => {
            if (songTimeoutRef.current) clearTimeout(songTimeoutRef.current);
        };
    }, [isPlaying, currentSongKey, playNote, stopSong]);


    // Initial Audio Context on click
    useEffect(() => {
        const initAudio = () => {
            getAudioContext();
            document.removeEventListener('click', initAudio);
        };
        document.addEventListener('click', initAudio, { once: true });
        return () => document.removeEventListener('click', initAudio);
    }, [getAudioContext]);


    return (
        <div className="guitar-wrapper">
            <div className="guitar-card">
                <div className="guitar-header">
                    <span className="guitar-title">Try it — Click a chord</span>
                    <div className="guitar-controls">
                        {Object.keys(CHORDS).map(chord => (
                            <button
                                key={chord}
                                className={`chord-btn ${activeChord === chord ? 'active' : ''}`}
                                onClick={() => showChord(chord)}
                            >
                                {chord}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="guitar-neck">
                    <div className="fretboard">
                        <div className="nut"></div>
                        <div className="fretboard-grid" id="fretboard">
                            <div className="string-labels">
                                {['E', 'B', 'G', 'D', 'A', 'E'].map((s, i) => (
                                    <div key={i} className="string-label">{s}</div>
                                ))}
                            </div>
                            {/* Generate Frets */}
                            {Array.from({ length: STRINGS }).map((_, stringIdx) => (
                                Array.from({ length: FRETS }).map((_, fretIdx) => {
                                    const isMarker = stringIdx === 2 && [2, 4, 6].includes(fretIdx);
                                    const noteName = getNoteAtPosition(stringIdx, fretIdx);
                                    const marker = activeMarkers.find(m => m.string === stringIdx && m.fret === fretIdx);

                                    return (
                                        <div
                                            key={`${stringIdx}-${fretIdx}`}
                                            className="fret"
                                            data-string={stringIdx}
                                            data-fret={fretIdx}
                                            onClick={() => playNote(stringIdx, fretIdx)}
                                        >
                                            {isMarker && <div className="fret-marker"></div>}
                                            <div className={`note-marker ${marker ? 'show' : ''} ${marker?.playing ? 'playing' : ''}`}>
                                                {noteName}
                                            </div>
                                        </div>
                                    );
                                })
                            ))}
                        </div>
                    </div>
                </div>
                <div className="guitar-footer">
                    <div className="guitar-footer-row">
                        <span className="guitar-hint">Click frets to play notes</span>
                        <div className="footer-controls">
                            <button className="clear-btn" onClick={() => { stopSong(); clearNotes(); }}>Clear</button>
                            <div className="sound-toggle">
                                <span>Sound</span>
                                <div
                                    className={`toggle-switch ${soundEnabled ? 'active' : ''}`}
                                    onClick={() => setSoundEnabled(!soundEnabled)}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="song-player">
                        <button
                            className={`play-btn ${isPlaying ? 'playing' : ''}`}
                            onClick={playSong}
                        >
                            {isPlaying ? '■' : '▶'}
                        </button>
                        <div className="song-info">
                            <div className="song-title">{SONGS[currentSongKey].name}</div>
                            <div className="song-progress">
                                <div className="song-progress-bar" style={{ width: `${progress}%` }}></div>
                            </div>
                        </div>
                        <select
                            className="song-select"
                            value={currentSongKey}
                            onChange={(e) => { stopSong(); setCurrentSongKey(e.target.value); }}
                        >
                            {Object.keys(SONGS).map(key => (
                                <option key={key} value={key}>{SONGS[key].name}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}
