module.exports = {
  DB: {
    test: 'mongodb://localhost/recipeit-test',
    dev: 'mongodb://recipeIT:recipeIT@ds149201.mlab.com:49201/recipeit'
},
  PORT: {
    test: 3090,
    dev: 3000
  }
};

// 'mongodb://recipeIT:recipeIT@ds149201.mlab.com:49201/recipeit', // To hide on production on process.env.DB