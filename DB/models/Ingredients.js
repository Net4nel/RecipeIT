var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IngredientSchema = new Schema({
	name: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Ingredients', IngredientSchema);