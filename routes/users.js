
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test3')
  .then(() => console.log('Connected!'));

 const usersSchema = mongoose.Schema({
    username:String,
    nickname:String,
    discription:String, 
    catogiries:{
      type: Array,
      default:[]
    },
    datecreated:{
      type:Date,
      default:Date.now(),
    }

  });

  mongoose.exports = mongoose.model("user",usersSchema);



