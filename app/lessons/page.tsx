
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function LessonsPage() {
    return (
        <main className="contact-page">
            <Navbar />
            <div className="contact-hero">
                <h1>HD Video <span style={{ color: 'var(--accent)' }}>Lessons</span></h1>
                <p>Premium guitar lessons for every skill level.</p>
            </div>

            <div className="section-container" style={{ padding: '0 2rem 4rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} style={{ background: 'var(--bg-card)', borderRadius: '16px', border: '1px solid var(--border)', overflow: 'hidden' }}>
                            <div style={{ height: '200px', background: 'var(--bg-elevated)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ fontSize: '3rem' }}>▶️</span>
                            </div>
                            <div style={{ padding: '1.5rem' }}>
                                <h3 style={{ marginBottom: '0.5rem' }}>Beginner Guitar Lesson {i}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>Master the basics of strumming and chord transitions.</p>
                                <button style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    background: 'var(--bg-elevated)',
                                    border: '1px solid var(--border)',
                                    borderRadius: '8px',
                                    color: 'var(--text-primary)',
                                    cursor: 'pointer'
                                }}>Watch Lesson</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
