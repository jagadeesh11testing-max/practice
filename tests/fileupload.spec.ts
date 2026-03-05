import {test, expect} from '@playwright/test'
import path from 'node:path'


test("Upload file", async ({page})=>{

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    await page.locator("#filesToUpload").setInputFiles([
        "D:/PlayWright/feb2026/node_modules/TestData/discharge.pdf", 
        "D:/PlayWright/feb2026/node_modules/TestData/lab report.pdf"
    ])

    await expect(page.locator("#fileList li").nth(0)).toHaveText("discharge.pdf")
    await expect(page.locator("#fileList li").nth(1)).toHaveText("lab report.pdf")

})


test ("file handling", async ({page})=>{

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    console.log("directory:  ",__dirname)
    //const file1 = path.join(__dirname,"../TestData/discharge.pdf")
//    console.log("file1 lan path; ",file1)
//    await page.locator("#filesToUpload").setInputFiles([file1])


    const filePath1 = path.join(__dirname, "../TestData/discharge.pdf")
    await page.locator("#filesToUpload").setInputFiles(filePath1)
    
    
})


test("file upload handle", async ({page})=>{
        await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
        
        const filePath = path.join(__dirname, "../TestData/discharge.pdf")
        await page.locator("#filesToUpload").setInputFiles(filePath)
        
        await expect(page.locator("#fileList li").nth(0)).toHaveText("discharge.pdf")
    })


