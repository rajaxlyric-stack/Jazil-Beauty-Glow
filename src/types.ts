export interface ProductCategory {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  popularItems: string[];
  badge?: string;
  inquiryMessage: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface OrderStep {
  step: number;
  title: string;
  description: string;
  iconName: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  productRequest: string;
  message: string;
}
