

function orderController(nav){
    let list = [];
    let itemCounter = 0;
    function addToCart(req, res, next){
    list.push(req.params);
    itemCounter += 1;
      res.redirect('/menu')
    }
    function showCart(req, res, next){
        res.render('cart', {nav, list, title: "Item Cart", itemCounter});
    }
    return{
        addToCart,
        showCart
    }
}

module.exports = orderController;
