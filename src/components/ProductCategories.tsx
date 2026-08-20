import { MessageCircle, Sparkles, CheckCircle } from 'lucide-react';
import { PRODUCT_CATEGORIES, getWhatsAppLink } from '../config';

export default function ProductCategories() {
  return (
    <section id="products" className="py-14 sm:py-20 bg-white/60 backdrop-blur-xs border-y border-pink-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-[#FCE4EC] text-[#FF85A1] text-xs font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-pink-200/60">
            <Sparkles className="w-3.5 h-3.5 text-[#FF85A1]" />
            <span>Curated Beauty Catalog</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#2D2D2D]">
            Our Beauty &amp; <span className="italic text-[#FF85A1] font-normal">Skincare</span> Products
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
            Explore our curated collections of authentic Vaseline, nourishing skincare, luxury cosmetics, and beauty essentials.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PRODUCT_CATEGORIES.map((category) => (
            <div
              key={category.id}
              id={`product-card-${category.id}`}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Image Container with Badge */}
                <div className="relative h-60 sm:h-72 overflow-hidden bg-pink-50/50">
                  <img
                    src={category.image}
                    alt={`${category.name} - Jazil Beauty Glow`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
                  
                  {category.badge && (
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#FF85A1] text-xs font-bold px-3.5 py-1.5 rounded-full shadow-xs border border-pink-100">
                      {category.badge}
                    </div>
                  )}

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs uppercase tracking-widest font-bold text-pink-200">
                      {category.subtitle}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-serif font-semibold drop-shadow-xs">
                      {category.name}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Highlights / Popular items in this category */}
                  <div className="space-y-2 pt-2 border-t border-pink-100/60">
                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block">
                      Popular In This Collection:
                    </span>
                    <div className="grid grid-cols-2 gap-2 text-xs text-[#2D2D2D]">
                      {category.popularItems.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-[#FF85A1] shrink-0" />
                          <span className="truncate font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 pt-0">
                <a
                  href={getWhatsAppLink(category.inquiryMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`order-category-${category.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#FCE4EC]/70 hover:bg-[#FF85A1] text-[#FF85A1] hover:text-white font-bold text-sm py-3.5 px-5 rounded-full border border-pink-200/80 hover:border-[#FF85A1] transition-all duration-300 active:scale-[0.98] shadow-xs group/btn"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600 group-hover/btn:text-white transition-colors" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Under catalog trust banner */}
        <div className="mt-10 glass-card rounded-3xl p-5 sm:p-7 border border-pink-200/70 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <h4 className="text-base sm:text-lg font-serif font-bold text-[#2D2D2D]">
              Looking for a specific cosmetic product or brand?
            </h4>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Send us a screenshot or product name on WhatsApp and we will confirm stock and pricing right away.
            </p>
          </div>
          <a
            href={getWhatsAppLink('Hello Jazil Beauty Glow, I am looking for a specific beauty item. Can you help me check if it is available?')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-md shadow-emerald-500/10 transition-all flex items-center gap-2 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Ask Us On WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}

