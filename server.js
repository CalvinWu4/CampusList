const express= require('express');

const bodyParser = require('body-parser');
const cors = require('cors');

const app=express();

//Bodyparser middleware
app.use(bodyParser.json());
app.use(cors());

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: 'John', lastName: 'Doe'},
        {id: 2, firstName: 'Brad', lastName: 'Traversy'},
        {id: 3, firstName: 'Mary', lastName: 'Swanson'},
    ];

    res.json(customers);
});
//Use Routes
const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server started on port ' + port));

