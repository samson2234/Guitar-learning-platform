
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
    return (
        <main className="about-page">
            <Navbar />

            <div className="about-hero">
                <h1>We Are <span style={{ color: 'var(--accent)' }}>StringMaster</span></h1>
                <p>We're on a mission to democratize music education, making it accessible, engaging, and effective for everyone, everywhere.</p>
            </div>

            <section className="about-section">
                {/* Mission */}
                <div className="about-grid">
                    <div className="about-image">
                        <img src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=2070&auto=format&fit=crop" alt="Guitarist playing" />
                    </div>
                    <div className="about-content">
                        <h2>Built by Musicians, for Musicians</h2>
                        <p>StringMaster was founded in 2024 with a simple belief: learning an instrument shouldn't feel like a chore. It should be an immersive, rewarding journey that connects you with the music you love.</p>
                        <p>We combine cutting-edge technology with time-tested teaching methods to create a learning experience that adapts to you. Whether you're picking up a guitar for the first time or looking to master complex jazz theory, we're here to guide every strum of the way.</p>
                    </div>
                </div>

                {/* Stats */}
                <div className="stats-grid">
                    <div className="about-stat">
                        <span className="about-stat-number">50k+</span>
                        <span className="about-stat-label">Active Students</span>
                    </div>
                    <div className="about-stat">
                        <span className="about-stat-number">1000+</span>
                        <span className="about-stat-label">Video Lessons</span>
                    </div>
                    <div className="about-stat">
                        <span className="about-stat-number">4.9</span>
                        <span className="about-stat-label">App Rating</span>
                    </div>
                    <div className="about-stat">
                        <span className="about-stat-number">50+</span>
                        <span className="about-stat-label">Expert Instructors</span>
                    </div>
                </div>

                {/* Innovation */}
                <div className="about-grid reversed">
                    <div className="about-image">
                        <img src="https://images.unsplash.com/photo-1550985543-f47f38aee65d?q=80&w=2070&auto=format&fit=crop" alt="Music technology" />
                    </div>
                    <div className="about-content">
                        <h2>Innovating Music Education</h2>
                        <p>We believe technology enhances creativity, not replaces it. Our platform features real-time pitch detection, interactive sheet music, and AI-powered progress tracking that gives you instant feedback on your playing.</p>
                        <p>But technology is just the tool. The heart of StringMaster is our community—a vibrant network of learners and mentors supporting each other's growth and celebrating every breakthrough.</p>
                    </div>
                </div>

                {/* Values */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2>Our Core Values</h2>
                </div>
                <div className="values-grid">
                    <div className="value-card">
                        <div className="value-icon">🎸</div>
                        <h3>Passion First</h3>
                        <p>We believe that passion is the best fuel for learning. We focus on teaching songs you love to keep that fire burning.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">🤝</div>
                        <h3>Community</h3>
                        <p>Music is meant to be shared. We foster a supportive environment where students can collaborate and grow together.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">💡</div>
                        <h3>Innovation</h3>
                        <p>We constantly push the boundaries of EdTech to provide the most effective and engaging learning tools available.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
