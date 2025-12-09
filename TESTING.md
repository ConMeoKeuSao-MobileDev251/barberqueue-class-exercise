# CI/CD & Testing Setup Guide

## ✅ Đã Setup Xong

### 1. Jest Coverage Configuration
- **File**: `jest.config.js`
- **Coverage threshold**: 70% (branches, functions, lines, statements)
- **Coverage reporters**: text, lcov, html, json-summary
- **Coverage directory**: `coverage/`

### 2. Test Scripts
```bash
npm test              # Chạy tests thông thường
npm run test:coverage # Chạy tests với coverage report
npm run test:watch    # Watch mode
npm run test:ci       # CI mode (--ci --coverage --maxWorkers=2)
```

### 3. HTML Test Report
- **Package**: jest-html-reporter
- **Output**: `coverage/test-report.html`
- **Theme**: Dark theme
- **Features**: Failure messages, console logs, sorted by status

### 4. GitHub Actions Workflow
- **File**: `.github/workflows/test.yml`
- **Triggers**: Push và Pull Request trên branches `main` và `develop`
- **Node versions**: 18.x, 20.x (matrix strategy)

#### Workflow Features:
- ✅ Run tests with coverage
- ✅ Upload coverage to Codecov
- ✅ Generate coverage badge
- ✅ Archive test results (30 days retention)
- ✅ Comment PR with coverage report
- ✅ HTML coverage report artifact

### 5. Coverage Badge
- **Location**: README.md header
- **Badges**:
  - Tests CI status
  - Coverage percentage
  - Node version
  - License

## 🔧 Setup Requirements

### GitHub Secrets (cần setup trong repo settings)

#### 1. CODECOV_TOKEN (Optional)
- Đăng ký tài khoản tại: https://codecov.io/
- Link repository của bạn
- Copy token từ Codecov dashboard
- Add vào GitHub Secrets: `Settings > Secrets and variables > Actions > New repository secret`

#### 2. GIST_SECRET & GIST_ID (cho coverage badge)
**Bước 1: Tạo Personal Access Token**
1. GitHub Settings > Developer settings > Personal access tokens > Tokens (classic)
2. Generate new token (classic)
3. Chọn scope: `gist` (Create gists)
4. Copy token
5. Add vào GitHub Secrets với tên `GIST_SECRET`

**Bước 2: Tạo Gist**
1. Vào https://gist.github.com/
2. Create new gist:
   - Filename: `barberqueue-coverage.json`
   - Content: `{"schemaVersion": 1, "label": "coverage", "message": "0%", "color": "red"}`
3. Create public gist
4. Copy Gist ID từ URL (phần sau username/)
5. Add vào GitHub Secrets với tên `GIST_ID`

**Bước 3: Update README**
- Thay `YOUR_USERNAME` bằng GitHub username của bạn
- Thay `YOUR_GIST_ID` bằng Gist ID vừa tạo

## 📊 Xem Coverage Report

### Local
```bash
npm run test:coverage
# Mở file: coverage/index.html
# Hoặc: coverage/test-report.html (dark theme)
```

### CI/CD
1. Vào Actions tab trong GitHub repo
2. Click vào workflow run
3. Download artifact "coverage-report"
4. Extract và mở `index.html`

## 🎯 Current Test Coverage

**Coverage: 35.5%** (Target: 70%)

### Files cần thêm tests:
- `app/_layout.tsx` (0%)
- `app/(tabs)/_layout.tsx`, `calendar.tsx`, `profile.tsx`, `tasks.tsx` (0%)
- `components/onboarding/*` (0% - đã mock trong tests)
- `utils/onboarding.ts` (30.76%)
- Các helper components và hooks

### Để tăng coverage:
1. Tạo thêm tests cho các screen chưa cover
2. Test các utility functions
3. Test hooks (useColorScheme, useThemeColor)
4. Test các custom components

## 🚀 Deployment Workflow (Optional)

Có thể thêm workflow cho:
- **Build**: Tạo APK/IPA
- **Deploy**: Deploy web build lên GitHub Pages/Netlify
- **Release**: Automatic releases với semantic versioning

## 📝 Notes

- Coverage threshold hiện tại: **70%** - có thể điều chỉnh trong `jest.config.js`
- Test reports được lưu 30 ngày trên GitHub Actions
- PR comments tự động hiển thị coverage changes
- Badge coverage tự động update sau mỗi push lên `main`

## ❓ Troubleshooting

### Tests fail trên CI nhưng pass locally
- Check Node version compatibility
- Xóa `node_modules` và reinstall: `npm ci`
- Clear Jest cache: `jest --clearCache`

### Coverage badge không update
- Check GIST_SECRET có đúng permissions
- Check GIST_ID có đúng
- Badge chỉ update với Node 20.x và trên branch main

### Codecov upload fails
- Codecov token là optional, workflow vẫn chạy nếu fail
- Set `fail_ci_if_error: false` trong workflow
