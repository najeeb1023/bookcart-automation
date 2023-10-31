import { Page } from "@playwright/test";

export class Login {

    loginPageLocators = {
        usernameField:() => this.page.locator("//input[@formcontrolname='username']"),
        passwordField:() => this.page.locator("//input[@formcontrolname='password']"),
        loginBtn:() => this.page.locator("button[color='primary']"),
        goToLogin:() => this.page.locator("//span[text()='Login']")
    }



    constructor(public page: Page){
        page = page;
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

}