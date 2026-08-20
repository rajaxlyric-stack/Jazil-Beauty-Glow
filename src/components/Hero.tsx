import { Sparkles, MessageCircle, Mail, ShieldCheck, Truck, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../config';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-6 pb-12 sm:pt-12 sm:pb-16 lg:pb-24 beauty-gradient">
      {/* Soft background ambient glow */}
      <div className="absolute top-0 right-1/4 -z-10 w-80 sm:w-[480px] h-80 sm:h-[480px] rounded-full bg-pink-200/35 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-0 -z-10 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-[#FCE4EC]/60 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Brand, Headline, Copy & Primary Action Buttons */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 bg-[#FCE4EC]/80 text-[#FF85A1] text-xs sm:text-sm font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full border border-pink-200/60 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#FF85A1] animate-pulse" />
              <span>Premium Cosmetics • Skincare</span>
              <span className="text-pink-300">•</span>
              <span className="text-[#2D2D2D] font-bold">Uganda</span>
            </div>

            {/* Brand Title and Main Headline */}
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#FF85A1] uppercase block">
                {BUSINESS_CONFIG.name}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light leading-[1.12] text-[#2D2D2D]">
                Glow With <span className="italic text-[#FF85A1] font-normal">Confidence</span> ✨
              </h1>
            </div>

            {/* Supporting text */}
            <p className="text-base sm:text-lg text-gray-500 max-w-lg leading-relaxed font-normal">
              {BUSINESS_CONFIG.heroSubtitle}
            </p>

            {/* Hero Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-1">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-order-whatsapp-btn"
                className="bg-[#FF85A1] hover:bg-[#ff6f90] text-white px-8 py-4 rounded-full font-bold text-sm sm:text-base shadow-lg shadow-pink-200/80 hover:scale-105 transition-all flex items-center justify-center gap-2.5 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-white shrink-0" />
                <span>ORDER ON WHATSAPP</span>
              </a>

              <a
                href="#contact"
                id="hero-contact-us-btn"
                className="border-2 border-[#FF85A1] text-[#FF85A1] px-8 py-3.5 rounded-full font-bold text-sm sm:text-base hover:bg-[#FF85A1] hover:text-white transition-all flex items-center justify-center gap-2 active:scale-95 bg-white/40"
              >
                <Mail className="w-4 h-4" />
                <span>CONTACT US</span>
              </a>
            </div>

            {/* Quick 4 points feature cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-lg pt-2">
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-xs p-3 rounded-2xl border border-pink-100/70 shadow-2xs">
                <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-[#FF85A1] font-bold text-sm shrink-0">
                  ✓
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#2D2D2D]">Quality Products</span>
              </div>
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-xs p-3 rounded-2xl border border-pink-100/70 shadow-2xs">
                <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-[#FF85A1] font-bold text-sm shrink-0">
                  ✓
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#2D2D2D]">Friendly Service</span>
              </div>
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-xs p-3 rounded-2xl border border-pink-100/70 shadow-2xs">
                <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-[#FF85A1] font-bold text-sm shrink-0">
                  ✓
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#2D2D2D]">Convenient Order</span>
              </div>
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-xs p-3 rounded-2xl border border-pink-100/70 shadow-2xs">
                <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-[#FF85A1] font-bold text-sm shrink-0">
                  ✓
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#2D2D2D]">Curated Essentials</span>
              </div>
            </div>

            {/* Location & Delivery Info snippet */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 text-xs text-gray-600 pt-1">
              <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-xs px-3 py-1.5 rounded-full border border-pink-200/70 shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-[#FF85A1] shrink-0" />
                <span className="font-semibold text-[#2D2D2D]">Shop: {BUSINESS_CONFIG.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#FF85A1]" />
                <span>Uganda Delivery Available</span>
              </div>
              <span className="text-pink-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Genuine Care</span>
              </div>
            </div>

          </div>

          {/* Right Column: Immersive Glass Card with Client Brand Portrait Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Decorative backdrop glow */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-pink-300/40 via-[#FF85A1]/20 to-transparent rounded-[44px] blur-sm transform rotate-1" />
              
              {/* Glass Card Container */}
              <div className="relative glass-card rounded-[40px] p-4 sm:p-5 hero-shadow overflow-hidden">
                <div className="relative rounded-3xl overflow-hidden bg-white border-4 border-white shadow-md">
                  <img
                    src={BUSINESS_CONFIG.images.hero}
                    alt="Jazil Beauty Glow - Brand Showcase"
                    id="hero-brand-image"
                    className="w-full h-auto object-cover object-center max-h-[460px] sm:max-h-[520px] hover:scale-[1.02] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />

                  {/* Overlay Bottom Card */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-pink-100 shadow-md flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-bold text-[#FF85A1] uppercase tracking-wider">
                        Spotlight Brand
                      </p>
                      <h3 className="text-sm sm:text-base font-bold text-[#2D2D2D] font-serif-title">
                        Jazil Signature Glow
                      </h3>
                      <p className="text-xs text-gray-500">
                        Essentials for your daily glow routine
                      </p>
                    </div>
                    <a
                      href={BUSINESS_CONFIG.tiktokUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 bg-[#2D2D2D] hover:bg-black text-white text-xs font-semibold px-3 py-2 rounded-xl transition-all hover:scale-105"
                      title="View TikTok"
                    >
                      {BUSINESS_CONFIG.tiktokHandle}
                    </a>
                  </div>
                </div>

                {/* Floating Tag */}
                <div className="absolute top-7 right-7 bg-[#FF85A1] text-white py-1.5 px-3.5 rounded-full shadow-lg border-2 border-white flex items-center gap-1.5 text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                  <span>Signature Glow</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

