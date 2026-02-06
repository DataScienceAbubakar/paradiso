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
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126844.06348604473!2d3.3330685!3d6.452654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a3da574a9c!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1704380000000!5m2!1sen!2sng"
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
