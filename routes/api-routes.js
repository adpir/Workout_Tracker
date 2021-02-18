const db = require("../models");

module.exports = (app) => {
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}, function (err, data) {
          console.log(" find the book I read", err, data);
          res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
          });
      });

    app.put("/api/workouts/:id", (req, res) => {
        const id  = req.params.id;
        const body =req.body;
        db.Workout.findByIdAndUpdate( id, {$push: {exercises : body }} ,
        {new:true }

        ).then((data) => {
            res.json(data);
          })
          .catch(err => {
            res.status(400).json(err);
          });
        });
     
        app.post("/api/workouts",  (req, res) => {
             db.Workout.create({}), function (err, data) {
                console.log(" find the book I read", err, data);
                res.json(data);
              }
              .catch(err => {
                res.status(400).json(err);
              });
            });

    app.post("api/workouts/range", (req, res) => {
    db.Workout.find({}), function (err, data) {
        console.log(" find the book I read", err, data);
        res.json(data);
      }
      .catch(err => {
        res.status(400).json(err);
      });
    });






};














