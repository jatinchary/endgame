var express = require('express');
var router = express.Router();
const userModal = require("./users");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/create',async function(req, res, next) {
 const userdata = await userModal.create({
    username:"charyjatin@gmail.com",
    nickname:"jatin chary",
    discription:"creating datat using the mongoose", 
    catogiries:['java','python','php'],
  });
  res.send(userdata);
});

module.exports = router;
