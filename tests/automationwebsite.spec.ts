import {test, expect} from "@playwright/test"

test ("Basic UI interactions",async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.locator("#name").fill("Basic Automation")
    await page.locator("#email").fill("basicautomation@gmail.com")
    await page.getByPlaceholder("Enter Phone").fill("8521479630")
    await page.getByRole("textbox", {name: "Address:"}).fill("address line 1")
    //Gender radio button
    await page.locator("#female").check()
    await expect(page.locator("#female")).toBeChecked()
    //days of week checkboxes
    await page.locator("#monday").check()
    await expect(page.locator("#monday")).toBeChecked()
    console.log("Mondy checkbox is checked successfully")
    await page.locator("#tuesday").click()
    //await expect(page.locator("#tuesday")).toBeChecked()
    console.log("Tuesday checkbox is checked successfully")







})
