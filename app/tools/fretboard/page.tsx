"use client";

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import React, { useState } from 'react';

export default function FretboardPage() {
    const [selectedRoot, setSelectedRoot] = useState('C');
    const [selectedQuality, setSelectedQuality] = useState('Major');

    const roots = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const qualities = ['Major', 'Minor', '7', 'Maj7', 'm7'];

    return (
        <main className="contact-page">
            <Navbar />
            <div className="contact-hero">
                <h1>Interactive <span style={{ color: 'var(--accent)' }}>Fretboard</span></h1>
                <p>Master the fretboard with our visual tools.</p>
            </div>

            <div className="section-container" style={{ padding: '0 2rem 4rem' }}>
                <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border)' }}>

                    <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Root Note</label>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                {roots.map(note => (
                                    <button
                                        key={note}
                                        onClick={() => setSelectedRoot(note)}
                                        style={{
                                            padding: '0.5rem 1rem',
                                            borderRadius: '8px',
                                            border: '1px solid var(--border)',
                                            background: selectedRoot === note ? 'var(--accent)' : 'var(--bg-elevated)',
                                            color: selectedRoot === note ? 'var(--bg-dark)' : 'var(--text-primary)',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        {note}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Chord Quality</label>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                {qualities.map(quality => (
                                    <button
                                        key={quality}
                                        onClick={() => setSelectedQuality(quality)}
                                        style={{
                                            padding: '0.5rem 1rem',
                                            borderRadius: '8px',
                                            border: '1px solid var(--border)',
                                            background: selectedQuality === quality ? 'var(--accent)' : 'var(--bg-elevated)',
                                            color: selectedQuality === quality ? 'var(--bg-dark)' : 'var(--text-primary)',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        {quality}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Mock D3/SVG Visualization Area */}
                    <div style={{
                        height: '300px',
                        background: 'var(--bg-dark)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid var(--border)'
                    }}>
                        <div style={{ textAlign: 'center' }}>
                            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{selectedRoot} {selectedQuality}</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Fretboard visualization would render here with active notes.</p>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </main>
    );
}
