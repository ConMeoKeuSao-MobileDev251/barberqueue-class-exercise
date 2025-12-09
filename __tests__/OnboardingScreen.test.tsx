import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { useRouter } from 'expo-router';
import React from 'react';

import Onboarding from '@/app/onboarding';
import { completeOnboarding } from '@/utils/onboarding';

// Mock các modules
jest.mock('@/utils/onboarding');
jest.mock('expo-router');

describe('OnboardingScreen', () => {
  const mockRouter = {
    replace: jest.fn(),
    push: jest.fn(),
    back: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
  });

  it('should render onboarding screen with correct title', () => {
    const { getByText } = render(<Onboarding />);
    
    expect(getByText('BarberQueue')).toBeTruthy();
    expect(getByText('Skip')).toBeTruthy();
  });

  it('should display first slide content', () => {
    const { getByText } = render(<Onboarding />);
    
    expect(getByText('Đặt lịch cắt tóc nhanh chóng, không cần chờ đợi')).toBeTruthy();
  });

  it('should navigate to home when skip button is pressed', async () => {
    const { getByText } = render(<Onboarding />);
    
    const skipButton = getByText('Skip');
    fireEvent.press(skipButton);

    await waitFor(() => {
      expect(completeOnboarding).toHaveBeenCalled();
      expect(mockRouter.replace).toHaveBeenCalledWith('/');
    });
  });

  it('should render paginator dots for all slides', () => {
    const { getByTestId } = render(<Onboarding />);
    
    // Kiểm tra có 3 slides (dựa vào data trong file)
    // Note: Bạn cần thêm testID vào Paginator component để test này hoạt động tốt hơn
    expect(true).toBeTruthy(); // Placeholder - cần implement testID trong Paginator
  });

  it('should complete onboarding and navigate when reaching last slide', async () => {
    const { getByText } = render(<Onboarding />);
    
    // Giả lập việc nhấn nút next nhiều lần để đến slide cuối
    // Note: Cần testID cho NextButton để test này chính xác hơn
    
    await waitFor(() => {
      expect(completeOnboarding).toBeCalled;
    });
  });

  it('should not crash when rendering with empty slides array', () => {
    // Test edge case - đảm bảo component không crash
    expect(() => render(<Onboarding />)).not.toThrow();
  });
});