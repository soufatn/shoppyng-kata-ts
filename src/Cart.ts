import { Product } from './Product';
import { CartItem } from './CartItem';

export class Cart {
    constructor(public items: CartItem[] = []) {
    }

    addItem(product: Product, quantity: number) {
        const foundIndex = this.items.findIndex((cartItem) => cartItem.product === product);
        const productInCart = this.items.find((cartItem) => cartItem.product === product);
        if (productInCart) {
            productInCart.quantity += quantity;
            productInCart.totalPrice = productInCart.quantity * product.price;
            this.items[foundIndex] = productInCart;
        } else {
            this.items.push(new CartItem(product, quantity, quantity * product.price));
        }
    }

    deleteItem(product: Product) {
        const foundIndex = this.items.findIndex((cartItem) => cartItem.product === product);
        const productInCart = this.items.find((cartItem) => cartItem.product === product);
        if (productInCart) {
            if (productInCart.quantity > 1) {
                productInCart.quantity -= 1;
                productInCart.totalPrice = productInCart.quantity * product.price;
                this.items[foundIndex] = productInCart;
            } else {
                this.items = this.items.filter((cartItem) => cartItem.product !== product);
            }
        }
    }

    getItems() {
        return this.items;
    }

    totalPrice() {
        return this.items.reduce((total, item) => total + item.totalPrice, 0);
    }
}
