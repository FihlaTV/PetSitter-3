const router = require("express").Router();
const db = require("../../models");

//Route to create a PetSitter
router.route("/save")
  .post(function(req, res){
    db.PetSitter.create(req.body).then(function(createdSitter){
      res.json({msg: `${createdSitter.name} created in the database`})
    })
  })

  //Route to retrieve all PetSitters
router.route("/all")
  .get(function (req, res){
    db.PetSitter.find().then(function(petSitter){
      // console.log(petsitter);
      res.json({petSitter:petSitter})
    })
  })


module.exports = router;