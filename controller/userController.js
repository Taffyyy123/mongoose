const mongoose = require("mongoose");
const userModel = require("../userModel");
const express = require("express");
const app = express();
app.use(express.json());

const connectToDb = async () => {
  const res = await mongoose.connect(
    "mongodb+srv://tsolmn9:Taffyyy12@test.1s5hd.mongodb.net/?retryWrites=true&w=majority&appName=TEST"
  );
  if (res) console.log("db connected");
};
connectToDb();

const createUser = async (req, res) => {
  try {
    const body = req.body;
    const response = await userModel.create(body);
    res.send(response);
  } catch (error) {
    console.log(error);
  }
};
const deleteUser = async (req, res) => {
  try {
    const { id } = req.body;
    const response = await userModel.findByIdAndDelete(id);
    res.send(response);
  } catch (error) {
    console.log(error);
  }
};
const updateUser = async (req, res) => {
  try {
    const { id, username } = req.body;
    const response = await userModel.findByIdAndUpdate(
      id,
      { username },
      { new: true }
    );
    res.send(response);
  } catch (error) {
    console.log(error);
  }
};
const getUsers = async (req, res) => {
  try {
    const response = await userModel.find();
    res.send(response);
  } catch (error) {
    console.log(error);
  }
};

module.exports.createUser = createUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
module.exports.getUsers = getUsers;
