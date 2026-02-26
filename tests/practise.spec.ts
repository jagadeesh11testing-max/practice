import {test, expect} from '@playwright/test';
test("practise test", async ({page}) => {
await page.goto("https://testautomationpractice.blogspot.com/")
await page.setViewportSize({ width: 1920, height: 1080 });
await expect(page.getByText("GUI Elements", {exact: true})).toBeVisible()
//name
await page.locator("#name").fill("Liyansh Nandan")
await page.locator("#email").fill("liyansh.nandan@gmail.com")
await page.locator('[placeholder="Enter Phone"]').fill("9876543210")
await page.locator("#textarea").fill("chandanagenagar, hyderabad")

//gender
await page.locator("#female").check()
//days of week checkboxes
await page.locator("#monday").check()
await page.locator("#tuesday").check()
await page.locator("[value='friday']").check()
//country dropdown
await page.locator("#country").selectOption("India")
//Colors dropdown select
await page.locator("#colors").selectOption([{value:"yellow"}, {value:"green"}])
await page.waitForTimeout(2000)
await page.keyboard.press('PageDown');
await page.locator("#animals").selectOption([{value:"elephant"}, {value:"deer"}])
//double click

await page.getByText("Copy Text", {exact: true}).dblclick()
await expect(page.locator("#field2")).toHaveValue("Hello World!")
await page.getByText("Point Me", {exact: true}).hover()
//await page.getByText("Laptops", {exact: true}).click()
//await expect(page.getByText("Laptops")).toBeVisible()
//await expect(page.getByText("Laptops", { exact: true })).toHaveText("Laptops");

})
test ("mouse hover", async ({page}) => {
await page.goto("https://www.spicejet.com/")
await page.setViewportSize({ width: 1920, height: 1080 });
await page.getByText("Travel Policies", {exact: true}).hover()
await expect(page.getByText("Baggage Information", {exact: true})).toBeVisible()

})
