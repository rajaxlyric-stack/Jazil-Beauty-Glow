// Import local generated high-resolution assets
import heroImage from './assets/images/jazil_brand_hero_1787239497277.jpg';
import vaselineSkincareImg from './assets/images/vaseline_skincare_1787239512606.jpg';
import cosmeticsImg from './assets/images/cosmetics_makeup_1787239524988.jpg';
import beautyEssentialsImg from './assets/images/beauty_essentials_1787239538249.jpg';
import moreProductsImg from './assets/images/glow_products_1787239554508.jpg';
import { ProductCategory, WhyChooseItem, OrderStep } from './types';

export const BUSINESS_CONFIG = {
  name: 'Jazil Beauty Glow',
  tagline: 'Glow With Confidence ✨',
  heroSubtitle:
    'Quality beauty and skincare essentials carefully selected to help you look and feel your best.',
  
  // Phone & WhatsApp configuration (Uganda format: 0775130345 -> 256775130345)
  phoneDisplay: '0775130345',
  phoneInternational: '+256775130345',
  whatsappRawNumber: '256775130345',
  
  // TikTok Profile link (easily editable)
  tiktokUrl: 'https://www.tiktok.com/@jazilzbeautyglow',
  tiktokHandle: '@jazilzbeautyglow',
  
  // Email & Location configuration
  businessEmail: 'jazilbeautyglow@gmail.com',
  location: 'NEW PIONEER MALL PI 39 & 32',
  cityCountry: 'Kampala, Uganda',
  fullAddress: 'NEW PIONEER MALL PI 39 & 32, Kampala, Uganda',
  deliveryCoverage: 'Fast Delivery Available Across Uganda',

  // Default pre-filled message
  defaultWhatsAppMessage:
    'Hello Jazil Beauty Glow, I found you through TikTok and I would like to know more about your beauty products.',
  
  // Images
  images: {
    hero: heroImage,
    vaselineSkincare: vaselineSkincareImg,
    cosmetics: cosmeticsImg,
    beautyEssentials: beautyEssentialsImg,
    moreProducts: moreProductsImg,
  },
};

// Helper function to generate direct WhatsApp links with encoded message
export function getWhatsAppLink(customMessage?: string): string {
  const message = customMessage || BUSINESS_CONFIG.defaultWhatsAppMessage;
  return `https://wa.me/${BUSINESS_CONFIG.whatsappRawNumber}?text=${encodeURIComponent(message)}`;
}

// Categories data
export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'vaseline-skincare',
    name: 'Vaseline & Skincare',
    subtitle: 'Deep Hydration & Radiant Skin',
    description:
      'Nourishing body lotions, original Vaseline cocoa radiant, glowing body oils, and hydrating moisturizers for healthy, radiant skin all day.',
    image: vaselineSkincareImg,
    badge: 'Popular Choice',
    popularItems: ['Vaseline Cocoa Radiant', 'Hydrating Body Lotions', 'Glow Body Oils', 'Deep Moisture Creams'],
    inquiryMessage: 'Hello Jazil Beauty Glow, I am interested in your Vaseline & Skincare products. Please share available items and prices.',
  },
  {
    id: 'cosmetics',
    name: 'Cosmetics',
    subtitle: 'Flawless Glam & Everyday Radiance',
    description:
      'Stunning lipsticks, high-shine lip oils, velvety foundations, contour essentials, and everyday makeup favorites to enhance your natural beauty.',
    image: cosmeticsImg,
    badge: 'Trending Glam',
    popularItems: ['Velvet Lipsticks & Glosses', 'Hydrating Lip Oils', 'Skin Finish Foundations', 'Beauty Blenders & Brushes'],
    inquiryMessage: 'Hello Jazil Beauty Glow, I would like to order some Cosmetics & Makeup essentials. Can you assist me with what is in stock?',
  },
  {
    id: 'beauty-essentials',
    name: 'Beauty Essentials',
    subtitle: 'Daily Glow & Self-Care Must-Haves',
    description:
      'Curated self-care accessories, refreshing facial mists, satin hair protection, exfoliating accessories, and soothing skincare tools.',
    image: beautyEssentialsImg,
    badge: 'Daily Must-Have',
    popularItems: ['Rose Quartz & Facial Rollers', 'Hydrating Face Mists', 'Whipped Body Butters', 'Satin Sleep Scrunchies'],
    inquiryMessage: 'Hello Jazil Beauty Glow, I want to inquire about your Beauty Essentials and self-care tools.',
  },
  {
    id: 'more-products',
    name: 'More Beauty Products',
    subtitle: 'Specialized Glow & Care Formulations',
    description:
      'Vitamin C serums, body scrubs, brightening treatments, and exclusive beauty products carefully selected for complete head-to-toe pampering.',
    image: moreProductsImg,
    badge: 'Glow Collection',
    popularItems: ['Vitamin C Glow Serums', 'Gentle Exfoliating Scrubs', 'Shimmer Body Glazes', 'Nourishing Night Balms'],
    inquiryMessage: 'Hello Jazil Beauty Glow, I want to explore more beauty products from your Glow collection.',
  },
];

// Why Choose Us points
export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: 'quality',
    title: 'Quality Beauty Products',
    description: '100% genuine and high-grade formulations that deliver real nourishment, hydration, and long-lasting glow.',
    iconName: 'Sparkles',
  },
  {
    id: 'service',
    title: 'Friendly Customer Service',
    description: 'Warm, personalized assistance on WhatsApp to help you choose the best products for your skin tone and goals.',
    iconName: 'HeartHandshake',
  },
  {
    id: 'ordering',
    title: 'Convenient Ordering',
    description: 'Effortless ordering straight from TikTok to WhatsApp with quick responses and seamless delivery.',
    iconName: 'Smartphone',
  },
  {
    id: 'selected',
    title: 'Carefully Selected Essentials',
    description: 'Every product is handpicked for quality, safe ingredients, and proven beauty results.',
    iconName: 'ShieldCheck',
  },
];

// How to order steps
export const ORDER_STEPS: OrderStep[] = [
  {
    step: 1,
    title: 'Choose Your Product',
    description: 'Browse our Vaseline, skincare, cosmetics, or beauty essentials.',
    iconName: 'ShoppingBag',
  },
  {
    step: 2,
    title: 'Contact Us',
    description: 'Click WhatsApp or fill our quick form with your product of interest.',
    iconName: 'MessageSquare',
  },
  {
    step: 3,
    title: 'Confirm Your Order',
    description: 'Chat with our friendly team to finalize your order and delivery details.',
    iconName: 'CheckCircle2',
  },
  {
    step: 4,
    title: 'Receive Your Products',
    description: 'Get your beauty products delivered swiftly to your doorstep.',
    iconName: 'PackageCheck',
  },
];
