import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Shop from './components/Shop';
import Accessories from './components/Accessories';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
    useEffect(() => {
        // 1. Intersection Observer for Scroll Reveal Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const scrollElements = document.querySelectorAll('.fade-on-scroll');
        scrollElements.forEach(el => observer.observe(el));

        // Cleanup not strictly necessary for single page app that doesn't unmount, but good practice
        return () => observer.disconnect();
    }, []); // Run once on mount

    return (
        <>
            <Navbar />
            <Hero />
            <Shop />
            <Accessories />
            <Testimonials />
            <Contact />
            <Footer />
            <FloatingWhatsApp />
        </>
    );
}

export default App;
