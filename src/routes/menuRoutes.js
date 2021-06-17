const express = require('express');
const { MongoClient } = require('mongodb');

const menuController = require('../controllers/menucontroller');


const menuRouter = express.Router(); // sets a router
const debug = require('debug')('app:menuRoutes');// We must tell debug where to install and run npm i debug/
function router(nav){
    const { getIndex } = menuController(nav);
    menuRouter.route('/')
    .get(getIndex);
    menuRouter.route('/toppings/:id')
    .get()

    return menuRouter;
}

module.exports = router;
