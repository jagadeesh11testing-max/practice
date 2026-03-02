import {test, expect} from '@playwright/test';

test('Dropdown interactions1', async ({page}) => {
await page.goto("https://demoqa.com/select-menu")
await page.setViewportSize({ width: 1920, height: 1080 });
//const dropdown = page.locator("#react-select-2-placeholder")
//await dropdown.click()
await page.waitForTimeout(5000)
await page.locator("div.css-hlgwow").last().click()
//await page.locator("div.css-1nmdiq5-menu").click()
await page.locator('#react-select-4-option-1').click();
await page.locator('#react-select-4-option-3').click();

//await page.getByText("Blue", {exact: true}).click()
//await page.getByRole('option', { name: 'Blue' }).click();
//await page.getByText("Black", {exact: true}).click()   
})

