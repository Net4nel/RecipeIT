const {Recipes, Ingredients, Units, Properties, Packs, RecipeIngredient, RecipeProperty, RecipeTag} = require('../../DB/models/models');
const async = require('async');

const {findMatchingKeys} = require('../../lib/helpers');

/**
 * @method: getRecipes
 * @description: returns all recipes. If the request has a query type 'ingredients=ingredient1, ingredient2..'
 * it will find recipes that uses those ingredients.
 */
const getRecipes = (req, res, next) => {
	if (!Object.keys(req.query).length) {
		return Recipes.find({}, (err, recipes) => {
			return err ? next(err) : res.status(200).send({recipes: recipes});
		});
	} else if (req.query.ingredients) {
		const ingredients = req.query.ingredients.split(',');

		return async.parallel([
			getIngredientsIds.bind(null, ingredients),
			getRecipeIngredient
		], (err, [ingredients, recipeIngredient]) => {
			const recipeIds = findMatchingKeys(ingredients, recipeIngredient._doc);

			Recipes.find({_id: recipeIds}, (err, recipes) => {
				async.map(recipes, (recipe, next) => {
					const id = recipe._id.toString();

					async.parallel([
						getIngredientsByRecipe.bind(null, id),
						getPropertiesByRecipe.bind(null, id),
						getTagsByRecipe.bind(null, id)
					], (err, data) => {
						const wholeRecipe = recipe.toObject();

						wholeRecipe.ingredients = data[0];
						wholeRecipe.properties = data[1];
						wholeRecipe.tags = data[2];
						
						next(null, wholeRecipe);
					});
				}, (err, recipes) => {
					return err ? next(err) : res.status(200).send({recipes: recipes});
				});
			});
		});
	}

	return res.status(400).send({reason: 'Invalid query'});
};

/**
 * @method getIngredientsIds
 * @description finds the Ids stored in the DB matching the elements from the array. 
 * @param {Array} ingredients - strings
 * @param {Function} done - callback
 * @return {Array} with the ids found
 */
const getIngredientsIds = (ingredients, done) => {
	async.map(ingredients, (ingredient, next) => {
		Ingredients.findOne({name: ingredient.trim().toLowerCase()}, (err, ingredientFound) => {
			if (err) return next(err);
			if (!ingredientFound) {
				const newIngredient = new Ingredients({name: ingredient.trim().toLowerCase()});
				Ingredients.create(newIngredient, (err, newIngredient) => {
					return err ? next(err) : next(null, newIngredient._id);
				});
			} else {
				return err ? next(err) : next(null, ingredientFound._id.toString());
			}

		});
	}, (err, ingredients) => {
		return err ? done(err) : done(null, ingredients);
	});
};

/**
 * @method getPropertiesIds
 * @description finds the Ids stored in the DB matching the elements from the array 
 * @param {Array} properties - strings
 * @param {Function} done - callback
 * @return {Array} with the ids found
 */
const getPropertiesIds = (properties, done) => {
	async.map(properties, (property, next) => {
		Properties.findOne({name: property.trim().toLowerCase()}, (err, property) => {
			if (err) return next(err);
			if (!property) return next(null, null);

			return err ? next(err) : next(null, property._id.toString());
		});
	}, (err, properties) => {
		return err ? done(err) : done(null, properties);
	});
};

const getRecipeIngredient = (done) => {
	RecipeIngredient.findOne({name: 'recipeIngredient'}, (err, recipeIngredient) => {
		return err ? done(err) : done(null, recipeIngredient);
	});
};

const getIngredientsByRecipe = (recipeId, done) => {
	RecipeIngredient.findOne({name: 'recipeIngredient'}, [recipeId], (err, recipeIngredient) => {
		const ingredients = recipeIngredient._doc[recipeId];

		async.map(ingredients, (ingredient, next) => {
			Ingredients.findOne({_id: ingredient}, (err, ingredient) => {
				const name = ingredient ? ingredient.name : null;

				return err ? next(err) : next(null, name);
			});
		}, (err, ingredients) => {
			return err ? done(err) : done(null, ingredients);
		});
	});
};

const getPropertiesByRecipe = (recipeId, done) => {
	RecipeProperty.findOne({name: 'recipeProperty'}, [recipeId], (err, recipeProperty) => {
		const properties = recipeProperty._doc[recipeId];

		async.map(properties, (property, next) => {
			Properties.find({_id: property}, (err, property) => {
				const name = property.length ? property[0].name : null;

				return err ? next(err) : next(null, name);
			});
		}, (err, properties) => {
			properties = properties.filter(Boolean);
			return err ? done(err) : done(null, properties);
		});
	});
};

const getTagsByRecipe = (recipeId, done) => {
	RecipeTag.findOne({name: 'recipeTag'}, [recipeId], (err, recipeTag) => {
		return err ? done(err) : done(null, recipeTag._doc[recipeId]);
	});
};

const getRecipeProperty = (done) => {
	RecipeProperty.findOne({name: 'recipeProperty'}, (err, recipeProperty) => {
		return err ? done(err) : done(null, recipeProperty);
	});
};

const getIngredients = (req, res, next) => {
	Ingredients.find({}, (err, ingredients) => {
		return err ? next(err) : res.status(200).send({ingredients: ingredients});
	});
};

const getUnits = (req, res, next) => {
	Units.find({}, (err, units) => {
		return err ? next(err) : res.status(200).send({units: units});
	});
};

const getProperties = (req, res, next) => {
	Properties.find({}, (err, properties) => {
		return err ? next(err) : res.status(200).send({properties: properties});
	});
};

const getPacks = (req, res, next) => {
	Packs.find({}, (err, packs) => {
		return err ? next(err) : res.status(200).send({packs: packs});
	});
};

module.exports = {
	getRecipes,
	getIngredients,
	getIngredientsIds,
	getUnits,
	getProperties,
	getPropertiesIds,
	getPacks,
	getRecipeIngredient,
	getRecipeProperty
};