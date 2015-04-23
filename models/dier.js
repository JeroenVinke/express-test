var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var DierSchema   = new Schema({
    name: String
});

module.exports = mongoose.model('Dier', DierSchema);
