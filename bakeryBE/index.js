const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');
const cors = require('cors')

require('dotenv').config();

let app = express();
let port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use('/', router);

const url = process.env.DB_URL;

mongoose.set('strictQuery', false);

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('db connected');
  })
  .catch((err) => console.log(err));


app.listen(port, () => {
    console.log(`Port is: ${port}`);
})

