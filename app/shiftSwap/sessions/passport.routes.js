module.exports = function(app, passport) {
    // loggedin
    app.get("/loggedin", function(req, res) {
        res.send(req.isAuthenticated() ? req.user : '0');
    });


    // Facebook auth routes
    app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));

    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect : '/#/openshifts',
            failureRedirect : '/'
        }));

    // handle logout
    app.post("/logout", function(req, res) {
        req.logOut();
        res.send(200);
    })
};