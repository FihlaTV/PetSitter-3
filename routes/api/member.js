const router = require("express").Router();
const db = require("../../models");
// Require the user 
const Member = require('../../models/Member');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');

// Require the secret sauce
const keys = require('../../config/keys');

// Load Input Validators for Registration
const validateRegisterInput = require('../../helpers/validators/register');
const validateLoginInput = require('../../helpers/validators/login');

//Authentication Routes
router.post('/register', (req, res) => {
    // Check validation on request body 
    const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }

    // deconstruct values from body 
    const { email, name, password } = req.body
    Member.findOne({ email: email })
        .then(user => {
            if (user) {
                errors.email = 'email already registered'
                return res.status(409).json(errors);
            } else {
                const avatar = gravatar.url(email, {
                    s: '200', //the size
                    r: 'pg', //rating
                    d: 'mm' //default
                });

                //es6 short hand for name:name, email:email etc.
                const newMember = new Member({
                    name,
                    email,
                    avatar,
                    password
                });
                newMember.save()
                    .then(member => res.status(201).json(member))
                    .catch(err => {
                        console.log(err)
                        erros.db = 'an error has occured in saving in the db'
                        res.status('500').json(erros)
                    });
            }
        });
});

router.post('/login', (req, res) => {
    // Check validation on request body 
    const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const { email, password } = req.body
    //short hand for email:email
    Member.findOne({ email })
        .then(user => {
            //check for user 
            if (!user) {
                errors.user = 'User not found';
                return res.status(404).json(errors);
            }
            user.comparePassword(password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = { id: user.id, name: user.name, avatar: user.avatar } // created JWT payload
                        jwt.sign(
                            payload,
                            keys.secretOrPrivateKey,
                            { expiresIn: 7200 },
                            (err, token) => {
                                res.json({
                                    sucess: true,
                                    token: 'Bearer ' + token
                                });
                            });
                    } else {
                        errors.password = 'Password incorrect';
                        return res.status(400).json(errors)
                    }
                })
                .catch(err => {
                    console.log(err)
                    res.status('500').json({ login: 'an error has occured in the login process' })
                });

        });
});

//Information Routes
router.get("/:id", (req, res) => {
    db.Member
        .find({ _id: req.params.id })
        .then(member => res.status(200).json(member))
        .catch(err => res.status(422).json(err))
})

// Add member favorites
router.route("/addFavorite/:memberId/:petSitterId")
    .put(function (req, res) {
        db.PetSitter.findOne({ _id: req.params.petSitterId }).then(function (sitterId) {
            db.Member.updateOne(
                { "_id": req.params.memberId },
                { "$push": { "favorites": sitterId } },
                function (err, raw) {
if (err) return handleError(err);
console.log('The raw response from Mongo was ', raw);
                })
        })
    })

//search members favorites    
router.get("/memberFavorites/:id", (req, res) => {
    db.Member
        .findOne({ _id: req.params.id })
        .then(memberFavorites => res.status(500).json(memberFavorites.favorites))
        .catch(err => res.status(422).json(err))
})


module.exports = router;