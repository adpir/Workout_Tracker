const express =require('express');
const mongojs =require('mongojs');
const logger = require("morgan");


const app =express();

app.use(logger("dev"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseURL="workout-tracker";
const collections =["workouts"];

const db = mongojs(databaseURL, collections);
db.on('error', (error) => {
    console.log('Database Error:', error);
  });
mongoose.connect('mongodb://localhost/workouts')



  //Routes

  router.use("/", require("./routes/html-routes"));
  router.use("/api/workouts", require("./routes/api-routes"));
 
  







  // Listen on port 3000
app.listen(3001, () => {
  console.log("App running on port 3001!");
});

module.exports = app;
