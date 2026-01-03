import React from 'react';

const Testimonials = () => {
    return (
        <section id="testimonials" className="section testimonials-section">
            <div className="container">
                <div className="section-header fade-on-scroll visible">
                    <h2>Ce qu'ils disent.</h2>
                    <p>La satisfaction client avant tout.</p>
                </div>

                <div className="testimonials-grid fade-on-scroll visible">
                    <TestimonialCard
                        name="Franck M."
                        location="Douala"
                        text="J'ai pris mon iPhone 14 Pro Max ici, service impeccable. Livraison rapide à Douala. Je ne regrette pas mon achat chez ManStore."
                    />
                    <TestimonialCard
                        name="Sarah N."
                        location="Yaoundé"
                        text="Les prix sont vraiment bons. J'ai aimé la transparence sur l'état du téléphone. Je recommande vivement pour ceux qui cherchent la qualité."
                    />
                    <TestimonialCard
                        name="Lionel E."
                        location="Bafoussam"
                        text="Vendeur sérieux. J'ai reçu mon colis comme prévu. Le téléphone est nickel, aucune rayure, batterie à 100%."
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
