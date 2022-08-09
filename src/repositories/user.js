const userModel = require("../models/user");
const addUser = (body) => {
  return userModel.add(body);
};

module.exports.userRepo = { addUser };
