import {test, expect} from '@playwright/test';
test("spicejet sighup", async ({page}) => {
    await page.goto("https://spiceclub.spicejet.com/signup")
    await page.setViewportSize({ width: 1920, height: 1080 });
  //  await page.locator(".form-select").selectOption("Mr")
    await page.locator('[class="form-control form-select "]').selectOption('MR');
    await page.locator("#first_name").fill("liyansh")
    await page.locator('#last_name').fill("nandan")
    await page.locator('[value="+91"]').fill("9586485222")
    await page.locator("#email_id").fill("liyansh.nandan@gmail.com")
    await page.locator("#new-password").fill("Liyansh@123")
    await page.locator("#c-password").fill("Liyansh@123")

})