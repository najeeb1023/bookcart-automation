import{ Page, expect } from "@playwright/test";
import * as addFictionBook from "../test/resources/addFictionBook.json";
import{ pageFixture } from "../hooks/pageFixture";
import { PageElement } from "../test/resources/interfaces/iPageElement";

    function getResource(resourceName: string){
        return addFictionBook.webElements.find((element: PageElement) => element.elementName == resourceName) as PageElement;
    }

export class AddFiction{
    fictionBookLocators ={
    bookCategoryTable: () => pageFixture.page.locator(getResource("bookCategoryTable").selectorValue),
    selectedbook:() => pageFixture.page.locator(getResource("selectedBook").selectorValue),
} 

constructor(public page:Page){
    pageFixture.page = page;
}

public async bookTable():Promise<void>{
    await this.fictionBookLocators.bookCategoryTable().getByText('Romance').click();
}
public async selectBook():Promise<void>{
    await this.fictionBookLocators.selectedbook().getByText('HP3').click();

}

} 
