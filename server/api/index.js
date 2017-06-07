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
    const id = req.params.id;

    champ.find({ id: id }).exec(function (err, champ) {
        res.send(JSON.stringify(champ));
    });
};

exports.getAllChamps = function (req, res) {
    champ.find({}, 'name id img', function (err, champs) {
        res.send(JSON.stringify(champs));
    });
};
