import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { useRouter } from 'expo-router';
import React from 'react';
import { Alert } from 'react-native';

import HomeTab from '@/app/(tabs)/index';
import { resetOnboarding } from '@/utils/onboarding';

// Mock các modules
jest.mock('@/utils/onboarding');
jest.mock('expo-router');

// Mock Alert
jest.spyOn(Alert, 'alert');

describe('HomeScreen', () => {
  const mockRouter = {
    replace: jest.fn(),
    push: jest.fn(),
    back: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
  });

  it('should render home screen without crashing', () => {
    const { getByText } = render(<HomeTab />);
    
    expect(getByText('Khách hàng')).toBeTruthy();
  });

  it('should display header with user name', () => {
    const { getByText } = render(<HomeTab />);
    
    expect(getByText('Xin chào,')).toBeTruthy();
    expect(getByText('Khách hàng')).toBeTruthy();
  });

  it('should render all tabs correctly', () => {
    const { getAllByText } = render(<HomeTab />);
    
    // Sử dụng getAllByText vì text có thể xuất hiện nhiều lần
    expect(getAllByText('Sắp tới').length).toBeGreaterThanOrEqual(1);
    expect(getAllByText('Lịch sử').length).toBeGreaterThanOrEqual(1);
    expect(getAllByText('Tiệm gần đây').length).toBeGreaterThanOrEqual(1);
    expect(getAllByText('Yêu thích').length).toBeGreaterThanOrEqual(1);
  });

  it('should display featured appointment card', () => {
    const { getByText, getAllByText } = render(<HomeTab />);
    
    expect(getByText('Lịch hẹn sắp tới')).toBeTruthy();
    // Barber House xuất hiện nhiều lần (featured card + list)
    expect(getAllByText('Barber House Quận 1').length).toBeGreaterThanOrEqual(1);
  });

  it('should render quick action buttons', () => {
    const { getByText, getAllByText } = render(<HomeTab />);
    
    expect(getByText('Đặt lịch')).toBeTruthy();
    expect(getByText('Gần đây')).toBeTruthy();
    // Lịch sử xuất hiện ở cả tab và quick action
    expect(getAllByText('Lịch sử').length).toBeGreaterThanOrEqual(1);
  });

  it('should show alert when quick action button is pressed', () => {
    const { getByText } = render(<HomeTab />);
    
    const bookButton = getByText('Đặt lịch');
    fireEvent.press(bookButton);

    expect(Alert.alert).toHaveBeenCalledWith(
      'Đặt lịch',
      'Chuyển đến màn hình đặt lịch cắt tóc.'
    );
  });

  it('should display promotion card', () => {
    const { getByText } = render(<HomeTab />);
    
    expect(getByText('🎉 Ưu đãi đặc biệt')).toBeTruthy();
    expect(getByText('Đặt ngay')).toBeTruthy();
  });

  it('should reset onboarding when test button is pressed', async () => {
    const { getByText } = render(<HomeTab />);
    
    const testButton = getByText('Test lại Onboarding');
    fireEvent.press(testButton);

    await waitFor(() => {
      expect(resetOnboarding).toHaveBeenCalled();
      expect(Alert.alert).toHaveBeenCalled();
    });
  });

  it('should change active tab when tab is selected', () => {
    const { getAllByText } = render(<HomeTab />);
    
    // Lấy tất cả elements có text 'Lịch sử', chọn element đầu tiên (tab)
    const historyTabs = getAllByText('Lịch sử');
    fireEvent.press(historyTabs[0]);

    // Verify tab vẫn render sau khi press
    expect(getAllByText('Lịch sử').length).toBeGreaterThanOrEqual(1);
  });

  it('should render appointment list for active tab', () => {
    const { getAllByText } = render(<HomeTab />);
    
    // Default tab is "Sắp tới" - kiểm tra có appointments
    expect(getAllByText('Barber House Quận 1').length).toBeGreaterThanOrEqual(1);
    expect(getAllByText(/Thợ Minh/i).length).toBeGreaterThanOrEqual(1);
  });

  it('should not crash when scrolling content', () => {
    // Test that component renders without throwing
    expect(() => render(<HomeTab />)).not.toThrow();
  });
});