var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PropertySchema = new Schema({
	name: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('properties', PropertySchema);