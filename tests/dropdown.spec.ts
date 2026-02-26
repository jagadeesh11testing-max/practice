import {test, expect} from '@playwright/test';

test('Dropdown interactions', async ({page}) => {
await page.goto("https://demoqa.com/select-menu")
await page.setViewportSize({ width: 1920, height: 1080 });
//const dropdown = page.locator("#react-select-2-placeholder")
//await dropdown.click()
await page.locator(".css-1hwfws3").nth(2).click()
await page.getByRole("option", {name: "Green"}).click()
await page.getByRole("option", {name: "Blue"}).click()

})

