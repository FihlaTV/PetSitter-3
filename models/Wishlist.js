var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var WishlistSchema = new Schema({

//Column name for table
     petSitterName: String,
     petSitterPhone: String,
     petSitterEmail: String
});

// This creates our model from the above schema, using mongoose's model method
var Wishlist = mongoose.model("Wishlist", WishlistSchema);

// Export the Note model
module.exports = Wishlist;