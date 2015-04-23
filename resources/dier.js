module.exports = function(router) {

  var Dier = require('../models/dier');

  router.route('/dieren')
    .post(function(req, res) {
      var dier = new Dier();
      dier.name = req.body.name;

      dier.save(function(err) {
        if (err)
          res.send(err);

        res.json({ message: 'Dier toegevoegd!' });
      })
    })
    .get(function(req, res) {
      Dier.find(function(err, dieren) {
        if (err)
          res.send(err);

        res.json(dieren);
      });
    });
}
