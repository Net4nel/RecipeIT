var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecipePropertySchema = new Schema({}, {strict: false});

module.exports = mongoose.model('recipeproperty', RecipePropertySchema);