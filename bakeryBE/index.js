const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');
const cors = require('cors');


require('dotenv').config();

let app = express();
let PORT = process.env.PORT || 4000;
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.use('/', router);


const URL = process.env.DB_URL;

mongoose.set('strictQuery', false);

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('db connected');
  })
  .catch((err) => console.log(err));


app.listen(PORT, () => {
    console.log(`Port is: ${PORT}`);
})

