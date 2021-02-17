const express =require('express');
const mongojs =require('mongojs');

const app =express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseURL="workout-tracker";
const collections =["workout"];

const db =mongojs(databaseURL, collections);
db.on('error', (error) => {
    console.log('Database Error:', error);
  });

  app.get("/", (req,res) => {
    console.log("get a work",req.body);

    
  });
  app.post("/api/workouts", (req, res) => {
    console.log(req.body);
  
    db.workout.insert(req.body, (err, docs) => {
      console.log("book has been saved", err, docs);

      res.json(docs);
    });
  });























  // Listen on port 3000
app.listen(3001, () => {
  console.log("App running on port 3001!");
});
