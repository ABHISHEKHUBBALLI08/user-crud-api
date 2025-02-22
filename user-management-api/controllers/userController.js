const User = require('../models/User');
const OpenAI = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getUsers = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const users = await User.find().limit(limit * 1).skip((page - 1) * limit);
  res.json(users);
};

exports.getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  user ? res.json(user) : res.status(404).json({ error: "User not found" });
};

exports.updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  user ? res.json(user) : res.status(404).json({ error: "User not found" });
};

exports.deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  user ? res.json({ message: "User deleted" }) : res.status(404).json({ error: "User not found" });
};

exports.generateUserBio = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    const response = await openai.completions.create({
      model: "gpt-4",
      prompt: `Generate a professional short bio for ${user.name}, who is a ${user.role}.`,
      max_tokens: 50
    });

    user.bio = response.choices[0]?.text.trim() || "Bio generation unavailable.";
    await user.save();

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Bio generation failed" });
  }
};
