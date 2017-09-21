//Mongoose
const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

//Schemas
const champ = require('./schemas/champ.js').Champ;
const matchup = require('./schemas/matchup.js').Matchup;

//connect to database
mongoose.connect('mongodb://admin_test:test12@ds139262.mlab.com:39262/quakechampselect');


// GET champion
exports.getChampion = function (req, res) {
	const name = req.query.name;

	champ.findOne({ name: new RegExp(name, 'i') }, function (err, champ) {
		res.json(champ);
	});
};

// GET champions
exports.getChampions = function (req, res) {
	champ.find({}, 'name id tagline', function (err, champs) {
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

// GET matchups
exports.getMatchup = function (req, res) {
	const champ1 = req.query.champ1;
	const champ2 = req.query.champ2;

	matchup.find({ 'champions.name': { $all: [new RegExp(champ1, 'i'), new RegExp(champ2, 'i')] } }, function (err, matchups) {
		res.json(matchups);
	});
};

// Add tip
exports.addTip = function (req, res) {
	const name = req.body.champ;
	const tip = req.body.tip;

	champ.findOne({ name: new RegExp(name, 'i') }, function (err, champ) {
		champ.tips.push({ tip: tip, up: 0, down: 0 });
		champ.save();
		res.json(champ);
	});
};

// Add tip
exports.updateTip = function (req, res) {
	const id = req.body.id;
	const direction = req.body.direction;

	if (direction === 1) {
		champ.findOneAndUpdate({ 'tips._id': id }, {  $inc: { 'tips.$.up': 1 } }, function (err, docs) {
			res.json(docs);
		});
	}
	else {
		champ.findOneAndUpdate({ 'tips._id': id }, {  $inc: { 'tips.$.down': 1 } }, function (err, docs) {
			res.json(docs);
		});
	}
};

// Post matchups
exports.updateMatchup = function (req, res) {
	const champ1 = req.query.champ1;
	const champ2 = req.query.champ2;
	const update = req.query.update;

	matchup.findOne({ 'champions.name': { $all: [new RegExp(champ1, 'i'), new RegExp(champ2, 'i')] } }, function (err, matchups) {
		const indexOf =  matchups.champions.findIndex(x => x.name === update.name);
		const set = {};

		if (update.up) {
			set['champions.' + indexOf + '.up'] = update.up;
		}
		else {
			set['champions.' + indexOf + '.down'] = update.down;
		}

		matchup.findOneAndUpdate({ 'champions.name': { $all: [new RegExp(champ1, 'i'), new RegExp(champ2, 'i')] } }, { $set: set }, function (err, docs) {
			if (err) {
				throw err;
			}

			matchup.find({ 'champions.name': new RegExp(champ1, 'i') }, function (err, matchups) {
				res.json(matchups);
			});
		});
	});


};
