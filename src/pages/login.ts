import { Page, expect } from "@playwright/test";
import * as loginLocators from "../test/resources/loginLocators.json";
import { pageFixture } from "../hooks/pageFixture";
import { PageElement } from "../test/resources/interfaces/iPageElement";

    function getResource(resourceName: string){
        return loginLocators.webElements.find((element: PageElement) => element.elementName == resourceName) as PageElement;
    }

export class Login {

    loginPageLocators = {
        usernameField:() => pageFixture.page.locator(getResource('usernameField').selectorValue),
        passwordField:() => this.page.locator(getResource('passwordField').selectorValue),
        loginBtn:() => this.page.locator(getResource('loginBtn').selectorValue),
        goToLogin:() => this.page.locator(getResource('goToLogin').selectorValue),
        errorMessage:() => this.page.locator(getResource('errorMessage').selectorValue),
        bookCategoryTable:() => this.page.locator(getResource('bookCategoryTable').selectorValue)
    }
    constructor(public page: Page){
        pageFixture.page = page;
    }

    public async loginUser():Promise<void> {
         await this.loginPageLocators.loginBtn().click();
    }

    public async goToAdmin():Promise<void> {
        await this.loginPageLocators.goToLogin().click();
    }

    public async userName(username: string):Promise<void>{
        await this.loginPageLocators.usernameField().type(username);
    }
    public async passWord(password: string):Promise<void>{
        await this.loginPageLocators.passwordField().type(password);
    }

    public async assertFailedLogin():Promise<void>{
       await expect (this.loginPageLocators.errorMessage()).toContainText('Username or Password is incorrect');
    }

    public async assertSuccessFulLogin():Promise<void>{
        await expect (this.loginPageLocators.bookCategoryTable()).toBeVisible();
    }
}