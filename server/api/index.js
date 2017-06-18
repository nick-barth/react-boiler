//Mongoose
const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

//Config
const config = require('../config');

//Schemas
const champ = require('./schemas/champ.js').Champ;
const matchup = require('./schemas/matchup.js').Matchup;

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

// GET matchups
exports.getMatchups = function (req, res) {
	const name = req.query.name;

	matchup.find({ 'champions.name': new RegExp(name, 'i') }, function (err, matchups) {
		res.json(matchups);
	});
};
