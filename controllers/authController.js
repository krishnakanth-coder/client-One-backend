const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// register
const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ message: 'user registerd' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// login
const login = async (req, res) => {
  const { name, password } = req.body;
  let email = name;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.staus(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });
    res.json({ token, user: { id: user._id, username: user.username } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Logout
const logout = (req, res) => {
  res.json({ token: null, message: 'Logged out' });
};

module.exports = { register, login, logout };
