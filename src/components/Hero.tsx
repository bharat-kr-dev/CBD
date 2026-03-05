import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <section style={{
            background: 'white',
            padding: '8rem 0 6rem',
            overflow: 'hidden',
            position: 'relative',
            borderBottom: '1px solid var(--border)'
        }}>
            {/* Background Accents */}
            <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '40%', height: '80%', background: 'radial-gradient(circle, var(--primary-light) 0%, transparent 70%)', opacity: 0.5, zIndex: 0 }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                            <div style={{ padding: '0.5rem 1rem', background: 'var(--primary-light)', color: 'var(--primary)', borderRadius: 'var(--radius-full)', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '1px' }}>
                                #1 HOME SERVICES APP IN INDIA
                            </div>
                        </div>

                        <h2 style={{
                            fontSize: '4.5rem',
                            fontWeight: 800,
                            lineHeight: 1,
                            letterSpacing: '-3px',
                            marginBottom: '2rem',
                            color: 'var(--text-main)'
                        }}>
                            Home services, <br />
                            <span className="gradient-text">on demand.</span>
                        </h2>

                        <p style={{
                            fontSize: '1.25rem',
                            color: 'var(--text-muted)',
                            marginBottom: '3rem',
                            maxWidth: '520px',
                            lineHeight: 1.6
                        }}>
                            Experience the future of home maintenance. Over 50+ services delivered by verified experts right at your doorstep.
                        </p>

                        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                            <button className="btn btn-primary" style={{ padding: '1.1rem 2.5rem', fontSize: '1.1rem' }}>
                                Book a Service
                            </button>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <div style={{ display: 'flex' }}>
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} style={{
                                            width: '36px',
                                            height: '36px',
                                            borderRadius: 'var(--radius-full)',
                                            border: '3px solid white',
                                            background: '#e2e8f0',
                                            marginLeft: i === 1 ? 0 : '-12px',
                                            overflow: 'hidden',
                                            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                                        }}>
                                            <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                    ))}
                                </div>
                                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)' }}>4.8/5 Rating</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        style={{ position: 'relative' }}
                    >
                        <div style={{
                            position: 'relative',
                            width: '100%',
                            height: '560px',
                            borderRadius: 'var(--radius-xl)',
                            overflow: 'hidden',
                            boxShadow: '0 30px 60px rgba(0,0,0,0.12)',
                            border: '10px solid white'
                        }}>
                            <img
                                src="https://media.istockphoto.com/id/944868018/photo/contractor-facing-custom-master-bathroom-drawing-and-photo-gradation.jpg?s=612x612&w=0&k=20&c=Gg1tdDILkkJZSUr2iNbcTr9H8AF1gqnkVXr_mbib08o="
                                alt="Home Service"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%)' }}></div>
                        </div>

                        {/* Floating Cards */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="glass"
                            style={{
                                position: 'absolute',
                                bottom: '30px',
                                left: '-40px',
                                padding: '1.25rem',
                                borderRadius: 'var(--radius-lg)',
                                display: 'flex',
                                gap: '1rem',
                                alignItems: 'center',
                                width: '280px',
                                boxShadow: 'var(--shadow-lg)'
                            }}
                        >
                            <div style={{
                                width: '48px',
                                height: '48px',
                                background: '#10b981',
                                color: 'white',
                                borderRadius: 'var(--radius-md)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
                            }}>
                                <span style={{ fontSize: '1.5rem' }}>★</span>
                            </div>
                            <div>
                                <h4 style={{ fontWeight: 800, fontSize: '1rem' }}>4.9/5 Rating</h4>
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>10k Verified Reviews</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="glass"
                            style={{
                                position: 'absolute',
                                top: '40px',
                                right: '-30px',
                                padding: '1.25rem 2rem',
                                borderRadius: 'var(--radius-full)',
                                display: 'flex',
                                gap: '1rem',
                                alignItems: 'center',
                                boxShadow: 'var(--shadow-lg)'
                            }}
                        >
                            <div style={{ width: '24px', height: '24px', background: 'var(--primary)', borderRadius: '50%', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem' }}>✓</div>
                            <span style={{ fontWeight: 800, fontSize: '0.95rem' }}>100% Quality Assurance</span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
