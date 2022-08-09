const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/PRAVEEN");

let db = mongoose.connection;

db.on("connected", () => {
  console.log("Database successfully connected  ");
});
db.on("err", (err) => {
  console.log("Database disconnected  due to : ", err);
});

module.exports = db;
