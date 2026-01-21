import React from 'react';

export default function Instructors() {
    return (
        <section className="instructors" id="instructors">
            <div className="section-container">
                <div className="section-header">
                    <div className="section-label">Instructors</div>
                    <h2 className="section-title">Learn from the best</h2>
                    <p className="section-description">
                        Our instructors have decades of combined experience and a passion for teaching.
                    </p>
                </div>
                <div className="instructors-grid">
                    <div className="instructor-card">
                        <div className="instructor-image">
                            <img src="/images/acoustic-specialist.jpg" alt="Marcus Chen" />
                        </div>
                        <div className="instructor-name">Marcus Chen</div>
                        <div className="instructor-role">Acoustic Specialist</div>
                        <p className="instructor-bio">15 years teaching, Berklee graduate</p>
                    </div>
                    <div className="instructor-card">
                        <div className="instructor-image">
                            <img src="/images/fingerstyle-expert.jpg" alt="Sarah Williams" />
                        </div>
                        <div className="instructor-name">Sarah Williams</div>
                        <div className="instructor-role">Fingerstyle Expert</div>
                        <p className="instructor-bio">YouTube educator, 2M subscribers</p>
                    </div>
                    <div className="instructor-card">
                        <div className="instructor-image">
                            <img src="/images/blues-rock-guitar.jpg" alt="James Rodriguez" />
                        </div>
                        <div className="instructor-name">James Rodriguez</div>
                        <div className="instructor-role">Blues & Rock</div>
                        <p className="instructor-bio">Session guitarist, 20+ albums</p>
                    </div>
                    <div className="instructor-card">
                        <div className="instructor-image">
                            <img src="/images/music-theory-instructor.jpg" alt="Emily Park" />
                        </div>
                        <div className="instructor-name">Emily Park</div>
                        <div className="instructor-role">Music Theory</div>
                        <p className="instructor-bio">PhD in Music, award-winning educator</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
