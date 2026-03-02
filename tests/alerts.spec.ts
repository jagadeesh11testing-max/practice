import {test , expect} from '@playwright/test'

test("alerts handling", async ({page}) => {


    await page.goto("https://testautomationpractice.blogspot.com/")


    // page.on("dialog", async function(dialog) {
    //     console.log(dialog.message())
    //     await dialog.accept()
    // })
    // //single buttom popup
    // await page.locator('#alertBtn').click()


    page.on("dialog", async function(dialog) {
        console.log("dialog message is: " + dialog.message())

        await dialog.accept()
    })
    await page.locator("#alertBtn").click()
})
test ("confirm alert", async function ({page}) {

    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog', async function(dialog) {
        console.log("dialog message is: " + dialog.message())
        await dialog.accept()
    })
    await page.locator("#confirmBtn").click()       
})

test ("prompt alert", async function ({page}) {
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on('dialog', async function(dialog) {
        console.log("dialog message is: " + dialog.message())
        await dialog.accept("Priyanka")
    })
    await page.locator("#promptBtn").click()

})
test ("dismiss alert", async function ({page}) {
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on('dialog', async function(dialog) {
        await dialog.dismiss()
    })
    await page.locator("#confirmBtn").click()
})

test ("alert behaviour", async function ({page}) {
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on('dialog', async function(dialog) {
       console.log(dialog.message())
       await dialog.dismiss()
    })
    await page.locator("#alertBtn").click()
    await page.locator('#confirmBtn').click()
    await page.locator("#promptBtn").click()
    
})