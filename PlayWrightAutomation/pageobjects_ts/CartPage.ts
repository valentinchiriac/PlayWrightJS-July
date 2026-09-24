import {test, expect,Locator,Page} from '@playwright/test'; //import { Locator, Page } from 'playwright';
export class CartPage
{

cartProducts : Locator; //div li
productsText : Locator; 
cart :Locator;
orders : Locator;
checkout : Locator;
page : Page;

    
constructor(page: Page)
{
    this.page = page; //this code is used to initialize the page object with the provided Page instance, allowing the CartPage class to interact with the web page through Playwright's API.
    this.cartProducts = page.locator("div li").first(); //this is used to locate the first list item (li) within a div element on the page, which is likely representing a product in the cart.
    this.productsText = page.locator(".card-body b"); //this is used to locate all bold (b) elements within elements with the class card-body, which likely contain the names or details of the products in the cart.
    this.cart =  page.locator("[routerlink*='cart']");
    this.orders = page.locator("button[routerlink*='myorders']");
    this.checkout = page.locator("text=Checkout"); //this is used to locate a button or link with the exact text "Checkout" on the page, which is likely used to proceed to the checkout process for the items in the cart.

}

async VerifyProductIsDisplayed(productName:string)
{
   
    await this.cartProducts.waitFor();
    const bool =await this.getProductLocator(productName).isVisible();
    expect(bool).toBeTruthy();

}

async Checkout()
{
    await this.checkout.click();
}

 getProductLocator(productName:string)
{
    return  this.page.locator("h3:has-text('"+productName+"')");
}

}
module.exports = {CartPage};