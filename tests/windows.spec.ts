import {test, expect} from '@playwright/test';
test("multiple windows", async ({page})=> {

    await page.goto("https://demo.automationtesting.in/Windows.html")

    const page1 = page.waitForEvent("popup")
    await page.locator("#Tabbed button").click()


    const newpage = await page1
    await newpage.getByText("Downloads", {exact: true}).click()
    await expect(newpage.locator("h2#bindings")).toContainText("WebDriver Language Bindings")
    await page.bringToFront()


})
test("popup handle", async ({page})=> {
await page.goto("https://testautomationpractice.blogspot.com/")
await page.setViewportSize({ width: 1920, height: 1080 });

const newpg = page.waitForEvent("popup")
await page.getByText("New Tab").click()
const newpage = await newpg
await newpage.getByText("SDET Essentials", {exact :true}).click()
await page.bringToFront()
await page.getByText("Copy Text",{exact: true}).dblclick()
await expect(page.locator("#field2")).toHaveValue("Hello World!")

})

test("different window testautomationpractice", async ({page})=> {
await page.goto("https://testautomationpractice.blogspot.com/")
await page.setViewportSize({ width: 1920, height: 1080 });
const diffwin = page.waitForEvent("popup")
await page.locator('#PopUp').click()

const newpage1 = await diffwin
// await newpage1.setViewportSize({ width: 1920, height: 1080 })
// await newpage1.getByText("Documentation", {exact: true}).click()
// await expect(newpage1.locator('h1')).toContainText("The Selenium Browser Automation Project"
// )

})


test("different window demo automationtesting", async ({page})=>{
await page.goto("https://demo.automationtesting.in/Windows.html")
await page.setViewportSize({width:1920, height: 1080 })
const dw = page.waitForEvent("popup")
await page.getByText("Open New Seperate Windows").click()
await page.locator("#Seperate button").click()
const openwn = await dw
await openwn.setViewportSize({width: 1920, height:1080})
await openwn.getByText("Projects").click()


})