require("dotenv").config();

const express = require("express");

const app = express();

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/", (req, res) => {
  res.json({ msg: "welcome to the app" });
});

// listen for requests
app.listen(process.env.PORT, () => {
  console.log("listening on port 4000");
});
