var mongoose = require("mongoose");
 // Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var PetSitterSchema = new Schema({

//Column name for table
   name: String,
   profilePhoto: String,
   age: Number,
   rating: Number,
   price: Number,
   summary: String,
   phone: String,
   email: String,
   phone: String,
   yearsOfExperience: String,
   typesOfAnimals: String,
   availability: String
});

// This creates our model from the above schema, using mongoose's model method
var PetSitter = mongoose.model("PetSitter", PetSitterSchema);

// Export the Note model
module.exports = PetSitter;