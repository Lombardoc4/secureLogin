const data = require('../../data.json');

module.exports = (req, res) => {
  const userId = req.params.usersId * 1;
  const user = data.users.find(p => p.id === userId);

  res.status(200).json({ user });
};
