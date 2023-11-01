import { Given, When,Then, setDefaultTimeout } from "@cucumber/cucumber"
import { pageFixture } from "../../hooks/pageFixture";
import { AddFiction } from "../../pages/addFictionBook";

setDefaultTimeout(60 * 1000 * 2)

Given('navigates to the application', async function (){
    await pageFixture.page.goto('https://bookcart.azurewebsites.net/');
});

Then('User click to fiction category book',async function () {
    let bookTable = new AddFiction(pageFixture.page);
    await bookTable.bookTable();
});

Then('User is able to select Wicked and the Wallflower Sarah MacLean bookcart', async function() {
    let selectBook = new AddFiction(pageFixture.page)
    await selectBook.selectBook();
    
    
});
