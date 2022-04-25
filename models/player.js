const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    name: string,
    position: string,
    updated: { type: Date, default: Date.now()},
age: { type: Number, min: 18, max: 40, required: true },   
});

module.exports = mongoose.model('Player', playerSchema);