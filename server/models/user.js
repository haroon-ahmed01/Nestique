const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-commerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
});

const userModel =  mongoose.model('users', userSchema);

module.exports = userModel;