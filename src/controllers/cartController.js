const debug = require('debug')('app:cartController');// We must tell debug where to install and run npm i debug//

const Cart = new require('../models/cart');


function cartController(nav, homenav){
    const cart = [];
    let id = 0;
    let counter = 0;

    function addToCart(req, res){
        const item = req.params;
        Cart.addToCart(item, id, cart);
        id += 1;
        counter += 1;
        req.session.counter = counter;
        res.redirect('/menu')


    }
    function deleteFromCart(req, res){
       const item = req.params;
       Cart.deleteFromCart(item, cart);
       counter -= 1;
       req.session.counter = counter;
       res.redirect('/cart')
    }
    function showCart(req, res){
       const total = Cart.cartTotal(cart);
        res.render('cart', {homenav, title: "Food Cart", cart, total});
    }
    function cartCount() {
        return counter;
    }
    return{
        addToCart,
        deleteFromCart,
        showCart,
        cartCount, // to menuController to show cart count in menu.ejs
    }
}

module.exports = cartController;
