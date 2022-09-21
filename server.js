require("dotenv").config();

const express = require("express");
const sneakerRoutes = require("./routes/sneakers");

const app = express();

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use(sneakerRoutes);

// listen for requests
app.listen(process.env.PORT, () => {
  console.log("listening on port 4000");
});
