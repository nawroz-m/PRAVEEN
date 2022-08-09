const express = require("express");
const middleWarConfig = require("./config/middleWarConfig");
const PORT = process.env.PORT || 6000;

require("dotenv").config();
const app = express();

middleWarConfig(app);

app.listen(PORT, (err) => {
  if (err) console.log("Server has been stoped due to  ", err);
  console.log("Connected to the Server SuccessFully on port ", PORT);
});
