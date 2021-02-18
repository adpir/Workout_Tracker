const db = require("../models");
// const app = require("../server");

app.get("/api/workouts", async (req,res) => {
    const fitness = await db.workout.find({}).catch((err) => {
        res.sendStatus(404).json(err)
        console.log("find workouts")
    });
      res.json(fitness);
    });

  app.get("/addExercise", (req,res) => {
    db.workout.find({addExercise: true}), async function (err, docs) {
        console.log(" find the book I read", err, docs);
        res.json(docs);
      };
    });
    
 



  app.post("/api/workouts", (req, res) => {
    console.log(req.body);
  
    db.workout.insert(req.body, (err, docs) => {
      console.log("workout has been saved", err, docs);

      res.json(docs);
    });
  });

app.put("/api/workouts/:id", (req,res) => {
    console.log(req.body);
})





module.exports=app;














