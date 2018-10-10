const router = require("express").Router();
const db = require("../../models");
// const petSitterController = require("../../controllers/petSitterController");

// matches with "/api/petSitter"
// router.route("/all")
//   .get(petSitterController.findAll);
  // .post(petSitterController.create);

router.route("/save")
  .post(function(req, res){
    db.PetSitter.create(req.body).then(function(createdSitter){
      res.json({msg: `${createdSitter.name} created in the database`})
    })
  })

router.route("/all")
  .get(function (req, res){
    db.PetSitter.find().then(function(petSitter){
      // console.log(petsitter);
      res.json({petSitter:petSitter})
    })
  })

    
  
  // 
// router
//   .route("/:id")
//   .get(petSitterController.findById)
//   .put(petSitterController.update)
//   .delete(petSitterController.remove);
// router
//   .route("/favorites")
//   .get(petSitterController.retrieveMemberWishList);

module.exports = router;