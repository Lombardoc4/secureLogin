const data = require('../../data.json');

module.exports = (req, res) => {
  const plantId = req.params.plantId * 1;
  const plant = data.plants.find(p => p.id === plantId);

  res.status(200).json({ plant });
};
