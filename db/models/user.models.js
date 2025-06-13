import mongoose from 'mongoose';



const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    minlength: [2, 'Name must be at least 2 characters'],
    maxlength: [100, 'Name can be at most 100 characters']
  },
  password: {
   type: String,
   required: [true, 'password is required'],
   minlength: [6, 'password must be at least 2 characters'],
   maxlength: [200, 'password can be at most 100 characters']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    validate: {
      validator: function (v) {
        return /^\d{10}$/.test(v); // only 10-digit numbers allowed
      },
      message: 'Phone number must be a valid 10-digit number'
    }
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },
  verified: {
    type: Boolean,
    default: false
  },
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;
