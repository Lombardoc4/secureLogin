
let User = require('../../models/user.model');

module.exports = (req, res) => {
    let user = new User(req.body);
    console.log(user);
    user.save()
      .then(user => {
        res.status(200).send('User has been submitted');
      })
      .catch(err => {
        res.status(400).send('User creation failed');
      });
};
