import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, FileText, ShieldCheck, ChevronRight } from 'lucide-react';
import { categories } from '../data/mockData';

const ProfessionalOnboarding: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    return (
        <div style={{ backgroundColor: 'var(--background)', minHeight: '100vh', paddingBottom: '6rem' }}>

            <div className="container" style={{ paddingTop: '5rem' }}>
                <AnimatePresence mode="wait">
                    {!submitted ? (
                        <motion.div
                            key="onboarding-form"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '6rem', alignItems: 'start' }}
                        >
                            <div style={{ position: 'sticky', top: '120px' }}>
                                <div style={{
                                    padding: '0.6rem 1.2rem',
                                    background: 'var(--primary-light)',
                                    color: 'var(--primary)',
                                    display: 'inline-block',
                                    borderRadius: 'var(--radius-full)',
                                    fontSize: '0.85rem',
                                    fontWeight: 800,
                                    letterSpacing: '1px',
                                    marginBottom: '2rem'
                                }}>
                                    PARTNER WITH US
                                </div>
                                <h1 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '2rem', lineHeight: 1, letterSpacing: '-2px' }}>
                                    Grow your <span className="gradient-text">business</span> with UrbanFix.
                                </h1>
                                <p style={{ fontSize: '1.35rem', color: 'var(--text-muted)', marginBottom: '4rem', lineHeight: 1.6, maxWidth: '90%' }}>
                                    Join India's most trusted service platform. Reach thousands of premium customers and take your craft to the next level.
                                </p>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                                    {[
                                        { icon: Briefcase, title: 'Smart Scheduling', desc: 'Choose your own hours and get booked automatically through our advanced algorithm.' },
                                        { icon: ShieldCheck, title: 'Trust & Safety', desc: 'Our rigorous verification process ensures you work with quality residential clients.' },
                                        { icon: FileText, title: 'Instant Payments', desc: 'Track your earnings in real-time and get direct bank transfers every Tuesday.' }
                                    ].map((item, idx) => (
                                        <div key={idx} style={{ display: 'flex', gap: '2rem' }}>
                                            <div style={{
                                                flexShrink: 0,
                                                width: '60px',
                                                height: '60px',
                                                background: 'white',
                                                borderRadius: 'var(--radius-lg)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'var(--primary)',
                                                boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
                                                border: '1px solid var(--border)'
                                            }}>
                                                <item.icon size={28} strokeWidth={1.5} />
                                            </div>
                                            <div>
                                                <h4 style={{ fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>{item.title}</h4>
                                                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="card" style={{ padding: '4rem', background: 'white', border: 'none', boxShadow: 'var(--shadow-premium)' }}>
                                <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1rem', letterSpacing: '-1px' }}>Apply Now</h3>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>It only takes 2 minutes to get started.</p>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-main)' }}>Full Legal Name</label>
                                            <input type="text" placeholder="e.g. Rahul Sharma" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', background: 'var(--background)', fontSize: '1rem' }} />
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-main)' }}>WhatsApp Number</label>
                                            <input type="tel" placeholder="+91 00000 00000" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', background: 'var(--background)', fontSize: '1rem' }} />
                                        </div>
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-main)' }}>Select Your Expertise</label>
                                        <select style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', background: 'var(--background)', fontSize: '1rem', appearance: 'none' }}>
                                            <option value="">What do you specialize in?</option>
                                            {categories.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
                                        </select>
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-main)' }}>Service City</label>
                                        <input type="text" placeholder="e.g. New Delhi" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', background: 'var(--background)', fontSize: '1rem' }} />
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-main)' }}>Experience (Years)</label>
                                        <input type="number" placeholder="5" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', background: 'var(--background)', fontSize: '1rem' }} />
                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', background: 'var(--primary-light)', padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
                                        <input type="checkbox" style={{ width: '20px', height: '20px', marginTop: '2px', accentColor: 'var(--primary)' }} id="terms" />
                                        <label htmlFor="terms" style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 600, lineHeight: 1.5 }}>
                                            I agree to the Partner Terms of Service and authorize UrbanFix to perform background verification.
                                        </label>
                                    </div>

                                    <button
                                        className="btn btn-primary"
                                        style={{ width: '100%', padding: '1.25rem', fontSize: '1.1rem' }}
                                        onClick={() => setSubmitted(true)}
                                    >
                                        Submit Application <ChevronRight size={20} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="success-message"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            style={{
                                maxWidth: '700px',
                                margin: '4rem auto',
                                textAlign: 'center',
                                padding: '5rem',
                                background: 'white',
                                borderRadius: 'var(--radius-lg)',
                                boxShadow: 'var(--shadow-premium)'
                            }}
                        >
                            <div style={{
                                width: '120px',
                                height: '120px',
                                background: 'var(--primary-light)',
                                color: 'var(--primary)',
                                borderRadius: 'var(--radius-full)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 3rem',
                                border: '6px solid white',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                            }}>
                                <ShieldCheck size={64} />
                            </div>
                            <h2 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1.5rem', letterSpacing: '-2px' }}>Application Filed!</h2>
                            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '4rem', lineHeight: 1.6 }}>
                                You've taken the first step. Our onboarding specialist will reach out to you within <span style={{ color: 'var(--text-main)', fontWeight: 700 }}>24-48 hours</span> to complete your verification and get you started.
                            </p>
                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <button className="btn btn-outline" style={{ flex: 1, padding: '1.2rem' }}>Review Guidelines</button>
                                <button className="btn btn-primary" style={{ flex: 1, padding: '1.2rem' }}>
                                    Back to Main Site
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ProfessionalOnboarding;
