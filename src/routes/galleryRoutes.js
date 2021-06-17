const express = require('express');
const galleryRouter = express.Router(); // sets a router

function router(nav){
    galleryRouter.route('/')
    .get((req, res)=>{
       res.render('gallery', {nav, title: "Galeria"});
    })
    return galleryRouter;
}

module.exports = router;
