import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Testimonials = () => {
    const { t } = useLanguage();

    return (
        <section id="testimonials" className="section testimonials-section">
            <div className="container">
                <div className="section-header fade-on-scroll visible">
                    <h2>{t('testimonials.title')}</h2>
                    <p>{t('testimonials.subtitle')}</p>
                </div>

                <div className="testimonials-grid fade-on-scroll visible">
                    <TestimonialCard
                        name="Franck M."
                        location="Douala"
                        text={t('testimonials.review1')}
                    />
                    <TestimonialCard
                        name="Sarah N."
                        location="Yaoundé"
                        text={t('testimonials.review2')}
                    />
                    <TestimonialCard
                        name="Lionel E."
                        location="Bafoussam"
                        text={t('testimonials.review3')}
                    />
                </div>
            </div>
        </section>
    );
};

const TestimonialCard = ({ name, location, text }) => (
    <div className="testi-card">
        <div className="stars">
            <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                    className="fa-solid fa-star"></i>
        </div>
        <p className="testi-text">"{text}"</p>
        <div className="testi-author">
            <span className="author-name">{name}</span>
            <span className="author-loc">{location}</span>
        </div>
    </div>
);

export default Testimonials;
