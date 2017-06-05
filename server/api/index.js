//Mongoose
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

//Config
const config = require('../config');

//Schemas
const champ = require('./schemas/champ.js').Champ;

//connect to database
const db = mongoose.connect(config.api);

exports.getChamp = function (req, res) {
    champ.find({id: req.params.id}).exec(function (err, champ) {
    if (err) return handleError(err);
    // returns all stories that have Bob's id as their author.
    res.send(JSON.stringify(champ));
    });
}
