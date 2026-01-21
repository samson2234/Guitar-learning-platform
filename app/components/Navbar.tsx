"use client";
import React, { useState } from 'react';
import Link from 'next/link';

import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const { user, logout } = useAuth();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav>
            <div className="nav-container">
                <Link href="/" className="logo" onClick={closeMenu}>
                    <div className="logo-icon">♪</div>
                    StringMaster
                </Link>
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li><Link href="/" onClick={closeMenu}>Home</Link></li>
                    <li><Link href="/about" onClick={closeMenu}>About</Link></li>
                    <li><Link href="/#features" onClick={closeMenu}>Features</Link></li>
                    <li><Link href="/#pricing" onClick={closeMenu}>Pricing</Link></li>
                    <li><Link href="/#instructors" onClick={closeMenu}>Instructors</Link></li>
                    <li><Link href="/#testimonials" onClick={closeMenu}>Reviews</Link></li>
                    <li><Link href="/contact" onClick={closeMenu}>Contact</Link></li>
                    {user && <li><Link href="/dashboard" onClick={closeMenu} style={{ color: 'var(--accent)' }}>Dashboard</Link></li>}
                </ul>
                <div className="nav-actions">
                    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>
                    {user ? (
                        <>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Hi, {user.name}</span>
                            <button onClick={() => { logout(); closeMenu(); }} className="nav-link-item" style={{ background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600, color: 'var(--text-primary)' }}>
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link href="/login" className="nav-link-item" onClick={closeMenu} style={{ fontWeight: 600, marginRight: '0.5rem' }}>
                                Login
                            </Link>
                            <Link href="/signup" className={`nav-cta ${isOpen ? 'active' : ''}`} onClick={closeMenu}>
                                <span>Sign Up</span>
                            </Link>
                        </>
                    )}
                </div>
                <button className="mobile-menu-btn" onClick={toggleMenu}>
                    {isOpen ? '✕' : '☰'}
                </button>
            </div>
        </nav>
    );
}
