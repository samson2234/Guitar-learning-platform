import React from 'react';
import Link from 'next/link';

export default function Features() {
    return (
        <section className="features" id="features">
            <div className="section-container">
                <div className="section-header">
                    <div className="section-label">Features</div>
                    <h2 className="section-title">Everything you need to learn guitar</h2>
                    <p className="section-description">
                        Our platform combines visual learning with hands-on practice
                        to accelerate your guitar journey.
                    </p>
                </div>
                <div className="features-grid">
                    <Link href="/tools/fretboard" className="feature-card-link">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M11.5 2a8.5 8.5 0 0 1 0 17v3l-3-3-3 3v-3a8.5 8.5 0 0 1 6-16z" />
                                    <circle cx="11.5" cy="10.5" r="3" />
                                    <path d="M11.5 7.5v-2M14.5 10.5h2M11.5 13.5v2M8.5 10.5h-2" />
                                </svg>
                            </div>
                            <h3>Interactive Fretboard</h3>
                            <p>Visual chord diagrams that show exactly where to place your fingers. Practice anywhere, anytime.</p>
                        </div>
                    </Link>
                    <Link href="/lessons" className="feature-card-link">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="4" width="20" height="14" rx="2" />
                                    <circle cx="12" cy="11" r="3" />
                                    <path d="M10.5 9.5l4 3-4 3z" fill="currentColor" />
                                </svg>
                            </div>
                            <h3>HD Video Lessons</h3>
                            <p>200+ professionally filmed lessons from beginner basics to advanced techniques.</p>
                        </div>
                    </Link>
                    <Link href="/dashboard" className="feature-card-link">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                                    <circle cx="12" cy="12" r="4" />
                                    <path d="M12 8v4l2 2" />
                                </svg>
                            </div>
                            <h3>Progress Tracking</h3>
                            <p>Set goals, track your practice time, and watch your skills improve over time.</p>
                        </div>
                    </Link>
                    <Link href="/songs" className="feature-card-link">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 18V5l12-2v13" />
                                    <circle cx="6" cy="18" r="3" />
                                    <circle cx="18" cy="16" r="3" />
                                    <path d="M9 9l12-2" />
                                </svg>
                            </div>
                            <h3>Song Library</h3>
                            <p>Learn your favorite songs with tabs, chords, and play-along backing tracks.</p>
                        </div>
                    </Link>
                    <Link href="/signup" className="feature-card-link">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
                                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                                    <line x1="12" y1="19" x2="12" y2="22" />
                                    <path d="M8 22h8" />
                                    <path d="M3 10l1.5 1.5M21 10l-1.5 1.5M3 14l1.5-1.5M21 14l-1.5-1.5" />
                                </svg>
                            </div>
                            <h3>AI Feedback</h3>
                            <p>Get real-time feedback on your playing through our audio recognition technology.</p>
                        </div>
                    </Link>
                    <Link href="/signup" className="feature-card-link">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <h3>Community</h3>
                            <p>Connect with fellow learners, share progress, and get tips from experienced players.</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
