# 🎯 Quick Start Guide - Testing & CI/CD

## 📋 TL;DR

```bash
# Chạy tests
npm test

# Xem coverage
npm run test:coverage
# Mở: coverage/test-report.html

# Watch mode (development)
npm run test:watch
```

## ✅ Đã Setup Xong

- ✅ **17 tests** - All passing
- ✅ **Jest configuration** với coverage threshold 70%
- ✅ **HTML test reports** (dark theme)
- ✅ **GitHub Actions CI/CD** workflow
- ✅ **Coverage badges** trong README
- ✅ **Documentation** (TESTING.md, COVERAGE.md)

## 📊 Current Status

| Metric | Value | Target |
|--------|-------|--------|
| Tests | 17 passing | ✅ |
| Coverage | 35.5% | 70% ⚠️ |
| Test Files | 2 | ✅ |
| CI/CD | Configured | ✅ |

## 🔧 GitHub Setup Required

### 1. Codecov (Optional)
```
1. Đăng ký: https://codecov.io/
2. Link repo
3. Copy token
4. GitHub Secrets > CODECOV_TOKEN
```

### 2. Coverage Badge
```
1. GitHub > Settings > Developer settings > Tokens
2. Generate token với scope "gist"
3. GitHub Secrets > GIST_SECRET

4. Tạo gist tại https://gist.github.com/
   - File: barberqueue-coverage.json
   - Content: {"schemaVersion": 1, "label": "coverage", "message": "0%", "color": "red"}
5. Copy Gist ID từ URL
6. GitHub Secrets > GIST_ID

7. Update README.md:
   - Thay YOUR_USERNAME
   - Thay YOUR_GIST_ID
```

## 📂 Files Created/Modified

### New Files
```
.github/workflows/test.yml  # CI/CD workflow
TESTING.md                  # Setup guide
COVERAGE.md                 # Coverage roadmap
QUICKSTART.md              # This file
```

### Modified Files
```
jest.config.js             # Coverage config
package.json              # Test scripts
.gitignore               # Coverage directories
README.md                # Badges
```

### Test Files
```
__tests__/OnboardingScreen.test.tsx  # 6 tests
__tests__/HomeScreen.test.tsx        # 11 tests
```

## 🚀 Next Steps

### Immediate (để reach 70% coverage)
1. Test `utils/onboarding.ts` (currently 30%)
2. Test `app/(tabs)/index.tsx` (currently 57%)
3. Test remaining tab screens (calendar, profile, shops)

### See Full Roadmap
- Chi tiết trong: `COVERAGE.md`
- Setup instructions: `TESTING.md`

## 🎨 HTML Reports

### Test Report
```
coverage/test-report.html
- Dark theme
- Failure messages
- Console logs
- Status sorted
```

### Coverage Report
```
coverage/index.html
- Line-by-line coverage
- Branch coverage
- File explorer
- Visual indicators
```

## 📝 Test Commands

```bash
# Development
npm test              # Run all tests
npm run test:watch    # Watch mode

# Coverage
npm run test:coverage # Generate coverage report

# CI
npm run test:ci       # CI mode (coverage + max workers)
```

## ⚙️ GitHub Actions Workflow

### Triggers
- Push to `main` or `develop`
- Pull requests to `main` or `develop`

### Jobs
- ✅ Run tests with coverage
- ✅ Upload to Codecov
- ✅ Generate coverage badge
- ✅ Archive test results (30 days)
- ✅ Comment PR with coverage
- ✅ Matrix strategy: Node 18.x, 20.x

## 🐛 Troubleshooting

### Tests fail on CI but pass locally
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm test -- --clearCache
```

### Coverage badge not updating
- Check GIST_SECRET has `gist` permission
- Badge only updates on `main` branch with Node 20.x
- Check GIST_ID is correct

### HTML reports not generating
```bash
# Install missing dependencies
npm install --save-dev jest-html-reporter
npm test
```

## 📚 Documentation

- **TESTING.md** - Detailed setup & configuration guide
- **COVERAGE.md** - Coverage analysis & roadmap to 70%
- **README.md** - Project overview with badges
- **QUICKSTART.md** - This file

## 🎯 Goals

- [x] Setup Jest with coverage
- [x] Create initial tests (17 tests)
- [x] Configure CI/CD workflow
- [x] Generate HTML reports
- [ ] Reach 70% coverage
- [ ] Add E2E tests
- [ ] Performance testing

---

**Last Updated**: December 9, 2025
**Tests**: 17 passing
**Coverage**: 35.5%
**Target**: 70%
