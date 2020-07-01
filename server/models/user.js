'use strict';

const { INTEGER } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

  const Sequelize = sequelize.Sequelize

  const Model = Sequelize.Model

  class User extends Model { }

  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, { sequelize });
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Product)
    User.hasMany(models.Cart)
  };
  return User;
};