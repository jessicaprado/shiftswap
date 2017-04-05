module.exports = function(app, passport) {
    // loggedin
    app.get("/loggedin", function(req, res) {
        res.send(req.isAuthenticated() ? req.user : '0');
    });

    // Facebook auth routes
    app.get('/auth/facebook', function authenticateFacebook (req, res, next) {
            req.session.returnTo = '/#/openshifts';
            next ();
        },
        passport.authenticate ('facebook'));

    app.get('/auth/facebook/callback', function (req, res, next) {
        var authenticator = passport.authenticate ('facebook', {
            successRedirect : '/#/openshifts',
            failureRedirect : '/'
        });

        delete req.session.returnTo;
        authenticator (req, res, next);
    })
    // Facebook auth routes
    // app.get('/auth/facebook', function authenticateFacebook (req, res, next) {
    //         req.session.returnTo = '/#' + req.query.returnTo;
    //         next ();
    //     },
    //     passport.authenticate ('facebook'));
    //
    // app.get('/auth/facebook/callback',
    //     passport.authenticate('facebook', {
    //         successRedirect : '/#/openshifts',
    //         failureRedirect : '/'
    //     }));

    // handle logout
    app.post("/logout", function(req, res) {
        req.logOut();
        res.send(200);
    })
};