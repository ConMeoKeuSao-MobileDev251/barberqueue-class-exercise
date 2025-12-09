// BarberQueue Types
export type HomeTabId = 'upcoming' | 'history' | 'shops' | 'favorites';

export type HomeTab = {
  id: HomeTabId;
  label: string;
};

export type Appointment = {
  id: string;
  shopName: string;
  barberName: string;
  service: string;
  date: string;
  time: string;
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled';
  price: string;
  shopImage?: string;
};

export type BarberShop = {
  id: string;
  name: string;
  address: string;
  rating: number;
  reviewCount: number;
  distance: string;
  image?: string;
  services: string[];
  isOpen: boolean;
};

export type FeaturedAppointment = {
  shopName: string;
  barberName: string;
  service: string;
  date: string;
  time: string;
  countdown: string;
  shopAddress: string;
};

export type Promotion = {
  title: string;
  description: string;
  ctaLabel: string;
  discount: string;
};

export type QuickAction = {
  id: string;
  label: string;
  icon: 'scissors' | 'map-pin' | 'calendar' | 'star' | 'clock' | 'search';
  accent: string;
};

// Legacy support (aliased)
export type Task = Appointment;
export type FeaturedTask = FeaturedAppointment;
export type Challenge = Promotion;

