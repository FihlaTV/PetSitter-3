var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var MemberSchema = new Schema({

//Column name for table
    name: String,
    email: String,
    password: String
});

// This creates our model from the above schema, using mongoose's model method
var Member = mongoose.model("Member", MemberSchema);

// Export the Note model
module.exports = Member;