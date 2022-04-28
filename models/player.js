const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    name: String,
    position: String,
    country: String,
    age: { 
        type: Number, 
        min: 16, 
        max: 60, 
        required: true },   
});

module.exports = mongoose.model('Player', playerSchema);