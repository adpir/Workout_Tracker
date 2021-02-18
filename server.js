const express =require('express');
const mongojs =require('mongojs');
const logger = require("morgan");
const mongoose = require("mongoose");
const router = express.Router();


const PORT = process.env.PORT || 3001;

const db = require("./models");

const app =express();

app.use(logger("dev"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser:true,
  useFindAndModify: false,
  useCreateIndex: true
});


// const databaseURL="workout-tracker";
// const collections =["workout"];

// const db = mongojs(databaseURL, collections);
// db.on('error', (error) => {
//     console.log('Database Error:', error);
//   });
//Routes
 require("./routes/api-routes")(app);
 require("./routes/html-routes")(app);


 
  







  // Listen on port 3000
app.listen(3001, () => {
  console.log("App running on port 3001!");
});

// app.listen(PORT, () => {
//   console.log(`App running on port ${PORT}!`);
// });
module.exports = app;
