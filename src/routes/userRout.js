const express = require("express");
const router = express.Router();
const {
  addUser,
  getAllUser,
  updateData,
} = require("../controllers/userController");

const PATH = {
  ROOT: "/",
  ADD_USER: "/addUser",
  UPDATE_USER_DATA: "/user/:id",
};

/**
 * @api {POST} /addUser
 * @desc User add api
 * @access Public
 */
router.post(PATH.ADD_USER, addUser);

/**
 * @api {Get} /
 * @desc Get all Users
 * @access Public
 */
router.get(PATH.ROOT, getAllUser);

/**
 * @api {POST} /user/:id
 * @desc Update User Deatail By ID
 * @access Private
 */
router.post(PATH.UPDATE_USER_DATA, updateData);

module.exports = router;
