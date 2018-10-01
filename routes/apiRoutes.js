var db = require("../models");
module.exports = function (app) {

//This is an express route example
app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
  });
}




