module.exports = function(req, res, next) {
    if (req.isAuthenticated())
        return next();
    else
        res.json({ error: "User not authenticated" });
}