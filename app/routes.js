var express = require('express')
var router = express.Router()

////////////////////////////////////////////
// pageData object to pass to prototype versions //
////////////////////////////////////////////
var pageData = {
  // Fake Data JSON Files //
  accounts: {
    "account-1": require(__dirname + '/data/account-1.json'),
    "account-2": require(__dirname + '/data/account-2.json')
  }
}

//Version 1-0 routing
require('./routes/1-0/routes.js')(router,pageData);

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

module.exports = router