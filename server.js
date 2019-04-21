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

app.post('/api/add-listing', (req, res) => {
    console.log('Adding Listing');
    listing = req.body;
    modifyListings((data) => {
	// Determine ID
	var maxId = -1;
	for (i = 0; i < data.listings.length; i++) {
	    id = data.listings[i].id;
	    if (id > maxId) {
		maxId = id;
	    }
	}
	listing['id'] = maxId + 1;

	newData = data;
	newData.listings.push(listing);
	return newData;
    });
    
    res.sendStatus(201);
});

// Call with a lambda that takes the object from the JSON file, modifies it in some way, and returns it again.
function modifyListings(convertHandler) {
    fs = require('fs');
    fs.readFile('Data/listings.json', (err, data) => {
	if (err) throw err;
	listings = JSON.parse(data);
	modified = convertHandler(listings);
	json = JSON.stringify(modified, null, 2);
	fs.writeFile('Data/listings.json', json, (err) => {});
    });
}

//Use Routes
const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server started on port ' + port));

