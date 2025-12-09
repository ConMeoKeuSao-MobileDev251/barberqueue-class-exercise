// Mock PixelRatio TRƯỚC KHI bất kỳ module nào được load
global.PixelRatio = {
  get: () => 2,
  getFontScale: () => 2,
  getPixelSizeForLayoutSize: (size) => size * 2,
  roundToNearestPixel: (size) => Math.round(size),
};

// Mock Dimensions
global.Dimensions = {
  get: jest.fn(() => ({ width: 375, height: 812 })),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  set: jest.fn(),
};

// Mock Platform
global.Platform = {
  OS: 'ios',
  Version: 123,
  select: (obj) => obj.ios || obj.default,
};

// Mock I18nManager
global.I18nManager = {
  isRTL: false,
  doLeftAndRightSwapInRTL: false,
  allowRTL: jest.fn(),
  forceRTL: jest.fn(),
  swapLeftAndRightInRTL: jest.fn(),
};