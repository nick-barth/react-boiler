const mongoose = require('mongoose');

mongoose.set('debug', true);

const matchupSchema = new mongoose.Schema({
	champions: [{
		name: String,
		up: Number,
		down: Number
	}],
	tips: [{
		tip: String,
		up: Number,
		down: Number,
		author: String
	}]
});

const Matchup = mongoose.model('Matchup', matchupSchema);

module.exports = {
	Matchup: Matchup
};
