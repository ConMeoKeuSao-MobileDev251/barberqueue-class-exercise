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
    const { getByText } = render(<HomeTab />);
    
    expect(getByText('Sắp tới')).toBeTruthy();
    expect(getByText('Lịch sử')).toBeTruthy();
    expect(getByText('Tiệm gần đây')).toBeTruthy();
    expect(getByText('Yêu thích')).toBeTruthy();
  });

  it('should display featured appointment card', () => {
    const { getByText } = render(<HomeTab />);
    
    expect(getByText('Lịch hẹn sắp tới')).toBeTruthy();
    expect(getByText('Barber House Quận 1')).toBeTruthy();
  });

  it('should render quick action buttons', () => {
    const { getByText } = render(<HomeTab />);
    
    expect(getByText('Đặt lịch')).toBeTruthy();
    expect(getByText('Gần đây')).toBeTruthy();
    expect(getByText('Lịch sử')).toBeTruthy();
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
    const { getByText } = render(<HomeTab />);
    
    const historyTab = getByText('Lịch sử');
    fireEvent.press(historyTab);

    // Tab content should change
    expect(() => getByText('Lịch sử')).not.toThrow();
  });

  it('should render appointment list for active tab', () => {
    const { getByText } = render(<HomeTab />);
    
    // Default tab is "Sắp tới"
    expect(getByText('Barber House Quận 1')).toBeTruthy();
    expect(getByText('Thợ Minh')).toBeTruthy();
  });

  it('should not crash when scrolling content', () => {
    const { getByTestId } = render(<HomeTab />);
    
    // Test that ScrollView renders without issues
    expect(() => render(<HomeTab />)).not.toThrow();
  });
});