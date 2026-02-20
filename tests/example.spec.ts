import {test, expect} from '@playwright/test';
// test("Page fixture", async function({page}){

//   await page.goto("https://www.google.com")
// })
// test ("First program",async ({page}) => {
//   await page.goto("https://www.bing.com")
// })

test ("CSS Selector",async ({page}) => {
  //launch url
  await page.goto("https://blazedemo.com/purchase.php")
  await page.setViewportSize({ width: 1920, height: 1080 });
  //await page.waitForTimeout(120000);
 // await page.getByTestId('inputName').click();//first name
  await page.locator('#inputName').fill('John Doe');
  //Fill address
  
//  await page.locator("#address")
 await page.locator("#address").fill("paragraph fill in the box")
 

await page.locator('#city').fill("Hyderabad")
await page.locator("[placeholder='State']").fill("Telangana")
await page.locator("[name='zipCode']").fill("852147")

await page.locator("#cardType").selectOption('American Express')

await page.locator("#creditCardNumber").fill("8545662233")
await page.locator("[name='creditCardMonth']").clear()
await page.locator("[name='creditCardMonth']").fill('10')
await page.locator("[placeholder='Year']").fill("2026")
await page.locator("[id='nameOnCard']").fill("Jagadeesh")
await page.locator('.btn.btn-primary').click();
await page.waitForTimeout(2000);
})

