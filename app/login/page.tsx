"use client";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await login(email, password);
            // If successful, the login function will redirect to dashboard
        } catch (err: any) {
            setError(err.message || 'Invalid email or password.');
            setLoading(false);
            console.error("Login error:", err);
        }
    };

    return (
        <main className="contact-page">
            <Navbar />

            <div className="contact-hero" style={{ paddingBottom: '2rem' }}>
                <h1>Welcome <span style={{ color: 'var(--accent)' }}>Back</span></h1>
                <p>Login to continue your guitar journey.</p>
            </div>

            <div className="contact-container" style={{ display: 'flex', justifyContent: 'center' }}>
                {/* Login Form */}
                <div className="contact-form-container" style={{ maxWidth: '500px', width: '100%', padding: '3rem' }}>
                    <form onSubmit={handleSubmit}>
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
                                placeholder="••••••••"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {error && <div style={{ color: '#ef4444', marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}
                        <button type="submit" className="submit-btn" style={{ marginBottom: '1.5rem' }} disabled={loading}>
                            {loading ? 'Logging in...' : 'Login'}
                            {!loading && <span>→</span>}
                        </button>
                        <div style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
                            Don't have an account? <Link href="/signup" style={{ color: 'var(--accent)', fontWeight: 600 }}>Sign up</Link>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </main>
    );
}
