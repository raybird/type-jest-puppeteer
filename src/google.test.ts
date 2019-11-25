import puppeteer from 'puppeteer';

describe('Google', () => {
    beforeAll(async () => {
        await page.goto('https://google.com');
    });

    it('should be titled "Google"', async () => {
        await expect(page.title()).resolves.toMatch('Google');
    });
});

describe('Google Search', () => {
    beforeAll(async () => {

    });

    it('should be titled "Google"', async () => {
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
        await page.goto('https://google.com');
        await expect(page.title()).resolves.toMatch('Google');
        await new Promise(resolve => setTimeout(resolve, 1));
        await browser.close();
    });
});