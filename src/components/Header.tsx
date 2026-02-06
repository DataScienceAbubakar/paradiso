import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Close menu when route changes
    useEffect(() => {
        console.log('Route changed to:', location.pathname);
        setIsMenuOpen(false);
        document.body.style.overflow = 'auto';
    }, [location]);

    const toggleMenu = () => {
        const newState = !isMenuOpen;
        console.log('Menu Toggle clicked. New state:', newState);
        setIsMenuOpen(newState);
        document.body.style.overflow = newState ? 'hidden' : 'auto';
    };

    return (
        <header className={isMenuOpen ? 'nav-open' : ''}>
            <Link to="/" className="logo">PARADISO BEAUTY</Link>
            <nav className={isMenuOpen ? 'active' : ''}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/articles">Articles</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </nav>
            <div
                className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle Navigation"
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
};

export default Header;
