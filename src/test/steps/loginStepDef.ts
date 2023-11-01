import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber"
import { chromium, Page, Browser } from "@playwright/test"

let browser: Browser;
let page: Page;

  Given('User navigates to the application', async function () {
    browser = await chromium.launch({headless: false, slowMo: 300});
    page = await browser.newPage();
    await page.goto('https://bookcart.azurewebsites.net/');
  });


  Given('User clicks on the login link', async function () {
    await page.locator("//span[text()='Login']").click();
    
  });


  Given('User enter the username as {string}', async function (username:string) {
    await page.locator("input[formcontrolname='username']").type(username);
  });


  Given('User enter the password as {string}', async function (password: string) {
    await page.locator("input[formcontrolname='password']").type(password);
  });



  When('User click on the login button', async function () {
    await page.locator("button[color='primary']").click();
  });


  Then('user should be login successfully', async function () {
    const text = await page.locator("//button[contains(@class, 'mat-focus-indicator mat-menu-trigger')]//span[1]").textContent() // to look into
    console.log("Username: "+text);
  });

  When('Login should fail', async function () {
    const failureMessage = page.locator("mat-error[role='alert']");

  });

