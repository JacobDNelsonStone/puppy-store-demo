const router = require('express').Router();
const puppies = require('./puppies');

router.use('/puppies', puppies);


module.exports = router;