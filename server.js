
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dieren');


var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 9001;
var router = express.Router();






app.use('/api', router);

require('./resources/index')(router);

app.listen(port);
console.log('Port: ' + port);
