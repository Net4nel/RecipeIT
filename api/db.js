var mongoose = require('mongoose');

//var dbUrl = 'mongodb://username:password@ds147965.mlab.com:47965/my_database';
var dbUrl = 'mongodb://Net4nel:netanel963147@ds149201.mlab.com:49201/recipeit'
mongoose.connect(dbUrl);


mongoose.connection.on('connected', function(){
    console.log('MongoDB connected to ' + dbUrl);
});

mongoose.connection.on('disconnected', function(){
    console.log('MongoDB disconnected from ' + dbUrl);
});

mongoose.connection.on('error', function(error){
    console.log('MongoDB error: ' + error);
});

//Bring in the models
require('./testData.model.js');
//require('./modelname.model.js');
