/*
 * Autor: jairo.sanchezgalvis
 * Since: 2018-03-16
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator'); 

var schema = new Schema({
//    id: {type: String, required: true},
    name: {type: String, required: true},
    color: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    payments: [{type: Schema.Types.ObjectId, ref: 'Payment'}]
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);