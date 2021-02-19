const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const WorkoutSchema = new Schema ({
      day: {
      type: Date,
      default: Date.now,
      },
    exercises: [
      {
        type:  { 
        type: String,
        ref: "_id",
        trim: true,
        required: "Enter your exercise",
      },
      name: {
        type: String,
        unique: true,
        trim: true,
        required: "true",
      },
    
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
    distance: {
      type: Number,
    },
    resistance: {
      type: Number,
    },
      },

    ],
  },
  {
    toJSON: {
      virtuals:true,
    }
  }
);
WorkoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total,exercises) => total + exercises.duration,0
  );
});
  const Workout = mongoose.model("Workout", WorkoutSchema);
  
  module.exports = Workout;

  