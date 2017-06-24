'use strict';
module.exports = function(sequelize, DataTypes){


var Athlete = sequelize.define("Athlete", {
  race: {
    type: DataTypes.STRING
  },
  placement: {
    type: DataTypes.STRING
  },
  date: {
    type: DataTypes.STRING
  },
  complete:{
    type: DataTypes.BOOLEAN
  }

},{

  classMethods: {
      associate: function(models) {
        // Comment.belongsTo(models.User);
        // Comment.belongsTo(models.Mission);
        // Comment.belongsTo(models.Quest);
      }
    }
})
return Athlete;
}


  




  
