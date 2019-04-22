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

app.post('/api/listings', (req, res) => {
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

app.post('/api/listings/rating', (req, res) => {
    console.log('Adding Listing rating');
    listingId = req.body.listingId;
    rating = req.body.rating;
    review = req.body.review;
    modifyListings((data) => {
	index = data.listings.findIndex(listing => { return listing.id == listingId });
	newData = data
	newData.listings[index].ratings.push({
	    rating: rating,
	    review: review
	});

	sum = newData.listings[index].ratings.map(entry => { return parseFloat(entry.rating) }).reduce((total, next) => { return total + next }, 0);
	avg = sum / newData.listings[index].ratings.length;
	newData.listings[index].rating = "" + avg.toFixed(2);
	
	return newData;
    });

    res.sendStatus(201);
});


app.delete('/api/listings/:id', (req, res) => {
    console.log('Removing Listing');
    idToDelete = req.params.id;
    modifyListings((data) => {
	newListings = data.listings.filter(listing => { return listing.id != idToDelete });
	newData = data
	newData.listings = newListings
	return newData
    });

    res.sendStatus(204);
});

app.post('/api/appointments', (req, res) => {
    console.log('Adding Appointment');
    listingId = req.body.id;
    date = req.body.date;
    modifyListings((data) => {
	index = data.listings.findIndex(listing => { return listing.id == listingId });
	newData = data;
	newData.listings[index].appointments.push(date);
	return newData;
    });

    res.sendStatus(201);
});

app.delete('/api/appointments', (req, res) => {
    console.log('Removing Appointment');
    listingId = req.body.id;
    date = req.body.date;
    modifyListings((data) => {
	listingIndex = data.listings.findIndex(listing => { return listing.id == listingId });
	newAppointments = data.listings[listingIndex].appointments.filter(app => { return app != date });
	newData = data;
	newData.listings[listingIndex].appointments = newAppointments;
	return newData;
    });

    res.sendStatus(204);
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

// Setup listings database if not there
function setupDB() {
    fs = require('fs');
    if (!fs.existsSync('Data/listings.json')) {
	fs.copyFileSync('Data/sample.json', 'Data/listings.json');
    }
}
setupDB();

//Use Routes
const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server started on port ' + port));

