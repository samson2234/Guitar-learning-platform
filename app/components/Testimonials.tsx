import React from 'react';

export default function Testimonials() {
    return (
        <section className="testimonials" id="testimonials">
            <div className="section-container">
                <div className="section-header">
                    <div className="section-label">Testimonials</div>
                    <h2 className="section-title">What our students say</h2>
                </div>
                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        <div className="testimonial-stars">★★★★★</div>
                        <p className="testimonial-text">&quot;I&apos;ve tried several apps, but StringMaster&apos;s interactive fretboard finally made chord transitions click for me. Went from zero to playing songs in 3 months!&quot;</p>
                        <div className="testimonial-author">
                            <div className="testimonial-avatar">
                                <img src="/images/alex-student.jpg" alt="Alex Thompson" />
                            </div>
                            <div>
                                <div className="testimonial-name">Alex Thompson</div>
                                <div className="testimonial-title">Beginner, 4 months</div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="testimonial-stars">★★★★★</div>
                        <p className="testimonial-text">&quot;The AI feedback feature is incredible. It&apos;s like having a personal instructor available 24/7. My fingerpicking has improved dramatically.&quot;</p>
                        <div className="testimonial-author">
                            <div className="testimonial-avatar">
                                <img src="/images/maria-student.jpg" alt="Maria Garcia" />
                            </div>
                            <div>
                                <div className="testimonial-name">Maria Garcia</div>
                                <div className="testimonial-title">Intermediate, 1 year</div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="testimonial-stars">★★★★★</div>
                        <p className="testimonial-text">&quot;Worth every penny. The song library keeps me motivated, and the progress tracking shows exactly how far I&apos;ve come. Highly recommend!&quot;</p>
                        <div className="testimonial-author">
                            <div className="testimonial-avatar">
                                <img src="/images/david-student.jpg" alt="David Kim" />
                            </div>
                            <div>
                                <div className="testimonial-name">David Kim</div>
                                <div className="testimonial-title">Pro subscriber, 8 months</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
