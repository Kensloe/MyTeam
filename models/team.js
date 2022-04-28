const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: {
    type: String,
  },
  country: {
    type: String,
  },
  league: {
    type: String,
  },
  user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
  },
players:[{type: Schema.Types.ObjectId, ref: 'Player'}],

}, {
  timestamps: true
});


  

module.exports = mongoose.model('Team', teamSchema);