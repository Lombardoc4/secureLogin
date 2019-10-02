const router = require('express').Router();
// define the Express app

// retrieve all questions
router.get('/', (req, res) => {
  return res.status(200).json({ message: 'Connected!' });
});

router.post('/:usersId', (req, res) => {
  return res.send('Received a POST HTTP method \t' + req.params.usersId);
});


module.exports = router;
