module.exports = {
    ensureAuthenticate: function(req, res, next) {
        if(req.isAuthenticated()) {
            return next(null, res);
        }
        else {
            return next("MY Error Occured!");
        }
    }
}