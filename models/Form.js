const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FormSchema= new Schema({
   firstName: {
       type: String,
       required: true
   },
    lastName:{
       type: String,
        required: true
    },
    email:{
        type: String
    },
    school:{
        type: String
    },
    status:{
        type: String
    },
    paymentMethod:{
       type: String
    },
    address:{
       type:String
    },
    city:{
       type: String
    },
    state:{
       type: String
    },
    zip:{
       type: Number
    }
});

module.exports = Item = mongoose.model('form', FormSchema);