# PDF Visual Regression Testing with Playwright

A learning project that demonstrates how to perform visual comparison of PDF files using Playwright.

## Overview

This project showcases how to use Playwright's visual testing capabilities to compare PDF documents page by page, detecting visual differences between PDF versions.

## Prerequisites

- Node.js
- Yarn

## Installation

```bash
cd pdf-regression-with-playwright
yarn install
yarn playwright install
```

## Running Tests

```bash
yarn playwright test
```

## How It Works

The project converts PDF pages to images and uses Playwright's screenshot comparison feature to detect visual differences. Test snapshots are stored in `tests/__snapshots__/` for baseline comparisons.

## Project Structure

- `tests/` - Test files and PDF samples
- `helpers/` - PDF helper utilities
- `playwright.config.ts` - Playwright configuration

## Learning Purpose

This project is intended for educational purposes to demonstrate visual regression testing techniques for PDF documents.
