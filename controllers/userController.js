const User = require('../models/User');

exports.getUsers = async (req, res) => {
  const users = await User.find().select('-password_hash');
  res.json(users);
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res.json({ message: 'Usuário deletado' });
};
