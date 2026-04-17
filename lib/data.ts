export interface NavLink {
  label: string
  href: string
}

export interface StatCard {
  label: string
  value: string
  icon: string
}

export interface ServiceCard {
  icon: string
  title: string
  description: string
  accentColor: string
}

export interface PricingTier {
  name: string
  price: number
  description: string
  features: { text: string; included: boolean }[]
  highlighted: boolean
}

export interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  avatar: string
}

export interface FAQItem {
  question: string
  answer: string
}

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

export const aboutStats: StatCard[] = [
  { label: 'Active Users', value: '50K+', icon: 'users' },
  { label: 'Assets Under Management', value: '$8.5B', icon: 'trending-up' },
  { label: 'Countries Served', value: '45+', icon: 'globe' },
  { label: 'Uptime', value: '99.98%', icon: 'activity' },
]

export const services: ServiceCard[] = [
  {
    icon: 'briefcase',
    title: 'Portfolio Management',
    description: 'Expert diversification and rebalancing strategies tailored to your goals.',
    accentColor: 'from-blue-500',
  },
  {
    icon: 'brain',
    title: 'AI Analytics',
    description: 'Machine learning insights for smarter investment decisions.',
    accentColor: 'from-blue-400',
  },
  {
    icon: 'shield-check',
    title: 'Risk Assessment',
    description: 'Comprehensive analysis to identify and mitigate portfolio risks.',
    accentColor: 'from-emerald-500',
  },
  {
    icon: 'bitcoin',
    title: 'Crypto Trading',
    description: 'Secure access to digital assets with institutional-grade security.',
    accentColor: 'from-amber-500',
  },
  {
    icon: 'calculator',
    title: 'Tax Optimization',
    description: 'Maximize returns through intelligent tax planning strategies.',
    accentColor: 'from-amber-400',
  },
  {
    icon: 'target',
    title: 'Wealth Planning',
    description: 'Long-term strategies for sustainable wealth accumulation.',
    accentColor: 'from-emerald-400',
  },
]

export const portfolioChartData = [
  { month: 'Jan', value: 45000, portfolio: 52000 },
  { month: 'Feb', value: 52000, portfolio: 58000 },
  { month: 'Mar', value: 48000, portfolio: 61000 },
  { month: 'Apr', value: 61000, portfolio: 73000 },
  { month: 'May', value: 55000, portfolio: 71000 },
  { month: 'Jun', value: 67000, portfolio: 82000 },
]

export const marketPerformanceData = [
  { name: 'Tech', value: 4200, volume: 2400 },
  { name: 'Finance', value: 3000, volume: 1398 },
  { name: 'Healthcare', value: 2000, volume: 9800 },
  { name: 'Energy', value: 2780, volume: 3908 },
  { name: 'Retail', value: 1890, volume: 4800 },
]

export const transactionVolumeData = [
  { month: 'Mon', transactions: 4000 },
  { month: 'Tue', transactions: 3000 },
  { month: 'Wed', transactions: 2000 },
  { month: 'Thu', transactions: 2780 },
  { month: 'Fri', transactions: 1890 },
  { month: 'Sat', transactions: 2390 },
  { month: 'Sun', transactions: 3490 },
]

export const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: 99,
    description: 'Perfect for beginners',
    features: [
      { text: 'Basic portfolio management', included: true },
      { text: 'Monthly reports', included: true },
      { text: 'Email support', included: true },
      { text: 'AI analytics', included: false },
      { text: 'Priority support', included: false },
      { text: 'Crypto trading', included: false },
    ],
    highlighted: false,
  },
  {
    name: 'Pro',
    price: 299,
    description: 'For serious investors',
    features: [
      { text: 'Advanced portfolio management', included: true },
      { text: 'Real-time reports', included: true },
      { text: 'Phone & email support', included: true },
      { text: 'AI analytics', included: true },
      { text: 'Priority support', included: true },
      { text: 'Crypto trading', included: false },
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 999,
    description: 'For institutions',
    features: [
      { text: 'Full portfolio management', included: true },
      { text: 'Custom reports', included: true },
      { text: '24/7 dedicated support', included: true },
      { text: 'AI analytics + custom models', included: true },
      { text: 'VIP support', included: true },
      { text: 'Crypto trading + OTC desk', included: true },
    ],
    highlighted: false,
  },
]

export const testimonials: Testimonial[] = [
  {
    quote: 'FinanceHub transformed how we manage our investments. The AI insights are incredible.',
    author: 'Sarah Chen',
    role: 'CEO',
    company: 'TechVentures Inc',
    avatar: 'SC',
  },
  {
    quote: 'The platform is intuitive, powerful, and genuinely makes me feel in control of my finances.',
    author: 'Michael Rodriguez',
    role: 'Portfolio Manager',
    company: 'Global Assets',
    avatar: 'MR',
  },
  {
    quote: 'Best investment decision we made this year. ROI exceeded expectations by 34%.',
    author: 'Emma Thompson',
    role: 'CFO',
    company: 'Enterprise Corp',
    avatar: 'ET',
  },
]

export const faqs: FAQItem[] = [
  {
    question: 'How do I get started with FinanceHub?',
    answer: 'Sign up for a free account, complete our risk assessment questionnaire, and start building your portfolio. Our onboarding wizard will guide you through every step.',
  },
  {
    question: 'Is my money secure?',
    answer: 'Absolutely. We use bank-level encryption, multi-factor authentication, and maintain insurance coverage for all assets. Your security is our top priority.',
  },
  {
    question: 'What fees do you charge?',
    answer: 'We offer transparent, tiered pricing starting at $99/month. No hidden fees, no surprise charges. See details in our Pricing section.',
  },
  {
    question: 'Can I trade cryptocurrencies?',
    answer: 'Crypto trading is available with our Pro and Enterprise tiers. We support major cryptocurrencies with secure, regulated access.',
  },
  {
    question: 'Do you offer personalized advice?',
    answer: 'Enterprise clients get dedicated advisors. Pro and Starter users benefit from our AI-powered recommendations based on your goals and risk profile.',
  },
  {
    question: 'How often are portfolio rebalancing recommendations made?',
    answer: 'Our AI continuously monitors your portfolio and provides rebalancing suggestions monthly or when market conditions warrant adjustments.',
  },
]
