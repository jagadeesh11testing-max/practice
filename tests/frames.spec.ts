import {test , expect} from '@playwright/test'
import { assert } from 'node:console'
test ("frames", async ({page}) =>{
    await page.goto("https://demo.automationtesting.in/Frames.html")
    // await page.getByText("Single Iframe ", {exact: true}).click()
    const frame1= page.frameLocator('#singleframe')
    await frame1.locator("input[type='text']").first().fill("testing")
    await expect(frame1.locator("input[type='text']").first()).toHaveValue("testing")
    await page.getByText("Home", {exact:true}).click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()

   


})


test ("nested frames", async ({page})=>{

await page.goto("https://demo.automationtesting.in/Frames.html")
await page.getByText("Iframe with in an Iframe", {exact:true}).click()
const mainframe = page.frameLocator("#Multiple iframe")
const nestedframe = mainframe.frameLocator(".iframe-container iframe")
await nestedframe.locator("input[type='text']").fill("nested frame")
await expect(nestedframe.locator("input[type='text']")).toHaveValue("nested frame")
await page.getByText("Home", {exact:true}).click()
await expect(page.locator('#btn1')).toContainText("Sign In")
await expect(page.getByRole("button", {name: "Skip Sign In"})).toBeVisible()


})
