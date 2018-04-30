var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/onetaxi');

var Client = mongoose.model('Client', {nome: String, idade: Number, cidade: String});
