const puppeteer = require('puppeteer-extra')
import { PuppeteerExtraPluginRecaptcha } from 'puppeteer-extra-plugin-recaptcha'

export async function main() {

    puppeteer.use

    const browser = await puppeteer.launch({headless: false})

    const page = await browser.newPage()
    await page.goto('https://servicos.mte.gov.br/spme-v2/#/login', {waitUntil: 'networkidle2'})

    await page.click('.br-button.primary')

    await page.waitForSelector('#accountId')
    await page.type('#accountId', '49758458817')
    await page.click('.button-continuar')

    await page.waitForSelector('#password')
    await page.type('#password', 'Kaue.Altair.17')
    await page.click('#submit-button')

    await page.waitForNavigation()

    const html = 'oi'

    await browser.close()
    
    return html

}

main()
    .then(console.log)