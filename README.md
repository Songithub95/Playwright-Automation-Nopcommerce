# 🚀 Playwright Automation Framework (TypeScript)

## 📦 Quick Start

### 1️⃣ Install dependencies
```bash
npm install
npx playwright install
======================================================================
Set headless with false in playwright.config.ts file to run tests with headed mode in local machine.

====================== STAGING ENV (multi-browser) ====================
| Browser              | Command                        |
| -------------------- | ------------------------------ |
| 🧭 Chrome (Chromium) | `npm run test:staging:chrome`  |
| 🦊 Firefox           | `npm run test:staging:firefox` |
| 🍏 Safari (WebKit)   | `npm run test:staging:safari`  |
| All Browsers         | `npm run test:staging:all`     |
| A specific tests     | `ENV=staging npx playwright test tests/search.spec.ts`|


====================== PROD ENV (multi-browser) ======================
| Browser              | Command                     |
| -------------------- | --------------------------- |
| 🧭 Chrome (Chromium) | `npm run test:prod:chrome`  |
| 🦊 Firefox           | `npm run test:prod:firefox` |
| 🍏 Safari (WebKit)   | `npm run test:prod:safari`  |
| All Browsers         | `npm run test:prod:all`     |
| A specific tests     | `ENV=prod npx playwright test tests/search.spec.ts`|

====================== REPORTS =======================
| Action              | Command                                    |
| -------------------- | ----------------------------------------- |
| Clean Allure & Playwright reports and results | `npm run clean`  |
| Open the Playwright HTML report | `npm run report`               |
| Open Allure report| `npm run report:allure`                      | 

