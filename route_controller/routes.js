var express = require('express');
var router = express.Router();
var people = require('../models').People;
var athlete = require('../models').Athlete;
var coach = require('../models').Coach;
var race = require('../models_controllers/races-routes.js');

router.get('/', function(req, res){
		
	res.render('choose');
})
	


router.get('/choose', function (req, res) {
	
		res.render('choose', {});
		
});

router.get('/raceCompleted', function (req, res) {
		var data = [{name: "Tri-Latta", date: "June 10, 2017"}, {name: "Augusta Half Ironman", date: "August 29, 2014"}]
		var hbsObject = { races: data};
		console.log(hbsObject);
		res.render('raceCompleted', hbsObject);
		
});

router.get('/training', function(req, res){
	var data = [{Activity: "Cross-fit", Date: "6-13-17"}]
	var hbsObject = { training: data};

	console.log(hbsObject);
	res.render('training', hbsObject);
})

router.get('/raceCompleted', function(req, res){
	race.read(function(data){
		var hbsObject = {races: name};
		console.log(hbsObject);
	})
	
 	res.render('raceCompleted', hbsObject);
})



router.post('/athletes/raceAdd', function(req, res){
	 race.insert(req.body.race, function(){
	      	// placement: req.body.placement,
	      	// date: req.body.date, 
	      	console.log(race);
	      	res.redirect('/raceCompleted');
	      	});
    	});


// router.get('/routine', function(req, res){
// 	// var name = [{Race: "Tri-Latta", placement: "1st"}];
// 	// var hbsObject = {races: name};
//  	res.render('routine');
// })

// router.post('/routine', function(req, res){
// 	coach.insert({
// 	        activity: req.body.activity,
// 	      	duration: req.body.duration,
// 	      	date: req.body.date,
	   	
//     	});
       		
// })

module.exports = router;