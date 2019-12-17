var express = require('express');
var router = express.Router();
// Require mysql2
const mysql = require('mysql2');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// Add post() route - the .findOrCreate() function will first check for the object passed as the where property. If the object is not found then it is created. If the object already exists then it will not be created again.
router.post('/actors', function (req, res, next) {
  models.actor.findOrCreate({
    where: {
      first_name: req.body.first_name,
      last_name: req.body.last_name
    }
  })
  .spread(function(result, created) {
    if (created) {
      res.redirect('/actors/' + result.actor_id);
    } else {
      res.status(400);
      res.send('Actor already exists');
    }
  })
});
module.exports = router;
