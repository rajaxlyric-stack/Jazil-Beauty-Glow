import { MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../config';

export default function StickyWhatsAppBar() {
  return (
    <aside aria-label="Quick contact toolbar" className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-white/90 backdrop-blur-xl border-t border-pink-100 shadow-2xl sm:hidden animate-in slide-in-from-bottom duration-300">
      <div className="flex items-center gap-2.5">
        {/* Quick Phone Call Button */}
        <a
          href={`tel:${BUSINESS_CONFIG.phoneInternational}`}
          id="sticky-mobile-call-btn"
          className="w-12 h-12 rounded-full bg-[#FCE4EC] border border-pink-200 text-[#FF85A1] flex items-center justify-center shrink-0 active:scale-95 transition-transform"
          aria-label="Call Jazil Beauty Glow"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Big WhatsApp CTA */}
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          id="sticky-mobile-whatsapp-btn"
          className="flex-1 h-12 inline-flex items-center justify-center gap-2 bg-[#25D366] active:bg-[#20ba5a] text-white font-bold text-sm rounded-full shadow-lg shadow-emerald-500/20 transition-all active:scale-[0.98]"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span>ORDER ON WHATSAPP</span>
        </a>
      </div>
    </aside>
  );
}

