const data = require('../data.json');

//returns ALL users and ALL data
module.exports = (req, res) => {
  const userId = req.params.userId * 1;
  const plants = data.plant.filter(c => c.userId === userId);

  res.status(200).json({ plants });

};
