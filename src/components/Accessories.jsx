import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Accessories = () => {
    const { t, formatPrice } = useLanguage();
    return (
        <section id="accessories" className="section accessories-section">
            <div className="container">
                <div className="section-header fade-on-scroll visible">
                    <h2>{t('accessories.title')}</h2>
                    <p>{t('accessories.subtitle')}</p>
                </div>

                <div className="accessories-grid">
                    {/* AirPods Card - Horizontal Layout */}
                    <div className="product-card airpods-premium-card fade-on-scroll visible">
                        <div className="airpods-image-container">
                            <img src="assets/airpods.png" alt="AirPods Pro 2" className="airpods-img-main" />
                        </div>
                        <div className="airpods-content-box">
                            <h3 className="airpods-title">{t('accessories.airpods.name')}</h3>
                            <div className="model-list visible">
                                <div className="model-row" style={{ borderBottom: 'none' }}>
                                    <div className="model-info">
                                        <span className="model-name">{t('accessories.airpods.name')}</span>
                                        <span className="model-cap">{t('accessories.airpods.desc')}</span>
                                    </div>
                                    <div className="model-price-container">
                                        <span className="model-price">{formatPrice("10.000 FCFA")}</span>
                                        <a href={`https://wa.me/237696193409?text=${t('common.order')} ${t('accessories.airpods.name')} (${formatPrice("10.000 FCFA")})`} className="btn-icon">
                                            <i className="fa-brands fa-whatsapp"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Vertical List for others */}
                    <div className="model-list fade-on-scroll visible">

                        <AccessoryItem
                            icon="fa-solid fa-bolt"
                            titleKey="accessories.items.fastCharger"
                            descKey="accessories.items.fastChargerDesc"
                            price="5.000 FCFA"
                        />
                        <AccessoryItem
                            icon="fa-solid fa-plug"
                            titleKey="accessories.items.caseTypeC"
                            descKey="accessories.items.caseTypeCDesc"
                            price="3.000 FCFA"
                        />
                        <AccessoryItem
                            icon="fa-solid fa-plug"
                            titleKey="accessories.items.caseUSB"
                            descKey="accessories.items.caseUSBDesc"
                            price="2.000 FCFA"
                        />
                        <AccessoryItem
                            icon="fa-solid fa-battery-full"
                            titleKey="accessories.items.androidCharger"
                            descKey="accessories.items.androidChargerDesc"
                            price="4.500 FCFA"
                        />
                        <AccessoryItem
                            icon="fa-brands fa-usb"
                            titleKey="accessories.items.cableTypeC"
                            descKey="accessories.items.cableTypeCDesc"
                            price="2.000 FCFA"
                        />
                        <AccessoryItem
                            icon="fa-brands fa-usb"
                            titleKey="accessories.items.cableUSB"
                            descKey="accessories.items.cableUSBDesc"
                            price="1.000 FCFA"
                        />
                        <AccessoryItem
                            icon="fa-brands fa-android"
                            titleKey="accessories.items.androidCable"
                            descKey="accessories.items.androidCableDesc"
                            price="1.000 FCFA"
                        />
                        <AccessoryItem
                            icon="fa-solid fa-headphones"
                            titleKey="accessories.items.earphones"
                            descKey="accessories.items.earphonesDesc"
                            price="3.000 FCFA"
                        />
                        <AccessoryItem
                            icon="fa-solid fa-headphones-simple"
                            titleKey="accessories.items.earphonesAndroid"
                            descKey="accessories.items.earphonesAndroidDesc"
                            price="2.000 FCFA"
                        />
                        <AccessoryItem
                            icon="fa-solid fa-mobile-screen"
                            titleKey="accessories.items.caseClear"
                            descKey="accessories.items.caseClearDesc"
                            price="4.500 FCFA"
                        />
                        <AccessoryItem
                            icon="fa-solid fa-mobile-screen"
                            titleKey="accessories.items.caseSilicone"
                            descKey="accessories.items.caseSiliconeDesc"
                            price="3.000 FCFA"
                        />
                        <AccessoryItem
                            icon="fa-solid fa-shield"
                            titleKey="accessories.items.screenProtector"
                            descKey="accessories.items.screenProtectorDesc"
                            price="1.500 FCFA"
                        />

                    </div>
                </div>
            </div>
        </section>
    );
};

const AccessoryItem = ({ icon, titleKey, descKey, title, desc, price }) => {
    const { t, formatPrice } = useLanguage();
    const displayTitle = titleKey ? t(titleKey) : title;
    const displayDesc = descKey ? t(descKey) : desc;

    return (
        <div className="model-row" style={{ padding: '15px 0', borderBottom: '1px solid #333' }}>
            <div className="model-info">
                <span className="model-name" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className={icon} style={{ color: '#666', width: '20px' }}></i>
                    {displayTitle}
                </span>
                <span className="model-cap">{displayDesc}</span>
            </div>
            <div className="model-price-container">
                <span className="model-price">{formatPrice(price)}</span>
                <a href={`https://wa.me/237696193409?text=${t('common.order')} ${displayTitle} (${formatPrice(price)})`} className="btn-icon">
                    <i className="fa-brands fa-whatsapp"></i>
                </a>
            </div>
        </div>
    );
};

export default Accessories;
