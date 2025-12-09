import type { Appointment, FeaturedAppointment, HomeTab, HomeTabId, Promotion, QuickAction } from './types';

// BarberQueue Home Tabs
export const homeTabs: HomeTab[] = [
  { id: 'upcoming', label: 'Sắp tới' },
  { id: 'history', label: 'Lịch sử' },
  { id: 'shops', label: 'Tiệm gần đây' },
  { id: 'favorites', label: 'Yêu thích' },
];

// Featured/Next Appointment
export const featuredTask: FeaturedAppointment = {
  shopName: 'Barber House Quận 1',
  barberName: 'Thợ Minh',
  service: 'Cắt tóc + Gội đầu',
  date: '25/11/2025',
  time: '14:00',
  countdown: 'Còn 2 giờ',
  shopAddress: '123 Nguyễn Huệ, Quận 1, TP.HCM',
};

// Promotion Banner
export const challenge: Promotion = {
  title: '🎉 Ưu đãi đặc biệt',
  description: 'Giảm 20% cho lần đặt lịch đầu tiên! Sử dụng mã BARBER20 khi thanh toán.',
  ctaLabel: 'Đặt ngay',
  discount: '20%',
};

// Quick Actions for BarberQueue
export const quickActions: QuickAction[] = [
  { id: 'book', label: 'Đặt lịch', icon: 'scissors', accent: '#FFF3E6' },
  { id: 'nearby', label: 'Gần đây', icon: 'map-pin', accent: '#FFE4D6' },
  { id: 'history', label: 'Lịch sử', icon: 'clock', accent: '#FFF0E0' },
];

const createAppointment = (partial: Appointment): Appointment => partial;

// Appointments by tab
export const tasksByTab: Record<HomeTabId, Appointment[]> = {
  upcoming: [
    createAppointment({
      id: 'up-1',
      shopName: 'Barber House Quận 1',
      barberName: 'Thợ Minh',
      service: 'Cắt tóc + Gội đầu',
      date: '25/11/2025',
      time: '14:00',
      status: 'confirmed',
      price: '150.000đ',
    }),
    createAppointment({
      id: 'up-2',
      shopName: 'The Gentlemen Barber',
      barberName: 'Thợ Hùng',
      service: 'Cắt tóc + Cạo râu',
      date: '28/11/2025',
      time: '10:30',
      status: 'pending',
      price: '200.000đ',
    }),
  ],
  history: [
    createAppointment({
      id: 'his-1',
      shopName: 'Barber House Quận 1',
      barberName: 'Thợ Minh',
      service: 'Cắt tóc',
      date: '15/11/2025',
      time: '09:00',
      status: 'completed',
      price: '100.000đ',
    }),
    createAppointment({
      id: 'his-2',
      shopName: 'Classic Cut Studio',
      barberName: 'Thợ Nam',
      service: 'Nhuộm tóc',
      date: '10/11/2025',
      time: '15:00',
      status: 'completed',
      price: '350.000đ',
    }),
    createAppointment({
      id: 'his-3',
      shopName: 'Modern Hair Salon',
      barberName: 'Thợ Tuấn',
      service: 'Uốn tóc',
      date: '05/11/2025',
      time: '11:00',
      status: 'completed',
      price: '400.000đ',
    }),
  ],
  shops: [
    createAppointment({
      id: 'shop-1',
      shopName: 'Barber House Quận 1',
      barberName: '5 thợ',
      service: 'Cắt, Nhuộm, Uốn',
      date: '0.5 km',
      time: '⭐ 4.8 (120)',
      status: 'confirmed',
      price: 'Từ 80.000đ',
    }),
    createAppointment({
      id: 'shop-2',
      shopName: 'The Gentlemen Barber',
      barberName: '3 thợ',
      service: 'Cắt, Cạo râu, Massage',
      date: '1.2 km',
      time: '⭐ 4.9 (85)',
      status: 'confirmed',
      price: 'Từ 120.000đ',
    }),
    createAppointment({
      id: 'shop-3',
      shopName: 'Classic Cut Studio',
      barberName: '4 thợ',
      service: 'Cắt, Nhuộm, Tạo kiểu',
      date: '2.0 km',
      time: '⭐ 4.7 (200)',
      status: 'confirmed',
      price: 'Từ 100.000đ',
    }),
  ],
  favorites: [
    createAppointment({
      id: 'fav-1',
      shopName: 'Barber House Quận 1',
      barberName: 'Thợ Minh',
      service: 'Thợ yêu thích',
      date: '⭐ 4.9',
      time: 'Đã phục vụ 5 lần',
      status: 'confirmed',
      price: '100.000đ',
    }),
    createAppointment({
      id: 'fav-2',
      shopName: 'The Gentlemen Barber',
      barberName: 'Thợ Hùng',
      service: 'Tiệm yêu thích',
      date: '⭐ 4.8',
      time: 'Đã phục vụ 3 lần',
      status: 'confirmed',
      price: '150.000đ',
    }),
  ],
};

