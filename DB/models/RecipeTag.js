var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecipeTagSchema = new Schema({}, {strict: false});

module.exports = mongoose.model('recipetag', RecipeTagSchema);