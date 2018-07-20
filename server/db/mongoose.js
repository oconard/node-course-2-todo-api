var mongoose = require('mongoose');

var date = new Date();
date = date.getTime();


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose}
