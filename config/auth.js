module.exports = {
    ensureAuthenticate: function(req, res, next) {
        if(req.isAuthenticated()) {
            return next(null, res);
        }
        else {

            // Return directly this msg to user if not authenticated
            return next("MY Error Occured!");
        }
    }
}