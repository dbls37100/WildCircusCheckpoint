'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tournees = sequelize.define('Tournees', {
    nameActs: DataTypes.STRING,
    describes: DataTypes.STRING,
    placeNumber: DataTypes.INTEGER,
    describes: DataTypes.STRING
  }, {});
  Tournees.associate = function(models) {
    // associations can be defined here
  };
  return Tournees;
};