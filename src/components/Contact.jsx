import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <div className="contact-wrapper fade-on-scroll visible">
                    <div className="contact-info">
                        <h2>Nous trouver.</h2>
                        <p className="address">
                            <i className="fa-solid fa-location-dot"></i>
                            Entrée Gendarmerie Cité Sic<br />
                            Douala, Cameroun
                        </p>


                        <div className="hours">
                            <p><strong>Ouvert 7j/7</strong></p>
                            <p>08:00 - 20:00</p>
                        </div>

                        <div className="contact-actions">
                            <a href="https://www.google.com/maps/dir//Entr%C3%A9e+Gendarmerie+Cit%C3%A9+Sic,+Douala"
                                target="_blank" className="btn btn-outline btn-map">
                                <i className="fa-solid fa-location-arrow"></i> Itinéraire
                            </a>
                            <a href="https://wa.me/237696193409" className="btn btn-primary btn-whatsapp-large">
                                <i className="fa-brands fa-whatsapp"></i> Discuter sur WhatsApp
                            </a>
                        </div>
                    </div>

                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15919.243542283833!2d9.7347775!3d4.0510565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061128be2e1ce6d%3A0x675bc7b003a7f80!2sCit%C3%A9%20Sic%2C%20Douala!5e0!3m2!1sen!2scm!4v1700000000000!5m2!1sen!2scm"
                            width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
