import React from 'react';
import { motion } from 'framer-motion';

const TRUST_IMGS = [11, 12, 13, 14];
const QUICK_SERVICES = ['Plumbing', 'Electrical', 'AC Repair', 'Cleaning', 'Carpentry'];

const Hero: React.FC = () => (
    <section style={{
        background: 'var(--surface)',
        padding: '8rem 0 6rem',
        overflow: 'hidden',
        position: 'relative',
        borderBottom: '1px solid var(--border)'
    }}>
        {/* Background blob */}
        <div style={{
            position: 'absolute', top: '-15%', right: '-8%',
            width: '45%', height: '90%',
            background: 'radial-gradient(circle, var(--primary-light) 0%, transparent 68%)',
            opacity: 0.7, zIndex: 0, pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>

                {/* ── LEFT ── */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}
                >
                    {/* Badge */}
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                        background: 'var(--primary-light)', color: 'var(--primary)',
                        fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.06em',
                        textTransform: 'uppercase', padding: '0.45rem 1rem',
                        borderRadius: 'var(--radius-full)', width: 'fit-content'
                    }}>
                        <span style={{
                            width: '7px', height: '7px', borderRadius: '50%',
                            background: 'var(--secondary)', flexShrink: 0,
                            display: 'inline-block', animation: 'pulse 2s ease-in-out infinite'
                        }} />
                        #1 Home Services Platform in India
                    </div>

                    {/* Title */}
                    <h1 style={{
                        fontSize: 'clamp(2.8rem, 4.5vw, 4.25rem)',
                        fontWeight: 800, lineHeight: 1.05,
                        letterSpacing: '-2.5px', color: 'var(--text-main)', margin: 0
                    }}>
                        Home services,<br />
                        <span className="gradient-text">done right.</span>
                    </h1>

                    {/* Subtitle */}
                    <p style={{
                        fontSize: '1.05rem', color: 'var(--text-muted)',
                        lineHeight: 1.7, maxWidth: '480px', margin: 0
                    }}>
                        Book verified local professionals for plumbing, electrical, cleaning & more —
                        transparent pricing, zero hassle, guaranteed quality.
                    </p>

                    {/* Search bar */}
                    <div style={{
                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                        background: 'var(--surface)', border: '1.5px solid var(--border)',
                        borderRadius: 'var(--radius-md)', padding: '0.45rem 0.45rem 0.45rem 1rem',
                        boxShadow: 'var(--shadow-md)'
                    }}>
                        <span style={{ fontSize: '1rem', flexShrink: 0 }}>🔍</span>
                        <input
                            placeholder="What service do you need?"
                            style={{
                                flex: 1, border: 'none', outline: 'none',
                                background: 'transparent', fontFamily: 'inherit',
                                fontSize: '0.95rem', color: 'var(--text-main)', minWidth: 0
                            }}
                        />
                        <div style={{ width: '1px', height: '22px', background: 'var(--border)', flexShrink: 0 }} />
                        <span style={{
                            fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)',
                            whiteSpace: 'nowrap', padding: '0 0.75rem'
                        }}>📍 New Delhi</span>
                        <button className="btn btn-primary" style={{ borderRadius: 'var(--radius-sm)', padding: '0.7rem 1.4rem', fontSize: '0.9rem' }}>
                            Search
                        </button>
                    </div>

                    {/* Quick tags */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Popular:</span>
                        {QUICK_SERVICES.map(s => (
                            <button key={s} style={{
                                fontSize: '0.78rem', fontWeight: 600,
                                padding: '0.3rem 0.8rem', borderRadius: 'var(--radius-full)',
                                border: '1.5px solid var(--border)', background: 'var(--surface)',
                                color: 'var(--text-muted)', cursor: 'pointer', fontFamily: 'inherit'
                            }}>
                                {s}
                            </button>
                        ))}
                    </div>

                    {/* Trust row */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex' }}>
                            {TRUST_IMGS.map((i, idx) => (
                                <img key={i} src={`https://i.pravatar.cc/80?img=${i}`} alt="customer"
                                    style={{
                                        width: '34px', height: '34px', borderRadius: '50%',
                                        border: '2.5px solid white', objectFit: 'cover',
                                        marginLeft: idx === 0 ? 0 : '-10px',
                                        boxShadow: 'var(--shadow-sm)'
                                    }}
                                />
                            ))}
                        </div>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                            <strong style={{ color: 'var(--text-main)' }}>4.8★</strong> from 12,000+ reviews
                        </span>
                        <div style={{ width: '1px', height: '28px', background: 'var(--border)' }} />
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <b style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1.2 }}>50K+</b>
                            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Bookings</span>
                        </div>
                        <div style={{ width: '1px', height: '28px', background: 'var(--border)' }} />
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <b style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1.2 }}>1,200+</b>
                            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Verified Pros</span>
                        </div>
                    </div>
                </motion.div>

                {/* ── RIGHT ── */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                    style={{ position: 'relative' }}
                >
                    {/* Main image */}
                    <div style={{
                        position: 'relative', width: '100%', height: '520px',
                        borderRadius: 'var(--radius-xl)', overflow: 'hidden',
                        boxShadow: 'var(--shadow-premium)', border: '8px solid white'
                    }}>
                        <img
                            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800"
                            alt="Professional at work"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                        <div style={{
                            position: 'absolute', inset: 0,
                            background: 'linear-gradient(to top, rgba(0,0,0,0.25) 0%, transparent 55%)'
                        }} />
                    </div>

                    {/* Float: Quality pill — top right */}
                    <motion.div
                        className="glass"
                        initial={{ opacity: 0, y: -16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                        style={{
                            position: 'absolute', top: '2rem', right: '-2rem',
                            display: 'flex', alignItems: 'center', gap: '0.75rem',
                            padding: '0.85rem 1.25rem', borderRadius: 'var(--radius-full)',
                            boxShadow: 'var(--shadow-lg)'
                        }}
                    >
                        <div style={{
                            width: '28px', height: '28px', borderRadius: '50%',
                            background: '#10b981', color: 'white',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '0.8rem', fontWeight: 800, flexShrink: 0
                        }}>✓</div>
                        <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-main)', whiteSpace: 'nowrap' }}>
                            100% Quality Assured
                        </span>
                    </motion.div>

                    {/* Float: Rating card — bottom left */}
                    <motion.div
                        className="glass"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1, duration: 0.6 }}
                        style={{
                            position: 'absolute', bottom: '2rem', left: '-2.5rem',
                            display: 'flex', alignItems: 'center', gap: '1rem',
                            padding: '1rem 1.25rem', borderRadius: 'var(--radius-lg)',
                            boxShadow: 'var(--shadow-lg)'
                        }}
                    >
                        <div style={{
                            width: '44px', height: '44px', borderRadius: 'var(--radius-md)',
                            background: 'var(--secondary)', color: 'white',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '1.2rem', flexShrink: 0,
                            boxShadow: '0 4px 12px rgba(34,186,186,0.35)'
                        }}>★</div>
                        <div>
                            <p style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--text-main)' }}>4.9 / 5 Rating</p>
                            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>10,000+ verified reviews</p>
                        </div>
                    </motion.div>

                    {/* Float: Booking confirmed — mid right */}
                    <motion.div
                        className="glass"
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.3, duration: 0.5 }}
                        style={{
                            position: 'absolute', top: '45%', right: '-2rem',
                            transform: 'translateY(-50%)',
                            display: 'flex', alignItems: 'center', gap: '0.75rem',
                            padding: '1rem 1.25rem', borderRadius: 'var(--radius-lg)',
                            boxShadow: 'var(--shadow-lg)'
                        }}
                    >
                        <span style={{ fontSize: '1.4rem' }}>🗓️</span>
                        <div>
                            <p style={{ fontWeight: 800, fontSize: '0.88rem', color: 'var(--text-main)' }}>Booking Confirmed!</p>
                            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Electrician · Today 3:00 PM</p>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </div>
    </section>
);

export default Hero;