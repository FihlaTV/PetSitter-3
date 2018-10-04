const router = require("express").Router();
const booksController = require("../../controllers/petSitterController");


//var db = require("../models");
module.exports = function (app) {

// //This is an express API route example
// app.get('/api/hello', (req, res) => {
//     res.send({ express: 'Hello From Express' });
//   });
}

// Matches with "/api/books"
router.get("/hello", (req, res)=>{
  (res.send({ express: 'Hello From Express' }))
});



module.exports = router;

