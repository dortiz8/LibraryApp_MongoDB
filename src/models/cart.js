
const debug = require('debug')('app:cart');// We must tell debug where to install and run npm i debug/
module.exports = class Cart{
    constructor(){

    }


    static addToCart(item, id, cart) {
        item.id = id;
        cart.push(item);
        id += 1;
    }
    static deleteFromCart(item, cart){
        let id = parseInt(item.id);
        cart.forEach(key =>{
            if(id === key.id){
                cart.splice(cart.indexOf(key), 1);
            }

        })
    }
    static cartTotal(cart){
        let total = 0;
        cart.forEach(key =>{
            total += parseInt(key.price)
        })
        return this.currencyFormatter(total);
    }
    static emptyCart() {
        this.cartList = [];

    }
    static currencyFormatter(number){
        let currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);
        return currency
    }
}
