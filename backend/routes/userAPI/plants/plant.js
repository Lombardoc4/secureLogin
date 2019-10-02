const data = require('../../../data.json');

//returns ONE plants that belong to user
module.exports = (req, res) => {
  const userId = req.params.userId * 1;
  const plants = data.plants.filter(c => c.userId === userId);

  const plantId = req.params.plantId * 1;
  const plant = plants.find(p => p.id === plantId)

  res.status(200).json({ plant });
};
