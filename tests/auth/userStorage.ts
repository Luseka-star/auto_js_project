import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';

(async () => {
  const authPath = path.resolve(__dirname, '../../playwright/.auth');
  if (!fs.existsSync(authPath)) fs.mkdirSync(authPath, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://your-app.com/login');

  await page.fill('#username', process.env.TEST_USER!);
  await page.fill('#password', process.env.TEST_PASSWORD!);
  await page.click('button[type="submit"]');

  await page.context().storageState({ path: path.join(authPath, 'user.json') });

  await browser.close();
  console.log('✅ Storage state created!');
})();
