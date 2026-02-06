import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <>
            <section className="hero">
                <h1>Elegance Defined</h1>
                <p>Step into a world of luxury and transformation. Paradiso Beauty Lounge offers bespoke treatments tailored
                    to your unique glow.</p>
                <Link to="/services" className="btn">Explore Services</Link>
            </section>

            <section id="explore">
                <div className="section-title">
                    <h2>Explore Our World</h2>
                    <div className="divider"></div>
                </div>
                <div className="explore-grid">
                    <Link to="/products" className="explore-card">
                        <div className="explore-img" style={{ backgroundImage: "url('/assets/products.png')" }}></div>
                        <div className="explore-overlay">
                            <h3>Boutique</h3>
                            <p>Premium Bags & Accessories</p>
                        </div>
                    </Link>
                    <Link to="/services" className="explore-card">
                        <div className="explore-img" style={{ backgroundImage: "url('/assets/service_hair.png')" }}></div>
                        <div className="explore-overlay">
                            <h3>Lounge</h3>
                            <p>Bespoke Beauty Services</p>
                        </div>
                    </Link>
                    <Link to="/articles" className="explore-card">
                        <div className="explore-img" style={{ backgroundImage: "url('/assets/service_facial.png')" }}></div>
                        <div className="explore-overlay">
                            <h3>Journal</h3>
                            <p>Beauty Insights & Tips</p>
                        </div>
                    </Link>
                    <Link to="/contact" className="explore-card">
                        <div className="explore-img" style={{ backgroundImage: "url('/assets/hero.png')" }}></div>
                        <div className="explore-overlay">
                            <h3>Visit Us</h3>
                            <p>Find Our Sanctuary</p>
                        </div>
                    </Link>
                </div>
            </section>

            <section id="about">
                <div className="section-title">
                    <h2>The Paradiso Experience</h2>
                    <div className="divider"></div>
                </div>
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <p>Welcome to Paradiso Beauty, where we believe that beauty is an experience, not just a result. Our
                        lounge is designed to be your sanctuary, combining state-of-the-art techniques with a serene
                        atmosphere to ensure you leave feeling renewed and radiant.</p>
                    <p style={{ marginTop: '1.5rem' }}>From expert hair styling to rejuvenating spa treatments, our dedicated
                        team of professionals is committed to excellence in every detail.</p>
                </div>
            </section>
        </>
    );
};

export default Home;
