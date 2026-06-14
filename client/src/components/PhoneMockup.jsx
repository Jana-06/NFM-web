import React from 'react';
import { 
  Heart, Activity, Calendar, Pill, FileText, ShieldAlert, 
  Video, Sparkles, Check, ChevronRight, User, ArrowRight,
  TrendingUp, Plus, Search, MapPin, Download, AlertTriangle,
  ShoppingCart, Bell, HelpCircle, Briefcase, Settings, Map
} from 'lucide-react';

export default function PhoneMockup({ screenId }) {
  
  // Custom drug box package rendering
  const renderDrugPackage = (type, color) => {
    return (
      <svg viewBox="0 0 100 50" width="100%" height="100%">
        <rect width="100" height="50" rx="4" fill="#f4f4f5" stroke="#e4e4e7" strokeWidth="1" />
        <rect width="30" height="50" fill={color || '#388e3c'} rx="4" />
        <rect width="10" height="50" x="25" fill={color || '#388e3c'} />
        {type === 'blister' ? (
          <>
            <circle cx="45" cy="15" r="4" fill="#a1a1aa" opacity="0.5" />
            <circle cx="60" cy="15" r="4" fill="#a1a1aa" opacity="0.5" />
            <circle cx="75" cy="15" r="4" fill="#a1a1aa" opacity="0.5" />
            <circle cx="45" cy="35" r="4" fill="#a1a1aa" opacity="0.5" />
            <circle cx="60" cy="35" r="4" fill="#a1a1aa" opacity="0.5" />
            <circle cx="75" cy="35" r="4" fill="#a1a1aa" opacity="0.5" />
          </>
        ) : (
          <>
            <line x1="45" y1="18" x2="85" y2="18" stroke="#71717a" strokeWidth="2" strokeLinecap="round" />
            <line x1="45" y1="28" x2="75" y2="28" stroke="#a1a1aa" strokeWidth="2" strokeLinecap="round" />
            <line x1="45" y1="38" x2="65" y2="38" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" />
          </>
        )}
      </svg>
    );
  };

  const renderScreenContent = () => {
    switch (screenId) {
      case 'Device-1':
      case 'home':
        return (
          <div className="phone-screen">
            <div className="phone-app-header">
              <span className="phone-app-title">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ width: '14px', height: '14px', color: '#2e7d32', marginRight: '4px' }}>
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
                Fariza Medicals
              </span>
              <div style={{ display: 'flex', gap: '10px', color: '#52525b' }}>
                <Bell size={14} />
                <ShoppingCart size={14} />
              </div>
            </div>
            
            <div className="phone-app-content" style={{ padding: '10px', gap: '10px' }}>
              {/* Search medicines bar */}
              <div className="phone-search-bar">
                <Search size={12} />
                <span>Search medicines, skinca...</span>
              </div>

              {/* Banner Image */}
              <div style={{
                position: 'relative',
                height: '90px',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 2px 6px rgba(0,0,0,0.03)'
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&auto=format&fit=crop&q=60" 
                  alt="Pharmacy Store"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(90deg, rgba(0,0,0,0.4) 0%, transparent 80%)'
                }}></div>
              </div>
              
              {/* Dots Carousel Indicator */}
              <div className="phone-dots-row">
                <div className="phone-dot"></div>
                <div className="phone-dot active"></div>
                <div className="phone-dot"></div>
              </div>

              {/* Quick Links Categories grid */}
              <div className="phone-cat-grid">
                <div className="phone-cat-btn">
                  <div className="phone-cat-icon"><Pill size={12} /></div>
                  <span>Medicines</span>
                </div>
                <div className="phone-cat-btn">
                  <div className="phone-cat-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '12px', height: '12px' }}><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Zm0 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/></svg>
                  </div>
                  <span>Skincare</span>
                </div>
                <div className="phone-cat-btn">
                  <div className="phone-cat-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '12px', height: '12px' }}><path d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Zm8-8a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/></svg>
                  </div>
                  <span>Haircare</span>
                </div>
                <div className="phone-cat-btn">
                  <div className="phone-cat-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '12px', height: '12px' }}><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm-3-11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/></svg>
                  </div>
                  <span>Babycare</span>
                </div>
              </div>

              {/* Featured Products list */}
              <div style={{ fontSize: '12px', fontWeight: '800', marginTop: '4px', color: '#18181b' }}>Featured Products</div>
              <div className="phone-product-grid">
                <div className="phone-product-card">
                  <div className="phone-product-img">
                    {renderDrugPackage('box', '#34d399')}
                  </div>
                  <span className="phone-product-name">Itaspor 200</span>
                  <span className="phone-product-price">₹252</span>
                  <button className="phone-product-add-btn">Add</button>
                </div>
                <div className="phone-product-card">
                  <div className="phone-product-img">
                    {renderDrugPackage('blister', '#ef4444')}
                  </div>
                  <span className="phone-product-name">Old Spice Sha...</span>
                  <span className="phone-product-price">₹75</span>
                  <button className="phone-product-add-btn">Add</button>
                </div>
              </div>
            </div>

            {/* Bottom Nav Bar */}
            <div className="phone-bottom-nav">
              <div className="phone-nav-tab active">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                <span>Home</span>
              </div>
              <div className="phone-nav-tab">
                <Pill size={16} />
                <span>Medicines</span>
              </div>
              <div className="phone-nav-tab">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
                <span>Categories</span>
              </div>
              <div className="phone-nav-tab">
                <User size={16} />
                <span>Profile</span>
              </div>
            </div>
          </div>
        );

      case 'Device-2':
      case 'medicines':
        return (
          <div className="phone-screen">
            <div className="phone-app-header">
              <span className="phone-app-title" style={{ fontSize: '14px', color: '#18181b', fontWeight: '800' }}>Medicines</span>
              <Search size={14} className="text-zinc-500" />
            </div>

            <div className="phone-app-content" style={{ padding: '10px', gap: '10px' }}>
              <div className="phone-product-grid" style={{ gap: '10px' }}>
                <div className="phone-product-card">
                  <div className="phone-product-img">{renderDrugPackage('box', '#4caf50')}</div>
                  <span className="phone-product-name">Itaspor 200</span>
                  <span className="phone-product-price">₹252</span>
                  <button className="phone-product-add-btn">Add</button>
                </div>
                <div className="phone-product-card">
                  <div className="phone-product-img">{renderDrugPackage('blister', '#60a5fa')}</div>
                  <span className="phone-product-name">Bilatis</span>
                  <span className="phone-product-price">₹124</span>
                  <button className="phone-product-add-btn">Add</button>
                </div>
                <div className="phone-product-card">
                  <div className="phone-product-img">{renderDrugPackage('box', '#f59e0b')}</div>
                  <span className="phone-product-name">Novastat CV 10</span>
                  <span className="phone-product-price">₹389</span>
                  <button className="phone-product-add-btn">Add</button>
                </div>
                <div className="phone-product-card">
                  <div className="phone-product-img">{renderDrugPackage('blister', '#10b981')}</div>
                  <span className="phone-product-name">Diclowin Plus</span>
                  <span className="phone-product-price">₹27</span>
                  <button className="phone-product-add-btn">Add</button>
                </div>
              </div>
            </div>

            {/* Bottom Nav Bar */}
            <div className="phone-bottom-nav">
              <div className="phone-nav-tab">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                <span>Home</span>
              </div>
              <div className="phone-nav-tab active">
                <Pill size={16} />
                <span>Medicines</span>
              </div>
              <div className="phone-nav-tab">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
                <span>Categories</span>
              </div>
              <div className="phone-nav-tab">
                <User size={16} />
                <span>Profile</span>
              </div>
            </div>
          </div>
        );

      case 'Device-3':
      case 'categories':
        return (
          <div className="phone-screen">
            <div className="phone-app-header">
              <span className="phone-app-title" style={{ fontSize: '14px', color: '#18181b', fontWeight: '800' }}>Categories</span>
              <ShoppingCart size={14} className="text-zinc-500" />
            </div>

            <div className="phone-app-content" style={{ padding: '10px', gap: '12px' }}>
              <div className="phone-category-banner">
                <img 
                  src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&auto=format&fit=crop&q=60" 
                  alt="Medicines"
                  className="phone-category-banner-img"
                />
                <div className="phone-category-banner-text">
                  <Pill size={14} />
                  Medicines
                </div>
              </div>

              <div className="phone-category-banner">
                <img 
                  src="https://images.unsplash.com/photo-1608248597481-496100c8c836?w=300&auto=format&fit=crop&q=60" 
                  alt="Skincare"
                  className="phone-category-banner-img"
                />
                <div className="phone-category-banner-text">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '14px', height: '14px' }}><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Zm0 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/></svg>
                  Skincare & Bodycare
                </div>
              </div>

              <div className="phone-category-banner">
                <img 
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&auto=format&fit=crop&q=60" 
                  alt="Haircare"
                  className="phone-category-banner-img"
                />
                <div className="phone-category-banner-text">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '14px', height: '14px' }}><path d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Zm8-8a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/></svg>
                  Haircare
                </div>
              </div>
            </div>

            {/* Bottom Nav Bar */}
            <div className="phone-bottom-nav">
              <div className="phone-nav-tab">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                <span>Home</span>
              </div>
              <div className="phone-nav-tab">
                <Pill size={16} />
                <span>Medicines</span>
              </div>
              <div className="phone-nav-tab active">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
                <span>Categories</span>
              </div>
              <div className="phone-nav-tab">
                <User size={16} />
                <span>Profile</span>
              </div>
            </div>
          </div>
        );

      case 'Device-4':
      case 'profile':
        return (
          <div className="phone-screen">
            <div className="phone-app-header">
              <span className="phone-app-title" style={{ fontSize: '14px', color: '#18181b', fontWeight: '800' }}>Profile</span>
              <Settings size={14} className="text-zinc-500" />
            </div>

            <div className="phone-app-content" style={{ padding: '12px', gap: '10px' }}>
              
              {/* Profile Card details */}
              <div className="phone-profile-header">
                <div className="phone-profile-avatar">
                  <User size={36} className="text-zinc-400" />
                </div>
                <span className="phone-profile-name">jana</span>
                <span className="phone-profile-meta">
                  📧 h@123<br />
                  📞 123456789
                </span>
              </div>

              {/* Current Address section */}
              <span className="phone-profile-section-title">Current Address</span>
              <div className="phone-profile-card">
                <MapPin size={18} className="text-zinc-400" />
                <span className="phone-profile-address">
                  1600 Amphitheatre Pkwy<br />
                  Mountain View, California - 744107
                </span>
              </div>

              {/* Account Actions */}
              <span className="phone-profile-section-title">Account</span>
              <div className="phone-profile-item">
                <span>📋 My Orders</span>
                <ChevronRight size={12} className="text-zinc-400" />
              </div>
              <div className="phone-profile-item">
                <span>📍 Saved Addresses</span>
                <ChevronRight size={12} className="text-zinc-400" />
              </div>
            </div>

            {/* Bottom Nav Bar */}
            <div className="phone-bottom-nav">
              <div className="phone-nav-tab">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                <span>Home</span>
              </div>
              <div className="phone-nav-tab">
                <Pill size={16} />
                <span>Medicines</span>
              </div>
              <div className="phone-nav-tab">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
                <span>Categories</span>
              </div>
              <div className="phone-nav-tab active">
                <User size={16} />
                <span>Profile</span>
              </div>
            </div>
          </div>
        );

      case 'Device-5':
      case 'cart':
        return (
          <div className="phone-screen">
            <div className="phone-app-header">
              <span className="phone-app-title" style={{ fontSize: '14px', color: '#18181b', fontWeight: '800' }}>Cart Overview</span>
              <ShoppingCart size={14} className="text-primary" />
            </div>
            
            <div className="phone-app-content" style={{ padding: '10px', gap: '12px' }}>
              <div style={{ fontSize: '10px', color: '#71717a' }}>1 Item in your cart</div>
              
              <div style={{ display: 'flex', gap: '10px', background: '#f4f4f5', padding: '10px', borderRadius: '12px', alignItems: 'center', border: '1px solid #e4e4e7' }}>
                <div style={{ width: '40px', height: '30px' }}>{renderDrugPackage('box', '#4caf50')}</div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '10px', fontWeight: 'bold' }}>Itaspor 200</span>
                  <span style={{ fontSize: '8px', color: '#71717a' }}>Qty: 1 box (10 caps)</span>
                </div>
                <span style={{ fontSize: '11px', fontWeight: '800' }}>₹252</span>
              </div>

              <div style={{ borderTop: '1px dashed #e4e4e7', paddingTop: '10px', marginTop: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', marginBottom: '6px' }}>
                  <span>Bag Total</span>
                  <span>₹252</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', marginBottom: '6px' }}>
                  <span>Delivery Charges</span>
                  <span style={{ color: '#2e7d32', fontWeight: 'bold' }}>FREE</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: '800', marginTop: '4px' }}>
                  <span>Total Amount</span>
                  <span>₹252</span>
                </div>
              </div>

              <button style={{
                background: '#4caf50',
                color: 'white',
                border: 'none',
                padding: '10px',
                borderRadius: '8px',
                fontWeight: 'bold',
                fontSize: '10px',
                textAlign: 'center',
                cursor: 'pointer',
                marginTop: '10px'
              }}>
                Checkout (₹252)
              </button>
            </div>
          </div>
        );

      default:
        return (
          <div className="phone-screen">
            <div className="phone-app-header">
              <span className="phone-app-title">NFM Medcare</span>
            </div>
            <div className="phone-app-content" style={{ padding: '20px', textAlign: 'center' }}>
              <Pill size={32} className="text-primary" style={{ marginBottom: '10px' }} />
              <div style={{ fontSize: '11px', fontWeight: '700' }}>Fariza Medicals Online Store</div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="phone-mockup">
      <div className="phone-island">
        <div className="phone-camera"></div>
        <div className="phone-sensor"></div>
      </div>
      {renderScreenContent()}
    </div>
  );
}
