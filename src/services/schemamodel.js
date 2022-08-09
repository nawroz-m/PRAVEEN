const { dbOpration } = require("./dataBaseOpration");

class SchemaModel {
  constructor(model) {
    this.model = model;
  }

  add(data) {
    return new Promise((resolve, reject) => {
      try {
        const addedToDB = Promise.resolve(dbOpration.create(this.model, data));
        resolve(addedToDB);
      } catch (err) {
        reject(err);
      }
    });
  }

  get() {
    return new Promise((resolve, reject) => {
      try {
        const data = Promise.resolve(dbOpration.get(this.model));
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  getByID(id) {
    return new Promise((resolve, reject) => {
      try {
        const data = Promise.resolve(dbOpration.getById(this.model, id));

        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  updateDocs(body) {
    return new Promise((resolve, reject) => {
      try {
        const data = Promise.resolve(dbOpration.updateDocs(this.model, body));
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }
}

module.exports = SchemaModel;
