import React, { useState, useEffect } from 'react';

const Hero = () => {
    const images = [
        '/assets/hero_suite.png',
        '/assets/hero_slide_2.png',
        '/assets/hero_slide_airpods.png',
        '/assets/hero_slide_watch.png',
        '/assets/hero_slide_magsafe.png'
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFading(true);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 500); // Wait for fade out transition (0.5s) to complete before switching source
        }, 3500); // Total cycle time (3s view + 0.5s transition)

        return () => clearInterval(interval);
    }, [images.length]);

    const handleImageLoad = () => {
        setIsFading(false);
    };

    return (
        <section className="hero-section" id="hero">
            <div className="hero-container">
                <div className="hero-text">
                    <span className="hero-badge">Nouveau Arrivage</span>
                    <h1>L'Excellence <br /><span className="gradient-text">iPhone 15 Pro.</span></h1>
                    <p>Découvrez la puissance du titane. Plus léger, plus robuste, plus Pro que jamais. Disponible dès maintenant chez ManStore.</p>
                    <div className="hero-cta">
                        <a href="#phones" className="btn btn-primary">Acheter Maintenant</a>
                        <a href="#contact" className="btn btn-outline">En Savoir Plus <i className="fa-solid fa-arrow-right"></i></a>
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
