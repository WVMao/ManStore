import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
    const { t, language } = useLanguage();

    // On peut aussi localiser l'iframe si besoin via le paramètre hl
    const mapLanguage = language === 'zh' ? 'zh-CN' : language;
    const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15919.243542283833!2d9.7347775!3d4.0510565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061128be2e1ce6d%3A0x675bc7b003a7f80!2sCit%C3%A9%20Sic%2C%20Douala!5e0!3m2!1s${mapLanguage}!2scm!4v1700000000000!5m2!1s${mapLanguage}!2scm`;

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <div className="contact-wrapper fade-on-scroll visible">
                    <div className="contact-info-card">
                        <div className="contact-info-header">
                            <h2>{t('contact.title')}</h2>
                            <p className="contact-subtitle">{t('contact.subtitle')}</p>
                        </div>

                        <div className="contact-details-list">
                            <div className="detail-item-premium">
                                <i className="fa-solid fa-location-dot detail-icon"></i>
                                <span className="detail-label">{t('contact.address')}</span>
                                <p className="detail-value">{t('contact.addressText')}</p>
                            </div>

                            <div className="detail-item-premium">
                                <i className="fa-solid fa-phone detail-icon"></i>
                                <span className="detail-label">{t('contact.phone')}</span>
                                <p className="detail-value">+237 696 193 409</p>
                            </div>

                            <div className="detail-item-premium">
                                <i className="fa-solid fa-clock detail-icon"></i>
                                <span className="detail-label">{t('contact.hours')}</span>
                                <p className="detail-value">{t('contact.hoursText')}</p>
                            </div>
                        </div>

                        <div className="contact-actions-premium">
                            <a href="https://www.google.com/maps/dir//Entrée+Gendarmerie+Cité+Sic,+Douala"
                                target="_blank" className="btn-premium-outline">
                                <i className="fa-solid fa-location-arrow"></i> {t('contact.directions')}
                            </a>
                            <a href="https://wa.me/237696193409" className="btn-premium-whatsapp" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-whatsapp"></i> {t('contact.whatsapp')}
                            </a>
                        </div>
                    </div>

                    <div className="map-container-premium">
                        <iframe
                            src={mapUrl}
                            width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
