const express= require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const form= require('./routes/api/form');
const app=express();

//Bodyparser middleware
app.use(bodyParser.json());
app.use(cors());

//DB Config
const db= require('./config/keys').mongoURI;

//Connect to mongo
mongoose.connect(db)
    .then(()=> console.log('mongo db connected'))
    .catch(err=> console.log(err));

//Use Routes
app.use('/api/form', form);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server started on port ' + port));

