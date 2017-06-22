var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecipeIngredientSchema = new Schema({}, {strict: false});

module.exports = mongoose.model('recipeingredient', RecipeIngredientSchema);