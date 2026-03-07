import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import Hero from '../components/Hero';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;500;600;700&family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --primary: #FF5C28;
    --primary-dark: #E04510;
    --primary-light: #FFF0EB;
    --accent: #1A1A2E;
    --surface: #FFFFFF;
    --bg: #F8F5F1;
    --dark: #0D0D0D;
    --text: #1A1A1A;
    --text-muted: #6B6B6B;
    --border: rgba(0,0,0,0.08);
    --radius: 20px;
    --radius-sm: 10px;
    --shadow: 0 4px 24px rgba(0,0,0,0.08);
    --shadow-lg: 0 20px 60px rgba(0,0,0,0.12);
  }

  body { font-family: 'DM Sans', sans-serif; background: var(--bg); color: var(--text); overflow-x: hidden; }

  .display-font { font-family: 'Clash Display', sans-serif; }
  .heading-font { font-family: 'Syne', sans-serif; }

  /* NAV */
  .nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    padding: 1.25rem 0;
    backdrop-filter: blur(20px);
    background: rgba(248, 245, 241, 0.9);
    border-bottom: 1px solid var(--border);
    transition: all 0.3s;
  }
  .nav-inner { max-width: 1200px; margin: 0 auto; padding: 0 2rem; display: flex; justify-content: space-between; align-items: center; }
  .logo { font-family: 'Clash Display', sans-serif; font-size: 1.6rem; font-weight: 700; color: var(--dark); letter-spacing: -0.5px; }
  .logo span { color: var(--primary); }
  .nav-links { display: flex; gap: 2.5rem; list-style: none; }
  .nav-links a { font-size: 0.9rem; font-weight: 500; color: var(--text-muted); text-decoration: none; transition: color 0.2s; letter-spacing: 0.01em; }
  .nav-links a:hover { color: var(--text); }
  .nav-cta { display: flex; gap: 0.75rem; align-items: center; }
  .btn { display: inline-flex; align-items: center; gap: 0.5rem; border: none; cursor: pointer; font-family: 'DM Sans', sans-serif; font-weight: 600; transition: all 0.25s; text-decoration: none; }
  .btn-ghost { background: transparent; color: var(--text); padding: 0.6rem 1.2rem; border-radius: 50px; font-size: 0.9rem; }
  .btn-ghost:hover { background: rgba(0,0,0,0.06); }
  .btn-primary { background: var(--primary); color: white; padding: 0.7rem 1.5rem; border-radius: 50px; font-size: 0.9rem; box-shadow: 0 4px 14px rgba(255,92,40,0.35); }
  .btn-primary:hover { background: var(--primary-dark); transform: translateY(-1px); box-shadow: 0 6px 20px rgba(255,92,40,0.4); }
  .btn-primary-lg { background: var(--primary); color: white; padding: 1rem 2.2rem; border-radius: 50px; font-size: 1rem; box-shadow: 0 6px 24px rgba(255,92,40,0.4); }
  .btn-primary-lg:hover { background: var(--primary-dark); transform: translateY(-2px); box-shadow: 0 10px 30px rgba(255,92,40,0.45); }
  .btn-dark { background: var(--dark); color: white; padding: 0.75rem 1.8rem; border-radius: 50px; font-size: 0.9rem; }
  .btn-dark:hover { background: #333; transform: translateY(-1px); }

  /* STATS BAR */
  .stats-bar {
    background: var(--primary-light);
    border-top: 1px solid rgba(255,92,40,0.1);
    border-bottom: 1px solid rgba(255,92,40,0.1);
    padding: 2.5rem 0;
  }
  .stats-inner { max-width: 1200px; margin: 0 auto; padding: 0 2rem; display: grid; grid-template-columns: repeat(4, 1fr); }
  .stat-item { text-align: center; position: relative; }
  .stat-item:not(:last-child)::after {
    content: ''; position: absolute; right: 0; top: 10%; bottom: 10%; width: 1px; background: rgba(255,92,40,0.15);
  }
  .stat-number { font-family: 'Clash Display', sans-serif; font-size: 2.5rem; font-weight: 700; color: var(--dark); }
  .stat-number span { color: var(--primary); }
  .stat-label { font-size: 0.85rem; color: var(--text-muted); margin-top: 0.25rem; }

  /* HOW IT WORKS */
  .section { padding: 7rem 0; }
  .section-inner { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
  .section-tag { display: inline-block; background: var(--primary-light); color: var(--primary); font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 0.4rem 1rem; border-radius: 50px; margin-bottom: 1rem; }
  .section-title { font-family: 'Clash Display', sans-serif; font-size: clamp(2rem, 4vw, 3rem); font-weight: 700; letter-spacing: -1.5px; line-height: 1.1; color: var(--dark); margin-bottom: 1rem; }
  .section-desc { font-size: 1rem; color: var(--text-muted); line-height: 1.7; max-width: 500px; }

  .how-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-top: 4rem; }
  .how-card {
    background: white; border-radius: var(--radius); padding: 2.5rem;
    position: relative; overflow: hidden;
    border: 1px solid var(--border);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .how-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); }
  .how-card-num {
    font-family: 'Clash Display', sans-serif; font-size: 5rem; font-weight: 700;
    color: rgba(0,0,0,0.04); position: absolute; top: 1rem; right: 1.5rem;
    line-height: 1;
  }
  .how-icon {
    width: 56px; height: 56px; border-radius: 16px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.5rem; margin-bottom: 1.5rem;
  }
  .icon-orange { background: var(--primary-light); }
  .icon-dark { background: rgba(26,26,46,0.06); }
  .icon-green { background: rgba(16,185,129,0.08); }
  .how-card h3 { font-family: 'Syne', sans-serif; font-size: 1.2rem; font-weight: 700; margin-bottom: 0.75rem; color: var(--dark); }
  .how-card p { font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; }

  /* CATEGORIES */
  .categories-section { background: var(--bg); padding: 7rem 0; }
  .categories-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.25rem; margin-top: 4rem; }
  .cat-card {
    background: white;
    border: 1px solid var(--border);
    border-radius: var(--radius); padding: 2rem 1.5rem;
    text-align: center; cursor: pointer;
    transition: all 0.3s;
    position: relative; overflow: hidden;
    box-shadow: var(--shadow);
  }
  .cat-card::before {
    content: ''; position: absolute; inset: 0;
    background: var(--primary); opacity: 0;
    transition: opacity 0.3s;
  }
  .cat-card:hover { transform: translateY(-4px); border-color: rgba(255,92,40,0.3); box-shadow: var(--shadow-lg); }
  .cat-card:hover::before { opacity: 0.04; }
  .cat-card:hover .cat-icon { background: var(--primary-light); transform: scale(1.1); }
  .cat-icon {
    width: 64px; height: 64px; border-radius: 18px;
    background: var(--primary-light);
    display: flex; align-items: center; justify-content: center;
    font-size: 1.75rem; margin: 0 auto 1.25rem;
    transition: all 0.3s;
    position: relative; z-index: 1;
  }
  .cat-name { font-family: 'Syne', sans-serif; font-weight: 600; font-size: 0.95rem; color: var(--dark); position: relative; z-index: 1; margin-bottom: 0.3rem; }
  .cat-count { font-size: 0.8rem; color: var(--text-muted); position: relative; z-index: 1; }

  /* FEATURED PROS */
  .pros-section { background: var(--bg); padding: 7rem 0; }
  .pros-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 3.5rem; }
  .pros-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
  .pro-card {
    background: white; border-radius: var(--radius); overflow: hidden;
    box-shadow: var(--shadow); border: 1px solid var(--border);
    transition: all 0.35s;
  }
  .pro-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); }
  .pro-card-header { position: relative; height: 180px; overflow: hidden; }
  .pro-card-header img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
  .pro-card:hover .pro-card-header img { transform: scale(1.06); }
  .pro-badge {
    position: absolute; top: 1rem; left: 1rem;
    background: white; border-radius: 8px;
    padding: 0.3rem 0.7rem; font-size: 0.75rem; font-weight: 700;
    color: var(--primary); display: flex; align-items: center; gap: 0.4rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  .pro-rating {
    position: absolute; top: 1rem; right: 1rem;
    background: rgba(0,0,0,0.6); backdrop-filter: blur(10px);
    color: white; border-radius: 8px;
    padding: 0.3rem 0.7rem; font-size: 0.8rem; font-weight: 700;
    display: flex; align-items: center; gap: 0.3rem;
  }
  .pro-card-body { padding: 1.5rem; }
  .pro-avatar-row { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; }
  .pro-avatar {
    width: 52px; height: 52px; border-radius: 14px;
    object-fit: cover; border: 3px solid white;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    margin-top: -28px; position: relative; z-index: 1;
    flex-shrink: 0;
  }
  .pro-name { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 1.05rem; color: var(--dark); }
  .pro-specialty { font-size: 0.8rem; color: var(--text-muted); }
  .pro-meta { display: flex; gap: 1rem; margin-bottom: 1.25rem; flex-wrap: wrap; }
  .pro-meta-item { display: flex; align-items: center; gap: 0.3rem; font-size: 0.8rem; color: var(--text-muted); }
  .pro-card-footer { display: flex; justify-content: space-between; align-items: center; padding-top: 1rem; border-top: 1px solid var(--border); }
  .pro-price { }
  .pro-price-label { font-size: 0.7rem; color: var(--text-muted); font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; }
  .pro-price-amount { font-family: 'Syne', sans-serif; font-size: 1.3rem; font-weight: 800; color: var(--dark); }

  /* TESTIMONIALS */
  .testimonials-section { padding: 7rem 0; background: white; }
  .testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 4rem; }
  .testimonial-card {
    background: var(--bg); border-radius: var(--radius); padding: 2rem;
    border: 1px solid var(--border); position: relative;
    transition: all 0.3s;
  }
  .testimonial-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); background: white; }
  .testimonial-quote { font-size: 3rem; color: var(--primary); line-height: 1; margin-bottom: 1rem; font-family: Georgia, serif; }
  .testimonial-text { font-size: 0.95rem; color: var(--text); line-height: 1.7; margin-bottom: 1.5rem; font-style: italic; }
  .testimonial-author { display: flex; align-items: center; gap: 0.75rem; }
  .testimonial-author img { width: 44px; height: 44px; border-radius: 50%; object-fit: cover; }
  .testimonial-name { font-weight: 700; font-size: 0.9rem; color: var(--dark); }
  .testimonial-location { font-size: 0.8rem; color: var(--text-muted); }
  .testimonial-stars { color: #FBBF24; font-size: 0.8rem; margin-top: 0.2rem; }

  /* APP CTA */
  .app-cta { background: var(--primary); padding: 6rem 0; position: relative; overflow: hidden; }
  .app-cta::before { content: ''; position: absolute; width: 600px; height: 600px; border-radius: 50%; background: rgba(255,255,255,0.05); top: -200px; right: -100px; }
  .app-cta-inner { max-width: 1200px; margin: 0 auto; padding: 0 2rem; display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
  .app-cta h2 { font-family: 'Clash Display', sans-serif; font-size: 3rem; font-weight: 700; color: white; letter-spacing: -1.5px; line-height: 1.1; margin-bottom: 1rem; }
  .app-cta p { color: rgba(255,255,255,0.75); font-size: 1.05rem; line-height: 1.7; margin-bottom: 2rem; }
  .app-badges { display: flex; gap: 1rem; }
  .app-badge {
    background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.2);
    color: white; padding: 0.8rem 1.5rem; border-radius: 12px;
    display: flex; align-items: center; gap: 0.75rem; cursor: pointer;
    transition: all 0.2s;
  }
  .app-badge:hover { background: rgba(0,0,0,0.3); transform: translateY(-2px); }
  .app-badge-icon { font-size: 1.5rem; }
  .app-badge-text { }
  .app-badge-sub { font-size: 0.65rem; opacity: 0.7; }
  .app-badge-name { font-weight: 700; font-size: 0.95rem; }

  /* FOOTER */
  .footer { background: #F0ECE8; color: var(--text); padding: 6rem 0 3rem; border-top: 1px solid var(--border); }
  .footer-inner { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
  .footer-grid { display: grid; grid-template-columns: 1.8fr 1fr 1fr 1fr; gap: 4rem; margin-bottom: 4rem; }
  .footer-logo { font-family: 'Clash Display', sans-serif; font-size: 1.8rem; font-weight: 700; margin-bottom: 1rem; color: var(--dark); }
  .footer-logo span { color: var(--primary); }
  .footer-desc { font-size: 0.9rem; color: var(--text-muted); line-height: 1.7; max-width: 280px; margin-bottom: 1.5rem; }
  .footer-social { display: flex; gap: 0.75rem; }
  .social-btn {
    width: 38px; height: 38px; border-radius: 10px;
    background: white; border: 1px solid var(--border);
    display: flex; align-items: center; justify-content: center;
    font-size: 0.9rem; cursor: pointer; transition: all 0.2s; color: var(--text-muted);
  }
  .social-btn:hover { background: var(--primary); border-color: var(--primary); color: white; }
  .footer-col h4 { font-family: 'Syne', sans-serif; font-weight: 700; margin-bottom: 1.5rem; font-size: 0.95rem; color: var(--dark); }
  .footer-links { display: flex; flex-direction: column; gap: 0.85rem; }
  .footer-links a { font-size: 0.875rem; color: var(--text-muted); text-decoration: none; transition: color 0.2s; }
  .footer-links a:hover { color: var(--primary); }
  .footer-bottom { padding-top: 2rem; border-top: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; }
  .footer-bottom p { font-size: 0.85rem; color: var(--text-muted); }
  .footer-bottom-links { display: flex; gap: 1.5rem; }
  .footer-bottom-links a { font-size: 0.8rem; color: var(--text-muted); text-decoration: none; }
  .footer-bottom-links a:hover { color: var(--primary); }

  /* TRUST STRIP */
  .trust-strip { background: white; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); padding: 1.5rem 0; }
  .trust-strip-inner { max-width: 1200px; margin: 0 auto; padding: 0 2rem; display: flex; justify-content: space-around; align-items: center; }
  .trust-item { display: flex; align-items: center; gap: 0.6rem; font-size: 0.85rem; font-weight: 600; color: var(--text-muted); }
  .trust-item-icon { font-size: 1.1rem; }

  @media (max-width: 900px) {
    .hero-inner, .app-cta-inner { grid-template-columns: 1fr; }
    .hero-visual { display: none; }
    .categories-grid { grid-template-columns: repeat(2, 1fr); }
    .pros-grid, .how-grid, .testimonials-grid { grid-template-columns: 1fr; }
    .footer-grid { grid-template-columns: 1fr 1fr; }
    .stats-inner { grid-template-columns: repeat(2, 1fr); gap: 2rem; }
    .pros-header { flex-direction: column; align-items: flex-start; gap: 1rem; }
    .trust-strip-inner { flex-wrap: wrap; gap: 1rem; }
  }
`;

const categories = [
  { icon: "🔧", name: "Plumbing", count: "240+ experts" },
  { icon: "⚡", name: "Electrical", count: "180+ experts" },
  { icon: "❄️", name: "AC Repair", count: "150+ experts" },
  { icon: "🏠", name: "Cleaning", count: "320+ experts" },
  { icon: "🔨", name: "Carpentry", count: "120+ experts" },
  { icon: "🎨", name: "Painting", count: "200+ experts" },
  { icon: "🌿", name: "Gardening", count: "90+ experts" },
  { icon: "🛡️", name: "Security", count: "70+ experts" },
];

const pros = [
  {
    id: 1,
    name: "Rajesh Kumar",
    specialty: "Senior Plumber",
    experience: "8 yrs exp",
    jobs: "340 jobs",
    rating: "4.9",
    reviews: "128 reviews",
    price: "₹299",
    badge: "Top Rated",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    headerImg: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    name: "Mohammad Saifi",
    specialty: "Master Electrician",
    experience: "12 yrs exp",
    jobs: "580 jobs",
    rating: "4.8",
    reviews: "210 reviews",
    price: "₹349",
    badge: "Pro Verified",
    img: "https://images.unsplash.com/photo-1506794778202-92df001c367d?auto=format&fit=crop&q=80&w=400",
    headerImg: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    name: "Amit Lal",
    specialty: "AC Technician",
    experience: "6 yrs exp",
    jobs: "215 jobs",
    rating: "4.9",
    reviews: "97 reviews",
    price: "₹399",
    badge: "Certified",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=400",
    headerImg: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=600",
  },
];

const testimonials = [
  {
    text: "Found a plumber within 20 minutes. Absolutely seamless experience. The professional was punctual and incredibly thorough.",
    name: "Priya Sharma",
    location: "Gurgaon",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
    stars: 5,
  },
  {
    text: "Finally a service I can trust. The electrician fixed everything in one visit. Will definitely use UrbanFix for all future needs.",
    name: "Rohan Mehta",
    location: "Mumbai",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=100",
    stars: 5,
  },
  {
    text: "Booked a deep cleaning service. The team was professional and left my house spotless. Highly recommend!",
    name: "Sunita Verma",
    location: "Delhi",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100",
    stars: 5,
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94] as const
    }
  }),
};

const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

export default function UrbanFixHome() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{styles}</style>

      {/* NAV */}
      <nav className="nav" style={{ boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.06)" : "none" }}>
        <div className="nav-inner">
          <div className="logo">Urban<span>Fix</span></div>
          <ul className="nav-links">
            <li><a href="#">Services</a></li>
            <li><a href="#">Experts</a></li>
            <li><a href="#">How it Works</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
          <div className="nav-cta">
            <button className="btn btn-ghost">Sign In</button>
            <button className="btn btn-primary">Book a Service</button>
          </div>
        </div>
      </nav>

      {/* HERO — separate component, untouched */}
      <Hero />

      {/* TRUST STRIP */}
      <div className="trust-strip">
        <div className="trust-strip-inner">
          {[
            { icon: "🔒", text: "100% Secure Payments" },
            { icon: "✅", text: "Background-Verified Pros" },
            { icon: "🕐", text: "On-Time Guarantee" },
            { icon: "💯", text: "Service Warranty" },
            { icon: "📞", text: "24/7 Customer Support" },
          ].map((item, i) => (
            <div key={i} className="trust-item">
              <span className="trust-item-icon">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </div>

      {/* STATS BAR */}
      <motion.div className="stats-bar" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
        <div className="stats-inner">
          {[
            { num: "50K", suffix: "+", label: "Services Completed" },
            { num: "1,200", suffix: "+", label: "Verified Professionals" },
            { num: "98", suffix: "%", label: "Customer Satisfaction" },
            { num: "25", suffix: "+", label: "Cities Covered" },
          ].map((stat, i) => (
            <motion.div key={i} className="stat-item" variants={fadeUp} custom={i}>
              <div className="stat-number">{stat.num}<span>{stat.suffix}</span></div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* HOW IT WORKS */}
      <section className="section" style={{ background: "white" }}>
        <div className="section-inner">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp}>
              <div className="section-tag">How It Works</div>
              <h2 className="section-title">3 Simple Steps to<br />Expert Service</h2>
              <p className="section-desc">From booking to completion — we make home services effortless.</p>
            </motion.div>
            <div className="how-grid">
              {[
                { icon: "🔍", color: "icon-orange", title: "Search & Choose", desc: "Browse hundreds of verified professionals by category, rating, and availability. Find your perfect match in seconds.", num: "01" },
                { icon: "📅", color: "icon-dark", title: "Book Instantly", desc: "Pick your preferred time slot and confirm with upfront transparent pricing. No hidden fees, ever.", num: "02" },
                { icon: "⭐", color: "icon-green", title: "Relax & Review", desc: "Your professional arrives on time. After the job, rate your experience and help the community grow.", num: "03" },
              ].map((step, i) => (
                <motion.div key={i} className="how-card" variants={fadeUp} custom={i}>
                  <div className="how-card-num">{step.num}</div>
                  <div className={`how-icon ${step.color}`}>{step.icon}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories-section">
        <div className="section-inner">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div>
                <div className="section-tag">Browse by Category</div>
                <h2 className="section-title">Every Home Service,<br />One Platform</h2>
              </div>
              <button className="btn btn-dark">All Services →</button>
            </motion.div>
            <div className="categories-grid">
              {categories.map((cat, i) => (
                <motion.div key={i} className="cat-card" variants={fadeUp} custom={i} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <div className="cat-icon">{cat.icon}</div>
                  <div className="cat-name">{cat.name}</div>
                  <div className="cat-count">{cat.count}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED PROS */}
      <section className="pros-section">
        <div className="section-inner">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <div className="pros-header">
              <motion.div variants={fadeUp}>
                <div className="section-tag">Top Professionals</div>
                <h2 className="section-title">Featured Experts</h2>
                <p className="section-desc">Hand-picked, background-verified professionals with stellar track records.</p>
              </motion.div>
              <motion.button variants={fadeUp} className="btn btn-dark">View All Experts →</motion.button>
            </div>
            <div className="pros-grid">
              {pros.map((pro, i) => (
                <motion.div key={pro.id} className="pro-card" variants={fadeUp} custom={i}>
                  <div className="pro-card-header">
                    <img src={pro.headerImg} alt={pro.specialty} />
                    <div className="pro-badge">✅ {pro.badge}</div>
                    <div className="pro-rating">⭐ {pro.rating}</div>
                  </div>
                  <div className="pro-card-body">
                    <div className="pro-avatar-row">
                      <img className="pro-avatar" src={pro.img} alt={pro.name} />
                      <div>
                        <div className="pro-name">{pro.name}</div>
                        <div className="pro-specialty">{pro.specialty}</div>
                      </div>
                    </div>
                    <div className="pro-meta">
                      <div className="pro-meta-item">🗓️ {pro.experience}</div>
                      <div className="pro-meta-item">✅ {pro.jobs}</div>
                      <div className="pro-meta-item">💬 {pro.reviews}</div>
                    </div>
                    <div className="pro-card-footer">
                      <div className="pro-price">
                        <div className="pro-price-label">Starting from</div>
                        <div className="pro-price-amount">{pro.price}</div>
                      </div>
                      <motion.button className="btn btn-primary" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                        Book Now
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <div className="section-inner">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: "0.5rem" }}>
              <div className="section-tag" style={{ margin: "0 auto 1rem" }}>Customer Stories</div>
              <h2 className="section-title" style={{ textAlign: "center" }}>What Our Customers Say</h2>
              <p className="section-desc" style={{ margin: "0 auto", textAlign: "center" }}>Real reviews from real customers. No filters.</p>
            </motion.div>
            <div className="testimonials-grid">
              {testimonials.map((t, i) => (
                <motion.div key={i} className="testimonial-card" variants={fadeUp} custom={i}>
                  <div className="testimonial-quote">"</div>
                  <p className="testimonial-text">{t.text}</p>
                  <div className="testimonial-author">
                    <img src={t.img} alt={t.name} />
                    <div>
                      <div className="testimonial-name">{t.name}</div>
                      <div className="testimonial-location">📍 {t.location}</div>
                      <div className="testimonial-stars">{"★".repeat(t.stars)}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">Urban<span>Fix</span></div>
              <p className="footer-desc">Redefining home services with technology and trust. Your one-stop destination for verified professionals.</p>
              <div className="footer-social">
                {["𝕏", "in", "f", "📸"].map((icon, i) => (
                  <div key={i} className="social-btn">{icon}</div>
                ))}
              </div>
            </div>
            {[
              { title: "Company", links: ["About Us", "Careers", "Press", "Blog"] },
              { title: "Services", links: ["Plumbing", "Electrical", "Cleaning", "Carpentry", "AC Repair", "Painting"] },
              { title: "Support", links: ["Contact Us", "FAQs", "Safety Policy", "Help Center", "Terms of Service"] },
            ].map((col, i) => (
              <div key={i} className="footer-col">
                <h4>{col.title}</h4>
                <div className="footer-links">
                  {col.links.map((link, j) => <a key={j} href="#">{link}</a>)}
                </div>
              </div>
            ))}
          </div>
          <div className="footer-bottom">
            <p>© 2026 UrbanFix. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}