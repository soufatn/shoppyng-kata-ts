import { Product } from './Product';
import { CartItem } from './CartItem';

export class Cart {
    constructor(public items: CartItem[] = []) {
    }

    addItem(product: Product, quantity: number) {
        this.items.push(new CartItem(product, quantity, quantity * product.price));
    }

    deleteItem(product: Product) {
        this.items.filter((cartItem) => cartItem.product === product).map((cartItem) => {
            if (cartItem.quantity > 1) {
                cartItem.quantity = cartItem.quantity - 1;
                cartItem.totalPrice = cartItem.quantity * product.price;
            } else {
                this.items = this.items.filter((cartItem) => cartItem.product !== product);
            }
        })

    }

    getItems() {
        return this.items;
    }

    totalPrice() {
        return this.items.reduce((total, item) => total + item.totalPrice, 0);
    }
}
