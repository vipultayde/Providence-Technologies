import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormFields {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  service: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [fields, setFields] = useState<FormFields>({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    service: 'website',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<FormFields>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const servicesList = [
    { value: 'website', label: 'Website Development' },
    { value: 'responsive', label: 'Responsive Web Design' },
    { value: 'ecommerce', label: 'E-Commerce Development' },
    { value: 'maintenance', label: 'Website Maintenance & Support' },
    { value: 'seo', label: 'SEO Optimization' },
    { value: 'custom', label: 'Custom Web Application' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFields({
      ...fields,
      [name]: value
    });
    // Clear error
    if (errors[name as keyof FormFields]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormFields> = {};
    if (!fields.name.trim()) newErrors.name = 'Name is required';
    if (!fields.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(fields.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!fields.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(fields.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (min 10 digits)';
    }
    if (!fields.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    // Simulate sending email/message
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      
      // We can also trigger a redirect or WhatsApp send if desired
      const whatsappText = `Hi Providence Technologies!\n\nNew Inquiry Form Submission:\n` +
        `- Name: ${fields.name}\n` +
        `- Business: ${fields.businessName || 'N/A'}\n` +
        `- Email: ${fields.email}\n` +
        `- Phone: ${fields.phone}\n` +
        `- Service: ${servicesList.find(s => s.value === fields.service)?.label || fields.service}\n` +
        `- Message: ${fields.message}`;
      
      const whatsappUrl = `https://wa.me/917588877281?text=${encodeURIComponent(whatsappText)}`;
      
      // Auto open WhatsApp after form simulation
      window.open(whatsappUrl, '_blank');
      
      // Reset form
      setFields({
        name: '',
        email: '',
        phone: '',
        businessName: '',
        service: 'website',
        message: ''
      });
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="glass-panel text-center" style={{ padding: '40px', borderRadius: '16px', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
        <CheckCircle size={56} style={{ color: 'var(--accent-green)', marginBottom: '16px' }} />
        <h4 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '12px' }}>Inquiry Details Formed!</h4>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', maxWidth: '500px', margin: '0 auto 24px auto' }}>
          Thank you for reaching out. We have opened a direct chat thread on WhatsApp with your formatted inquiry details. Let's discuss your project there!
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="btn btn-secondary"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-panel" style={{ padding: '36px', borderRadius: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h3 style={{ fontSize: '1.4rem', fontWeight: '700', fontFamily: 'var(--font-display)', marginBottom: '8px' }}>Send Us an Inquiry</h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-row-2">
        <div className="form-group" style={{ margin: 0 }}>
          <label className="form-label">Full Name *</label>
          <input 
            type="text" 
            name="name" 
            value={fields.name} 
            onChange={handleInputChange} 
            className="form-input" 
            placeholder="John Doe"
            style={{ borderColor: errors.name ? 'rgba(239, 68, 68, 0.5)' : 'rgba(255, 255, 255, 0.1)' }}
          />
          {errors.name && (
            <span style={{ fontSize: '0.8rem', color: '#ef4444', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
              <AlertCircle size={12} /> {errors.name}
            </span>
          )}
        </div>

        <div className="form-group" style={{ margin: 0 }}>
          <label className="form-label">Company / Brand Name</label>
          <input 
            type="text" 
            name="businessName" 
            value={fields.businessName} 
            onChange={handleInputChange} 
            className="form-input" 
            placeholder="e.g. My Startup LLC"
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-row-2">
        <div className="form-group" style={{ margin: 0 }}>
          <label className="form-label">Email Address *</label>
          <input 
            type="email" 
            name="email" 
            value={fields.email} 
            onChange={handleInputChange} 
            className="form-input" 
            placeholder="john@example.com"
            style={{ borderColor: errors.email ? 'rgba(239, 68, 68, 0.5)' : 'rgba(255, 255, 255, 0.1)' }}
          />
          {errors.email && (
            <span style={{ fontSize: '0.8rem', color: '#ef4444', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
              <AlertCircle size={12} /> {errors.email}
            </span>
          )}
        </div>

        <div className="form-group" style={{ margin: 0 }}>
          <label className="form-label">Phone / WhatsApp Number *</label>
          <input 
            type="text" 
            name="phone" 
            value={fields.phone} 
            onChange={handleInputChange} 
            className="form-input" 
            placeholder="+91 98765 43210"
            style={{ borderColor: errors.phone ? 'rgba(239, 68, 68, 0.5)' : 'rgba(255, 255, 255, 0.1)' }}
          />
          {errors.phone && (
            <span style={{ fontSize: '0.8rem', color: '#ef4444', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
              <AlertCircle size={12} /> {errors.phone}
            </span>
          )}
        </div>
      </div>

      <div className="form-group" style={{ margin: 0 }}>
        <label className="form-label">Service Required</label>
        <select 
          name="service" 
          value={fields.service} 
          onChange={handleInputChange} 
          className="form-select"
          style={{ background: 'var(--bg-secondary)', cursor: 'pointer' }}
        >
          {servicesList.map(item => (
            <option key={item.value} value={item.value} style={{ background: 'var(--bg-secondary)' }}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group" style={{ margin: 0 }}>
        <label className="form-label">Project Description / Requirements *</label>
        <textarea 
          name="message" 
          value={fields.message} 
          onChange={handleInputChange} 
          className="form-textarea" 
          placeholder="Describe your project, page count, design references, timeline expectations, etc."
          style={{ borderColor: errors.message ? 'rgba(239, 68, 68, 0.5)' : 'rgba(255, 255, 255, 0.1)' }}
        />
        {errors.message && (
          <span style={{ fontSize: '0.8rem', color: '#ef4444', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
            <AlertCircle size={12} /> {errors.message}
          </span>
        )}
      </div>

      <button 
        type="submit" 
        className="btn btn-primary" 
        disabled={loading}
        style={{ padding: '14px', width: '100%', marginTop: '8px' }}
      >
        {loading ? (
          <span>Generating WhatsApp Link...</span>
        ) : (
          <>
            <Send size={18} /> Submit & Open WhatsApp Chat
          </>
        )}
      </button>

      <style>{`
        @media (max-width: 600px) {
          .form-row-2 {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </form>
  );
};

export default ContactForm;
