var db = require("../models");
module.exports = function (app) {

//This is an express route example
//Load Create Account Page
app.get("/createAccount/", function(req, res) {
    res.render("createAccount");
});
}