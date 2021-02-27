// const WorkoutSchema = require("../models/WorkoutSchema.js");
const db = require("../models");

module.exports = (app) => {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({}, function (err, data) {
      console.log("Get a workout Done!!!", err, data);
      res.json(data);
    }).catch((err) => {
      res.status(400).json(err);
    });
  });

  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
      { _id: req.params.id },
      { $push: { exercises: req.body } },
      { new: true }
    )
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  app.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}, function (err, data) {
      console.log("Get a workout Done!!!", err, data);
      res.json(data);
    }).catch((err) => {
      res.status(400).json(err);
    });
  });
  app.get("/api/favicon", (req, res) => {
    db.Workout.find({}, function (err, data) {
      console.log("Favicon!!!", err, data);
      res.json(data);
    }).catch((err) => {
      res.status(400).json(err);
    });
  });
};
