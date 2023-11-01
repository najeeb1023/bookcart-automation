import{Page, expect} from "@playwright/test";
import * as addFantasyBook from "..//test/resources/addFictionBook.json";
import { pageFixture } from "../hooks/pageFixture";
import { PageElement } from "../test/resources/interfaces/iPageElement";

function getResource(resourceName:string){
    return addFantasyBook.webElements.find((element: PageElement) => element.elementName == resourceName) as PageElement;
}

export class AddFantasy{
    fantasyBookLocator={
        bookCategoryTable: ()=> pageFixture.page.locator(getResource("bookCategoryTable").selectorValue),
        bookSelected:()=> pageFixture.page.locator(getResource("selectedBook").selectorValue)

    }
    constructor(public page :Page){
        pageFixture.page=page;
    }
    public async tableBook():Promise<void>{
        const el = await this.fantasyBookLocator.bookCategoryTable().getByText('Fantasy')
        await el.click();

    }
    public async bookSelected ():Promise<void>{
        const el = await this.fantasyBookLocator.bookSelected().getByText('The Chosen')
        await el.click();
    }
}