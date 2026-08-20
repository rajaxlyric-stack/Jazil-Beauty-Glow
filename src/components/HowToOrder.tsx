import { ShoppingBag, MessageSquare, CheckCircle2, PackageCheck, ArrowRight, MessageCircle } from 'lucide-react';
import { ORDER_STEPS, getWhatsAppLink } from '../config';

export default function HowToOrder() {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-[#FF85A1]" />;
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-[#FF85A1]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-emerald-600" />;
      case 'PackageCheck':
        return <PackageCheck className="w-5 h-5 text-amber-500" />;
      default:
        return <ShoppingBag className="w-5 h-5 text-[#FF85A1]" />;
    }
  };

  return (
    <section id="how-to-order" className="py-14 sm:py-20 bg-white/40 border-t border-pink-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-[#FCE4EC] text-[#FF85A1] text-xs font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-pink-200/60">
            <span>Simple 4-Step Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#2D2D2D]">
            How To <span className="italic text-[#FF85A1] font-normal">Order</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
            Shopping with Jazil Beauty Glow is quick and effortless directly from your mobile phone.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {ORDER_STEPS.map((step, idx) => (
            <div
              key={step.step}
              id={`order-step-${step.step}`}
              className="glass-card glass-card-hover p-6 sm:p-7 rounded-3xl relative flex flex-col justify-between"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="w-9 h-9 rounded-full bg-[#2D2D2D] text-white text-xs font-bold flex items-center justify-center shadow-xs">
                    0{step.step}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-[#FCE4EC] flex items-center justify-center shadow-2xs">
                    {getStepIcon(step.iconName)}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-serif font-bold text-[#2D2D2D] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {idx < ORDER_STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 bg-white border border-pink-200 rounded-full p-1.5 shadow-xs">
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF85A1]" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quick CTA underneath */}
        <div className="mt-12 text-center">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg shadow-emerald-500/10 hover:shadow-xl transition-all active:scale-95"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Start Order on WhatsApp Now</span>
          </a>
        </div>

      </div>
    </section>
  );
}

