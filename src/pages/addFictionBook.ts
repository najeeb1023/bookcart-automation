import{ Page, expect } from "@playwright/test";
import{ pageFixture } from "../hooks/pageFixture";

export class AddFiction{
    fictionBookLocators ={
    bookCategoryTable: () => pageFixture.page.locator("//div[@class='filter-container']"),
    selectedbook:() => pageFixture.page.locator("//div[@class='card-title']"),
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
