import React from 'react';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
    return (
        <div className="home-page">
            <Hero />
            <CategoryGrid />

            {/* Featured Professionals Section */}
            <section className="section-padding" style={{ backgroundColor: 'var(--background)' }}>
                <div className="container">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        marginBottom: '4rem'
                    }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.75rem', letterSpacing: '-1px' }}>
                                Featured Experts
                            </h2>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>Top-rated professionals with guaranteed quality</p>
                        </div>
                        <button className="btn btn-outline" style={{ padding: '0.75rem 1.5rem' }}>View All Experts</button>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                        gap: '2.5rem'
                    }}>
                        {[1, 2, 3].map((id, index) => (
                            <motion.div
                                key={id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="card"
                                style={{
                                    padding: '2rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1.5rem',
                                    background: 'var(--surface)'
                                }}
                            >
                                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                                    <div style={{
                                        width: '72px',
                                        height: '72px',
                                        borderRadius: 'var(--radius-lg)',
                                        overflow: 'hidden',
                                        border: '3px solid white',
                                        boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
                                    }}>
                                        <img
                                            src={id === 1 ? 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200' : id === 2 ? 'https://images.unsplash.com/photo-1506794778202-92df001c367d?auto=format&fit=crop&q=80&w=200' : 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'}
                                            alt="Pro"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div>
                                        <h4 style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '0.2rem' }}>
                                            {id === 1 ? 'Rajesh Kumar' : id === 2 ? 'Mohammad Saifi' : 'Amit Lal'}
                                        </h4>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <span style={{
                                                fontSize: '0.75rem',
                                                fontWeight: 700,
                                                padding: '0.2rem 0.6rem',
                                                borderRadius: 'var(--radius-sm)',
                                                background: 'var(--primary-light)',
                                                color: 'var(--primary)'
                                            }}>
                                                {id === 1 ? 'Plumbing' : id === 2 ? 'Electrical' : 'AC Repair'}
                                            </span>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                                                <span style={{ color: '#fbbf24', fontSize: '0.9rem' }}>★</span>
                                                <span style={{ fontWeight: 700, fontSize: '0.85rem' }}>4.9</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                                    Professional with over 8 years of experience in high-end residential and commercial projects.
                                </p>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                                    <div>
                                        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>STARTING FROM</p>
                                        <p style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--text-main)' }}>₹299</p>
                                    </div>
                                    <button className="btn btn-primary" style={{ padding: '0.7rem 1.5rem', borderRadius: 'var(--radius-md)' }}>
                                        Book Now
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <footer style={{ background: '#0f172a', color: 'white', padding: '6rem 0 3rem' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '4rem', marginBottom: '4rem' }}>
                    <div>
                        <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'white', marginBottom: '1.5rem', letterSpacing: '-1px' }}>
                            Urban<span style={{ color: 'var(--primary)' }}>Fix</span>
                        </h3>
                        <p style={{ fontSize: '1rem', color: '#94a3b8', lineHeight: 1.7, maxWidth: '300px' }}>
                            Redefining home services with technology and trust. Your one-stop destination for verified professionals.
                        </p>
                    </div>
                    <div>
                        <h4 style={{ fontWeight: 700, marginBottom: '1.75rem', fontSize: '1.1rem' }}>Company</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem', color: '#94a3b8' }}>
                            <li><a href="#" style={{ transition: 'color 0.2s' }}>About Us</a></li>
                            <li><a href="#" style={{ transition: 'color 0.2s' }}>Terms of Service</a></li>
                            <li><a href="#" style={{ transition: 'color 0.2s' }}>Privacy Policy</a></li>
                            <li><a href="#" style={{ transition: 'color 0.2s' }}>Careers</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ fontWeight: 700, marginBottom: '1.75rem', fontSize: '1.1rem' }}>Services</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem', color: '#94a3b8' }}>
                            <li><a href="#" style={{ transition: 'color 0.2s' }}>Plumbing</a></li>
                            <li><a href="#" style={{ transition: 'color 0.2s' }}>Electrical</a></li>
                            <li><a href="#" style={{ transition: 'color 0.2s' }}>Cleaning</a></li>
                            <li><a href="#" style={{ transition: 'color 0.2s' }}>Carpentry</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ fontWeight: 700, marginBottom: '1.75rem', fontSize: '1.1rem' }}>Support</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem', color: '#94a3b8' }}>
                            <li><a href="#" style={{ transition: 'color 0.2s' }}>Contact Us</a></li>
                            <li><a href="#" style={{ transition: 'color 0.2s' }}>FAQs</a></li>
                            <li><a href="#" style={{ transition: 'color 0.2s' }}>Safety Policy</a></li>
                            <li><a href="#" style={{ transition: 'color 0.2s' }}>Help Center</a></li>
                        </ul>
                    </div>
                </div>
                <div className="container" style={{ paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p style={{ fontSize: '0.9rem', color: '#64748b' }}>© 2026 UrbanFix. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '1.5rem', color: '#64748b', fontSize: '1.2rem' }}>
                        {/* Social icons would go here */}
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
