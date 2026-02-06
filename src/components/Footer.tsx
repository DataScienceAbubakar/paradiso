import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Paradiso Beauty</h3>
                    <p>Your sanctuary for premium beauty and wellness. Experience the touch of paradise.</p>
                </div>
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>Email: paradisobeautys@gmail.com</p>
                    <p>Phone: 07033330327</p>
                    <p>Address: WGF9+5CW, Umarawa 700231, Kano, Nigeria</p>
                    <p>Hours: Mon - Sat: 9 AM - 9 PM</p>
                </div>
                <div className="footer-section">
                    <h3>Find Us</h3>
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.742680965561!2d8.516003174874967!3d11.922987488304246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ac2af457975099%3A0x867e891f1fec2be8!2sWGF9%2B5CW%2C%20Umarawa%20700231%2C%20Kano%2C%20Nigeria!5e0!3m2!1sen!2sgh!4v1770386936427!5m2!1sen!2sgh"
                            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2026 Paradiso Beauty. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
