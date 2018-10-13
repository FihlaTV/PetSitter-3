const router = require("express").Router();
const db = require("../../models");

router.route("/save")
  .post(function(req, res){
    db.Member.create(req.body).then(function(createdMember){
      res.json({msg: `${createdMember.name} created in the database`})
    })
  })

router.route("/:id")
  .get(function(req, res){
      db.Member.find({_id:req.params.id}).then(function(member){
            
        res.json({msg: `${member.name}  logged in`});
      })
  })

  router.route("/addFavorite/:memberId/:petSitterId")
    .put(function(req, res){
        //Find petSiter info
    
        //find member

        //add petSitter to member array

        db.PetSitter.findOne({_id:req.params.petSitterId}).then(function(sitterId){
            // var petSitter =  res.json();
            db.Member.updateOne(
                { "_id": req.params.memberId},
                { "$push": { "favorites": sitterId } },
                function (err, raw) {
                    if (err) return handleError(err);
                    console.log('The raw response from Mongo was ', raw);
                })
        })
    })
    router.route("/memberFavorites/:id")
        .get(function (req, res){
            db.Member.findOne({_id:req.params.id}).then(function(memberFavorites){
                res.json(memberFavorites.favorites)
            })
        })


  module.exports = router;