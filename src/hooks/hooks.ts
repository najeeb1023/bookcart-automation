import { BeforeAll, AfterAll, After, Before } from "@cucumber/cucumber";
import { chromium, Browser, Page, BrowserContext } from "@playwright/test";
import { pageFixture } from "./pageFixture";
import { config } from "../../playwright.config";

let page: Page;
let browser: Browser;
let context: BrowserContext;

BeforeAll (async function () {
    browser = await chromium.launch({headless: true});
}); 

Before (async function () {
    context = await browser.newContext(config)
    const page = await context.newPage();
    pageFixture.page = page;

});

After (async function (){
    await pageFixture.page.close();
    await context.close();
});


AfterAll (async function () {
    await browser.close()
})