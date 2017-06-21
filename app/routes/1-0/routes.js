module.exports = function(router,pageData) {
    
    var version = "1-0";

    //WILDCARD get /*
    router.get('/' + version + '/*', function (req, res, next) {
        //Set req.session.pageData for first time or if query string of reqResetData is present
        if(!req.session.pageData || req.query.reqResetData) {
            req.session.pageData = pageData
        }
        next();
    });

    //INDEX
    router.get('/' + version + '/index', function (req, res) {

        // Saves the selected account id to the session either from query string or as itself
        req.session.pageData.selectedAccount = req.query.accountID || req.session.pageData.selectedAccount

        //Render page
        res.render(version + '/index', {
            pageData: req.session.pageData
        });

    });
    router.post('/' + version + '/index', function (req, res) {

        //Find selected account from your data sets
        var _selectedAccount = req.session.pageData.accounts[req.session.pageData.selectedAccount]
        var _selectedAccountsUsers = _selectedAccount.users
        
        _selectedAccountsUsers.forEach(function(user, index) {
            user.age = req.session.data.accountusers[index]
        });
        
        //Render page
        res.render(version + '/index', {
            pageData: req.session.pageData
        });

    });

};