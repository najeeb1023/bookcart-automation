import { BeforeAll, AfterAll, After, Before } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "@playwright/test";
import { pageFixture } from "./pageFixture";

let page: Page;
let browser: Browser;


Before (async function () {
    browser = await chromium.launch({headless: true});
    page = await browser.newPage();
    pageFixture.page = page;

});

AfterAll (async function (){
    await pageFixture.page.close();
    await browser.close();
})

