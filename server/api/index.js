const config = require('../config');
const mongoClient = require('mongodb').MongoClient;
const assert = require('assert');

let db;
//connect to database
mongoClient.connect(config.api, function(err, database) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db = database;
});

exports.getChamp = function (req, res) {
    const results = db.collection('champs').find();
    results.toArray(function(err, docs){
        res.send(JSON.stringify(docs));
    });
}
