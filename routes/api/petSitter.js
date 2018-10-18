const router = require("express").Router();
const db = require("../../models");
// const petSitterController = require("../../controllers/petSitterController")

//Route to create a PetSitter
router.post("/save", (req,res) => {
  db.PetSitter
    .create(req.body)
    .then(createdSitter => res.status(200).json(createdSitter))
    .catch(err => res.status(422).json(err));
})
  // .post(function(req, res){
  //   db.PetSitter.create(req.body).then(function(createdSitter){
  //     res.json({msg: `${createdSitter.name} created in the database`})
  //   })
  // })

  //Route to retrieve all PetSitters
router.route("/all")
  .get(function (req, res){
            db.PetSitter.find().then(function(petSitter){
              res.json({petSitter:petSitter})
            })
          })
          
 

router.get("/:id", (req, res) => {
  db.PetSitter
    .findById({_id:req.params.id})
    .then(petSitter => res.status(200).json(petSitter))
    .catch(err => res.status(422).json(err));   
})

router.get("/search/:city", (req, res) => {
    db.PetSitter
      .find({city:req.params.city})
      .then(petSitter => res.status(200).json(petSitter))
      .catch(err => res.status(422).json(err));   
})
  
module.exports = router;