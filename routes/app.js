var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/crud/:idPaym', function (req, res, next) {
    res.render('modif', {paymt: req.params.idPaym});
});

router.post('/crud', function(req, res, next){
   var paymnt = req.body.payment;
   res.redirect('/crud/' + paymnt);
});

module.exports = router;
