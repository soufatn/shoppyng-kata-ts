import { expect } from './expect';
import { Cart, Product } from '../src';



describe(`The cart`, () => {
    const Apples  = new Product('Apples',  2.00);
    const Bananas = new Product('Bananas', 1.50);
    const Rice = new Product('Rice', 2.70);
    const Coffee = new Product('Coffee', 4.50);

    it(`should show the total price of 0 when the shopping cart is empty`, () => {
        const cart = new Cart();
        expect(cart.totalPrice()).to.equal(0);
    });

    it(`should add 2 products to the shopping cart`, () => {
        const cart = new Cart();
        cart.addItem(Apples, 5);
        cart.addItem(Bananas, 2);

        expect(cart.getItems().length).to.equal(2);

        expect(cart.totalPrice()).to.equal(13.00);

    });

    it(`should delete 1 product from quantity from the shopping cart`, () => {
        const cart = new Cart();
        cart.addItem(Rice, 1);
        cart.addItem(Coffee, 2);

        cart.deleteItem(Coffee);

        expect(cart.getItems().length).to.equal(2);
        expect(cart.totalPrice()).to.equal(7.20);
    });

    it(`should delete 1 product from list from the shopping cart`, () => {
        const cart = new Cart();
        cart.addItem(Rice, 1);
        cart.addItem(Coffee, 2);

        cart.deleteItem(Rice);

        expect(cart.getItems().length).to.equal(1);
        expect(cart.totalPrice()).to.equal(9.00);
    });

});
