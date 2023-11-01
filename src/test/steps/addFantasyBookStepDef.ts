import{Given ,When,Then,setDefaultTimeout} from "@cucumber/cucumber"
import {pageFixture} from "../../hooks/pageFixture";
import{AddFantasy } from "../../pages/addFantasyBook";
import { AddFiction } from "../../pages/addFictionBook";

setDefaultTimeout(60 * 1000 * 2)

Given('navigates to the application', async function (){
    await pageFixture.page.goto('https://bookcart.azurewebsites.net/');
} );
Then('User click to fantasy category book', async function (){
    let tabelBook = new AddFantasy(pageFixture.page);
    await tabelBook.tableBook();
})

Then ('User is able to select The choosen book', async function () {
    let bookSelected = new AddFantasy(pageFixture.page);
    await bookSelected.bookSelected();
})