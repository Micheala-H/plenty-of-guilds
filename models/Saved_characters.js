const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class  extends Model {}

/*nameoftable*/.init(
  {
    //table columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: '',
  }
);

module.exports = ;
