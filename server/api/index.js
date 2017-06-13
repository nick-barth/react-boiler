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
	const name = req.query.name;

	champ.findOne({ name: new RegExp(name, 'i') }, function (err, champ) {
		res.json(champ);
	});
};

// GET champions
exports.getAllChamps = function (req, res) {
	champ.find({}, 'name id', function (err, champs) {
		res.json(champs);
	});
};
