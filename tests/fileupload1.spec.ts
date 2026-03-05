import {test, expect} from '@playwright/test'
import path from 'path'

test("File uploads handling1", async ({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    // setInputFiles() - uploading the file(s)

   // console.log(__dirname) //C:\Users\prave\Music\QEdgePWTSJan26\tests
    const filePath1 = path.join(__dirname, "../TestData/discharge.pdf")
    //const filePath2 = path.join(__dirname, "../TestData/Cypress.txt")
    
    await page.locator("#filesToUpload").setInputFiles(filePath1)

    await expect(page.locator("#fileList li").first()).toHaveText("discharge.pdf")
   // await expect(page.locator("#fileList li").nth(1)).toHaveText("Cypress.txt")


})

test("hellofileupload", async ({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    console.log(__dirname)
    const file1 = path.join(__dirname,"../TestData/Hello world.txt")
    const file2 = path.join(__dirname,"../TestData/discharge.pdf")
    const file3 = path.join(__dirname,"../TestData/lab report.pdf")
    //console.log("path is: ",file1)

    await page.locator("#filesToUpload").setInputFiles([file1,file2,file3])
    await expect(page.locator("#fileList li").nth(0)).toHaveText("Hello world.txt")
    await expect(page.locator("#fileList li").nth(1)).toHaveText("discharge.pdf")
    await expect(page.locator("#fileList li").nth(2)).toHaveText("lab report.pdf")

})