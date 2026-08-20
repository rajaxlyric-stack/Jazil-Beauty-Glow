import { Sparkles, MessageCircle, ExternalLink } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../config';

export default function TikTokCta() {
  return (
    <section className="py-14 sm:py-20 bg-gradient-to-r from-[#FF85A1] via-pink-400 to-[#FF85A1] text-white relative overflow-hidden">
      {/* Sparkle background elements */}
      <div className="absolute top-0 right-10 -z-0 opacity-20 pointer-events-none">
        <Sparkles className="w-48 h-48" />
      </div>
      <div className="absolute -bottom-10 left-10 -z-0 opacity-15 pointer-events-none">
        <Sparkles className="w-40 h-40" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full border border-white/30">
          <Sparkles className="w-3.5 h-3.5 text-amber-200 animate-spin" />
          <span>Transform Your Daily Glow</span>
        </div>

        <div className="space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight text-white">
            Ready to <span className="italic font-normal">Glow</span>? ✨
          </h2>
          <p className="text-base sm:text-xl text-pink-100 max-w-xl mx-auto font-light">
            Order your favourite cosmetics, Vaseline, and beauty essentials today.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3 max-w-md mx-auto">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            id="tiktok-cta-whatsapp-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-[#2D2D2D] hover:text-[#FF85A1] hover:bg-white/95 font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg transition-all active:scale-[0.98]"
          >
            <MessageCircle className="w-5 h-5 text-emerald-600 fill-emerald-600" />
            <span>WhatsApp Jazil Beauty Glow</span>
          </a>

          <a
            href={BUSINESS_CONFIG.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="tiktok-cta-tiktok-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2D2D2D] hover:bg-black text-white font-semibold text-sm sm:text-base px-7 py-4 rounded-full border border-white/20 shadow-md transition-all active:scale-[0.98]"
          >
            <ExternalLink className="w-4 h-4 text-pink-300" />
            <span>Visit Our TikTok</span>
          </a>
        </div>

        <p className="text-xs text-pink-100 pt-2">
          TikTok: <span className="font-bold text-white">{BUSINESS_CONFIG.tiktokHandle}</span> • Phone: <span className="font-bold text-white">{BUSINESS_CONFIG.phoneDisplay}</span>
        </p>

      </div>
    </section>
  );
}

