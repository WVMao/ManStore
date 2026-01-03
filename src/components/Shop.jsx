import React, { useState, useMemo } from 'react';
import { products } from '../data/products';
import { useLanguage } from '../context/LanguageContext';

const Shop = () => {
    const { t, formatPrice } = useLanguage();
    const [filterTag, setFilterTag] = useState('all');
    const [filterCapacity, setFilterCapacity] = useState(null);

    const handleTagFilter = (tag) => {
        setFilterTag(tag);
        setFilterCapacity(null); // Reset capacity when switching tag
    };

    const handleCapacityFilter = (capacity) => {
        setFilterCapacity(capacity);
        setFilterTag('all'); // Reset tag when switching capacity (optimized based on original logic implies either/or or mixed, but original UI had capacity filter visually separate. Original code: "if (isCapacity) renderProducts('capacity', ...)")
    };

    const filteredGroups = useMemo(() => {
        const groups = {};

        products.forEach(p => {
            let key = p.tag;
            if (p.tag === 'old' || p.tag === 'XR' || p.tag === '8') key = 'Vintage';

            let isVisible = true;
            if (filterCapacity && !p.capacity.includes(filterCapacity)) isVisible = false;

            if (filterTag !== 'all') {
                if (filterTag === 'old' && key === 'Vintage') {
                    // keep visible
                } else if (p.tag !== filterTag) {
                    isVisible = false;
                }
            }

            if (isVisible) {
                if (!groups[key]) {
                    groups[key] = {
                        name: key === 'Vintage' ? 'iPhone XR / 8' : `Série iPhone ${key}`,
                        tag: key,
                        img: p.img,
                        items: []
                    };
                }
                groups[key].items.push(p);
            }
        });

        // Order
        const order = ['16', '15', '14', '13', '12', '11', 'Vintage'];
        return order.map(k => groups[k]).filter(g => g !== undefined);

    }, [filterTag, filterCapacity]);

    const getMinPrices = (items) => {
        const minPrices = {};
        items.forEach(item => {
            const rawPrice = parseInt(item.price.replace(/\./g, '').replace(' FCFA', ''));
            if (!minPrices[item.name] || rawPrice < minPrices[item.name]) {
                minPrices[item.name] = rawPrice;
            }
        });
        return minPrices;
    };

    return (
        <section id="shop" className="section shop-section">
            <div className="container container-wide">
                <div className="section-header fade-on-scroll visible">
                    <h2>{t('shop.title')}</h2>
                    <p>{t('shop.subtitle')}</p>
                </div>

                {/* Series Filters */}
                <div className="filters fade-on-scroll visible">
                    {['all', '16', '15', '14', '13', '12', '11', 'old'].map(tag => (
                        <button
                            key={tag}
                            className={`filter-btn ${!filterCapacity && filterTag === tag ? 'active' : ''}`}
                            onClick={() => handleTagFilter(tag)}
                        >
                            {tag === 'all' ? t('shop.all') : tag === 'old' ? t('shop.others') : `${t('shop.series')} ${tag}`}
                        </button>
                    ))}
                </div>

                {/* Capacity Filters */}
                <div className="filters fade-on-scroll visible" style={{ marginTop: '-30px', marginBottom: '50px' }}>
                    {['128GB', '256GB'].map(cap => (
                        <button
                            key={cap}
                            className={`filter-btn ${filterCapacity === cap ? 'active' : ''}`}
                            onClick={() => handleCapacityFilter(cap)}
                        >
                            {cap.replace('GB', ' GB')}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="product-grid" id="iphone-grid">
                    {filteredGroups.length === 0 && (
                        <p style={{ color: 'white', textAlign: 'center', gridColumn: '1/-1' }}>Aucun modèle disponible.</p>
                    )}
                    {filteredGroups.map(group => {
                        const minPrices = getMinPrices(group.items);

                        return (
                            <div key={group.tag} className="product-card fade-on-scroll visible series-card">
                                <div className="product-image series-image">
                                    <img src={group.img} alt={group.name} />
                                </div>
                                <div className="product-info series-info">
                                    <div className="product-header">
                                        <h3>{group.name}</h3>
                                        {(group.tag === '16' || group.tag === '15') && <span className="badge-new">{t('shop.promo')}</span>}
                                    </div>
                                    <div className="model-list visible">
                                        {group.items.map((item, idx) => {
                                            const currentPrice = parseInt(item.price.replace(/\./g, '').replace(' FCFA', ''));
                                            const count = group.items.filter(i => i.name === item.name).length;
                                            const isCheapest = count > 1 && currentPrice === minPrices[item.name];

                                            return (
                                                <div key={idx} className="model-row">
                                                    <div className="model-info">
                                                        <span className="model-name">{item.name}</span>
                                                        <span className="model-cap">
                                                            {item.capacity} {item.origin ? `• ${item.origin}` : ''}
                                                            {isCheapest && <span style={{ color: '#FFD700', fontSize: '10px', marginLeft: '5px', fontWeight: 700 }}>★ {t('shop.bestPrice')}</span>}
                                                        </span>
                                                    </div>
                                                    <div className="model-price-container">
                                                        <span className="model-price" style={isCheapest ? { color: '#FFD700' } : {}}>{formatPrice(item.price)}</span>
                                                        <a href={`https://wa.me/237696193409?text=${t('common.order')} ${item.name} ${item.capacity} (${formatPrice(item.price)})`} className="btn-icon">
                                                            <i className="fa-brands fa-whatsapp"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Shop;
