const User = require('../Model/Schema');

exports.createUser = async (req, res) => {
  try {
    const { name, phone, email, statement } = req.body;

    if (!name || !phone || !email || !statement) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const user = new User({ name, phone, email, statement });
    await user.save();

    res.status(201).json({ message: 'Application submitted successfully!' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.getAllUser = async (req, res) => {
  try {
    const user = await User.find().sort({ submittedAt: -1 });
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server Error' });
  }
};
