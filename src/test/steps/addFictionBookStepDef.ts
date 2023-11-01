import { Given, When,Then, setDefaultTimeout } from "@cucumber/cucumber"
import { pageFixture } from "../../hooks/pageFixture";

setDefaultTimeout(60 * 1000 * 2)

Given('navigates to the application', async function (){
    await pageFixture.page.goto('https://bookcart.azurewebsites.net/');
});

Then('User click to fiction category book',async function () {
    await pageFixture.page.locator("//div[@class='filter-container']").getByText('Romance').click();
});

Then('User is able to select Wicked and the Wallflower Sarah MacLean bookcart', async function() {
    await pageFixture.page.locator("//div[@class='card-title']").first().getByText('HP3').click();
});
