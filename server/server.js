const express =  require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userModel = require('./models/userModel');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const PORT = process.env.PORT || 3001 


const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/e-commerce').then((result) => console.log(`connected to database successfully`)).catch((error) => console.log(`connection error: ${error}`)); //


app.post('/signup', (req,res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds);
  userModel.create({
    name: req.body.userName,
    email: req.body.userEmail,
    password: hashedPassword
  })
  .then((response) => res.json(({success: true, data: response})))
  .catch((error) => res.status(500).json(({ success: false, data: error})));
});

app.post('/login', (req,res) => {
  console.log('Login attempt:', req.body.userName);
  userModel.findOne({ name: req.body.userName })
  .then((user) => {
    if(!user) {
      console.log('User not found');
      return res.status(404).json({ success: false, error: 'User not found' });
    }
    const isPasswordValid = bcrypt.compareSync(req.body.password, user.password);
    if(!isPasswordValid) {
      console.log('Invalid password');
      return res.status(401).json({ success: false, error: 'Invalid Password'})
    }
    console.log('Login successful');
    res.json({ success: true, data: user});
  })
   .catch((error) => {
     console.error('Login error:', error);
     res.status(500).json({ success: false, error: error.message});
   });
});

app.get('/cart', (req,res) => {
  res.send('this is cart page');
});

app.get('/track-order', (req,res) => {
  res.send('this is track order page');
});


app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);//+
});