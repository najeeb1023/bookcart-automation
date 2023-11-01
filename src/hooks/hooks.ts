import { BeforeAll, AfterAll, After, Before, Status } from "@cucumber/cucumber";
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

After (async function ({ pickle, result }){
    console.log(result?.status);
    if(result?.status == Status.PASSED){
        const img = await pageFixture.page.screenshot({ path: `./test-result/screenshots/${pickle.name}.png`,type: "png"});
        await this.attach(img,"image/png");
    }

    
    await pageFixture.page.close();
    await context.close();
});


AfterAll (async function () {
    await browser.close()
})