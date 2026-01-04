import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
    const { t, language } = useLanguage();

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <div className="contact-wrapper fade-on-scroll visible">
                    <div className="contact-info-card" style={{ width: '100%', border: 'none', background: 'transparent', boxShadow: 'none' }}>
                        <div className="contact-info-header" style={{ textAlign: 'center' }}>
                            <h2>{t('contact.title')}</h2>
                            <p className="contact-subtitle">{t('contact.subtitle')}</p>
                        </div>

                        <div className="contact-details-list" style={{ alignItems: 'center' }}>
                            <div className="detail-item-premium" style={{ alignItems: 'center', textAlign: 'center' }}>
                                <i className="fa-solid fa-location-dot detail-icon"></i>
                                <span className="detail-label">{t('contact.address')}</span>
                                <p className="detail-value">{t('contact.addressText')}</p>
                            </div>

                            <div className="detail-item-premium" style={{ alignItems: 'center', textAlign: 'center' }}>
                                <i className="fa-solid fa-phone detail-icon"></i>
                                <span className="detail-label">{t('contact.phone')}</span>
                                <p className="detail-value">+237 696 193 409</p>
                            </div>

                            <div className="detail-item-premium" style={{ alignItems: 'center', textAlign: 'center' }}>
                                <i className="fa-solid fa-clock detail-icon"></i>
                                <span className="detail-label">{t('contact.hours')}</span>
                                <p className="detail-value">{t('contact.hoursText')}</p>
                            </div>
                        </div>

                        <div className="contact-actions-premium" style={{ alignItems: 'center' }}>
                            <a href="https://www.google.com/maps/dir//Entrée+Gendarmerie+Cité+Sic,+Douala"
                                target="_blank" className="btn-premium-outline">
                                <i className="fa-solid fa-location-arrow"></i> {t('contact.directions')}
                            </a>
                            <a href="https://wa.me/237696193409" className="btn-premium-whatsapp" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-whatsapp"></i> {t('contact.whatsapp')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
