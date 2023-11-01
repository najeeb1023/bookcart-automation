import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber"
import { chromium, Page, Browser } from "@playwright/test"
import { Login } from "../../pages/login";

let browser: Browser;
let page: Page;

  Given('User navigates to the application', async function () {
    browser = await chromium.launch({headless: true});
    page = await browser.newPage();
    await page.goto('https://bookcart.azurewebsites.net/');
  });


  Given('User clicks on the login link', async function () {
    let loginUser = new Login(page);
    await loginUser.goToAdmin()
  });


  Given('User enter the username as {string}', async function (username: string) {
    let loginPage = new Login(page);
    await loginPage.userName(username);
  });


  Given('User enter the password as {string}', async function (password: string) {
    let loginPage = new Login(page);
    await loginPage.passWord(password);
  });



  When('User click on the login button', async function () {
    let loginPage = new Login(page);
    await loginPage.loginUser()
  });


  When('Login should be success', async function () {
    console.log('Runs 5')

  });
  

  When('Login should fail', async function () {
    console.log('Runs 5')

  });

