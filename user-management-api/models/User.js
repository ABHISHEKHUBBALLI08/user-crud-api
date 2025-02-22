const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  phone: { type: String, required: true, unique: true },
  whatsappNumber: { type: String },
  password: { type: String, required: true },
  emailVerified: { type: Boolean, default: false },
  active: { type: Boolean, default: true },
  gender: { type: String, enum: ['male', 'female', 'other'], required: true },
  role: { type: String, enum: ['user', 'admin'], required: true },
  bio: { type: String, default: '' }
}, { timestamps: true });

UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model('User', UserSchema);
