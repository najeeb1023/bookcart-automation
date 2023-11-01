import { Given, When,Then, setDefaultTimeout } from "@cucumber/cucumber"
import {chromium , Page ,Browser, _android } from "@playwright/test"

let browser: Browser;
let page:Page;

Given('navigates to the application', async function (){
    browser = await chromium.launch({headless: false});
    page = await browser.newPage();
    await page.goto('https://bookcart.azurewebsites.net/');
});

Given ('clicks on the login link', async function (){
    await page.locator("//span[text()='Login']").click()

})
Given('Enter the username as {string}',async function(username: string){
    await page.locator("input[formcontrolname='username']").type(username);
});

Given('Enter the password as {string}',async function(password: string) {
   await page.locator("input[formcontrolname='password']").type(password);
});
When('Click on the login button',async function() {
    await page.locator("button[color='primary']").click();

});


Then('User click to fiction category book',async function () {
    await page.locator("//div[@class='filter-container']").getByText('Romance').click()
});

Then('User is able to select Wicked and the Wallflower Sarah MacLean bookcart', async function() {
    await page.locator("//div[@class='card-title']").first().getByText('HP3').click()
})
