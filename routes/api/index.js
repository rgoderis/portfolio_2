const router = require('express').Router();
const controller = require('../../controllers/controller');

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  });

module.exports = router