process.env.NODE_ENV = 'production';

const async = require('async');
const mongoose = require('mongoose');

const models = require('../models/models');
const DB = require('../.config')[process.env.NODE_ENV];

const units = [
	new models.Units({name: 'מנה'}),
	new models.Units({name: 'מ"ל'}),
	new models.Units({name: 'ליטר'}),
	new models.Units({name: 'גרם'}),
	new models.Units({name: 'קילוגרם'}),
    new models.Units({name: 'כף'}),
    new models.Units({name: 'כפית'}),
    new models.Units({name: 'צרור'})
];

const properties = [
	new models.Properties({name: 'צמחוני'}),
	new models.Properties({name: 'טבעוני'}),
	new models.Properties({name: 'פיקנטי'}),
	new models.Properties({name: 'ללא גלוטן'}),
    new models.Properties({name: 'חריף אש!'}),
    new models.Properties({name: 'דיאטטי'})
];

const packs = [
	new models.Packs({name: 'ארוחות בוקר'}),
	new models.Packs({name: 'ארוחות ערב'}),
	new models.Packs({name: 'מסיבת חברים'}),
    new models.Packs({name: 'ערב רומנטי'}),
    new models.Packs({name: 'נשנושים'})
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