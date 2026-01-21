import React from 'react';
import Link from 'next/link';

export default function Cta() {
    return (
        <section className="cta">
            <div className="section-container cta-content">
                <h2>Ready to start your guitar journey?</h2>
                <p>Join 50,000+ students learning guitar the modern way. Start your free trial today.</p>
                <Link href="#pricing" className="btn-primary">Start Free Trial →</Link>
            </div>
        </section>
    );
}
