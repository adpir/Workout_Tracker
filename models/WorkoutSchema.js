const mongoose = require("mongoose");
const Schema =  mongoose.Schema

const WorkoutSchema = new Schema({
    name: {
      type: String,
      unique: true
    },
    workout: [
      {
        type: Schema.Types.ObjectId,
        ref: "workout"
      }
    ]
  });
  
  const workout = mongoose.model("workout", WorkoutSchema);
  
  module.exports = workout;