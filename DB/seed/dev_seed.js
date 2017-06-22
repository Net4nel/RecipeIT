const async = require('async');
const mongoose = require('mongoose');

const models = require('../models/models');
const DB = require('../.config').dev;

const recipes = [
	new models.Recipes({name: 'Pizza', steps: 'go to the supermarket'}),
	new models.Recipes({name: 'Pasta', steps: 'go to an italian restaurant'}),
	new models.Recipes({name: 'Cake', steps: 'go to the bakery'})
];

const ingredients = [
	new models.Ingredients({name: 'flour'}),
	new models.Ingredients({name: 'tomato'})
];

const units = [
	new models.Units({name: 'liter'}),
	new models.Units({name: 'gram'})
];

const properties = [
	new models.Properties({name: 'spicy'}),
	new models.Properties({name: 'dairy'})
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

function saveRecipes(next) {
	models.Recipes.create(recipes, err => err ? next(err) : next(null, recipes));
}

function saveIngredients(next) {
	models.Ingredients.create(ingredients, err => err ? next(err) : next(null, ingredients));
}

function saveUnits(next) {
	models.Units.create(units, err => err ? next(err) : next(null, units));
}

function saveRecipeTag(next) {
	models.RecipeTag.create(recipeTag, (err) => err ? next(err) : next(null, recipeTag));
}

function saveProperties(next) {
	models.Properties.create(properties, err => err ? next(err) : next(null, properties));
}

function savePacks(next) {
	models.Packs.create(packs, (err) => err ? next(err) : next(null, packs));
}

function saveRecipeIngredient(next) {
	models.RecipeIngredient.create(recipeIngredient, (err) => err ? next(err) : next(null, recipeIngredient));
}

function saveRecipeProperty(next) {
	models.RecipeProperty.create(recipeProperty, (err) => err ? next(err) : next(null, recipeProperty));
}

function saveingredientUnit(next) {
	models.IngredientUnit.create(ingredientUnit, (err) => err ? next(err) : next(null, ingredientUnit));
}


mongoose.connect(DB, err => {
	if (err) {
		console.log(JSON.stringify(err));
		return process.exit();
	}

	mongoose.connection.db.dropDatabase();
	
	async.parallel([
		saveRecipes,
		saveIngredients,
		saveUnits,
		saveProperties,
		savePacks,
		saveRecipeIngredient,
		saveRecipeProperty,
		saveingredientUnit,
		saveRecipeTag
	], (err, data) => {
		if (err) {
			console.log(JSON.stringify(err));
			process.exit();
		}
		const recipeId = data[0][0]._id;
		const recipeIdTwo = data[0][1]._id;
		const ingredientId = data[1][0]._id;

		models.RecipeIngredient.findOneAndUpdate(
			{name: 'recipeIngredient'}, 
			{$set: {[recipeId]: [ingredientId], [recipeIdTwo]: [ingredientId]}},
			{new: true},
			(err, doc) => {
			if (err) return console.log(err);

			console.log(doc);
			process.exit();
		});
		// console.log(data);
	});
});