var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecipeSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	steps: {
		type: Array,
		required: true
	},
	imageData: {
		type: Object,
		required: false
	}
});

module.exports = mongoose.model('recipes', RecipeSchema);