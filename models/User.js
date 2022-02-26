import mongoose from 'mongoose';
import validator from 'validator';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provided name'],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  lastName: {
    type: String,
    maxlength: 20,
    trim: true,
    default: 'lastName',
  },
  email: {
    type: String,
    required: [true, 'Please provided email'],
    validate: {
      validator: validator.isEmail,
      message: 'Please provide a valid email',
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provided password'],
    minlength: 6,
  },
  location: {
    type: String,
    maxlength: 20,
    trim: true,
    default: 'my city',
  },
});

export default mongoose.model('User', UserSchema);
