const data = require('../../../data.json');

//returns ALL plants that belong to user
module.exports = (req, res) => {
  const userId = req.params.userId * 1;
  const plants = data.plants.filter(c => c.userId === userId);


  res.status(200).json({ plants });
};
