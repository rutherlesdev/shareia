const mongoose = require('mongoose');

const cookieSchema = new mongoose.Schema({
  service_name: { type: String, required: true },
  domain: { type: String, required: true },
  cookie_data: { type: String, required: true }, // cookies serializados em string
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Cookie', cookieSchema);
