var express = require('./config/server');
var dataconfig = require('./config/database');


express.listen(3000, function () {

    console.log('Servidor ON');
})