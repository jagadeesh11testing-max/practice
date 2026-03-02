import {test, expect} from '@playwright/test';
test("mouse oprtations", async ({page}) => {
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")
    await page.setViewportSize({ width: 1920, height: 1080 });
    //Right click button
    await page.getByText("right click me", {exact: true}).click({button : "right"})
    await expect(page.getByText("Quit", {exact: true})).toBeVisible()
})

test ("mouse oprtations double click", async ({page}) => {  
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.getByText("Double-Click Me To See Alert", {exact: true}).dblclick()
    await page.waitForTimeout(2000)
})

test ("mouse Drag and Drop", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    const source = page.locator("#draggable")
    const traget = page.locator("#droppable")
    await source.dragTo(traget)
    //await expect(page.locator("#droppable p")).toHaveText("Dropped!")


})