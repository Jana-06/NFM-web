import React, { useState, useEffect, useRef } from 'react';
import PhoneMockup from './components/PhoneMockup';
import { 
  Activity, ArrowRight, ArrowLeft, Check, Plus, Minus, 
  HelpCircle, Sparkles, Heart, Clock, Users, Cloud, 
  Bell, ChevronDown, Monitor, Smartphone, Download, X, Laptop,
  FileText, ShieldAlert, Video, Search, MapPin, Pill, ShoppingCart, User, Settings
} from 'lucide-react';

export default function App() {
  // UI states
  const [activeFaq, setActiveFaq] = useState(null);
  const [yearlyPricing, setYearlyPricing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // References
  const carouselTrackRef = useRef(null);

  const handleInstallRedirect = () => {
    window.location.href = "https://drive.google.com/file/d/14ywlxo4-nkm0lou8CvCuHH1n8H5kiwEP/view?usp=sharing";
  };

  // Hero mockup animation state on load
  const [heroAnimated, setHeroAnimated] = useState(false);

  // Trigger animations shortly after mount
  useEffect(() => {
    setTimeout(() => {
      setHeroAnimated(true);
    }, 100);
  }, []);

  const handleDownload = (platform) => {
    window.location.href = `/api/download/${platform}`;
  };

  // Carousel controls
  const handleCarouselScroll = (direction) => {
    const track = carouselTrackRef.current;
    if (track) {
      const cardWidth = track.firstElementChild?.offsetWidth || 300;
      const scrollAmount = direction === 'left' ? -cardWidth - 32 : cardWidth + 32;
      track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Data for FAQs
  const faqs = [
    {
      q: "How do I order medicines on NFM Medcare?",
      a: "Simply open the Medicines tab, search for your prescribed drug, tap 'Add' to place it in the cart, and proceed to checkout using your saved addresses."
    },
    {
      q: "Can I scan and upload my prescription?",
      a: "Yes. You can scan paper prescriptions directly in the app to import required medicines automatically into your cart for review."
    },
    {
      q: "Is shipping free?",
      a: "Yes! Shipping is completely free for all orders on our Premium plan and standard orders above ₹500."
    },
    {
      q: "What payment methods are supported?",
      a: "We support UPI, Netbanking, Debit/Credit Cards, and Cash on Delivery (COD) for your convenience."
    },
    {
      q: "Can I cancel or track my orders?",
      a: "Absolutely. You can track your package directly under the 'My Orders' section in your Profile tab, or request cancellations before shipment."
    }
  ];

  // Data for features grid
  const features = [
    {
      icon: <Pill size={24} />,
      title: "Online Medicines Store",
      desc: "Browse generic and branded drugs with prices. Add products to your cart easily."
    },
    {
      icon: <ShoppingCart size={24} />,
      title: "Fast Cart Checkout",
      desc: "Calculate bag totals, review delivery charges, and place orders with one tap."
    },
    {
      icon: <Search size={24} />,
      title: "Detailed Catalog Search",
      desc: "Find medicines, skincare, haircare, and babycare products using smart keywords."
    },
    {
      icon: <FileText size={24} />,
      title: "Order History Logs",
      desc: "Track active shipments and review past invoices directly in your account."
    },
    {
      icon: <MapPin size={24} />,
      title: "Saved Address Cards",
      desc: "Save multiple residential or workplace addresses for streamlined checkout."
    },
    {
      icon: <User size={24} />,
      title: "User Profile Dashboard",
      desc: "Manage username metadata, sync email contacts, and access care support."
    }
  ];

  return (
    <div style={{ position: 'relative' }}>
      {/* Sticky Header */}
      <header className="header">
        <div className="container nav-container">
          <a href="#" className="logo">
            <Activity className="logo-icon text-primary" size={24} />
            <span>NFM Medcare</span>
          </a>
          <button className="btn btn-primary" onClick={handleInstallRedirect}>
            Install App
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container text-center">
          <h1 className="hero-title">Your complete online pharmacy, managed on-the-go.</h1>
          <p className="hero-desc">
            NFM Medcare connects you with prescription refills, featured healthcare products, 
            skincare essentials, and haircare treatments. Save delivery addresses, track orders 
            live, and manage profiles from your home dashboard.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary btn-large" onClick={handleInstallRedirect}>
              Get Started Free <ArrowRight size={16} style={{ marginLeft: '8px' }} />
            </button>
            <a href="#features" className="btn btn-secondary btn-large">
              Explore Features
            </a>
          </div>
        </div>
      </section>

      {/* Feature Scroll Section */}
      <section className="feature-scroll">
        <div className="container text-center">
          <div className="section-meta">Experience</div>
          <h2 className="section-title">An app unlike any other</h2>
          <p className="section-desc">Experience fluid healthcare management built around your schedule, vitals trend logging, and clinical records.</p>

          <div className="scroll-device-grid">
            <div className="scroll-device-item">
              <PhoneMockup screenId="Device-1" />
              <div className="scroll-device-meta">
                <h4>Fariza Medicals Home</h4>
                <p>Browse categories and featured items</p>
              </div>
            </div>
            <div className="scroll-device-item">
              <PhoneMockup screenId="Device-2" />
              <div className="scroll-device-meta">
                <h4>Medicines Store</h4>
                <p>Add pharmaceuticals to cart instantly</p>
              </div>
            </div>
            <div className="scroll-device-item">
              <PhoneMockup screenId="Device-3" />
              <div className="scroll-device-meta">
                <h4>Categories List</h4>
                <p>Curated medical skincare and haircare</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlight Section */}
      <section className="feature-highlight" id="features">
        <div className="container">
          <div className="text-center">
            <div className="section-meta">Features</div>
            <h2 className="section-title">Powerful features</h2>
            <p className="section-desc">Get the ultimate digital companion for your family and personal health administration.</p>
          </div>

          <div className="highlight-row">
            <div className="highlight-content">
              <h2 className="highlight-title">Direct Medicine Ordering</h2>
              <p className="highlight-text">
                Browse, search, and order medications like Itaspor 200, Bilatis, and Novastat CV 10 
                directly in your browser. Add items to cart and check out in seconds.
              </p>
              <button className="btn btn-primary" onClick={handleInstallRedirect}>
                Get Started
              </button>
            </div>
            <div className="highlight-device">
              <PhoneMockup screenId="Device-2" />
            </div>
          </div>

          <div className="highlight-row reverse">
            <div className="highlight-content">
              <h2 className="highlight-title">Structured Health Catalog</h2>
              <p className="highlight-text">
                Explore dedicated folders for medical prescriptions, skincare body creams, and haircare shampoos 
                designed for quick browsing and optimized delivery schedules.
              </p>
              <button className="btn btn-primary" onClick={handleInstallRedirect}>
                Get Started
              </button>
            </div>
            <div className="highlight-device">
              <PhoneMockup screenId="Device-3" />
            </div>
          </div>

          <div className="highlight-row">
            <div className="highlight-content">
              <h2 className="highlight-title">User Profile Dashboard</h2>
              <p className="highlight-text">
                Manage your user metadata, configure delivery addresses, trace recent purchases, 
                and get live help support, in one clean page.
              </p>
              <button className="btn btn-primary" onClick={handleInstallRedirect}>
                Get Started
              </button>
            </div>
            <div className="highlight-device">
              <PhoneMockup screenId="Device-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="bento">
        <div className="container">
          <div className="text-center">
            <div className="section-meta">Benefits</div>
            <h2 className="section-title">It does a lot of things</h2>
            <p className="section-desc">More than medical logs, NFM Medcare acts as your dedicated digital health records portal.</p>
          </div>

          <div className="bento-grid">
            <div className="bento-card bento-card-large">
              <div>
                <h3>Comprehensive Pharmacy Dashboard</h3>
                <p>
                  Our app consolidates category tags, shopping carts, and order details 
                  in one visually stunning, easy-to-read white and green home interface.
                </p>
              </div>
              <div className="bento-device-container">
                <PhoneMockup screenId="Device-1" />
              </div>
            </div>

            <div className="bento-card">
              <div>
                <h3>Medicines Store Grid</h3>
                <p>
                  Browse generic and branded drugs with prices. Add products to your cart easily with immediate feedback.
                </p>
              </div>
              <div className="bento-device-container">
                <PhoneMockup screenId="Device-2" />
              </div>
            </div>

            <div className="bento-card">
              <div>
                <h3>Categories Directory</h3>
                <p>
                  Access curated folders for Medicines, Skincare & Bodycare, and Haircare with illustrative banners.
                </p>
              </div>
              <div className="bento-device-container">
                <PhoneMockup screenId="Device-3" />
              </div>
            </div>

            <div className="bento-card bento-card-large">
              <div>
                <h3>Personal Account Dashboard</h3>
                <p>
                  Manage user information, review your 'My Orders' history logs, and set saved delivery addresses for fast shipping.
                </p>
              </div>
              <div className="bento-device-container">
                <PhoneMockup screenId="Device-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Scroll / Slider Section */}
      <section className="benefits-carousel">
        <div className="container">
          <div className="text-center">
            <div className="section-meta">Benefits</div>
            <h2 className="section-title">What you can do with NFM Medcare</h2>
            <p className="section-desc">Unlock convenient, digital-first healthcare features designed for individuals and families.</p>
          </div>

          <div className="carousel-outer">
            <div className="carousel-track" ref={carouselTrackRef}>
              <div className="carousel-slide">
                <div className="carousel-img-box">
                  <PhoneMockup screenId="Device-1" />
                </div>
                <h3 className="carousel-desc">Shop medicines, skincare, and babycare.</h3>
              </div>
              
              <div className="carousel-slide">
                <div className="carousel-img-box">
                  <PhoneMockup screenId="Device-2" />
                </div>
                <h3 className="carousel-desc">Review and trace order logs.</h3>
              </div>

              <div className="carousel-slide">
                <div className="carousel-img-box">
                  <PhoneMockup screenId="Device-4" />
                </div>
                <h3 className="carousel-desc">Save delivery addresses for fast checkout.</h3>
              </div>

              <div className="carousel-slide">
                <div className="carousel-img-box">
                  <PhoneMockup screenId="Device-5" />
                </div>
                <h3 className="carousel-desc">Monitor total amounts and delivery charges securely.</h3>
              </div>
            </div>

            <div className="carousel-controls">
              <button className="carousel-btn" aria-label="Previous slide" onClick={() => handleCarouselScroll('left')}>
                <ArrowLeft size={18} />
              </button>
              <button className="carousel-btn" aria-label="Next slide" onClick={() => handleCarouselScroll('right')}>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features checklist Grid */}
      <section className="features-grid-section">
        <div className="container">
          <div className="text-center">
            <div className="section-meta">Features</div>
            <h2 className="section-title">Powerful features</h2>
            <p className="section-desc">All the clinical utilities you need to orchestrate care schedules, reports, and vital tracking.</p>
          </div>

          <div className="features-grid">
            {features.map((feat, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon-box">{feat.icon}</div>
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
                <a href="#features" className="feature-link">Learn more &gt;</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordions Section */}
      <section className="faq">
        <div className="container">
          <div className="text-center">
            <div className="section-meta">FAQ</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-desc">Have questions about NFM Medcare? Find answers to commonly asked questions below.</p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div className={`faq-item ${activeFaq === index ? 'active' : ''}`} key={index}>
                <button className="faq-question" onClick={() => toggleFaq(index)}>
                  <span>{faq.q}</span>
                  <ChevronDown size={18} />
                </button>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>Take control of your healthcare orders today.</h2>
            <p>Start shopping medicines, skincare, and bodycare on-the-go with NFM Medcare.</p>
            <button className="btn btn-primary btn-large" onClick={handleInstallRedirect}>
              Install NFM Medcare
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
