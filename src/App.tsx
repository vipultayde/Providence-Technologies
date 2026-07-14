import { useState, useEffect } from 'react';
import { 
  Globe, 
  Smartphone, 
  Briefcase, 
  User, 
  Rocket, 
  Check, 
  Phone, 
  Mail, 
  Menu, 
  X, 
  ArrowRight, 
  MessageSquare,
  ShieldCheck,
  Zap,
  Clock,
  Sparkles,
  Database
} from 'lucide-react';
import FAQAccordion from './components/FAQAccordion';
import PricingCalculator from './components/PricingCalculator';
import ContactForm from './components/ContactForm';
import logo from './assets/logo.png';
import './App.css';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Briefcase size={24} />,
      title: "Business Website",
      description: "Designed for local businesses (Salons, Gyms, Clinics, Pharmacies, Restaurants, CAs, and Tuition Classes) to build local trust and attract customers. (₹3,999 – ₹8,999)"
    },
    {
      icon: <User size={24} />,
      title: "Portfolio Website",
      description: "Polished personal branding pages for Doctors, Freelancers, Architects, Photographers, and Students to showcase experience and work. (₹2,999 – ₹6,999)"
    },
    {
      icon: <Rocket size={24} />,
      title: "Landing Page",
      description: "Single-page, high-converting layouts specifically structured for marketing campaigns, search advertisements, and social promotions. (₹2,999 – ₹4,999)"
    },
    {
      icon: <Clock size={24} />,
      title: "Appointment Booking Website",
      description: "Perfect for doctors, salons, and consultants. Integrated with automated booking systems, WhatsApp alerts, and structured contact forms. (₹7,999 – ₹14,999)"
    },
    {
      icon: <Database size={24} />,
      title: "Full Stack Web Application",
      description: "Advanced custom web software featuring user registration, member dashboards, administrative panels, and secure database integrations. (₹15,000 – ₹50,000+)"
    }
  ];

  const packages = [
    {
      name: "Starter Website",
      price: "₹3,999",
      delivery: "3 – 5 Days",
      popular: false,
      desc: "Perfect for single-page business presence or campaigns.",
      features: [
        "1 Page Structure",
        "Mobile Responsive Design",
        "WhatsApp Direct Chat Button",
        "Contact Form Setup",
        "Basic SEO Setup",
        "Free SSL Certificate",
        "1 Free Revision",
        "1 Month Support"
      ]
    },
    {
      name: "Professional Website",
      price: "₹7,999",
      delivery: "5 – 10 Days",
      popular: true,
      desc: "Ideal for growing businesses that need a professional multi-page online presence.",
      features: [
        "5 Pages Custom Layout",
        "Mobile Responsive Design",
        "Image & Video Gallery",
        "Google Maps Integration",
        "WhatsApp Integration",
        "Contact Form Integration",
        "Domain Registration assistance",
        "Basic SEO Optimization",
        "3 Free Revisions",
        "3 Months Support"
      ]
    },
    {
      name: "Premium Website",
      price: "₹14,999",
      delivery: "7 – 14 Days",
      popular: false,
      desc: "Everything in Professional with appointment booking and advanced search engine support.",
      features: [
        "Everything in Professional",
        "Appointment Booking System",
        "SEO Setup & Schema Audit",
        "Google Analytics Setup",
        "Speed Optimization (CDN)",
        "Google Search Console submission",
        "Advanced Security Setup",
        "6 Months Priority Support"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Sparkles size={24} style={{ color: 'var(--accent-cyan)' }} />,
      title: "Professional Design",
      desc: "Modern, gorgeous layouts custom-built to impress your clients and represent your brand."
    },
    {
      icon: <Smartphone size={24} style={{ color: 'var(--accent-blue)' }} />,
      title: "Mobile First",
      desc: "Pixel-perfect interfaces optimized across phones, tablets, laptops, and wide monitors."
    },
    {
      icon: <Clock size={24} style={{ color: 'var(--accent-purple)' }} />,
      title: "Fast Delivery",
      desc: "Efficient development processes ensuring quick turnaround times without cutting corners."
    },
    {
      icon: <Zap size={24} style={{ color: 'var(--accent-cyan)' }} />,
      title: "Affordable Pricing",
      desc: "Extremely cost-effective website packages with full cost transparency and no hidden fees."
    },
    {
      icon: <ShieldCheck size={24} style={{ color: 'var(--accent-green)' }} />,
      title: "Ongoing Support",
      desc: "Dedicated post-launch support to resolve inquiries, handle updates, and maintain performance."
    }
  ];

  const processSteps = [
    {
      stepNum: "01",
      title: "Requirement Discussion",
      desc: "Understanding your business goals, target audience, brand aesthetic, and specific features."
    },
    {
      stepNum: "02",
      title: "Design & Planning",
      desc: "Drafting layout structures, wireframes, and design guidelines tailored to your logo and colors."
    },
    {
      stepNum: "03",
      title: "Development",
      desc: "Building a fully responsive, clean-coded, and highly performant website on Vite/React or WordPress."
    },
    {
      stepNum: "04",
      title: "Review & Revisions",
      desc: "Presenting the live staging build for your review, and fine-tuning details according to your revisions."
    },
    {
      stepNum: "05",
      title: "Launch & Support",
      desc: "Deploying files, mapping custom domains, activating secure SSL, and providing continuous monthly support."
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', position: 'relative' }}>
      
      {/* Background ambient glows */}
      <div className="glow-overlay" style={{ top: '10%', left: '5%' }}></div>
      <div className="glow-overlay" style={{ top: '40%', right: '5%', background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, rgba(79, 70, 229, 0) 70%)' }}></div>
      <div className="glow-overlay" style={{ bottom: '15%', left: '10%', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, rgba(79, 70, 229, 0) 70%)' }}></div>

      {/* Header / Navbar */}
      <header 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
          padding: scrolled ? '15px 0' : '24px 0',
          background: scrolled ? 'rgba(11, 15, 25, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid transparent',
          transition: 'all 0.3s ease'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.4rem', fontWeight: 800, fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
            <img 
              src={logo} 
              alt="Providence Technologies Logo" 
              style={{ 
                height: '60px', 
                width: 'auto', 
                objectFit: 'contain',
                transition: 'var(--transition-fast)'
              }} 
            />
            <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
              <span className="text-gradient">Providence</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.25em', color: 'var(--text-secondary)' }}>TECHNOLOGIES</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
            <a href="#services" style={{ fontWeight: 500, fontSize: '0.95rem' }} className="nav-link-hover">Services</a>
            <a href="#pricing" style={{ fontWeight: 500, fontSize: '0.95rem' }} className="nav-link-hover">Pricing</a>
            <a href="#why-choose-us" style={{ fontWeight: 500, fontSize: '0.95rem' }} className="nav-link-hover">Why Choose Us</a>
            <a href="#process" style={{ fontWeight: 500, fontSize: '0.95rem' }} className="nav-link-hover">Process</a>
            <a href="#faq" style={{ fontWeight: 500, fontSize: '0.95rem' }} className="nav-link-hover">FAQ</a>
            <a href="#contact" style={{ fontWeight: 500, fontSize: '0.95rem' }} className="nav-link-hover">Contact</a>
          </nav>

          {/* Contact Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="header-cta">
            <a href="https://wa.me/917588877281" target="_blank" rel="noreferrer" className="btn btn-secondary d-none-mobile" style={{ padding: '8px 20px', fontSize: '0.875rem' }}>
              <Phone size={14} style={{ color: 'var(--accent-cyan)' }} /> +91 75888 77281
            </a>
            <a href="#contact" className="btn btn-primary d-none-mobile" style={{ padding: '8px 20px', fontSize: '0.875rem' }}>
              Get Free Quote
            </a>
            
            {/* Hamburger Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ display: 'none', cursor: 'pointer', color: 'var(--text-primary)' }}
              className="hamburger"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '70px',
          left: 0,
          width: '100%',
          height: 'calc(100vh - 70px)',
          background: 'rgba(11, 15, 25, 0.98)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          zIndex: 999,
          padding: '40px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.25rem', fontWeight: 600 }}>Services</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.25rem', fontWeight: 600 }}>Pricing</a>
          <a href="#why-choose-us" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.25rem', fontWeight: 600 }}>Why Choose Us</a>
          <a href="#process" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.25rem', fontWeight: 600 }}>Process</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.25rem', fontWeight: 600 }}>FAQ</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.25rem', fontWeight: 600 }}>Contact</a>
          
          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <a href="https://wa.me/917588877281" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '12px' }}>
              <Phone size={16} /> WhatsApp Support
            </a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="btn btn-primary" style={{ padding: '12px' }}>
              Get Free Quote
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="section-padding" style={{ paddingTop: '180px', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px', alignItems: 'center' }} className="hero-grid">
            
            {/* Left Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', zIndex: 10 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <span className="badge" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Sparkles size={12} /> Tech-Driven Solutions
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>· Standard Delivery 3-7 Days</span>
              </div>

              <h1 style={{ fontSize: '3.75rem', fontWeight: 800, lineHeight: 1.15, fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }} className="hero-title">
                We Build Websites That <br />
                <span className="text-gradient">Grow Your Business</span>
              </h1>

              <p style={{ fontSize: '1.15rem', lineHeight: '1.7', color: 'var(--text-secondary)', maxWidth: '580px' }}>
                We help local businesses, clinics, startups, and freelancers establish a powerful digital presence through modern web design, search optimization, and lead generation solutions.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '12px' }}>
                <a href="#contact" className="btn btn-primary" style={{ padding: '14px 32px' }}>
                  Start Your Project <ArrowRight size={16} />
                </a>
                <a href="#pricing" className="btn btn-secondary" style={{ padding: '14px 32px' }}>
                  View Pricing Plans
                </a>
              </div>

              {/* Stats Row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginTop: '40px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '32px' }} className="hero-stats">
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>100%</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '4px' }}>Client Satisfaction</div>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-blue)' }}>Fast</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '4px' }}>3-7 Days Turnaround</div>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-purple)' }}>Premium</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '4px' }}>Custom UI & Code</div>
                </div>
              </div>
            </div>

            {/* Right Column / Interactive Graphic */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', zIndex: 5 }} className="hero-graphic-wrap">
              <div 
                className="glass-panel animate-float" 
                style={{
                  width: '100%',
                  maxWidth: '420px',
                  aspectRatio: '1',
                  borderRadius: '32px',
                  padding: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: 'linear-gradient(135deg, rgba(19, 27, 46, 0.7) 0%, rgba(30, 41, 66, 0.4) 100%)',
                  boxShadow: 'var(--shadow-lg), 0 0 40px rgba(0, 242, 254, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 242, 254, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)' }}>
                    <Globe size={24} />
                  </div>
                  <span className="badge" style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-green)', borderColor: 'rgba(16, 185, 129, 0.2)' }}>Online Status</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>Interactive Development</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, fontFamily: 'var(--font-display)', lineHeight: '1.2' }}>
                    Providence <br />
                    <span className="text-gradient">Technologies</span>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }}></div>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Responsive Code Loaded</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding" style={{ background: 'rgba(11, 15, 25, 0.5)', position: 'relative' }}>
        <div className="container">
          
          <div className="section-header">
            <div className="subtitle">Our Services</div>
            <h2 className="title">What We Do Best</h2>
            <p className="desc">
              From landing pages to complex e-commerce integrations, we design and code tailored solutions that scale your business.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
            {services.map((service, index) => (
              <div 
                key={index} 
                className="glass-panel" 
                style={{
                  padding: '30px',
                  borderRadius: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px'
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'rgba(0, 242, 254, 0.05)',
                  border: '1px solid rgba(0, 242, 254, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-cyan)',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  {service.icon}
                </div>
                
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '8px', fontFamily: 'var(--font-display)' }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="section-padding">
        <div className="container">
          
          <div className="section-header">
            <div className="subtitle">Why Choose Us</div>
            <h2 className="title">Engineered For Quality</h2>
            <p className="desc">
              We stand by transparent operations, rapid project handovers, and beautiful, device-responsive web solutions.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }} className="why-grid">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="glass-panel"
                style={{
                  padding: '30px 24px',
                  borderRadius: '16px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '16px'
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {benefit.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '10px', fontFamily: 'var(--font-display)' }}>
                    {benefit.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-padding" style={{ background: 'rgba(11, 15, 25, 0.5)' }}>
        <div className="container">
          
          <div className="section-header">
            <div className="subtitle">Transparent Plans</div>
            <h2 className="title">Pricing Packages</h2>
            <p className="desc">
              Choose a standard website package or customize elements to get a custom quote.
            </p>
          </div>

          {/* Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '28px', marginBottom: '60px' }} className="pricing-grid">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`glass-panel ${pkg.popular ? 'popular-card' : ''}`}
                style={{
                  padding: '40px 30px',
                  borderRadius: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  border: pkg.popular ? '2px solid var(--accent-cyan)' : '1px solid rgba(255, 255, 255, 0.05)',
                  boxShadow: pkg.popular ? '0 10px 30px rgba(0, 242, 254, 0.15)' : 'var(--shadow-md)'
                }}
              >
                {pkg.popular && (
                  <span className="badge" style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'var(--grad-primary)',
                    color: '#000',
                    border: 'none',
                    fontSize: '0.65rem'
                  }}>
                    Most Popular
                  </span>
                )}
                
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '8px', fontFamily: 'var(--font-display)' }}>{pkg.name}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '24px', minHeight: '40px' }}>{pkg.desc}</p>
                  
                  <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '4px' }}>
                    <span style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
                      {pkg.price}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.825rem', color: 'var(--accent-cyan)', fontWeight: '600', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={12} /> Delivery: {pkg.delivery}
                  </div>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '24px', marginBottom: '32px' }}>
                    {pkg.features.map((feat, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                        <Check size={14} style={{ color: 'var(--accent-cyan)', marginTop: '3px', flexShrink: 0 }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href={`https://wa.me/917588877281?text=${encodeURIComponent(`Hi Providence Technologies! I am interested in your "${pkg.name}" plan (${pkg.price}). I'd like to discuss the requirements.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`btn ${pkg.popular ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ width: '100%', padding: '12px' }}
                >
                  Order Package
                </a>
              </div>
            ))}
          </div>

          {/* Pricing Calculator */}
          <PricingCalculator />

          {/* Addon table fallback for transparency */}
          <div className="glass-panel" style={{ marginTop: '40px', padding: '30px', borderRadius: '16px' }}>
            <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '16px', fontFamily: 'var(--font-display)' }}>Quick Add-On Price List</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
              <div style={{ padding: '12px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Google Business Profile Setup</span>
                <span style={{ fontWeight: '600' }}>₹1,500 – ₹3,000</span>
              </div>
              <div style={{ padding: '12px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Website Maintenance</span>
                <span style={{ fontWeight: '600' }}>₹500 – ₹1,500/mo</span>
              </div>
              <div style={{ padding: '12px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Domain Setup & Registration</span>
                <span style={{ fontWeight: '600' }}>Actual + ₹300 (₹1,200 avg)</span>
              </div>
              <div style={{ padding: '12px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Hosting Management</span>
                <span style={{ fontWeight: '600' }}>₹500 – ₹1,000/mo</span>
              </div>
              <div style={{ padding: '12px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>SEO Basics (Console, sitemap)</span>
                <span style={{ fontWeight: '600' }}>₹2,000 – ₹5,000</span>
              </div>
              <div style={{ padding: '12px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>WhatsApp Integration</span>
                <span style={{ fontWeight: '600' }}>₹500 – ₹1,000</span>
              </div>
              <div style={{ padding: '12px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Additional Custom Page</span>
                <span style={{ fontWeight: '600' }}>₹500 / page</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="section-padding" style={{ position: 'relative' }}>
        <div className="container">
          
          <div className="section-header">
            <div className="subtitle">Workflow Timeline</div>
            <h2 className="title">Our Process</h2>
            <p className="desc">
              How we take your ideas from raw concepts to a secure, live production site.
            </p>
          </div>

          <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
            {/* Vertical timeline line */}
            <div 
              style={{
                position: 'absolute',
                left: '20px',
                top: '20px',
                bottom: '20px',
                width: '2px',
                background: 'linear-gradient(to bottom, var(--accent-cyan), var(--accent-purple), rgba(255, 255, 255, 0.05))',
                zIndex: 0
              }}
              className="timeline-line"
            ></div>

            {/* Steps list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  style={{ display: 'flex', gap: '30px', position: 'relative', zIndex: 1 }}
                >
                  {/* Step bubble */}
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'var(--bg-secondary)',
                    border: '2px solid var(--accent-cyan)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '700',
                    fontFamily: 'var(--font-display)',
                    color: 'var(--accent-cyan)',
                    boxShadow: 'var(--shadow-glow)',
                    flexShrink: 0
                  }}
                  className="step-bubble"
                  >
                    {step.stepNum}
                  </div>

                  {/* Step Content */}
                  <div className="glass-panel" style={{ padding: '24px 30px', borderRadius: '16px', flexGrow: 1 }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '8px', fontFamily: 'var(--font-display)' }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)' }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding" style={{ background: 'rgba(11, 15, 25, 0.5)' }}>
        <div className="container">
          
          <div className="section-header">
            <div className="subtitle">Got Questions?</div>
            <h2 className="title">Frequently Asked Questions</h2>
            <p className="desc">
              Find answers to common questions about our delivery times, services, hosting setups, and customization policies.
            </p>
          </div>

          <FAQAccordion />

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding" style={{ position: 'relative' }}>
        <div className="container">
          
          <div className="section-header">
            <div className="subtitle">Let's Connect</div>
            <h2 className="title">Get In Touch</h2>
            <p className="desc">
              Ready to establish a powerful digital presence? Drop us a line or connect instantly on WhatsApp.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '50px', alignItems: 'start' }} className="contact-grid">
            {/* Info cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              <div className="glass-panel" style={{ padding: '30px', borderRadius: '16px' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: '700', fontFamily: 'var(--font-display)', marginBottom: '16px' }}>
                  Providence Technologies
                </h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '0.95rem' }}>
                  Turning Ideas Into Digital Reality. Professional websites designed to attract customers, optimize performance, and build trust.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <a href="mailto:providencetechnologies.in@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)', fontSize: '0.95rem' }} className="nav-link-hover">
                    <Mail size={18} style={{ color: 'var(--accent-cyan)' }} />
                    <span>providencetechnologies.in@gmail.com</span>
                  </a>
                  <a href="https://wa.me/917588877281" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)', fontSize: '0.95rem' }} className="nav-link-hover">
                    <Phone size={18} style={{ color: 'var(--accent-green)' }} />
                    <span>WhatsApp Support Available (+91 75888 77281)</span>
                  </a>
                </div>
              </div>

              {/* Instant WhatsApp Card */}
              <div className="glass-panel" style={{
                padding: '30px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(19, 27, 46, 0.7) 100%)',
                border: '1px solid rgba(16, 185, 129, 0.2)'
              }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <MessageSquare size={20} style={{ color: 'var(--accent-green)' }} /> Quick WhatsApp Support
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                  Have a quick question or need a quote urgently? Message our support desk directly on WhatsApp for an immediate response.
                </p>
                <a 
                  href="https://wa.me/917588877281?text=Hi%20Providence%20Technologies!%20I'd%20like%20to%20discuss%20a%20new%20website%20project."
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                  style={{ background: 'var(--accent-green)', color: '#fff', width: '100%', borderRadius: '12px' }}
                >
                  Message +91 75888 77281
                </a>
              </div>

            </div>

            {/* Inquiry Form */}
            <ContactForm />
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#070a12', borderTop: '1px solid rgba(255, 255, 255, 0.05)', padding: '50px 0 30px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', gap: '40px', marginBottom: '40px' }} className="footer-grid">
            
            {/* Branding Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
                <img 
                  src={logo} 
                  alt="Providence Technologies Logo" 
                  style={{ 
                    height: '60px', 
                    width: 'auto', 
                    objectFit: 'contain'
                  }} 
                />
              </a>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.6', maxWidth: '300px' }}>
                Turning Ideas Into Digital Reality. Delivering high-converting, mobile-friendly websites designed to grow your business presence.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Navigation</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                <li><a href="#services" className="nav-link-hover">Services</a></li>
                <li><a href="#pricing" className="nav-link-hover">Pricing Plans</a></li>
                <li><a href="#why-choose-us" className="nav-link-hover">Why Choose Us</a></li>
                <li><a href="#process" className="nav-link-hover">Our Process</a></li>
              </ul>
            </div>

            {/* Support Info */}
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Support & Connect</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                <li><a href="mailto:providencetechnologies.in@gmail.com" className="nav-link-hover">providencetechnologies.in@gmail.com</a></li>
                <li><a href="https://wa.me/917588877281" className="nav-link-hover">WhatsApp Support Available</a></li>
                <li style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '10px' }}>
                  Nagpur, Maharashtra
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Row */}
          <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', fontSize: '0.8rem', color: 'var(--text-muted)' }} className="footer-bottom">
            <span>&copy; {new Date().getFullYear()} Providence Technologies. All rights reserved.</span>
            <span>Designed for Excellence.</span>
          </div>
        </div>
      </footer>

      {/* Inline styles for responsiveness and header/menu tweaks */}
      <style>{`
        /* Responsive navigation and hamburger menu styles */
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .d-none-mobile {
            display: none !important;
          }
          .hamburger {
            display: block !important;
          }
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .hero-title {
            font-size: 2.8rem !important;
          }
          .hero-graphic-wrap {
            margin-top: 20px;
          }
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
        
        .nav-link-hover:hover {
          color: var(--accent-cyan) !important;
          transform: translateX(3px);
        }
        
        .popular-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 24px;
          padding: 2px;
          background: linear-gradient(135deg, #00f2fe, #a855f7);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
      `}</style>

    </div>
  );
}

export default App;
