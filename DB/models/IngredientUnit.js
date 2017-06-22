var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IngredientUnitSchema = new Schema({}, {strict: false});

module.exports = mongoose.model('ingredientunit', IngredientUnitSchema);