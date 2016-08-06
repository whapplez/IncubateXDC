var express = require('express');
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Ayy Lmao' });
//});

router.get('/users/:id', function(req, res){
	//res.status(200);
	//res.send(req.params.id);
	res.send(200);
	res.render('index', {title: 'EZ LYFE', age: '17'});

});
module.exports = router;
