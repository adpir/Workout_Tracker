const express =require('express');
const mongojs =require('mongojs');
const logger = require("morgan");

const PORT = process.env.PORT || 3001;


const app =express();

app.use(logger("dev"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", { useNewUrlParser: true });


const databaseURL="workout-tracker";
const collections =["workout"];

const db = mongojs(databaseURL, collections);
db.on('error', (error) => {
    console.log('Database Error:', error);
  });



  //Routes

  router.use("/", require("./routes/html-routes"));
  router.use("/api/workouts", require("./routes/api-routes"));
 
  







  // Listen on port 3000
app.listen(3001, () => {
  console.log("App running on port 3001!");
});

// app.listen(PORT, () => {
//   console.log(`App running on port ${PORT}!`);
// });
module.exports = app;
