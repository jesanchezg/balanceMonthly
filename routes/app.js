var express = require('express');
var router = express.Router();
var User = require('../models/user');


router.get('/', function (req, res, next) {
    res.render('index');
});

//router.get('/', function (req, res, next) {
//    User.find({}, function (err,doc) {
//        if(err){
//            return res.send('Error');
//        }
//        console.log(doc);
//       res.render('modif', {user: doc}); 
//    });
//});

//router.get('/crud/:idPaym', function (req, res, next) {
//    res.render('modif', {paymt: req.params.idPaym});
//});

//router.post('/', function(req, res, next){
//   var paymnt = req.body.payment;
//   console.log('PAYMENT => ' + paymnt);
//   var user = new User({
//       name: 'Lina Maturana',
//       color: 'Yellow',
//       email: 'limimaco@gmail.com',
//       username: 'Lina',
//       password: 'lisama'
//   });
//   user.save(function(err, result){
//       if(err){
//         console.log(err);  
//       }
//   });
//      var user = new User({
//       name: 'Jairo Sanchez',
//       color: 'Blue',
//       email: 'chonchis1978@gmail.com',
//       username: 'Choncho',
//       password: 'lailona'
//   });
//   user.save(function(err, result){
//       if(err){
//         console.log(err);  
//       }
//   });
////   res.redirect('/crud/' + paymnt);
//    res.redirect('/');
//});

module.exports = router;
