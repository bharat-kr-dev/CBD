import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin, CheckCircle, ChevronRight } from 'lucide-react';

const Booking: React.FC = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        problem: '',
        date: '',
        time: '',
        address: ''
    });

    const nextStep = () => setStep(s => s + 1);
    const prevStep = () => setStep(s => s - 1);

    return (
        <div style={{ backgroundColor: 'var(--background)', minHeight: '100vh', paddingBottom: '6rem' }}>

            <div className="container" style={{ maxWidth: '800px', paddingTop: '4rem' }}>
                {/* Progress Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-1.5px' }}>
                        Book your service
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                        Just a few steps away from getting your home fixed
                    </p>
                </div>

                {/* Progress Bar */}
                <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '4rem' }}>
                    {[1, 2, 3, 4].map(s => (
                        <div key={s} style={{
                            flex: 1,
                            position: 'relative'
                        }}>
                            <div style={{
                                height: '6px',
                                borderRadius: 'var(--radius-full)',
                                background: step >= s ? 'var(--primary)' : 'var(--border)',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                boxShadow: step >= s ? '0 0 10px rgba(79, 70, 229, 0.2)' : 'none'
                            }} />
                            <div style={{
                                marginTop: '1rem',
                                fontSize: '0.75rem',
                                fontWeight: 800,
                                color: step >= s ? 'var(--primary)' : 'var(--text-muted)',
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}>
                                Step {s}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="card" style={{ padding: '0', overflow: 'hidden', background: 'white', boxShadow: 'var(--shadow-premium)', border: 'none' }}>
                    <div style={{ background: 'var(--primary)', height: '4px', width: '100%' }}></div>
                    <div style={{ padding: '4rem' }}>
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-main)' }}>Tell us about the problem</h2>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>Provide as much detail as possible so our expert comes prepared.</p>
                                    </div>
                                    <textarea
                                        placeholder="E.g. My kitchen sink is leaking from the main pipe and there's a small crack in the handle..."
                                        style={{
                                            width: '100%',
                                            height: '180px',
                                            padding: '1.5rem',
                                            borderRadius: 'var(--radius-lg)',
                                            border: '1px solid var(--border)',
                                            outline: 'none',
                                            fontSize: '1.05rem',
                                            fontFamily: 'inherit',
                                            marginBottom: '2.5rem',
                                            background: 'var(--background)',
                                            transition: 'border-color 0.3s ease',
                                            lineHeight: 1.6
                                        }}
                                        value={formData.problem}
                                        onChange={e => setFormData({ ...formData, problem: e.target.value })}
                                        onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                                        onBlur={e => e.target.style.borderColor = 'var(--border)'}
                                    />
                                    <button className="btn btn-primary" onClick={nextStep} style={{ width: '100%', padding: '1.1rem' }}>
                                        Continue to Schedule
                                    </button>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-main)' }}>When should we come?</h2>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>Select a date and time that works best for you.</p>
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
                                        <div>
                                            <label style={{ display: 'block', marginBottom: '1rem', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main)' }}>Select Date</label>
                                            <div style={{ position: 'relative' }}>
                                                <Calendar size={18} style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary)' }} />
                                                <input
                                                    type="date"
                                                    style={{ width: '100%', padding: '1rem 1rem 1rem 3.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', fontSize: '1rem', background: 'var(--background)' }}
                                                    value={formData.date}
                                                    onChange={e => setFormData({ ...formData, date: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', marginBottom: '1rem', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main)' }}>Select Time Slot</label>
                                            <div style={{ position: 'relative' }}>
                                                <Clock size={18} style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary)' }} />
                                                <select
                                                    style={{ width: '100%', padding: '1rem 1rem 1rem 3.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', fontSize: '1rem', background: 'var(--background)', appearance: 'none' }}
                                                    value={formData.time}
                                                    onChange={e => setFormData({ ...formData, time: e.target.value })}
                                                >
                                                    <option value="">Choose a slot</option>
                                                    <option value="09:00 AM">Morning (09:00 - 11:00 AM)</option>
                                                    <option value="12:00 PM">Afternoon (12:00 - 02:00 PM)</option>
                                                    <option value="04:00 PM">Evening (04:00 - 06:00 PM)</option>
                                                </select>
                                                <ChevronRight size={18} style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%) rotate(90deg)', color: 'var(--text-muted)', pointerEvents: 'none' }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '1.25rem' }}>
                                        <button className="btn btn-outline" onClick={prevStep} style={{ flex: 1, padding: '1rem' }}>Back</button>
                                        <button className="btn btn-primary" onClick={nextStep} style={{ flex: 2, padding: '1rem' }}>Confirm Schedule</button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-main)' }}>Where should we visit?</h2>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>Provide your full address so our pro can find you.</p>
                                    </div>
                                    <div style={{ position: 'relative', marginBottom: '3rem' }}>
                                        <MapPin size={18} style={{ position: 'absolute', left: '1.25rem', top: '1.25rem', color: 'var(--primary)' }} />
                                        <textarea
                                            placeholder="Full address (House no, Street, Area, Landmark, City)"
                                            style={{
                                                width: '100%',
                                                height: '140px',
                                                padding: '1.25rem 1.25rem 1.25rem 3.5rem',
                                                borderRadius: 'var(--radius-lg)',
                                                border: '1px solid var(--border)',
                                                outline: 'none',
                                                fontSize: '1.05rem',
                                                fontFamily: 'inherit',
                                                background: 'var(--background)',
                                                lineHeight: 1.6
                                            }}
                                            value={formData.address}
                                            onChange={e => setFormData({ ...formData, address: e.target.value })}
                                        />
                                    </div>
                                    <div style={{ display: 'flex', gap: '1.25rem' }}>
                                        <button className="btn btn-outline" onClick={prevStep} style={{ flex: 1, padding: '1rem' }}>Back</button>
                                        <button className="btn btn-primary" onClick={nextStep} style={{ flex: 2, padding: '1rem' }}>Review & Finalize</button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 4 && (
                                <motion.div
                                    key="step4"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                    style={{ textAlign: 'center' }}
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                                        style={{
                                            width: '100px',
                                            height: '100px',
                                            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                                            color: 'white',
                                            borderRadius: 'var(--radius-full)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto 2.5rem',
                                            boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)'
                                        }}
                                    >
                                        <CheckCircle size={56} />
                                    </motion.div>
                                    <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1rem', letterSpacing: '-2px' }}>All Set!</h2>
                                    <p style={{ color: 'var(--text-main)', fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem' }}>Your booking is confirmed.</p>
                                    <p style={{ color: 'var(--text-muted)', marginBottom: '3.5rem', maxWidth: '400px', margin: '0 auto 3.5rem', lineHeight: 1.6 }}>
                                        Our verified professional will reach you on <span style={{ color: 'var(--text-main)', fontWeight: 700 }}>{formData.date}</span> at <span style={{ color: 'var(--text-main)', fontWeight: 700 }}>{formData.time}</span>.
                                    </p>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <button className="btn btn-outline" style={{ flex: 1, padding: '1.1rem' }}>View Details</button>
                                        <button className="btn btn-primary" style={{ flex: 1, padding: '1.1rem' }} onClick={() => setStep(1)}>
                                            Back to Home
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
