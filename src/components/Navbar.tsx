import { useState } from 'react';
import { Sparkles, MessageCircle, Menu, X, Phone } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../config';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/75 backdrop-blur-md border-b border-pink-100/80 shadow-xs">
      {/* Top micro announcement bar */}
      <div className="bg-gradient-to-r from-[#FF85A1] via-pink-400 to-[#FF85A1] text-white text-xs py-1.5 px-4 text-center font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 animate-pulse shrink-0 text-amber-200" />
          <span>Shop Location: <strong className="font-bold">{BUSINESS_CONFIG.location}</strong></span>
          <span className="hidden sm:inline opacity-80">• Fast Delivery Across Uganda</span>
          <span className="hidden md:inline opacity-90">• WhatsApp: {BUSINESS_CONFIG.phoneDisplay}</span>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a
          href="#"
          id="navbar-brand-logo"
          className="flex items-center gap-2.5 group"
        >
          <div className="w-9 h-9 rounded-full bg-[#FF85A1] flex items-center justify-center text-white font-bold italic shadow-xs ring-2 ring-pink-100 group-hover:scale-105 transition-transform">
            J
          </div>
          <div>
            <span className="text-lg sm:text-xl font-semibold tracking-tight text-[#2D2D2D] font-serif-title block leading-none">
              Jazil Beauty Glow
            </span>
            <span className="text-[10px] font-bold text-[#FF85A1] tracking-widest uppercase">
              Cosmetics &amp; Skincare
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-[#4A4A4A]">
          <a
            href="#products"
            id="nav-link-products"
            className="hover:text-[#FF85A1] transition-colors py-1"
          >
            Products
          </a>
          <a
            href="#why-choose-us"
            id="nav-link-why-us"
            className="hover:text-[#FF85A1] transition-colors py-1"
          >
            Why Choose Us
          </a>
          <a
            href="#how-to-order"
            id="nav-link-how-to-order"
            className="hover:text-[#FF85A1] transition-colors py-1"
          >
            How To Order
          </a>
          <a
            href="#contact"
            id="nav-link-contact"
            className="hover:text-[#FF85A1] transition-colors py-1"
          >
            Contact
          </a>
        </div>

        {/* Right CTA Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${BUSINESS_CONFIG.phoneInternational}`}
            id="nav-call-btn"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#4A4A4A] hover:text-[#FF85A1] bg-[#FCE4EC]/50 hover:bg-[#FCE4EC] px-3.5 py-2 rounded-full transition-colors border border-pink-200/50"
            title="Call Jazil Beauty Glow"
          >
            <Phone className="w-3.5 h-3.5 text-[#FF85A1]" />
            <span>{BUSINESS_CONFIG.phoneDisplay}</span>
          </a>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            id="navbar-whatsapp-cta"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-bold px-4 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-md shadow-emerald-500/10 hover:shadow-lg transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-white shrink-0" />
            <span className="whitespace-nowrap">Order on WhatsApp</span>
          </a>

          {/* Mobile menu toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-btn"
            className="md:hidden p-2 rounded-lg text-stone-700 hover:bg-pink-50 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#FF85A1]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile drop-down navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-pink-100 px-4 pt-2 pb-4 space-y-2 text-[#4A4A4A] text-sm font-medium shadow-lg animate-in slide-in-from-top duration-200">
          <a
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 px-3 rounded-xl hover:bg-pink-50 hover:text-[#FF85A1]"
          >
            ✨ Our Products
          </a>
          <a
            href="#why-choose-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 px-3 rounded-xl hover:bg-pink-50 hover:text-[#FF85A1]"
          >
            💖 Why Choose Jazil
          </a>
          <a
            href="#how-to-order"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 px-3 rounded-xl hover:bg-pink-50 hover:text-[#FF85A1]"
          >
            📦 How To Order
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 px-3 rounded-xl hover:bg-pink-50 hover:text-[#FF85A1]"
          >
            📞 Contact &amp; WhatsApp
          </a>
          <div className="pt-2 border-t border-pink-100 flex items-center justify-between text-xs text-stone-500 px-2">
            <span>TikTok: {BUSINESS_CONFIG.tiktokHandle}</span>
            <a
              href={`tel:${BUSINESS_CONFIG.phoneInternational}`}
              className="text-[#FF85A1] font-bold"
            >
              Call {BUSINESS_CONFIG.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

