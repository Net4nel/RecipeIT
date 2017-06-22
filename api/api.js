const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('../.config.js');

const db = process.env.DB || config.DB[process.env.NODE_ENV];

const get = require('./controllers/get');
const post = require('./controllers/post');

mongoose.connect(db, (error) => {
  if (!error) {
    console.log(`connected to the Database: ${db}`);
  } else {
    console.log(`error connecting to the Database ${error}`);
  }
});

router.route('/').get((req, res) => {
  res.status(200).sendFile(__dirname + '/index.html');
});

router.route('/recipes').get(get.getRecipes);
router.route('/ingredients').get(get.getIngredients);
router.route('/units').get(get.getUnits);
router.route('/properties').get(get.getProperties);
router.route('/packs').get(get.getPacks);

router.use(bodyParser.json());

router.route('/recipes').post(post.postRecipe);
router.route('/properties').post(post.postProperties);

module.exports = router;