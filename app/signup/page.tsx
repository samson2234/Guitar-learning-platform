"use client";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';

export default function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { signup } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const success = await signup(email, password, name);

            if (!success) {
                setError('Signup failed. Please try again.');
                setLoading(false);
            }
        } catch (error: any) {
            setError(error.message || 'Signup failed. Please try again.');
            setLoading(false);
        }
    };

    return (
        <main className="contact-page">
            <Navbar />

            <div className="contact-hero" style={{ paddingBottom: '2rem' }}>
                <h1>Start Your <span style={{ color: 'var(--accent)' }}>Journey</span></h1>
                <p>Join thousands of students mastering the guitar today.</p>
            </div>

            <div className="contact-container" style={{ display: 'flex', justifyContent: 'center' }}>
                {/* Signup Form */}
                <div className="contact-form-container" style={{ maxWidth: '500px', width: '100%', padding: '3rem' }}>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-input"
                                placeholder="Your Name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Email Address</label>
                            <input
                                type="email"
                                className="form-input"
                                placeholder="your@email.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-input"
                                placeholder="Create a password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {error && <div style={{ color: '#ef4444', marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}
                        <button type="submit" className="submit-btn" style={{ marginBottom: '1.5rem' }} disabled={loading}>
                            {loading ? 'Creating Account...' : 'Sign Up'}
                            {!loading && <span>→</span>}
                        </button>
                        <div style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
                            Already have an account? <Link href="/login" style={{ color: 'var(--accent)', fontWeight: 600 }}>Login</Link>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </main>
    );
}
