import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  expect: {
    toMatchSnapshot: {
      threshold: 0,
      maxDiffPixels: 0,
      maxDiffPixelRatio: 0
    },
  },
  testDir: './tests',
  snapshotPathTemplate: '{testDir}/{testFileDir}__snapshots__/{platform}/{arg}{ext}',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
