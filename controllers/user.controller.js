import UserModel from "../models/user.model.js";

export const createUser = async (req, res) => {
  const { username, password } = req.body;
  const user = new UserModel({ username, password });
  try {
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
}

export const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json(err);
  }
}