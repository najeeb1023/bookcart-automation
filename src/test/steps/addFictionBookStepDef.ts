import { Given, When,Then, setDefaultTimeout } from "@cucumber/cucumber"
import { pageFixture } from "../../hooks/pageFixture";

setDefaultTimeout(60 * 1000 * 2)

Given('navigates to the application', async function (){
   
    await pageFixture.page.goto('https://bookcart.azurewebsites.net/');
});

Given ('clicks on the login link', async function (){
    await pageFixture.page.locator("//span[text()='Login']").click()

})
Given('Enter the username as {string}',async function(username: string){
    await pageFixture.page.locator("input[formcontrolname='username']").type(username);
});

Given('Enter the password as {string}',async function(password: string) {
   await pageFixture.page.locator("input[formcontrolname='password']").type(password);
});
When('Click on the login button',async function() {
    await pageFixture.page.locator("button[color='primary']").click();

});


Then('User click to fiction category book',async function () {
    await pageFixture.page.waitForTimeout(6000)
    await pageFixture.page.locator("//div[@class='filter-container']").getByText('Romance').click();
});

Then('User is able to select Wicked and the Wallflower Sarah MacLean bookcart', async function() {
    await pageFixture.page.locator("//div[@class='card-title']").first().getByText('HP3').click();
})
