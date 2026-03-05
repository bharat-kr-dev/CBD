import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, MapPin, User, ShoppingCart } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="glass" style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      padding: '0.75rem 0',
      boxShadow: 'var(--shadow-sm)',
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Link to="/" style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            color: 'var(--primary)',
            letterSpacing: '-1px',
            display: 'flex',
            alignItems: 'center'
          }}>
            Urban<span style={{ color: 'var(--text-main)' }}>Fix</span>
          </Link>

          <div className="btn-outline" style={{
            display: 'flex',
            alignItems: 'center',
            padding: '0.5rem 1rem',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.85rem',
            gap: '0.5rem',
            cursor: 'pointer',
            border: 'none',
            background: 'var(--primary-light)',
            color: 'var(--primary)'
          }}>
            <MapPin size={14} />
            <span style={{ fontWeight: 600 }}>New Delhi</span>
          </div>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          fontWeight: 600,
          fontSize: '0.9rem'
        }}>
          <Link to="/" style={{ color: isActive('/') ? 'var(--primary)' : 'var(--text-main)', transition: 'color 0.2s' }}>Home</Link>
          <Link to="/listing" style={{ color: isActive('/listing') ? 'var(--primary)' : 'var(--text-main)', transition: 'color 0.2s' }}>Services</Link>
          <Link to="/onboarding" style={{ color: isActive('/onboarding') ? 'var(--primary)' : 'var(--text-main)', transition: 'color 0.2s' }}>Join as Pro</Link>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.25rem'
        }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <Search size={18} style={{ color: 'var(--text-muted)' }} />
          </div>

          <div style={{ height: '24px', width: '1px', background: 'var(--border)' }}></div>

          <Link to="/booking" style={{ position: 'relative', color: 'var(--text-main)' }}>
            <ShoppingCart size={20} />
            <span style={{
              position: 'absolute',
              top: '-8px',
              right: '-8px',
              background: 'var(--primary)',
              color: 'white',
              fontSize: '0.65rem',
              fontWeight: 700,
              width: '18px',
              height: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 'var(--radius-full)',
              boxShadow: '0 2px 4px rgba(79, 70, 229, 0.3)'
            }}>0</span>
          </Link>

          <button className="btn btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}>
            <User size={16} />
            <span>Login</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
