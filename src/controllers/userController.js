const { userRepo } = require("../repositories/user");
const userModel = require("../models/user");

const { successResponse, badRequest } = require("../utils/utility");
const { default: mongoose, isObjectIdOrHexString } = require("mongoose");

const addUser = async (req, res) => {
  try {
    let user = await userRepo.addUser(req.body);
    // console.log("Users: ", user);
    return successResponse(res, user);
  } catch (err) {
    return badRequest(res, err);
  }
};

const getAllUser = async (req, res) => {
  try {
    let users = await userModel.get();

    successResponse(res, users);
  } catch (err) {
    return badRequest(res, err);
  }
};

const updateData = async (req, res) => {
  try {
    let id = req.params;

    let user = await userModel.getByID(id);
    if (user.length === 0) return badRequest(res, (err = "not found"));

    let Updated = await userModel.updateDocs(req.body);

    if (Updated.acknowledged) {
      return successResponse(res, { Message: "Sucess" });
    }
  } catch (err) {
    return badRequest(res, err);
  }
};

module.exports = { addUser, getAllUser, updateData };
