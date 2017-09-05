const mongoose = require('mongoose');

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
		user: String
	}]

});

const Matchup = mongoose.model('Matchup', matchupSchema);

module.exports = {
	Matchup: Matchup
};
