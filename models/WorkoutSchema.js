const mongoose = require("mongoose");
const Schema =  mongoose.Schema

const WorkoutSchema = new Schema({
  Date: {
      type: Date,
      default: Date.now
      },

    name: {
      type: String,
      unique: true,
      trim: true,
      required: "Name is Required"
    },
    exercises: [
      {
        type: Number,
        ref: "workout",
        trim: true,
        required: "Enter your exercise"
      }
      
    ],
    weight: {
      type: Number,
    },
    sets: {
      type: Number,
      
    },
    reps: {
      type: Number,
    },
    duration: {
      type: Number,
    },





  });
  
  const Workout = mongoose.model("Workout", WorkoutSchema);
  
  module.exports = Workout;

  