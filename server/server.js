const express =  require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userModel = require('./models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const PORT = process.env.PORT || 3001 


const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/e-commerce').then((result) => console.log(`connected to database successfully`)).catch((error) => console.log(`connection error: ${error}`)); //


app.get('/', (req,res) => {
  res.send('this is landing page');
});

app.post('/register', (req,res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds);
  userModel.create({
    name: req.body.userName,
    password: hashedPassword
  })
   .then((response) => res.json(({ seccess: true, data: response})))
   .catch((error) => res.status(500).json({ success: false, error: error.message}));
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