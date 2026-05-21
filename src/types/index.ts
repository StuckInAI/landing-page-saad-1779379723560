export type NavItem = {
  label: string;
  href: string;
};

export type Feature = {
  icon: string;
  title: string;
  description: string;
  tag?: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
};

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
};

export type Stat = {
  value: string;
  label: string;
  suffix?: string;
};
