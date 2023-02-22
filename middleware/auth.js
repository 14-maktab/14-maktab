module.exports = (req, res, next) => {
    if (!req.session.isAuth) {
        res.redirect("/14auth/login");
    }

    next();
};
