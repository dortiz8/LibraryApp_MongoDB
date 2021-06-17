const express = require('express');
const cartRouter = express.Router(); // sets a router
const debug = require('debug')('app:menuRoutes');// We must tell debug where to install and run npm i debug/

const cartController = require('../controllers/cartController');


function router(nav, homenav){
    const { addToCart, showCart, deleteFromCart } = cartController(nav, homenav)

    cartRouter.route('/')
    .get(showCart);
    cartRouter.route('/add-to-cart/:name/:price')
    .get(addToCart);
    cartRouter.route('/delete-from-cart/:id')
    .get(deleteFromCart)
    cartRouter.route('/add-more-items')
    .get((req,res)=>{
        res.redirect('/menu')
    })
    return cartRouter;
}

module.exports = router;
