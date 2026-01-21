import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link href="#" className="logo">
                            <div className="logo-icon">♪</div>
                            StringMaster
                        </Link>
                        <p>The modern way to learn guitar. Interactive lessons, real-time feedback, and a supportive community.</p>
                    </div>
                    <div>
                        <h4 className="footer-title">Product</h4>
                        <ul className="footer-links">
                            <li><Link href="#">Features</Link></li>
                            <li><Link href="#">Pricing</Link></li>
                            <li><Link href="#">Song Library</Link></li>
                            <li><Link href="#">Mobile App</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="footer-title">Company</h4>
                        <ul className="footer-links">
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="#">Careers</Link></li>
                            <li><Link href="#">Blog</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="footer-title">Support</h4>
                        <ul className="footer-links">
                            <li><Link href="#">Help Center</Link></li>
                            <li><Link href="#">Community</Link></li>
                            <li><Link href="#">Terms of Service</Link></li>
                            <li><Link href="#">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <span>© 2026 StringMaster. All rights reserved.</span>
                    <span>Developed by <a href="https://www.templatemo.com" target="_blank" rel="nofollow noopener noreferrer">TemplateMo</a></span>
                </div>
            </div>
        </footer>
    );
}
