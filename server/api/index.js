//Mongoose
const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

//Config
const config = require('../config');

//Schemas
const champ = require('./schemas/champ.js').Champ;

//connect to database
mongoose.connect(config.api);

// GET champion
exports.getChamp = function (req, res) {
    champ.find({ id: req.parms.id }).exec(function (err, champ) {
        res.send(JSON.stringify(champ));
    });
};
