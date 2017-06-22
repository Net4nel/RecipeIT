var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PackSchema = new Schema({
	name: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Packs', PackSchema);
