const data = require('../data.json');

//returns ALL users and ALL data
module.exports = (req, res) => {
  const users = data.users;

  res.status(200).json({ users });
};
