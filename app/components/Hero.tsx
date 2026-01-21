import React from 'react';
import Link from 'next/link';
import GuitarFretboard from './GuitarFretboard';

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span>●</span> New: AI-powered chord recognition
                    </div>
                    <h1>Master guitar with <span className="highlight">interactive</span> lessons</h1>
                    <p className="hero-description">
                        Learn at your own pace with our visual fretboard trainer.
                        From beginner chords to advanced techniques all in one platform.
                    </p>
                    <div className="hero-buttons">
                        <Link href="#pricing" className="btn-primary">
                            Start Learning →
                        </Link>
                        <Link href="#features" className="btn-secondary">
                            See How It Works
                        </Link>
                    </div>
                    <div className="hero-stats">
                        <div className="stat">
                            <div className="stat-value">50K+</div>
                            <div className="stat-label">Active Students</div>
                        </div>
                        <div className="stat">
                            <div className="stat-value">200+</div>
                            <div className="stat-label">Video Lessons</div>
                        </div>
                        <div className="stat">
                            <div className="stat-value">4.9</div>
                            <div className="stat-label">App Rating</div>
                        </div>
                    </div>
                </div>

                {/* Interactive Guitar */}
                <GuitarFretboard />
            </div>
        </section>
    );
}
