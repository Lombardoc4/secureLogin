const data = require('../../data.json');

//returns ALL users and ALL data
module.exports = (req, res) => {
  const plants = data.plants;

  res.status(200).json({ plants });

};
