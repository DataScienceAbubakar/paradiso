import React from 'react';

const Contact: React.FC = () => {
    return (
        <main>
            <section style={{ paddingTop: '150px' }}>
                <div className="section-title">
                    <h2>Get In Touch</h2>
                    <div className="divider"></div>
                </div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '4rem',
                        maxWidth: '1000px',
                        margin: '0 auto'
                    }}
                >
                    <div>
                        <h3 style={{ marginBottom: '2rem', color: 'var(--primary)' }}>Visit the Lounge</h3>
                        <p style={{ marginBottom: '1rem' }}><strong>Address:</strong> WGF9+5CW, Umarawa 700231, Kano, Nigeria</p>
                        <p style={{ marginBottom: '1rem' }}><strong>Email:</strong> paradisobeautys@gmail.com</p>
                        <p style={{ marginBottom: '1rem' }}><strong>Phone:</strong> 07033330327</p>
                        <p style={{ marginBottom: '1rem' }}><strong>Hours:</strong> Mon - Sat: 9 AM - 9 PM</p>

                        <div className="map-container" style={{ height: '300px', marginTop: '2rem' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.742680965561!2d8.516003174874967!3d11.922987488304246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ac2af457975099%3A0x867e891f1fec2be8!2sWGF9%2B5CW%2C%20Umarawa%20700231%2C%20Kano%2C%20Nigeria!5e0!3m2!1sen!2sgh!4v1770386936427!5m2!1sen!2sgh"
                                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                    <div>
                        <h3 style={{ marginBottom: '2rem', color: 'var(--primary)' }}>Send a Message</h3>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <input
                                type="text"
                                placeholder="Your Name"
                                style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '5px', fontFamily: 'inherit' }}
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '5px', fontFamily: 'inherit' }}
                            />
                            <textarea
                                placeholder="How can we help you?"
                                rows={5}
                                style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '5px', fontFamily: 'inherit' }}
                            ></textarea>
                            <button type="submit" className="btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
