const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userschema = new schema({
    fname : String,
    lname : String,
    age : Number
});

const USER = mongoose.model('user',userschema);                      //user = collection name 

module.exports=USER;