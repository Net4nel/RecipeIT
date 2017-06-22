const async = require('async');

const {Recipes, Properties, RecipeIngredient, RecipeTag, RecipeProperty} = require('../../DB/models/models');
const {getIngredientsIds, getPropertiesIds} = require('./get');

/**
 * @method postRecipe
 * @description posts a new recipe. Also, verifies if the ingredients already exists or not, creating new ones 
 * when required.
 */
exports.postRecipe = (req, res, next) => {
	const {name, tags, ingredients, steps, properties, imageData} = JSON.parse(req.body.newRecipe);

	const newRecipe = new Recipes({name: name, steps: steps, imageData: imageData});

	Recipes.create(newRecipe, (err, newRecipe) => {
		if (err) return next(err);

		async.parallel([
			getIngredientsIds.bind(null, ingredients),
			getPropertiesIds.bind(null, properties)
		], (err, [ingredientsId, propertiesId]) => {

			async.parallel([
				updateRecipeIngredient.bind(null, newRecipe._id, ingredientsId),
				updateRecipeProperty.bind(null, newRecipe._id, propertiesId),
				updateRecipeTags.bind(null, newRecipe._id, tags)
			], (err) => {
				return err ? next(err) : res.status(204).send();
			});
		});
	});
};

/**
 * @method postProperties
 * @description allows to post as many properties sent on a request type "properties: property1, property2".
 * Does NOT check if the property already exists.
 */
exports.postProperties = (req, res, next) => {
	let properties = req.body.properties.split(',');

	async.map(properties, (property, next) => {
		const newProperty = new Properties({name: property.trim().toLowerCase()});
		Properties.create(newProperty, err => {
			return err ? next(err) : next(null, newProperty);
		});
	}, (err, properties) => {
		return err ? next(err) : res.status(201).send({properties: properties});
	});
};

/**
 * @method updateRecipeIngredient
 * @description updates recipeIngredient document with a recipeId key and value of ingredientsId
 * @param {string} recipeId 
 * @param {Array} ingredientsId -strings
 * @param {function} done - callback
 * @return {MongoDoc} with the updated recipeIngredient
 */
function updateRecipeIngredient(recipeId, ingredientsId, done) {
	RecipeIngredient.findOneAndUpdate(
		{name: 'recipeIngredient'},
		{$set: {[recipeId]: ingredientsId}},
		{new: true},
		(err, recipeIngredient) => {
			done(null, recipeIngredient);
		});
}

/**
 * @method updateRecipeProperty
 * @description updates recipeProperty document with a recipeId key and value of propertiesId
 * @param {string} recipeId 
 * @param {Array} propertiesId -strings
 * @param {function} done - callback
 * @return {MongoDoc} with the updated recipeProperty
 */
function updateRecipeProperty(recipeId, propertiesId, done) {
	RecipeProperty.findOneAndUpdate(
		{name: 'recipeProperty'},
		{$set: {[recipeId]: propertiesId}},
		{new: true},
		(err, recipeProperty) => {
			done(null, recipeProperty);
		});
}

/**
 * @method updateRecipeTag
 * @description updates recipeTag document with a recipeId key and value of tags
 * @param {string} recipeId 
 * @param {Array} tags -strings
 * @param {function} done - callback
 * @return {MongoDoc} with the updated recipeTag
 */
function updateRecipeTags(recipeId, tags, done) {
	const tagsTrimmed = tags.map(tag => tag.trim());

	RecipeTag.findOneAndUpdate(
		{name: 'recipeTag'},
		{$set: {[recipeId]: tagsTrimmed}},
		{new: true},
		(err, recipeTag) => {
			done(null, recipeTag);
		});
}