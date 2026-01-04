import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const { language, setLanguage, t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [langMenuOpen, setLangMenuOpen] = useState(false);

    const languages = {
        fr: { name: 'Français', flag: '🇫🇷' },
        en: { name: 'English', flag: '🇬🇧' },
        es: { name: 'Español', flag: '🇪🇸' },
        it: { name: 'Italiano', flag: '🇮🇹' },
        zh: { name: '中文', flag: '🇨🇳' }
    };

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

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const selectLanguage = (lang) => {
        setLanguage(lang);
        setLangMenuOpen(false);
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
                    <li><a href="#hero" onClick={() => setIsOpen(false)}>{t('nav.home')}</a></li>
                    <li><a href="#shop" onClick={() => setIsOpen(false)}>{t('nav.shop')}</a></li>
                    <li><a href="#accessories" onClick={() => setIsOpen(false)}>{t('nav.accessories')}</a></li>
                    <li><a href="#contact" onClick={() => setIsOpen(false)}>{t('nav.contact')}</a></li>
                </ul>

                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', position: 'relative' }}>
                    <ThemeToggle />
                    <div style={{ position: 'relative' }}>
                        <button
                            onClick={() => setLangMenuOpen(!langMenuOpen)}
                            style={{
                                background: 'rgba(255, 255, 255, 0.1)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                borderRadius: '20px',
                                padding: '6px 12px',
                                color: 'white',
                                fontSize: '13px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: '0.3s',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '5px'
                            }}
                        >
                            {languages[language].flag} {language.toUpperCase()}
                        </button>
                        {langMenuOpen && (
                            <div style={{
                                position: 'absolute',
                                top: '45px',
                                right: '0',
                                background: '#1d1d1f',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                borderRadius: '12px',
                                padding: '8px',
                                minWidth: '150px',
                                zIndex: 1000,
                                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                            }}>
                                {Object.entries(languages).map(([code, { name, flag }]) => (
                                    <button
                                        key={code}
                                        onClick={() => selectLanguage(code)}
                                        style={{
                                            width: '100%',
                                            padding: '10px 12px',
                                            background: language === code ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                                            border: 'none',
                                            borderRadius: '8px',
                                            color: 'white',
                                            cursor: 'pointer',
                                            textAlign: 'left',
                                            fontSize: '14px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            transition: '0.2s'
                                        }}
                                        onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.15)'}
                                        onMouseLeave={(e) => e.target.style.background = language === code ? 'rgba(255, 255, 255, 0.1)' : 'transparent'}
                                    >
                                        <span>{flag}</span>
                                        <span>{name}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
