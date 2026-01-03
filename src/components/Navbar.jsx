import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar" id="navbar" style={{ backgroundColor: scrolled ? 'rgba(29, 29, 31, 0.95)' : 'rgba(29, 29, 31, 0.8)' }}>
            <div className="nav-container">
                <a href="#" className="logo">
                    <div className="logo-wrapper">
                        <img src="assets/logo.png" alt="ManStore Logo" className="logo-img" />
                    </div>
                    <span>ManStore</span>
                </a>

                <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li><a href="#hero" onClick={() => setIsOpen(false)}>Accueil</a></li>
                    <li><a href="#shop" onClick={() => setIsOpen(false)}>iPhones</a></li>
                    <li><a href="#accessories" onClick={() => setIsOpen(false)}>Accessoires</a></li>
                    <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                </ul>
                <a href="https://wa.me/237696193409" className="nav-btn-mobile"><i className="fa-brands fa-whatsapp"></i></a>
            </div>
        </nav>
    );
};

export default Navbar;
