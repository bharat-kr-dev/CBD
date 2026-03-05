import React from 'react';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import { motion } from 'framer-motion';

const pros = [
  { id: 1, name: 'Rajesh Kumar',    role: 'Plumbing',   rating: '4.9', jobs: '340', price: '₹299', img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200' },
  { id: 2, name: 'Mohammad Saifi', role: 'Electrical',  rating: '4.8', jobs: '580', price: '₹349', img: 'https://images.unsplash.com/photo-1506794778202-92df001c367d?auto=format&fit=crop&q=80&w=200' },
  { id: 3, name: 'Amit Lal',       role: 'AC Repair',   rating: '4.9', jobs: '215', price: '₹399', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200' },
];

const footerLinks = [
  { title: 'Company',  links: ['About Us', 'Terms of Service', 'Privacy Policy', 'Careers'] },
  { title: 'Services', links: ['Plumbing', 'Electrical', 'Cleaning', 'Carpentry'] },
  { title: 'Support',  links: ['Contact Us', 'FAQs', 'Safety Policy', 'Help Center'] },
];

const Home: React.FC = () => (
  <div className="home-page">
    <Hero />
    <CategoryGrid />

    {/* Stats Strip */}
    <div className="stats-strip">
      <div className="container stats-strip__inner">
        {[['50K+', 'Services Done'], ['1,200+', 'Verified Pros'], ['98%', 'Satisfaction'], ['25+', 'Cities']].map(([num, label]) => (
          <div key={label} className="stats-strip__item">
            <span className="stats-strip__num">{num}</span>
            <span className="stats-strip__label">{label}</span>
          </div>
        ))}
      </div>
    </div>

    {/* How It Works */}
    <section className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">How It Works</span>
          <h2 className="section-title">3 Steps to Expert Service</h2>
          <p className="section-desc">Booking a professional has never been this simple.</p>
        </div>
        <div className="how-grid">
          {[
            { icon: '🔍', step: '01', title: 'Search',  desc: 'Browse verified professionals by category, rating, and availability.' },
            { icon: '📅', step: '02', title: 'Book',    desc: 'Pick a time slot and confirm with upfront, transparent pricing.' },
            { icon: '⭐', step: '03', title: 'Relax',   desc: 'Your pro arrives on time. Rate the experience when done.' },
          ].map((s, i) => (
            <motion.div key={s.step} className="card how-card"
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <span className="how-card__num">{s.step}</span>
              <div className="how-card__icon">{s.icon}</div>
              <h3 className="how-card__title">{s.title}</h3>
              <p className="how-card__desc">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Pros */}
    <section className="section-padding" style={{ background: 'var(--background)' }}>
      <div className="container">
        <div className="section-header section-header--row">
          <div>
            <span className="section-tag">Top Professionals</span>
            <h2 className="section-title">Featured Experts</h2>
            <p className="section-desc">Hand-picked, background-verified pros with stellar track records.</p>
          </div>
          <button className="btn btn-outline">View All Experts</button>
        </div>
        <div className="pros-grid">
          {pros.map((pro, i) => (
            <motion.div key={pro.id} className="card pro-card"
              initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <div className="pro-card__top">
                <div className="pro-card__avatar">
                  <img src={pro.img} alt={pro.name} />
                </div>
                <div>
                  <h4 className="pro-card__name">{pro.name}</h4>
                  <div className="pro-card__meta">
                    <span className="tag">{pro.role}</span>
                    <span className="pro-card__rating">★ {pro.rating}</span>
                  </div>
                </div>
              </div>
              <p className="pro-card__desc">✅ Verified · {pro.jobs} jobs completed · 8+ yrs experience</p>
              <div className="pro-card__footer">
                <div>
                  <p className="pro-card__from">STARTING FROM</p>
                  <p className="pro-card__price">{pro.price}</p>
                </div>
                <button className="btn btn-primary">Book Now</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <h3 className="footer__logo">Urban<span>Fix</span></h3>
          <p className="footer__desc">Your one-stop destination for verified home service professionals.</p>
        </div>
        {footerLinks.map(col => (
          <div key={col.title}>
            <h4 className="footer__col-title">{col.title}</h4>
            <ul className="footer__links">
              {col.links.map(l => <li key={l}><a href="#">{l}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="container footer__bottom">
        <p>© 2026 UrbanFix. All rights reserved.</p>
      </div>
    </footer>
  </div>
);

export default Home;