const Cookie = require('../models/Cookie');

exports.getCookies = async (req, res) => {
  const cookies = await Cookie.find().populate('user_id', 'username');
  res.json(cookies);
};

exports.createCookie = async (req, res) => {
  const { service_name, domain, cookie_data } = req.body;
  const newCookie = await Cookie.create({
    service_name,
    domain,
    cookie_data,
    user_id: req.user.id
  });
  res.status(201).json(newCookie);
};

exports.deleteCookie = async (req, res) => {
  const { id } = req.params;
  await Cookie.findByIdAndDelete(id);
  res.json({ message: 'Cookie removido' });
};
