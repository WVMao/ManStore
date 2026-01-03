import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();
    const images = [
        'assets/hero_suite.png',
        'assets/hero_slide_2.png',
        'assets/hero_slide_airpods.png',
        'assets/hero_slide_watch.png',
        'assets/hero_slide_magsafe.png'
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFading(true);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 500);
        }, 3500);

        return () => clearInterval(interval);
    }, [images.length]);

    const handleImageLoad = () => {
        setIsFading(false);
    };

    return (
        <section className="hero-section" id="hero">
            <div className="hero-container">
                <div className="hero-text">
                    <span className="hero-badge fade-in-up">{t('hero.badge')}</span>
                    <h1 className="fade-in-up delay-1">{t('hero.title')}</h1>
                    <p className="fade-in-up delay-2">{t('hero.subtitle')}</p>
                    <div className="hero-cta fade-in-up delay-3">
                        <a href="#shop" className="btn btn-primary">{t('hero.cta')}</a>
                        <a href="#contact" className="btn btn-outline">{t('hero.learn')} <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="hero-image-container">
                    <img
                        src={images[currentImageIndex]}
                        alt="iPhone 15 Pro Titanium"
                        className={`hero-img ${isFading ? 'fade-out' : ''}`}
                        onLoad={handleImageLoad}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
