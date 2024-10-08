// const { BeforeAll, AfterAll, setDefaultTimeout } = require('@cucumber/cucumber')
// const {chromium } = require('@playwright/test')

// let browser
// let page

// setDefaultTimeout(10 * 1000)

// BeforeAll(async () => {
//   browser = await chromium.launch({ headless: false })
//   page = await browser.newPage()
// })
// AfterAll(async () => {
//   await page.close()
//   await browser.close()
// })