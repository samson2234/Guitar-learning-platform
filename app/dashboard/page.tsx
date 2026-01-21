"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function DashboardPage() {
    const { user, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && !user) {
            router.push('/login');
        }
    }, [user, isLoading, router]);

    if (isLoading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'var(--bg-dark)' }}>
                <div className="loader">Loading...</div>
            </div>
        );
    }

    if (!user) {
        return null; // Will redirect in useEffect
    }

    return (
        <main className="contact-page">
            <Navbar />
            <div className="contact-hero">
                <h1>Welcome back, <span style={{ color: 'var(--accent)' }}>{user.name}</span></h1>
                <p>Track your progress and practice stats.</p>
            </div>

            <div className="section-container" style={{ padding: '0 2rem 4rem' }}>
                {/* Stats Overview */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
                    {['Practice Time', 'Songs Learned', 'Lessons Completed', 'Current Streak'].map((label, i) => (
                        <div key={i} style={{ padding: '1.5rem', background: 'var(--bg-card)', borderRadius: '16px', border: '1px solid var(--border)' }}>
                            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{label}</div>
                            <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                                {i === 0 ? '12h 30m' : i === 1 ? '8' : i === 2 ? '15' : '5 Days'}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Progress Chart Placeholder */}
                <div style={{ padding: '2rem', background: 'var(--bg-card)', borderRadius: '16px', border: '1px solid var(--border)', marginBottom: '3rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                        <h3>Practice Analytics</h3>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            {['Day', 'Week', 'Month', 'Year'].map(period => (
                                <button key={period} style={{
                                    padding: '0.4rem 1rem',
                                    borderRadius: '8px',
                                    border: '1px solid var(--border)',
                                    background: period === 'Week' ? 'var(--accent)' : 'var(--bg-elevated)',
                                    color: period === 'Week' ? 'var(--bg-dark)' : 'var(--text-primary)',
                                    cursor: 'pointer'
                                }}>{period}</button>
                            ))}
                        </div>
                    </div>
                    <div style={{ height: '300px', background: 'var(--bg-elevated)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <p style={{ color: 'var(--text-secondary)' }}>[Chart Visualization Goes Here]</p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
