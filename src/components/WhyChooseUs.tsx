import { Sparkles, HeartHandshake, Smartphone, ShieldCheck } from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../config';

export default function WhyChooseUs() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#FF85A1]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#FF85A1]" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-[#FF85A1]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#FF85A1]" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-14 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-[#FCE4EC] text-[#FF85A1] text-xs font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-pink-200/60">
            <span>Our Commitment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#2D2D2D]">
            Why Choose <span className="italic text-[#FF85A1] font-normal">Jazil Beauty</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
            We are dedicated to helping every customer look and feel their absolute best with trustworthy cosmetics and friendly, direct service.
          </p>
        </div>

        {/* 4 Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_ITEMS.map((item) => (
            <div
              key={item.id}
              id={`why-choose-${item.id}`}
              className="glass-card glass-card-hover p-6 sm:p-7 rounded-3xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FCE4EC] border border-pink-200/50 flex items-center justify-center shadow-xs">
                  {getIcon(item.iconName)}
                </div>
                <h3 className="text-lg font-serif font-bold text-[#2D2D2D]">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-pink-100/60 flex items-center text-xs font-bold text-[#FF85A1] tracking-wide">
                <span>Verified Quality Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

