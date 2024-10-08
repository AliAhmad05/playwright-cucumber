const { test, expect, chromium } = require('@playwright/test') // Use test for creating Playwright tests and expect for assertions
const { Given, When, Then, BeforeAll, AfterAll, setDefaultTimeout } = require('@cucumber/cucumber')

let browser
let page  

setDefaultTimeout(10 * 1000)

BeforeAll(async () => {
  browser = await chromium.launch({ headless: false })
  page = await browser.newPage()
})
AfterAll(async () => {
  await page.close()
  await browser.close()
})

Given('The user is on the Bldrtest home page', async () => {
  
  await page.goto('https://bldrtest.com/pkg/')
})

Then('The user should see Query Generator button', async () => {
  await expect(page.getByRole('button', { name: 'Query Generator' })).toBeVisible()
})

When('Click on the field and type {string}', async (text) => {
 
  await page.locator('[id="input0"]').fill(text)
  await page.locator('[id="input0"]').press('Enter')
})

Then('Verify that all the data is displayed', async () => { 
  const expectedTextArray = ['Anita (Person)',
                              'Event (Event)',
                              'Sample (Person)', 
                              'Sample Person (Person)', 
                              'Delhi (Person)', 
                              'CAR SHow (Location)']

  for (const expectedText of expectedTextArray) {
    await expect(page.locator('[id="rpContainer_1"]')).toContainText(expectedText)
  }
  await page.waitForTimeout(4000)
})