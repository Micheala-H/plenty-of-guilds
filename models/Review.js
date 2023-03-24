const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    rating: {
      type: DataTypes.DECIMAL,
      defaultValue: null,
      validate: {
        isNumeric: true
      }
    },
    comment: {
      type: DataTypes.TEXT,
      defaultValue: null
    },
    character_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'character',
        key:'id'
      }
    },
    user_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model:'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'review',
  }
);

module.exports = Review;
