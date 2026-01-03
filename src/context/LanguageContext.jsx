import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations, detectLanguage } from '../utils/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        // Check localStorage first, then detect browser language
        const saved = localStorage.getItem('language');
        return saved || detectLanguage();
    });

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    const t = (key) => {
        const keys = key.split('.');
        let value = translations[language];

        for (const k of keys) {
            value = value?.[k];
        }

        return value || key;
    };

    const formatPrice = (priceStr) => {
        if (!priceStr) return "";

        // Extract number from FCFA string (e.g., "650.000 FCFA" -> 650000)
        const numericValue = parseFloat(priceStr.replace(/[^0-9]/g, ''));

        const rate = translations[language].common.currencyRate;
        const symbol = translations[language].common.currencySymbol;
        const converted = numericValue * rate;

        if (language === 'fr') {
            return `${numericValue.toLocaleString('fr-FR')} FCFA`;
        }

        // Format other currencies
        const formatted = converted.toLocaleString(language === 'zh' ? 'zh-CN' : 'en-US', {
            minimumFractionDigits: (language === 'zh') ? 0 : 2,
            maximumFractionDigits: (language === 'zh') ? 0 : 2
        });

        return language === 'zh' ? `${symbol}${formatted}` : `${symbol}${formatted}`;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, formatPrice }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    return context;
};
