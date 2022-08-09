const mongoose = require("mongoose");
const { dbOpration } = require("../services/dataBaseOpration");
const SchemaModel = require("../services/schemamodel");

// const { Schema } = mongoose;

const schema = {
  name: {
    type: String,
    trime: true,
  },
  email: {
    type: String,
    trime: true,
  },
  password: {
    type: String,
    trime: true,
  },
};

const modelName = "Users";

const userModel = dbOpration.createModel(modelName, schema);

const user = new SchemaModel(userModel);

module.exports = user;
