import { Page, expect } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";


export class Login {

    loginPageLocators = {
        usernameField:() => pageFixture.page.locator("//input[@formcontrolname='username']"),
        passwordField:() => this.page.locator("//input[@formcontrolname='password']"),
        loginBtn:() => this.page.locator("button[color='primary']"),
        goToLogin:() => this.page.locator("//span[text()='Login']"),
        errorMessage:() => this.page.locator("//div[@class='docs-example-viewer-body']"),
        bookCategoryTable:() => this.page.locator("//div[@class='filter-container']")
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
        
        expect (this.loginPageLocators.errorMessage()).toContainText('Username or Password is incorrect');
        //await pageFixture.page.waitForTimeout(6000);
        
    }

    public async assertSuccessFulLogin():Promise<void>{
        await pageFixture.page.waitForTimeout(6000);
        expect (this.loginPageLocators.bookCategoryTable()).toBeVisible();
    }

}