import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQAccordion: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: "How long does it take to build a website?",
      answer: "A basic website typically takes 3–7 days, while larger, custom projects may take 2–4 weeks depending on complexity, features, and the number of pages."
    },
    {
      question: "Do you provide domain and hosting?",
      answer: "Yes, we assist with domain registration and complete hosting setup. We configure SSL certificates, CDN speed optimizations, and DNS records so your site is ready to launch securely."
    },
    {
      question: "Will my website work on mobile devices?",
      answer: "Absolutely. Every website we build is fully responsive and optimized for mobile phones, tablets, and desktops using modern design standards."
    },
    {
      question: "Can I update my website myself?",
      answer: "Yes. If required, we can integrate a Content Management System (CMS) or build a dynamic admin portal that allows you to easily edit text, images, and content without writing code."
    },
    {
      question: "Do you provide SEO?",
      answer: "Basic on-page SEO is included in all our plans to ensure search engines can find and index your site. Advanced SEO optimization services (including keyword research, competitors audit, and schema markup) are available as an add-on."
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-list" style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '800px', margin: '0 auto' }}>
      {faqs.map((faq, index) => {
        const isOpen = activeIndex === index;
        return (
          <div 
            key={index} 
            className="faq-item glass-panel" 
            style={{ 
              borderRadius: '12px', 
              overflow: 'hidden', 
              transition: 'all 0.3s ease',
              border: isOpen ? '1px solid rgba(0, 242, 254, 0.3)' : '1px solid rgba(255, 255, 255, 0.05)',
              boxShadow: isOpen ? '0 0 15px rgba(0, 242, 254, 0.1)' : 'var(--shadow-sm)'
            }}
          >
            <button
              onClick={() => toggleAccordion(index)}
              style={{
                width: '100%',
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                textAlign: 'left',
                fontWeight: '600',
                fontSize: '1.1rem',
                fontFamily: 'var(--font-display)',
                cursor: 'pointer',
                background: isOpen ? 'rgba(0, 242, 254, 0.02)' : 'transparent',
                border: 'none',
                outline: 'none',
                color: isOpen ? 'var(--accent-cyan)' : 'var(--text-primary)',
                transition: 'all 0.2s ease'
              }}
              aria-expanded={isOpen}
            >
              <span>{faq.question}</span>
              <ChevronDown 
                size={20} 
                style={{ 
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
                  transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  color: isOpen ? 'var(--accent-cyan)' : 'var(--text-muted)'
                }} 
              />
            </button>
            <div 
              style={{
                maxHeight: isOpen ? '300px' : '0',
                opacity: isOpen ? 1 : 0,
                overflow: 'hidden',
                transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease',
                padding: isOpen ? '0 24px 20px 24px' : '0 24px'
              }}
            >
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
