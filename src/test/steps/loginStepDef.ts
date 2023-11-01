import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber"
import { chromium, Page, Browser } from "@playwright/test"
import { Login } from "../../pages/login";
import { pageFixture } from "../../hooks/pageFixture";

setDefaultTimeout(60 * 1000 * 2)

  Given('User navigates to the application', async function () {
    await pageFixture.page.goto('https://bookcart.azurewebsites.net/');
  });

  Given('User clicks on the login link', async function () {
    let loginUser = new Login(pageFixture.page);
    await loginUser.goToAdmin()
  });

  Given('User enter the username as {string}', async function (username: string) {
    let loginPage = new Login(pageFixture.page);
    await loginPage.userName(username);
  });

  Given('User enter the password as {string}', async function (password: string) {
    let loginPage = new Login(pageFixture.page);
    await loginPage.passWord(password);
  });

  When('User click on the login button', async function () {
    let loginPage = new Login(pageFixture.page);
    await loginPage.loginUser();
  });

  When('Login should be success', async function () {
    console.log('Sucessfully passed.');
  });
  

  When('Login should fail', async function () {
    console.log('Test ended.');
  });

