import puppeteer from 'puppeteer'

async function main() {


    const browser = await puppeteer.launch()

    const page = await browser.newPage()
    await page.goto('https://www.google.com/')

    const html = await page.evaluate(() => document.querySelector('html').innerHTML)

    await browser.close()
    
    return html

}

main()
    .then(console.log)