var compete = require("../models").Athlete;

module.exports = {
	read: function(cb){
		compete.findAll({}).then(function(compete){
			cb(compete);
		});
	},
	insert: function(name, cb){
		compete.update({
			race: name 
			}, {where:{id:id}
		}).then(function(compete){
				cb(compete);
			});
	}
}


