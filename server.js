const express= require('express');

const bodyParser = require('body-parser');
const cors = require('cors');

const app=express();

//Bodyparser middleware
app.use(bodyParser.json());
app.use(cors());

app.get('/api/listings', (req, res) => {
    fs = require('fs');
    data = fs.readFileSync('Data/listings.json');
    listings = JSON.parse(data);
    res.json(listings);
});

//Use Routes
const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server started on port ' + port));

