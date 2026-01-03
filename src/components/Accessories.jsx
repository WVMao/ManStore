import React from 'react';

const Accessories = () => {
    return (
        <section id="accessories" className="section accessories-section">
            <div className="container">
                <div className="section-header fade-on-scroll visible">
                    <h2>Essentiels MagSafe & Audio.</h2>
                    <p>Complétez votre expérience.</p>
                </div>

                <div className="accessories-grid">
                    {/* Large Feature Item */}
                    <div className="acc-card large fade-on-scroll visible">
                        <img src="/assets/airpods.png" alt="AirPods Pro 2" className="acc-img-main" />
                        <div className="acc-details">
                            <h3>AirPods Pro 2</h3>
                            <p>Réduction de bruit active. Audio spatial.</p>
                            <span className="acc-price">10.000 FCFA</span>
                            <a
                                href="https://wa.me/237696193409?text=Je veux commander les AirPods Pro 2"
                                className="btn btn-primary"
                                style={{ backgroundColor: '#25D366', color: 'white', border: 'none', marginTop: '15px' }}
                            >
                                <i className="fa-brands fa-whatsapp" style={{ marginRight: '8px' }}></i> Commander
                            </a>
                        </div>
                    </div>

                    {/* Vertical List for others */}
                    <div className="acc-list fade-on-scroll visible">

                        <AccessoryItem
                            icon="fa-solid fa-bolt"
                            title="Fast Charger 20W"
                            desc="Charge Rapide iPhone"
                            price="5.000 FCFA"
                            waText="Je veux commander le Fast Charger 20W"
                        />
                        <AccessoryItem
                            icon="fa-solid fa-plug"
                            title="Boîtier iPhone (Type C)"
                            desc="Adaptateur Secteur 20W"
                            price="3.000 FCFA"
                            waText="Je veux commander le Boîtier iPhone (Type C)"
                        />
                        <AccessoryItem
                            icon="fa-solid fa-plug"
                            title="Boîtier iPhone (USB)"
                            desc="Adaptateur classique"
                            price="2.000 FCFA"
                            waText="Je veux commander le Boîtier iPhone (USB)"
                        />
                        <AccessoryItem
                            icon="fa-solid fa-battery-full"
                            title="Chargeur Android (Complet)"
                            desc="Adaptateur + Câble"
                            price="4.500 FCFA"
                            waText="Je veux commander le Chargeur Android Complet"
                        />
                        <AccessoryItem
                            icon="fa-brands fa-usb"
                            title="Cordon iPhone (Type C)"
                            desc="Câble de charge rapide"
                            price="2.000 FCFA"
                            waText="Je veux commander le Cordon iPhone (Type C)"
                        />
                        <AccessoryItem
                            icon="fa-brands fa-usb"
                            title="Cordon iPhone (USB)"
                            desc="Câble Lightning standard"
                            price="1.000 FCFA"
                            waText="Je veux commander le Cordon iPhone (USB)"
                        />
                        <AccessoryItem
                            icon="fa-brands fa-android"
                            title="Cordon Android"
                            desc="Câble de charge universel"
                            price="1.000 FCFA"
                            waText="Je veux commander le Cordon Android"
                        />
                        <AccessoryItem
                            icon="fa-solid fa-headphones"
                            title="Écouteur iPhone"
                            desc="Lightning Audio"
                            price="3.000 FCFA"
                            waText="Je veux commander les Écouteurs iPhone"
                        />
                        <AccessoryItem
                            icon="fa-solid fa-headphones-simple"
                            title="Écouteur Android"
                            desc="Jack 3.5mm universel"
                            price="2.000 FCFA"
                            waText="Je veux commander les Écouteurs Android"
                        />
                        <AccessoryItem
                            icon="fa-solid fa-mobile-screen"
                            title="Pochette iPhone Transparente"
                            desc="Protection MagSafe Clear"
                            price="4.500 FCFA"
                            waText="Je veux commander la Pochette iPhone Transparente"
                        />
                        <AccessoryItem
                            icon="fa-solid fa-mobile"
                            title="Pochette iPhone Silicone"
                            desc="Toutes couleurs disponibles"
                            price="3.000 FCFA"
                            waText="Je veux commander la Pochette iPhone Silicone"
                        />
                        <AccessoryItem
                            icon="fa-solid fa-shield-cat"
                            title="Glace Fumée iPhone"
                            desc="Confidentialité & Protection"
                            price="1.500 FCFA"
                            waText="Je veux commander la Glace Fumée iPhone"
                        />
                        <AccessoryItem
                            icon="fa-solid fa-shield-halved"
                            title="Glace iPhone"
                            desc="Protection écran 9D"
                            price="1.000 FCFA"
                            waText="Je veux commander la Glace iPhone"
                        />

                    </div>
                </div>
            </div>
        </section>
    );
};

const AccessoryItem = ({ icon, title, desc, price, waText }) => (
    <div className="acc-list-item">
        <div className="acc-icon"><i className={icon}></i></div>
        <div className="acc-info">
            <h4>{title}</h4>
            <p>{desc}</p>
        </div>
        <div className="acc-action">
            <span className="mini-price">{price}</span>
            <a
                href={`https://wa.me/237696193409?text=${waText}`}
                className="btn-mini-wa"
            >
                <i className="fa-brands fa-whatsapp"></i> Commander
            </a>
        </div>
    </div>
);

export default Accessories;
