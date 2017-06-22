process.env.NODE_ENV = 'production';

const async = require('async');
const mongoose = require('mongoose');

const models = require('../models/models');
const DB = require('../.config')[process.env.NODE_ENV];

const units = [
	new models.Units({name: 'liter'}),
	new models.Units({name: 'mili-liter'}),
	new models.Units({name: 'gram'}),
	new models.Units({name: 'kilo-gram'}),
	new models.Units({name: 'number'}),
];

const properties = [
	new models.Properties({name: 'spicy'}),
	new models.Properties({name: 'dairy'}),
	new models.Properties({name: 'veggie'}),
	new models.Properties({name: 'super spicy'})
];

const packs = [
	new models.Packs({name: 'morning pack'}),
	new models.Packs({name: 'dessert pack'})
];

const recipeTag = [
	new models.RecipeTag({name: 'recipeTag'})
];

const recipeIngredient = [
	new models.RecipeIngredient({name: 'recipeIngredient'}),
];

const recipeProperty = [
	new models.RecipeProperty({name: 'recipeProperty'}),
];

const ingredientUnit = [
	new models.IngredientUnit({name: 'ingredientUnit'}),
];

function saveUnits (next) {
	models.Units.create(units, err => err ? next(err) : next(null, units));
}

function saveRecipeTag (next) {
	models.RecipeTag.create(recipeTag, (err) => err ? next(err) : next(null, recipeTag));
}

function saveProperties (next) {
	models.Properties.create(properties, err => err ? next(err) : next(null, properties));
}

function savePacks (next) {
	models.Packs.create(packs, (err) => err ? next(err) : next(null, packs));
}

function saveRecipeIngredient (next) {
	models.RecipeIngredient.create(recipeIngredient, (err) => err ? next(err) : next(null, recipeIngredient));
}

function saveRecipeProperty (next) {
	models.RecipeProperty.create(recipeProperty, (err) => err ? next(err) : next(null, recipeProperty));
}

function saveingredientUnit (next) {
	models.IngredientUnit.create(ingredientUnit, (err) => err ? next(err) : next(null, ingredientUnit));
}


mongoose.connect(DB, err => {
	if (err) {
		console.log(JSON.stringify(err));
		return process.exit();
	}

	mongoose.connection.db.dropDatabase();

	async.parallel([
		saveUnits,
		saveProperties,
		savePacks,
		saveRecipeIngredient,
		saveRecipeProperty,
		saveingredientUnit,
		saveRecipeTag
	], (err) => {
		if (err) {
			console.log(JSON.stringify(err));
			process.exit();
		}
		console.log('Done seeding!');
		process.exit();
	});
});