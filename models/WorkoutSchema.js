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
        trim: true,
        required: "Enter the type of exercise you want to do",
      },
      name: {
        type: String,
        unique: true,
        trim: true,
        required: "Please enter a name for the exercise",
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
      required:"Please enter a duration for the exercises"
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
  return this.exercises.reduce((total, exercises) => total + exercises.duration,0
  );
});
  const Workout = mongoose.model("Workout", WorkoutSchema);
  
  module.exports = Workout;

  