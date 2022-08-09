const mongoose = require("mongoose");

const db = require("../config/database");

const createModel = (modelName, Schema) => {
  try {
    return db.model(modelName, Schema);
  } catch (e) {
    console.log(e);
  }
};

const create = (modleClass, obj) => {
  const model = new modleClass(obj);
  return new Promise((resolve, reject) => {
    try {
      const data = Promise.resolve(model.save());

      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
};

const get = (modelClass) => {
  return new Promise((resolve, reject) => {
    try {
      const data = modelClass.find({});
      resolve(data);
    } catch (err) {
      reject(err);
    }
  });
};

const getById = (modelClass, id) => {
  // console.log("hilllllll", id, modelClass);
  return new Promise((resolve, reject) => {
    try {
      const data = modelClass.find({
        _id: mongoose.Types.ObjectId(id),
      });

      resolve(data);
    } catch (err) {
      reject(err);
    }
  });
};

const updateDocs = (modelClass, obj) => {
  return new Promise((resolve, reject) => {
    try {
      const data = Promise.resolve(modelClass.updateOne(obj));
      resolve(data);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports.dbOpration = { createModel, create, get, getById, updateDocs };
