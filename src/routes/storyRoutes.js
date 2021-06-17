const express = require('express');
const storyRouter = express.Router(); // sets a router

function router(nav){
    storyRouter.route('/')
    .get((req, res)=>{
       res.render('story', {nav, title: "Historia"});
    })
    return storyRouter;
}

module.exports = router;
