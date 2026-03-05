import React, { useState } from 'react';
import { categories } from '../data/mockData';
import { Filter, Star, MapPin, ChevronRight, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Listing: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    // Mock technicians data
    const technicians = [
        { id: '1', name: 'Rajesh Kumar', category: 'Plumbing', rating: 4.8, reviews: 156, price: 299, image: 'RK', desc: 'Expert in leak detection and pipe fittings with 10+ years experience.' },
        { id: '2', name: 'Mohammad Saifi', category: 'Electrical', rating: 4.9, reviews: 89, price: 349, image: 'MS', desc: 'Specialized in smart home wiring and circuit board repairs.' },
        { id: '3', name: 'Amit Lal', category: 'Carpentry', rating: 4.7, reviews: 210, price: 199, image: 'AL', desc: 'Custom furniture design and wood restoration expert.' },
        { id: '4', name: 'Sanjay Dutt', category: 'Cleaning', rating: 4.6, reviews: 45, price: 499, image: 'SD', desc: 'Precision deep cleaning for premium residential spaces.' },
        { id: '5', name: 'Vikram Singh', category: 'Plumbing', rating: 4.9, reviews: 320, price: 399, image: 'VS', desc: 'Emergency plumbing services and bathroom renovations.' },
    ];

    const filteredTechnicians = selectedCategory
        ? technicians.filter(t => t.category === selectedCategory)
        : technicians;

    return (
        <div style={{ backgroundColor: 'var(--background)', minHeight: '100vh', paddingBottom: '4rem' }}>

            <div className="container" style={{ paddingTop: '3rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '3rem', alignItems: 'start' }}>
                    {/* Sidebar Filters */}
                    <aside style={{ position: 'sticky', top: '100px' }}>
                        <div className="card" style={{ padding: '2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                                <Filter size={20} className="gradient-text" style={{ border: 'none', backgroundClip: 'unset', WebkitTextFillColor: 'unset', color: 'var(--primary)' }} />
                                <h3 style={{ fontWeight: 800, fontSize: '1.25rem' }}>Filters</h3>
                            </div>

                            <div style={{ marginBottom: '2.5rem' }}>
                                <h4 style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '1.25rem' }}>
                                    Service Categories
                                </h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <button
                                        onClick={() => setSelectedCategory(null)}
                                        style={{
                                            textAlign: 'left',
                                            padding: '0.75rem 1rem',
                                            borderRadius: 'var(--radius-md)',
                                            background: selectedCategory === null ? 'var(--primary-light)' : 'transparent',
                                            color: selectedCategory === null ? 'var(--primary)' : 'var(--text-main)',
                                            fontWeight: selectedCategory === null ? 700 : 500,
                                            transition: 'all 0.2s ease',
                                            fontSize: '0.95rem'
                                        }}
                                    >
                                        All Services
                                    </button>
                                    {categories.map(cat => (
                                        <button
                                            key={cat.id}
                                            onClick={() => setSelectedCategory(cat.name)}
                                            style={{
                                                textAlign: 'left',
                                                padding: '0.75rem 1rem',
                                                borderRadius: 'var(--radius-md)',
                                                background: selectedCategory === cat.name ? 'var(--primary-light)' : 'transparent',
                                                color: selectedCategory === cat.name ? 'var(--primary)' : 'var(--text-main)',
                                                fontWeight: selectedCategory === cat.name ? 700 : 500,
                                                transition: 'all 0.2s ease',
                                                fontSize: '0.95rem'
                                            }}
                                        >
                                            {cat.name}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '1.25rem' }}>
                                    Expert Rating
                                </h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {[4, 3].map(star => (
                                        <label key={star} style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', fontSize: '0.95rem' }}>
                                            <input type="checkbox" style={{ width: '18px', height: '18px', accentColor: 'var(--primary)' }} />
                                            <span>{star} Stars & above</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <button className="btn btn-outline" style={{ width: '100%', marginTop: '2.5rem', fontSize: '0.9rem' }}>
                                Reset All Filters
                            </button>
                        </div>
                    </aside>

                    {/* Listing Grid */}
                    <main>
                        <div style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <h2 style={{ fontSize: '2.25rem', fontWeight: 800, letterSpacing: '-1px' }}>
                                    {selectedCategory ? `${selectedCategory} Experts` : 'Top-rated Experts'}
                                </h2>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
                                    Showing {filteredTechnicians.length} verified professionals near you
                                </p>
                            </div>
                            <div style={{ position: 'relative' }}>
                                <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                                <input type="text" placeholder="Search experts..." style={{ padding: '0.75rem 1rem 0.75rem 2.8rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', outline: 'none', width: '240px', fontSize: '0.9rem', background: 'white' }} />
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <AnimatePresence mode="popLayout">
                                {filteredTechnicians.map((tech, index) => (
                                    <motion.div
                                        layout
                                        key={tech.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                        className="card"
                                        style={{
                                            padding: '1.75rem',
                                            display: 'grid',
                                            gridTemplateColumns: '140px 1fr 220px',
                                            gap: '2.5rem',
                                            alignItems: 'center',
                                            background: 'white'
                                        }}
                                    >
                                        <div style={{
                                            width: '140px',
                                            height: '140px',
                                            borderRadius: 'var(--radius-lg)',
                                            overflow: 'hidden',
                                            border: '4px solid white',
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
                                        }}>
                                            <img
                                                src={
                                                    tech.id === '1' ? 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400' :
                                                        tech.id === '2' ? 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400' :
                                                            tech.id === '3' ? 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' :
                                                                tech.id === '4' ? 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' :
                                                                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400'
                                                }
                                                alt={tech.name}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            />
                                        </div>

                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.5px' }}>{tech.name}</h3>
                                                <span style={{
                                                    padding: '0.2rem 0.6rem',
                                                    background: '#10b981',
                                                    color: 'white',
                                                    fontSize: '0.65rem',
                                                    borderRadius: 'var(--radius-sm)',
                                                    fontWeight: 800,
                                                    letterSpacing: '0.5px'
                                                }}>
                                                    TOP PRO
                                                </span>
                                            </div>
                                            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 500 }}>
                                                <MapPin size={16} /> New Delhi • {tech.category}
                                            </p>
                                            <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: 1.5, opacity: 0.8 }}>
                                                {tech.desc}
                                            </p>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '0.5rem' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                                    {[1, 2, 3, 4, 5].map(i => (
                                                        <Star key={i} size={16} fill={i <= Math.floor(tech.rating) ? "#fbbf24" : "none"} color="#fbbf24" />
                                                    ))}
                                                    <span style={{ fontWeight: 800, marginLeft: '0.3rem', fontSize: '0.95rem' }}>{tech.rating}</span>
                                                    <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 500 }}>({tech.reviews} verified reviews)</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderLeft: '1px solid var(--border)', paddingLeft: '2.5rem', height: '100%' }}>
                                            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.25rem', letterSpacing: '0.5px' }}>STARTING PRICE</span>
                                            <div style={{ marginBottom: '1.5rem' }}>
                                                <span style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-main)' }}>₹{tech.price}</span>
                                                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginLeft: '0.2rem' }}>/ hr</span>
                                            </div>
                                            <button className="btn btn-primary" style={{ width: '100%', padding: '0.9rem' }}>
                                                Check Availability <ChevronRight size={16} />
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Listing;
