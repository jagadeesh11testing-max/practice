import {test, expect} from '@playwright/test';
// test("Page fixture", async function({page}){

//   await page.goto("https://www.google.com")
// })
// test ("First program",async ({page}) => {
//   await page.goto("https://www.bing.com")
// })

test ("Virgin America Test",async ({page}) => {

  //Home page
  await page.goto("https://blazedemo.com/")
  await page.setViewportSize({ width: 1920, height: 1080 });
  await expect(page.locator("h1")).toHaveText("Welcome to the Simple Travel Agency!")
  await page.locator('[name="fromPort"]').selectOption('Portland');
  await page.locator('[name="toPort"]').selectOption('Cairo');
  await page.getByRole('button', { name: 'Find Flights' }).click()
  await expect(page.locator("h3")).toHaveText("Flights from Portland to Cairo:")

  await page.getByRole('button', { name: 'Choose This Flight' }).nth(3).click()



//   //launch url
//   //await page.goto("https://blazedemo.com/purchase.php")
 
 // await page.waitForTimeout(120000);
 // await page.getByTestId('inputName').click();//first name
  await page.locator('#inputName').fill('John Doe')
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
  await expect(page.locator("h1")).toHaveText("Thank you for your purchase today!"  )

})

//using playwright locators
test ("Playwright locators",async function({page}) { 
  await page.goto("https://blazedemo.com/purchase.php")
  console.log("Launch the url successfully")
  await page.setViewportSize({ width: 1920, height: 1080 });


 // await page.getByLabel("Name").fill("Playwright Jagadeesh")
  
//  await page.getByPlaceholder("123 Main St.").fill("playwright test automation script")
  //await page.getByLabel("Address").fill("playwright test automation script")

  await page.getByPlaceholder("First Last").fill("place holder name")
  await page.getByPlaceholder("123 Main St.").fill("playwright test automation script")
  await page.getByRole("textbox", {name: 'city'}).fill("playwright Hyderabad")
  await page.getByRole("textbox", {name: 'state'}).fill("playwright telangana")
 // await page.getByRole("textbox", {name: 'zipCode'}).fill("698245")
  await page.getByRole('textbox', { name: 'Zip Code' }).fill('698245');

//  await page.getByRole("combobox").selectOption("amex")
  await page.locator("#cardType").selectOption('amex')

  await page.getByRole('textbox', {name: 'Month'}).fill("02")
  await page.getByRole("textbox", {name: 'Year'}).fill('2027')
  //await page.locator("[name='creditCardMonth']").fill("08")
//  await page.locator("#creditCardYear").fill('2026')
  await page.getByRole("textbox",{name: 'Name on Card'}).fill("Jagadeesh kumar")
  await page.getByRole("checkbox", {name: 'Remember me'}).click()
  await page.getByRole("button", {name: 'Purchase Flight'}).click()  
  await expect(page.locator("h1")).toHaveText("Thank you for your purchase today!")
  await page.waitForTimeout(2000);
  await expect(page).toHaveURL(/confirmation\.php/)
})
