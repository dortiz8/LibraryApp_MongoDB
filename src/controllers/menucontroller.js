const { MongoClient } = require('mongodb');
const debug = require('debug')('app:menuRoutes');// We must tell debug where to install and run npm i debug//

function menuController(nav){

    const url = 'mongodb://localhost:27017'; // request url for db
    const dbName = 'LaFuente-Menu'; // db name
    const collection = 'menuItems';
    function getIndex(req, res){
        const counter = req.session.counter; // counter from cartController
        (async function mongo() {
            let client;
            try {
                client = await MongoClient.connect(url);
                debug(`Successfully connected to DB: ${dbName}`);

                const db = client.db(dbName);

                const col = await db.collection(collection);
                this.menuItems = await col.find().toArray();

                res.render('menu', {nav, title: "Nuestro Menu", menuItems, counter});

            } catch (error) {
                debug(error);
            }
            client.close();
        }())

    }
    
    return{
        getIndex
    }
}

module.exports = menuController;
