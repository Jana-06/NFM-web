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
  
  // PWA state
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isPWAInstallable, setIsPWAInstallable] = useState(false);

  // Hero mockup animation state on load
  const [heroAnimated, setHeroAnimated] = useState(false);

  // References
  const carouselTrackRef = useRef(null);

  // Trigger animations shortly after mount
  useEffect(() => {
    setTimeout(() => {
      setHeroAnimated(true);
    }, 100);

    // Listen for PWA installation prompt event
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsPWAInstallable(true);
    });

    // Reset prompt if installed
    window.addEventListener('appinstalled', () => {
      setDeferredPrompt(null);
      setIsPWAInstallable(false);
      console.log('NFM Medcare has been successfully installed!');
    });
  }, []);

  const handleInstallPWA = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`PWA install prompt choice: ${outcome}`);
      setDeferredPrompt(null);
      setIsPWAInstallable(false);
    } else {
      alert("PWA installation prompt isn't supported by your current browser. You can still download the app packages below!");
    }
  };

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

  // Testimonials (18 total matching the masonry)
  const testimonials = [
    { name: "jana", role: "Patient User", handle: "@jana", text: "Ordering my daily medicines (Itaspor 200) is incredibly easy. Doorstep delivery is fast and the green theme looks clean.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=60" },
    { name: "Emily Watson", role: "Skincare Buyer", handle: "@emily_w", text: "I love the Skincare & Bodycare categories. The products are authentic and prices are lower than retail shops.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=60" },
    { name: "Dr. Rachel Adams", role: "Pediatrician", handle: "@dr_adams", text: "The Medicines catalog is extremely comprehensive. Listing active drug names helps patients find exactly what they need.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=60" },
    { name: "Pritam Shah", role: "Regular Customer", handle: "@pritam_s", text: "NFM Medcare saved me two trips to the local pharmacy this month. Extremely convenient.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=60" },
    { name: "Marcus Aurelius", role: "User", handle: "@marcus_a", text: "App installs instantly from the browser link. Works incredibly fast. Notifications are timely and non-intrusive.", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=60" },
    { name: "Sarah Connor", role: "Caregiver", handle: "@sarah_c", text: "The prescription reminders keep my mother's daily medication schedules strictly on track. Absolute peace of mind.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=60" },
    { name: "Dr. David Chen", role: "General Practitioner", handle: "@dr_chen", text: "Secure, intuitive, and HIPAA-compliant. The offline emergency card is a brilliant addition for critical patient care.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=60" },
    { name: "Alan Turing", role: "Health Tech Reviewer", handle: "@alant", text: "The PWA offline capabilities are state-of-the-art. App runs securely, caching vitals locally and syncing back in one tap.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=60" },
    { name: "Lisa Kudrow", role: "Chronic Care Patient", handle: "@lisa_k", text: "NFM Medcare helped me identify a BP spike pattern on Monday mornings. Shared the chart report with my doctor who adjusted my dosage.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=60" },
    { name: "Nina Simone", role: "User", handle: "@nina_s", text: "Simple, layout is clean, doesn't clutter. The offline medical profile is extremely useful for emergency allergies logging.", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&auto=format&fit=crop&q=60" },
    { name: "Dr. Steven Strange", role: "Neurologist", handle: "@dr_strange", text: "The encryption standard satisfies hospital safety policies. The lab reports vault handles high-res scans effortlessly.", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&auto=format&fit=crop&q=60" },
    { name: "Clara Oswald", role: "Diabetic Patient", handle: "@clara_o", text: "Logging my daily glucose levels takes under 5 seconds. The automated weekly insights keep me highly accountable.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=60" },
    { name: "Peter Parker", role: "User", handle: "@spidey_p", text: "App installs instantly from the browser link. Works incredibly fast. Notifications are timely and non-intrusive.", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=60" },
    { name: "Diana Prince", role: "Athletics Trainer", handle: "@wonder_d", text: "Incredibly useful health advisor suggestions. Reminds me of daily hydration and checks resting pulse ranges.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=60" },
    { name: "Bruce Banner", role: "Bio-Researcher", handle: "@hulk_b", text: "Excellent telemetry visuals. BP logging and heart rate histograms offer scientific-grade data review.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=60" },
    { name: "Tony Stark", role: "Health Tech Investor", handle: "@iron_t", text: "NFM Medcare has built a premium mobile health record portal. PWA offline caching works like magic.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=60" },
    { name: "Selina Kyle", role: "Fitness User", handle: "@cat_s", text: "Love the dark mode. Simple interface. The visual graphs look stunning on OLED displays.", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&auto=format&fit=crop&q=60" },
    { name: "John Watson", role: "Retired Army Surgeon", handle: "@watson_j", text: "Cleanest telemedicine application interface. Joining clinical calls is simple and secure.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=60" }
  ];

  // Marquee reviews ticker
  const marqueeReviews = [
    { handle: "@patient_jana", text: "Itaspor 200 delivered in 20 minutes! Incredible speed.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=60" },
    { handle: "@skincare_user", text: "White & Green theme looks extremely premium and fresh.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=60" },
    { handle: "@dr_carter", text: "The Medicines list is highly detailed, complete with pricing details.", img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=150&auto=format&fit=crop&q=60" },
    { handle: "@caregiver_sarah", text: "Perfect PWA install link. Installs natively on my home screen.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=60" },
    { handle: "@patient_clara", text: "Diclowin Plus and Bilatis added in one tap. Effortless shopping.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=60" }
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
          <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
            Install App
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container text-center">
          <div className="hero-icon-wrapper">
            <div className="hero-logo-box">
              <Activity viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '2.5rem', height: '2.5rem', color: 'white' }} />
            </div>
          </div>
          
          <h1 className="hero-title">Your complete online pharmacy, managed on-the-go.</h1>
          <p className="hero-desc">
            NFM Medcare connects you with prescription refills, featured healthcare products, 
            skincare essentials, and haircare treatments. Save delivery addresses, track orders 
            live, and manage profiles from your home dashboard.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary btn-large" onClick={() => setIsModalOpen(true)}>
              Get Started Free <ArrowRight size={16} style={{ marginLeft: '8px' }} />
            </button>
            <a href="#features" className="btn btn-secondary btn-large">
              Explore Features
            </a>
          </div>

          {/* Interactive sliding device mockups */}
          <div className="hero-mockups">
            <div className={`hero-mockup-item ${heroAnimated ? 'active' : ''}`}>
              <PhoneMockup screenId="Device-1" />
            </div>
            <div className={`hero-mockup-item ${heroAnimated ? 'active' : ''}`}>
              <PhoneMockup screenId="Device-2" />
            </div>
            <div className={`hero-mockup-item ${heroAnimated ? 'active' : ''}`}>
              <PhoneMockup screenId="Device-3" />
            </div>
            <div className={`hero-mockup-item ${heroAnimated ? 'active' : ''}`}>
              <PhoneMockup screenId="Device-4" />
            </div>
            <div className={`hero-mockup-item ${heroAnimated ? 'active' : ''}`}>
              <PhoneMockup screenId="Device-5" />
            </div>
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
              <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
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
              <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
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
              <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
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

      {/* Testimonials Masonry Wall */}
      <section className="testimonials">
        <div className="container">
          <div className="text-center">
            <div className="section-meta">Testimonials</div>
            <h2 className="section-title">What our users say</h2>
            <p className="section-desc">Join patients, caregivers, and medical practitioners using NFM Medcare daily.</p>
          </div>

          <div className="testimonials-masonry">
            {testimonials.map((test, index) => (
              <div className="testimonial-card" key={index}>
                <div className="testimonial-user">
                  <img src={test.img} alt={test.name} className="testimonial-avatar" />
                  <div>
                    <h4>{test.name}</h4>
                    <p>{test.role} {test.handle}</p>
                  </div>
                </div>
                <p className="testimonial-text">"{test.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing">
        <div className="container">
          <div className="text-center">
            <div className="section-meta">Pricing</div>
            <h2 className="section-title">Simple pricing</h2>
            <p className="section-desc">Choose a plan that fits your personal or family healthcare requirements.</p>
          </div>

          <div className="pricing-toggle-container">
            <span className="pricing-toggle-label" style={{ opacity: yearlyPricing ? 0.5 : 1 }}>Monthly</span>
            <div 
              className={`pricing-toggle-switch ${yearlyPricing ? 'yearly' : ''}`}
              onClick={() => setYearlyPricing(!yearlyPricing)}
            >
              <div className="pricing-toggle-dot"></div>
            </div>
            <span className="pricing-toggle-label" style={{ opacity: yearlyPricing ? 1 : 0.5 }}>Yearly</span>
            <span className="pricing-discount-badge">Save 20%</span>
          </div>

          <div className="pricing-grid">
            {/* Basic Plan */}
            <div className="pricing-card">
              <div className="pricing-card-header">
                <h3>Basic</h3>
                <p>Perfect for individual vital signs logs and doctor appointment tracking.</p>
                <div className="pricing-price">
                  {yearlyPricing ? "$0" : "$0"}
                  <span>/ month</span>
                </div>
              </div>
              <ul className="pricing-features-list">
                <li className="pricing-feature-item"><Check size={16} /> Track up to 3 medical vitals logs</li>
                <li className="pricing-feature-item"><Check size={16} /> 10 prescription scans/month</li>
                <li className="pricing-feature-item"><Check size={16} /> Book clinic appointments locally</li>
                <li className="pricing-feature-item"><Check size={16} /> Offline Emergency Card access</li>
              </ul>
              <button className="btn btn-secondary" onClick={() => setIsModalOpen(true)}>Get Started</button>
            </div>

            {/* Premium Plan */}
            <div className="pricing-card popular">
              <span className="pricing-popular-badge">Popular</span>
              <div className="pricing-card-header">
                <h3>Premium</h3>
                <p>Ideal for families requiring absolute, secure records sync and 24/7 care support.</p>
                <div className="pricing-price">
                  {yearlyPricing ? "$4.00" : "$5"}
                  <span>/ month</span>
                </div>
              </div>
              <ul className="pricing-features-list">
                <li className="pricing-feature-item"><Check size={16} /> Free express shipping on all orders</li>
                <li className="pricing-feature-item"><Check size={16} /> Unlimited monthly pharmacy orders</li>
                <li className="pricing-feature-item"><Check size={16} /> 10% instant discount on featured items</li>
                <li className="pricing-feature-item"><Check size={16} /> Family accounts link (up to 5 profiles)</li>
                <li className="pricing-feature-item"><Check size={16} /> 24/7 dedicated pharmacy support access</li>
              </ul>
              <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>Get Started Premium</button>
            </div>
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
        {/* Double Marquee Reviews */}
        <div className="marquee-container">
          <div className="marquee-row left-to-right">
            {[...marqueeReviews, ...marqueeReviews, ...marqueeReviews].map((rev, index) => (
              <div className="marquee-card" key={`lr-${index}`}>
                <img src={rev.img} alt={rev.handle} className="marquee-avatar" />
                <div className="marquee-meta">
                  <h4>{rev.handle}</h4>
                  <p className="marquee-text">"{rev.text}"</p>
                </div>
              </div>
            ))}
          </div>
          <div className="marquee-row right-to-left">
            {[...marqueeReviews, ...marqueeReviews, ...marqueeReviews].map((rev, index) => (
              <div className="marquee-card" key={`rl-${index}`}>
                <img src={rev.img} alt={rev.handle} className="marquee-avatar" />
                <div className="marquee-meta">
                  <h4>{rev.handle}</h4>
                  <p className="marquee-text">"{rev.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container">
          <div className="cta-box">
            <h2>Take control of your healthcare orders today.</h2>
            <p>Start shopping medicines, skincare, and bodycare on-the-go with NFM Medcare.</p>
            <button className="btn btn-primary btn-large" onClick={() => setIsModalOpen(true)}>
              Install NFM Medcare
            </button>
          </div>
        </div>
      </section>

      {/* --- App Installer Overlay Modal --- */}
      {isModalOpen && (
        <div className="installer-modal-overlay">
          <div className="installer-modal">
            <button className="installer-modal-close" onClick={() => setIsModalOpen(false)} aria-label="Close modal">
              <X size={24} />
            </button>
            <h3>Install NFM Medcare</h3>
            <p>Choose your preferred platform below to install the application instantly.</p>

            <div className="installer-options">
              {/* PWA Direct Link Installer option */}
              {isPWAInstallable ? (
                <button className="installer-btn" style={{ borderColor: 'hsl(var(--primary-color))', background: 'rgba(46, 125, 50, 0.04)' }} onClick={handleInstallPWA}>
                  <div className="installer-btn-left">
                    <Sparkles size={20} />
                    <div style={{ textAlign: 'left' }}>
                      <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Install directly from browser</div>
                      <div style={{ fontSize: '10px', color: '#a1a1aa' }}>Progressive Web App (Instant Link)</div>
                    </div>
                  </div>
                  <Plus size={18} />
                </button>
              ) : (
                <button className="installer-btn" onClick={handleInstallPWA}>
                  <div className="installer-btn-left">
                    <Smartphone size={20} />
                    <div style={{ textAlign: 'left' }}>
                      <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Install Web App (PWA)</div>
                      <div style={{ fontSize: '10px', color: '#a1a1aa' }}>Add to Homescreen / Desktop</div>
                    </div>
                  </div>
                  <Plus size={18} />
                </button>
              )}

              <div style={{ margin: '1rem 0 0.5rem 0', display: 'flex', alignItems: 'center', gap: '10px', color: '#a1a1aa', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(0,0,0,0.08)' }}></div>
                <span>Or Download Package</span>
                <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(0,0,0,0.08)' }}></div>
              </div>

              {/* Windows Exe Download */}
              <button className="installer-btn" onClick={() => handleDownload('windows')}>
                <div className="installer-btn-left">
                  <Monitor size={20} />
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Windows App (.exe)</div>
                    <div style={{ fontSize: '10px', color: '#a1a1aa' }}>NFM-Medcare-Setup.exe</div>
                  </div>
                </div>
                <Download size={18} />
              </button>

              {/* macOS DMG Download */}
              <button className="installer-btn" onClick={() => handleDownload('macos')}>
                <div className="installer-btn-left">
                  <Laptop size={20} />
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '14px', fontWeight: 'bold' }}>macOS Disk Image (.dmg)</div>
                    <div style={{ fontSize: '10px', color: '#a1a1aa' }}>NFM-Medcare.dmg</div>
                  </div>
                </div>
                <Download size={18} />
              </button>

              {/* Android Apk Download */}
              <button className="installer-btn" onClick={() => handleDownload('android')}>
                <div className="installer-btn-left">
                  <Smartphone size={20} />
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Android Package (.apk)</div>
                    <div style={{ fontSize: '10px', color: '#a1a1aa' }}>NFM-Medcare.apk</div>
                  </div>
                </div>
                <Download size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
