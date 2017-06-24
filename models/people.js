'use strict';
module.exports = function(sequelize, DataTypes){


var People = sequelize.define("People", {
  name: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
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
return People;
}

