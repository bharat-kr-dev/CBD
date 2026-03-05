import React from 'react';
import * as LucideIcons from 'lucide-react';
import { categories } from '../data/mockData';
import { motion } from 'framer-motion';

const CategoryGrid: React.FC = () => {
    return (
        <section className="section-padding" style={{ background: 'white' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.25rem', letterSpacing: '-1px' }}>
                        What do you need help with?
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                        Choose from our top-rated services, delivered by verified professionals at your convenience.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                    gap: '2rem'
                }}>
                    {categories.map((category, index) => {
                        const Icon = (LucideIcons as any)[category.icon];
                        return (
                            <motion.div
                                key={category.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8, boxShadow: 'var(--shadow-lg)', borderColor: 'var(--primary-light)' }}
                                className="card"
                                style={{
                                    padding: '2.5rem 1.5rem',
                                    cursor: 'pointer',
                                    textAlign: 'center',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    background: 'var(--background)'
                                }}
                            >
                                <div style={{
                                    width: '72px',
                                    height: '72px',
                                    borderRadius: 'var(--radius-lg)',
                                    background: 'var(--primary-light)',
                                    color: 'var(--primary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1.75rem',
                                    transition: 'all 0.3s ease'
                                }}>
                                    {Icon && <Icon size={34} strokeWidth={1.5} />}
                                </div>
                                <h3 style={{ fontWeight: 800, fontSize: '1.35rem', marginBottom: '0.75rem', letterSpacing: '-0.5px' }}>
                                    {category.name}
                                </h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                                    {category.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CategoryGrid;
