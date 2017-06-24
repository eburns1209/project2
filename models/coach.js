'use strict';
module.exports = function(sequelize, DataTypes){


var Coach = sequelize.define("Coach", {
  activity: {
    type: DataTypes.STRING
  },
  duration: {
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
return Coach;
}


  







