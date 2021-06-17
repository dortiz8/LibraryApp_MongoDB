const { response } = require('express');
const express = require('express');
const { MongoClient } = require('mongodb');
const debug = require('debug')('app:adminRoutes');// We must tell debug where to install and run npm i debug//
const adminRouter = express.Router(); // sets a router
const menu = require('../menu');


function router() {
    adminRouter.route('/')
        .get((req, res) => {
            const url = 'mongodb://localhost:27017'; // request url for db
            const dbName = 'LaFuente-Menu'; // db name

            (async function mongo() {
                let client;
                try {
                    client = await MongoClient.connect(url);
                    debug(`Successfully connected to DB: ${dbName}`);

                    const db = client.db(dbName);

                    const result = await db.collection('menuItems').insertMany(menu);
                    res.json(result);
                } catch (error) {
                    debug(error);
                }
                client.close();
            }())
        })
    return adminRouter;
}

module.exports = router;
