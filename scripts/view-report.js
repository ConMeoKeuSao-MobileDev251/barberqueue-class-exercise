#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const reportPath = path.join(__dirname, '..', 'coverage', 'test-report.html');
const coveragePath = path.join(__dirname, '..', 'coverage', 'index.html');

console.log('🧪 BarberQueue Test Report Viewer\n');

if (!fs.existsSync(reportPath)) {
  console.log('❌ Test report not found!');
  console.log('Run: npm run test:coverage\n');
  process.exit(1);
}

console.log('📊 Available Reports:');
console.log('1. Test Report (test-report.html) - Test results with dark theme');
console.log('2. Coverage Report (index.html) - Detailed coverage by file\n');

const args = process.argv.slice(2);
const reportType = args[0] || '1';

let fileToOpen = reportPath;
let reportName = 'Test Report';

if (reportType === '2' || reportType === 'coverage') {
  fileToOpen = coveragePath;
  reportName = 'Coverage Report';
}

console.log(`🚀 Opening ${reportName}...\n`);
console.log(`📂 Location: ${fileToOpen}\n`);

try {
  // Detect OS and open accordingly
  const platform = process.platform;
  
  if (platform === 'win32') {
    execSync(`start "" "${fileToOpen}"`);
  } else if (platform === 'darwin') {
    execSync(`open "${fileToOpen}"`);
  } else {
    execSync(`xdg-open "${fileToOpen}"`);
  }
  
  console.log('✅ Report opened in your default browser!');
} catch (error) {
  console.error('❌ Failed to open report:', error.message);
  console.log(`\nPlease manually open: ${fileToOpen}`);
  process.exit(1);
}
