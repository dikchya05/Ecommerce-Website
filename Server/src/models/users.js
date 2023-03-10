const mongoose = require('mongoose')
const { Schema } = mongoose;

const usersSchema = new Schema({
  fullName: {type:String, required: true},
  email: {type:String, required: true, unique: true},
  password:  {type:String, required: true},
  phoneNumber: {type:Number, required: true},
  address: {type:String, required: true},
  country:  {type:String, required: true},
  userRole:  {type:String, required: true},
  avatar : {type:String}
  },
  { collection: 'users' });

module.exports= mongoose.model('Users', usersSchema);
