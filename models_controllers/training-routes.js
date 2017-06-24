var workout = require("../models").Coach;

module.exports = {
	read: function(cb){
		workout.findAll({}).then(function(workout){
			cb(workout);
		});
	},
	insert: function(name, cb){
		workout.create({
			activity: name 
			}).then(function(workout){
				cb(workout);
			});
	}
}