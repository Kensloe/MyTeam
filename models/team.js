const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    name: String,
    country: String,
    league: String,
  }, {
      timestamps: true
  });

  

module.exports = mongoose.model('team', teamSchema);