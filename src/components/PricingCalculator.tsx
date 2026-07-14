import React, { useState } from 'react';
import { Calculator, Plus, Minus } from 'lucide-react';

interface BasePlan {
  id: string;
  name: string;
  price: number;
  description: string;
}

interface AddOn {
  id: string;
  name: string;
  price: number;
  isMonthly?: boolean;
}

const PricingCalculator: React.FC = () => {
  const basePlans: BasePlan[] = [
    { id: 'starter', name: 'Starter Website Package', price: 4999, description: '1-3 Pages, Mobile Responsive, WhatsApp Button, Contact Form, Basic SEO' },
    { id: 'business', name: 'Business Website Package', price: 9999, description: 'Up to 5 Pages, Premium Design, Gallery, Google Maps, WhatsApp, 3 Revisions' },
    { id: 'premium', name: 'Premium Website Package', price: 19999, description: 'Unlimited Pages, Booking, Blog, Advanced SEO, Speed Opt, Business Email' },
    { id: 'ai_business', name: 'AI Business Website Package', price: 29999, description: 'Everything in Premium + AI Chatbot, Lead Gen, Custom Dashboard, Automation' }
  ];

  const addOns: AddOn[] = [
    { id: 'google_profile', name: 'Google Business Profile Setup & Optimization', price: 1500 },
    { id: 'maintenance', name: 'Website Maintenance (Content, photos, bug fixes)', price: 500, isMonthly: true },
    { id: 'domain_setup', name: 'Domain Setup (Assistance + Setup Fee)', price: 1200 },
    { id: 'hosting_management', name: 'Monthly Hosting Management & Updates', price: 500, isMonthly: true },
    { id: 'seo_basics', name: 'SEO Basics (Console, Sitemap, Meta tags, Speed)', price: 2000 },
    { id: 'whatsapp_integration', name: 'WhatsApp Click-to-Chat Button Setup', price: 500 }
  ];

  const [selectedPlanId, setSelectedPlanId] = useState<string>('business');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [extraPages, setExtraPages] = useState<number>(0);

  const selectedPlan = basePlans.find(plan => plan.id === selectedPlanId) || basePlans[1];

  const handlePlanChange = (planId: string) => {
    setSelectedPlanId(planId);
  };

  const handleAddOnToggle = (addOnId: string) => {
    if (selectedAddOns.includes(addOnId)) {
      setSelectedAddOns(selectedAddOns.filter(id => id !== addOnId));
    } else {
      setSelectedAddOns([...selectedAddOns, addOnId]);
    }
  };

  const incrementPages = () => setExtraPages(prev => Math.min(prev + 1, 50));
  const decrementPages = () => setExtraPages(prev => Math.max(prev - 1, 0));

  // Calculations
  const basePrice = selectedPlan.price;
  const extraPagesPrice = extraPages * 500;
  
  const selectedAddOnItems = addOns.filter(item => selectedAddOns.includes(item.id));
  const oneTimeAddOnsPrice = selectedAddOnItems
    .filter(item => !item.isMonthly)
    .reduce((sum, item) => sum + item.price, 0);

  const monthlyMaintenancePrice = selectedAddOnItems
    .filter(item => item.isMonthly)
    .reduce((sum, item) => sum + item.price, 0);

  const totalOneTime = basePrice + extraPagesPrice + oneTimeAddOnsPrice;

  return (
    <div className="glass-panel pricing-calculator" style={{ padding: '40px', borderRadius: '24px', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px', justifyContent: 'center' }}>
        <Calculator size={28} className="text-gradient" style={{ color: 'var(--accent-cyan)' }} />
        <h3 style={{ fontSize: '1.8rem', fontWeight: '700', fontFamily: 'var(--font-display)' }}>Interactive Project Cost Estimator</h3>
      </div>
      
      <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '32px' }}>
        Select your base package and customize it with add-ons to build your perfect custom quote in real-time.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '40px' }} className="calc-grid">
        {/* Left Form Side */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {/* Plan selection */}
          <div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '16px', color: 'var(--text-primary)', fontFamily: 'var(--font-display)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="badge" style={{ padding: '4px 8px', fontSize: '0.7rem' }}>1</span> Choose Base Website Plan
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {basePlans.map((plan) => (
                <label 
                  key={plan.id} 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 20px',
                    borderRadius: '12px',
                    border: selectedPlanId === plan.id ? '2px solid var(--accent-cyan)' : '1px solid rgba(255, 255, 255, 0.05)',
                    background: selectedPlanId === plan.id ? 'rgba(0, 242, 254, 0.05)' : 'rgba(255, 255, 255, 0.01)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <input 
                      type="radio" 
                      name="base-plan" 
                      checked={selectedPlanId === plan.id}
                      onChange={() => handlePlanChange(plan.id)}
                      style={{
                        accentColor: 'var(--accent-cyan)',
                        width: '18px',
                        height: '18px',
                        cursor: 'pointer'
                      }}
                    />
                    <div>
                      <div style={{ fontWeight: '600', fontSize: '1rem', color: selectedPlanId === plan.id ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                        {plan.name}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        {plan.description}
                      </div>
                    </div>
                  </div>
                  <div style={{ fontWeight: '700', fontSize: '1.05rem', color: selectedPlanId === plan.id ? 'var(--accent-cyan)' : 'var(--text-primary)', whiteSpace: 'nowrap' }}>
                    {plan.id === 'custom' || plan.id === 'ecommerce' ? 'Starting ' : ''}₹{plan.price.toLocaleString('en-IN')}
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Extra pages */}
          <div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '16px', color: 'var(--text-primary)', fontFamily: 'var(--font-display)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="badge" style={{ padding: '4px 8px', fontSize: '0.7rem' }}>2</span> Add Additional Pages
            </h4>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <div>
                <div style={{ fontWeight: '600' }}>Extra Pages (₹500 / page)</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>For content, portfolios, or services</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <button 
                  onClick={decrementPages}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: extraPages > 0 ? 'var(--text-primary)' : 'var(--text-muted)',
                    transition: 'var(--transition-fast)'
                  }}
                  disabled={extraPages === 0}
                >
                  <Minus size={16} />
                </button>
                <span style={{ fontWeight: '700', fontSize: '1.2rem', minWidth: '24px', textAlign: 'center' }}>{extraPages}</span>
                <button 
                  onClick={incrementPages}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'var(--transition-fast)'
                  }}
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Addons Selection */}
          <div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '16px', color: 'var(--text-primary)', fontFamily: 'var(--font-display)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="badge" style={{ padding: '4px 8px', fontSize: '0.7rem' }}>3</span> Select Add-On Services
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
              {addOns.map((addon) => {
                const isChecked = selectedAddOns.includes(addon.id);
                return (
                  <label 
                    key={addon.id} 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 18px',
                      borderRadius: '12px',
                      border: isChecked ? '1px solid rgba(0, 242, 254, 0.3)' : '1px solid rgba(255, 255, 255, 0.05)',
                      background: isChecked ? 'rgba(0, 242, 254, 0.02)' : 'rgba(255, 255, 255, 0.01)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <input 
                        type="checkbox" 
                        checked={isChecked}
                        onChange={() => handleAddOnToggle(addon.id)}
                        style={{
                          accentColor: 'var(--accent-cyan)',
                          width: '18px',
                          height: '18px',
                          cursor: 'pointer'
                        }}
                      />
                      <span style={{ fontSize: '0.9rem', fontWeight: isChecked ? '500' : '400', color: isChecked ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                        {addon.name}
                      </span>
                    </div>
                    <span style={{ fontSize: '0.95rem', fontWeight: '600', color: isChecked ? 'var(--accent-cyan)' : 'var(--text-primary)' }}>
                      ₹{addon.price.toLocaleString('en-IN')}{addon.isMonthly ? '/mo' : ''}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Summary Side */}
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div className="glass-panel" style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '20px',
            padding: '30px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            height: '100%',
            justifyContent: 'space-between',
            position: 'sticky',
            top: '100px'
          }}>
            <div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '20px', color: 'var(--text-primary)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', paddingBottom: '12px' }}>
                Estimated Cost Summary
              </h4>

              {/* Estimate Details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Base Plan cost */}
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>{selectedPlan.name} (Base)</span>
                  <span style={{ fontWeight: '500' }}>₹{basePrice.toLocaleString('en-IN')}</span>
                </div>

                {/* Extra Pages cost */}
                {extraPages > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>{extraPages} Extra Pages</span>
                    <span style={{ fontWeight: '500' }}>+₹{extraPagesPrice.toLocaleString('en-IN')}</span>
                  </div>
                )}

                {/* Add-ons costs */}
                {selectedAddOnItems.filter(item => !item.isMonthly).map((item) => (
                  <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>{item.name.split(' (')[0]}</span>
                    <span style={{ fontWeight: '500' }}>+₹{item.price.toLocaleString('en-IN')}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {/* Grand Total */}
              <div style={{ borderTop: '1px dashed rgba(255, 255, 255, 0.1)', paddingTop: '20px', marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                  <span style={{ fontSize: '1.1rem', fontWeight: '600' }}>Estimated Total:</span>
                  <span style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--accent-cyan)' }} className="text-gradient">
                    ₹{totalOneTime.toLocaleString('en-IN')}
                  </span>
                </div>
                {monthlyMaintenancePrice > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'var(--accent-purple)' }}>
                    <span>Monthly Subscription Support:</span>
                    <span style={{ fontWeight: '600' }}>₹{monthlyMaintenancePrice.toLocaleString('en-IN')}/mo</span>
                  </div>
                )}
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '8px', fontStyle: 'italic' }}>
                  *Prices shown are estimated based on standard requirements. A finalized fixed-price quote will be provided after discussing specific deliverables.
                </div>
              </div>

              {/* Direct Inquiry Action */}
              <a 
                href={`https://wa.me/917588877281?text=${encodeURIComponent(
                  `Hi Providence Technologies! I estimated a website quote on your calculator:\n\n` +
                  `- Base Plan: ${selectedPlan.name} (₹${basePrice})\n` +
                  (extraPages > 0 ? `- Extra Pages: ${extraPages} (₹${extraPagesPrice})\n` : '') +
                  (selectedAddOnItems.length > 0 ? `- Add-ons: ${selectedAddOnItems.map(i => i.name.split(' (')[0] + ' (₹' + i.price + ')').join(', ')}\n` : '') +
                  `\nTotal Estimated: ₹${totalOneTime}` + 
                  (monthlyMaintenancePrice > 0 ? ` (+ ₹${monthlyMaintenancePrice}/mo Support)` : '') +
                  `\n\nI'd like to discuss starting a project with you!`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                style={{ width: '100%', padding: '14px', borderRadius: '12px', fontSize: '1rem', marginTop: '8px' }}
              >
                Send Quote details via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Styled JSX for Responsive Calc grid */}
      <style>{`
        @media (max-width: 800px) {
          .calc-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PricingCalculator;
