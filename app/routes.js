var express = require('express')
var router = express.Router()

////////////////////////////////////////////
// myData object to pass to prototype versions //
////////////////////////////////////////////
var myData = {
  // Fake Data JSON Files //
  accounts: {
    "account-1": require(__dirname + '/data/account-1.json'),
    "account-2": require(__dirname + '/data/account-2.json'),
    "account-3": require(__dirname + '/data/account-3.json')
  }
}

//Version 1-0 routing
//Pass myData variable as parameter into version specific routes file
require('./routes/1-0/routes.js')(router,myData);

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

module.exports = router