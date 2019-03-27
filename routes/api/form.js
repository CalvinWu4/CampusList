const express = require('express');
const router = express.Router();

//Item Model

const Form = require('../../models/Form');

//@route GET api/Form
//@desc Get All Items
//@access Public
router.get('/', (req, res)=> {
    Form.find()
        .then(form=> res.json(form))
});
//@route POST api/Form
//@desc POST All Items
//@access Public
router.post('/', (req, res)=> {
    console.log(req.body);
    const newForm= new Form({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        status: req.body.status,
        payment: req.body.payment
        }
        );
    newForm.save().then(form=>res.json(form))
        .catch(err => res.send(err));
});
module.exports= router;

