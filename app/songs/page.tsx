
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function SongsPage() {
    return (
        <main className="contact-page">
            <Navbar />
            <div className="contact-hero">
                <h1>Song <span style={{ color: 'var(--accent)' }}>Library</span></h1>
                <p>Learn to play your favorite hits.</p>
            </div>

            <div className="section-container" style={{ padding: '0 2rem 4rem' }}>
                <div style={{ padding: '2rem', background: 'var(--bg-card)', borderRadius: '16px', border: '1px solid var(--border)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                        <input type="text" placeholder="Search songs..." style={{
                            padding: '0.8rem',
                            borderRadius: '8px',
                            border: '1px solid var(--border)',
                            background: 'var(--bg-dark)',
                            color: 'var(--text-primary)',
                            width: '300px'
                        }} />
                        <button style={{
                            padding: '0.8rem 1.5rem',
                            background: 'var(--accent)',
                            color: 'var(--bg-dark)',
                            border: 'none',
                            borderRadius: '8px',
                            fontWeight: 600
                        }}>Upload Song</button>
                    </div>

                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--border)', textAlign: 'left' }}>
                                <th style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Song Title</th>
                                <th style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Artist</th>
                                <th style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Difficulty</th>
                                <th style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { title: 'Wonderwall', artist: 'Oasis', difficulty: 'Beginner' },
                                { title: 'Stairway to Heaven', artist: 'Led Zeppelin', difficulty: 'Advanced' },
                                { title: 'Hotel California', artist: 'Eagles', difficulty: 'Intermediate' },
                                { title: 'Blackbird', artist: 'The Beatles', difficulty: 'Intermediate' },
                            ].map((song, i) => (
                                <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                                    <td style={{ padding: '1rem' }}>{song.title}</td>
                                    <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>{song.artist}</td>
                                    <td style={{ padding: '1rem' }}>
                                        <span style={{
                                            padding: '0.3rem 0.8rem',
                                            borderRadius: '100px',
                                            background: 'var(--bg-elevated)',
                                            fontSize: '0.8rem'
                                        }}>{song.difficulty}</span>
                                    </td>
                                    <td style={{ padding: '1rem' }}>
                                        <button style={{
                                            background: 'transparent',
                                            color: 'var(--accent)',
                                            border: 'none',
                                            cursor: 'pointer',
                                            fontWeight: 600
                                        }}>Play</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </main>
    );
}
