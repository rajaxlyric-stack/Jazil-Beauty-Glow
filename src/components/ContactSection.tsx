import { useState, FormEvent } from 'react';
import { MessageCircle, Mail, Phone, MapPin, Send, CheckCircle2, Copy, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../config';
import { ContactFormData } from '../types';

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    productRequest: 'General Beauty Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [selectedQuickTemplate, setSelectedQuickTemplate] = useState<string>('tiktok');

  const quickTemplates = [
    {
      id: 'tiktok',
      label: 'TikTok Visitor',
      text: 'Hello Jazil Beauty Glow, I found you through TikTok and I would like to know more about your beauty products.',
    },
    {
      id: 'vaseline',
      label: 'Vaseline & Skincare',
      text: 'Hello Jazil Beauty Glow, I would like to order Vaseline & Skincare products. Please let me know what is in stock.',
    },
    {
      id: 'cosmetics',
      label: 'Cosmetics & Makeup',
      text: 'Hello Jazil Beauty Glow, I want to purchase cosmetics and lip products from your collection.',
    },
    {
      id: 'delivery',
      label: 'Delivery & Pricing',
      text: 'Hello Jazil Beauty Glow, how much is delivery and what are the payment methods available?',
    },
  ];

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(BUSINESS_CONFIG.phoneDisplay);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleEmailSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Inquiry from ${formData.name} - ${formData.productRequest}`);
    const body = encodeURIComponent(
      `Hello Jazil Beauty Glow,\n\nName: ${formData.name}\nEmail: ${formData.email}\nProduct Request: ${formData.productRequest}\n\nMessage:\n${formData.message}\n\nSent from Jazil Beauty Glow Website.`
    );
    
    window.location.href = `mailto:${BUSINESS_CONFIG.businessEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const activeMessage = quickTemplates.find((t) => t.id === selectedQuickTemplate)?.text || BUSINESS_CONFIG.defaultWhatsAppMessage;

  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-0 right-0 -z-10 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-[#FCE4EC] text-[#FF85A1] text-xs font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-pink-200/60">
            <Sparkles className="w-3.5 h-3.5 text-[#FF85A1]" />
            <span>Instant Ordering &amp; Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#2D2D2D]">
            Contact &amp; <span className="italic text-[#FF85A1] font-normal">Order Today</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
            The quickest way to order or ask questions is via WhatsApp. You can also send an email inquiry using our form below.
          </p>
        </div>

        {/* Main Grid: WhatsApp Hub (Primary) + Email Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Primary Column: WhatsApp Order Card (Strongest Conversion) */}
          <div className="lg:col-span-6 bg-gradient-to-br from-emerald-900 via-[#0a2318] to-stone-900 text-white rounded-[32px] p-6 sm:p-8 shadow-xl border border-emerald-700/30 relative overflow-hidden">
            
            {/* Top Badge */}
            <div className="flex items-center justify-between gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Fastest Response
              </span>
              <span className="text-xs text-stone-400">Uganda: {BUSINESS_CONFIG.phoneDisplay}</span>
            </div>

            <div className="space-y-3 mb-6">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Chat &amp; Order on WhatsApp
              </h3>
              <p className="text-sm text-emerald-100/80 leading-relaxed">
                Tap below to start a chat directly with Jazil Beauty Glow. Choose a quick message topic or type your custom request:
              </p>
            </div>

            {/* Quick Topic Selector Buttons */}
            <div className="space-y-2 mb-6">
              <label className="text-[11px] font-bold text-emerald-300 uppercase tracking-widest block">
                Select your inquiry topic:
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {quickTemplates.map((template) => (
                  <button
                    key={template.id}
                    type="button"
                    onClick={() => setSelectedQuickTemplate(template.id)}
                    className={`text-left text-xs font-medium p-3 rounded-2xl border transition-all ${
                      selectedQuickTemplate === template.id
                        ? 'bg-emerald-600 text-white border-emerald-400 ring-2 ring-emerald-400/30 font-semibold'
                        : 'bg-stone-800/60 text-stone-300 border-stone-700/60 hover:bg-stone-800 hover:text-white'
                    }`}
                  >
                    {template.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Message Preview Box */}
            <div className="bg-black/30 rounded-2xl p-4 border border-emerald-500/20 mb-6">
              <p className="text-[11px] text-stone-400 uppercase tracking-wider mb-1 font-semibold">Pre-filled WhatsApp Message:</p>
              <p className="text-xs sm:text-sm text-emerald-50 italic">
                "{activeMessage}"
              </p>
            </div>

            {/* Big Primary WhatsApp Button */}
            <div className="space-y-3">
              <a
                href={getWhatsAppLink(activeMessage)}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-main-whatsapp-btn"
                className="w-full inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-base sm:text-lg py-4 px-6 rounded-full shadow-lg hover:shadow-emerald-500/30 transition-all active:scale-[0.98]"
              >
                <MessageCircle className="w-6 h-6 fill-white" />
                <span>OPEN IN WHATSAPP</span>
              </a>

              {/* Direct call and copy buttons */}
              <div className="grid grid-cols-2 gap-2.5 pt-2">
                <a
                  href={`tel:${BUSINESS_CONFIG.phoneInternational}`}
                  className="inline-flex items-center justify-center gap-1.5 bg-stone-800/80 hover:bg-stone-700 text-stone-200 text-xs font-semibold py-3 px-3.5 rounded-full transition-colors border border-stone-700"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Call {BUSINESS_CONFIG.phoneDisplay}</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="inline-flex items-center justify-center gap-1.5 bg-stone-800/80 hover:bg-stone-700 text-stone-200 text-xs font-semibold py-3 px-3.5 rounded-full transition-colors border border-stone-700"
                >
                  {copiedPhone ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-stone-400" />
                      <span>Copy Number</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Location footer in card */}
            <div className="mt-6 pt-5 border-t border-emerald-800/50 space-y-2">
              <div className="flex items-start gap-2.5 text-xs text-stone-200">
                <MapPin className="w-4 h-4 text-[#FF85A1] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Physical Store Location:</span>
                  <span className="text-emerald-100 font-semibold">{BUSINESS_CONFIG.location}</span>
                  <span className="text-stone-400 block text-[11px]">{BUSINESS_CONFIG.cityCountry}</span>
                </div>
              </div>
              <div className="text-[11px] text-emerald-300/90 pl-6.5 flex items-center gap-1.5">
                <span>• In-person shopping &amp; pickup welcome</span>
                <span>• {BUSINESS_CONFIG.deliveryCoverage}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact by Email Form */}
          <div className="lg:col-span-6 glass-card rounded-[32px] p-6 sm:p-8 shadow-xs border border-pink-100/80">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-9 h-9 rounded-2xl bg-[#FCE4EC] text-[#FF85A1] flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#2D2D2D]">
                Send an Email Enquiry
              </h3>
            </div>
            
            <p className="text-xs sm:text-sm text-gray-500 mb-6">
              Prefer email? Fill out your details below and our team will get back to you promptly at <span className="font-semibold text-[#FF85A1]">{BUSINESS_CONFIG.businessEmail}</span>.
            </p>

            {submitted ? (
              <div className="bg-[#FCE4EC]/50 border border-pink-200 rounded-3xl p-6 text-center space-y-3 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-serif font-bold text-[#2D2D2D]">
                  Thank you, {formData.name || 'Friend'}!
                </h4>
                <p className="text-xs sm:text-sm text-gray-600">
                  Your email client has been opened with your message to <span className="font-semibold">{BUSINESS_CONFIG.businessEmail}</span>.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', productRequest: 'General Beauty Inquiry', message: '' });
                    }}
                    className="text-xs font-semibold text-[#FF85A1] hover:underline"
                  >
                    Send another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleEmailSubmit} className="space-y-4" id="email-contact-form">
                {/* Customer Name */}
                <div>
                  <label htmlFor="customer-name" className="block text-xs font-semibold text-[#2D2D2D] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    id="customer-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Nakato"
                    className="w-full px-4 py-3 text-sm bg-white/80 rounded-2xl border border-pink-200/80 focus:outline-hidden focus:ring-2 focus:ring-[#FF85A1] focus:border-[#FF85A1] transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="customer-email" className="block text-xs font-semibold text-[#2D2D2D] mb-1">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    id="customer-email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. sarah@gmail.com"
                    className="w-full px-4 py-3 text-sm bg-white/80 rounded-2xl border border-pink-200/80 focus:outline-hidden focus:ring-2 focus:ring-[#FF85A1] focus:border-[#FF85A1] transition-all"
                  />
                </div>

                {/* Product / Request category */}
                <div>
                  <label htmlFor="product-request" className="block text-xs font-semibold text-[#2D2D2D] mb-1">
                    Product / Request Category *
                  </label>
                  <select
                    id="product-request"
                    value={formData.productRequest}
                    onChange={(e) => setFormData({ ...formData, productRequest: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-white/80 rounded-2xl border border-pink-200/80 focus:outline-hidden focus:ring-2 focus:ring-[#FF85A1] focus:border-[#FF85A1] transition-all"
                  >
                    <option value="Vaseline & Skincare">Vaseline &amp; Skincare</option>
                    <option value="Cosmetics & Lipsticks">Cosmetics &amp; Lipsticks</option>
                    <option value="Beauty Essentials">Beauty Essentials &amp; Accessories</option>
                    <option value="Glow & Hydration Serums">Glow &amp; Hydration Serums</option>
                    <option value="Bulk / Wholesale Inquiry">Bulk / Wholesale Inquiry</option>
                    <option value="General Beauty Inquiry">General Beauty Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="customer-message" className="block text-xs font-semibold text-[#2D2D2D] mb-1">
                    Message / Order Details *
                  </label>
                  <textarea
                    id="customer-message"
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what items you'd like or ask any questions about our beauty collection..."
                    className="w-full px-4 py-3 text-sm bg-white/80 rounded-2xl border border-pink-200/80 focus:outline-hidden focus:ring-2 focus:ring-[#FF85A1] focus:border-[#FF85A1] transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  id="submit-email-form-btn"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#2D2D2D] hover:bg-black text-white font-semibold text-sm py-4 px-5 rounded-full shadow-xs hover:shadow transition-all active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry via Email</span>
                </button>
              </form>
            )}

            <p className="text-[11px] text-gray-400 mt-4 text-center">
              Your details are kept private and only used to respond to your beauty order enquiry.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

