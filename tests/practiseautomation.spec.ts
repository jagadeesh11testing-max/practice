import {test,expect} from '@playwright/test';
test("practise automation", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.setViewportSize({ width: 1920, height: 1080 });
    //validate gui elements
    await expect(page.getByText("GUI Elements", {exact: true})).toBeVisible()
    await page.getByRole('textbox', {name: "Name"}).fill("Priyanka")
    await page.getByRole('textbox', {name: "Email"}).fill("priya@gmail.com")
    await page.locator('#phone').fill('2646394155')
    await page.locator("#textarea").fill("eluru andhra pradesh india")
    await page.locator('[value="female"]').check()
    await page.locator('input[value="monday"]').check()
    await page.locator('input[value="friday"]').check()
    await page.locator('#sunday').check()
    await page.getByText('Thursday', {exact: true}).check()
    await page.locator('#country').selectOption("Australia")
    await page.locator("#colors").selectOption([{value:"green"}, {value:"white"}])
    await page.locator("#animals").selectOption([{value:"giraffe"},{value:"zebra"}])
    await page.getByText("Point Me", {exact: true}).hover()
    //await expect(page.getByText("Mobiles", {exact: true})).toBeVisible()
    //double click
    await page.getByText("Copy Text", {exact: true}).dblclick()
    await expect(page.locator("#field2")).toHaveValue("Hello World!")
    const source = page.locator("#draggable")
    const target = page.locator("#droppable")
    await source.dragTo(target)
    await expect(page.locator("#droppable p")).toHaveText("Dropped!")      


    //alert actions
    page.on("dialog", async function (dialog) {
        
        console.log(dialog.message())
        dialog.accept("jagadeesh kumar")
    })
    console.log("alert popup")
    await page.locator("#alertBtn").click()

    console.log("confirmation alert")
    await page.locator("#confirmBtn").click()

    console.log("prompt alert")
    await page.locator("#promptBtn").click()

})

test("practise nested frames", async ({page}) => {
    await page.goto("https://demo.automationtesting.in/Frames.html")
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.getByText("Iframe with in an Iframe", {exact:true}).click()
    // Access nested frame
    const frameLocator = page.frameLocator("#Multiple iframe")
    const nestedFrame = frameLocator.frameLocator(".iframe-container iframe")
    
    // Identify and fill test box in nested frame
    await nestedFrame.locator("input[type='text']").fill("Nested Frame Test")

    
    // Assertion for nested frame input
    await expect(nestedFrame.locator("input[type='text']")).toHaveValue("Nested Frame Test")
    
    // Click home button
    await page.getByRole('link', {name: "Home"}).click()
    
    // Validate email field assertion
    await expect(page.locator("#email")).toBeVisible()
})