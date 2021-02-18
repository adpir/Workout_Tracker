const db = require("../models/");
let path = require("path");







app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"../public/index.html"));
});
  app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
  // stast route loads stast.html
  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));

  });
  
module.export =app;
  