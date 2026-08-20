import { Sparkles, MessageCircle, Phone, Mail, MapPin, Heart } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1f1a1c] text-[#e0d6d9] pt-14 pb-20 sm:pb-12 border-t border-pink-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/10">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#FF85A1] flex items-center justify-center text-white font-bold italic shadow-xs">
                J
              </div>
              <span className="text-xl font-bold text-white font-serif-title">
                {BUSINESS_CONFIG.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed font-light">
              Quality cosmetics, authentic Vaseline, skincare essentials, and glow products curated to enhance your natural beauty.
            </p>
            <div className="pt-1">
              <a
                href={BUSINESS_CONFIG.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/15 text-pink-300 text-xs px-3.5 py-2 rounded-full border border-white/10 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Follow on TikTok: {BUSINESS_CONFIG.tiktokHandle}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Product Categories
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-400">
              <li>
                <a href="#products" className="hover:text-[#FF85A1] transition-colors">
                  Vaseline &amp; Skincare
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#FF85A1] transition-colors">
                  Luxury Cosmetics &amp; Makeup
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#FF85A1] transition-colors">
                  Daily Beauty Essentials
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#FF85A1] transition-colors">
                  Glow Serums &amp; Body Oils
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Ordering Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              How We Work
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-400">
              <li>• Direct WhatsApp Ordering</li>
              <li>• Fast Delivery in Kampala &amp; Uganda</li>
              <li>• Genuine Quality Products</li>
              <li>• Friendly Customer Support</li>
            </ul>
          </div>

          {/* Column 4: Contact details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Contact &amp; Location
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-400">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  WhatsApp: {BUSINESS_CONFIG.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FF85A1] shrink-0" />
                <a
                  href={`tel:${BUSINESS_CONFIG.phoneInternational}`}
                  className="hover:text-[#FF85A1] transition-colors"
                >
                  Call: {BUSINESS_CONFIG.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-pink-300 shrink-0" />
                <a
                  href={`mailto:${BUSINESS_CONFIG.businessEmail}`}
                  className="hover:text-pink-300 transition-colors"
                >
                  {BUSINESS_CONFIG.businessEmail}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FF85A1] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block font-medium">{BUSINESS_CONFIG.location}</strong>
                  <span className="text-stone-400 text-xs">{BUSINESS_CONFIG.cityCountry}</span>
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400">
          <p>© {currentYear} {BUSINESS_CONFIG.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted for beauty lovers with</span>
            <Heart className="w-3.5 h-3.5 text-[#FF85A1] fill-[#FF85A1]" />
            <span>in Uganda</span>
          </p>
        </div>

      </div>
    </footer>
  );
}

