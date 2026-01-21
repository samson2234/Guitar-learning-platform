
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
    return (
        <main className="contact-page">
            <Navbar />

            <div className="contact-hero">
                <h1>Get in <span style={{ color: 'var(--accent)' }}>Touch</span></h1>
                <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            </div>

            <div className="contact-container">
                {/* Contact Info */}
                <div className="contact-info-wrapper">
                    <div className="contact-card">
                        <div className="contact-icon">📍</div>
                        <div className="contact-content">
                            <h3>Visit Us</h3>
                            <p>123 Music Avenue<br />Los Angeles, CA 90210</p>
                        </div>
                    </div>

                    <div className="contact-card">
                        <div className="contact-icon">✉️</div>
                        <div className="contact-content">
                            <h3>Email Us</h3>
                            <p>hello@stringmaster.com<br />support@stringmaster.com</p>
                        </div>
                    </div>

                    <div className="contact-card">
                        <div className="contact-icon">📞</div>
                        <div className="contact-content">
                            <h3>Call Us</h3>
                            <p>+1 (555) 123-4567<br />Mon-Fri, 9am-6pm PST</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="contact-form-container">
                    <form>
                        <div className="form-group">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-input" placeholder="Your name" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-input" placeholder="your@email.com" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Message</label>
                            <textarea className="form-textarea" placeholder="How can we help you?"></textarea>
                        </div>
                        <button type="submit" className="submit-btn">
                            Send Message
                            <span>→</span>
                        </button>
                    </form>
                </div>
            </div>

            <Footer />
        </main>
    );
}
