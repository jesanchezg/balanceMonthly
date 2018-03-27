/*
 * Autor: jairo.sanchezgalvis
 * Since: 2018-03-16
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var schema = new Schema({
    id: {type: String, required: true},
    value: {type: Currency, required: true},
    date: {type: Date, default: Date.now, required: true},
    desc: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'} ,
    splitted: {type: Boolean, required: true}
});

module.exports = mongoose.model('Payment', schema);