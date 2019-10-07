const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Users = new Schema({
  username: {
    type: String
  },
  password: {
    type: String
  },
  email: {
    type: String
  },

});

module.exports = mongoose.model('users', Users);
