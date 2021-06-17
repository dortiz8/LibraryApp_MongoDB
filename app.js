const express = require('express');// List of requirements//
const chalk = require('chalk');// allows us to set colors on error messages and console messages//
const debug = require('debug')('app');// We must tell debug where to install and run npm i debug//
const morgan = require('morgan');// log messages to the console concerning web traffic
const path = require('path');// deals with cross platform concatenation of directory names
const session = require('express-session');

const app = express();
const port = process.env.PORT | 5000;

const homenav = [{ title: 'Ordena', link: '/menu' }, { title: 'Galeria', link: '/gallery' }, { title: 'Historia', link: '/story' }];
const nav = [{ title: 'Casa', link: '/' }, { title: 'Galeria', link: '/gallery' }, { title: 'Historia', link: '/story' }];

app.use(express.json())
app.use(morgan('tiny')); // diminishes the message log to show relevant information
app.use(express.static(path.join(__dirname, '/public/'))); // using everything that comes from public
app.use('/js', express.static(path.join(__dirname, '/public/js/index.js'))); // look here evertime you src reference /js/
app.use('/pics', express.static(path.join(__dirname, 'public/pics'))) // look here evertim you src reference /pics/
app.use(session({
    secret: 'some-secret',
    resave: false,
    saveUninitialized: false
}));

app.set('views', './src/views'); // sets a views directory for our templating engine
app.set('view engine', 'ejs'); // express will start to look a package called pug and sets it as template engine

//Routers
const adminRouter = require('./src/routes/adminRoutes')(); // remember to call the function
const menuRouter = require('./src/routes/menuRoutes')(nav); // remember to call the function
const cartRouter = require('./src/routes/cartRoutes')(nav, homenav); // remember to call the function
const galleryRouter = require('./src/routes/galleryRoutes')(nav); // remember to call the function
const storyRouter = require('./src/routes/storyRoutes')(nav); // remember to call the function

//Using Routers
app.use('/admin', adminRouter);
app.use('/menu', menuRouter);
app.use('/cart', cartRouter);
app.use('/gallery', galleryRouter);
app.use('/story', storyRouter);


app.get('/', (req, res) => {
    debug(req.session)
    req.session.userCount += 1;
    res.render('home', { homenav, title: "La Fuente", count: req.session.userCount });


})

app.listen(port, () => {
    debug(`Server started on port: ${chalk.bgBlueBright(port)}`);
})
