const mongoose = require("mongoose");
const Schema =  mongoose.Schema

const WorkoutSchema = new Schema({
  Date: {
      type: Date,
      default: Date.now
      },

    name: {
      type: Number,
      unique: true,
      trim: true
    },
    exercises: [
      {
        type: Number,
        ref: "workout",
        trim: true
      }
      
    ]
  });
  
  const workout = mongoose.model("workout", WorkoutSchema);
  
  module.exports = workout;

  // const UserSchema = new Schema({
  //   username: {
  //     type: String,
  //     trim: true,
  //     required: "Username is Required"
  //   },
  
  //   password: {
  //     type: String,
  //     trim: true,
  //     required: "Password is Required",
  //     validate: [({ length }) => length >= 6, "Password should be longer."]
  //   },
  
  //   email: {
  //     type: String,
  //     unique: true,
  //     match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  //   },
  
  //   userCreated: {
  //     type: Date,
  //     default: Date.now
  //   }
  // });
  