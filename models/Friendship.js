const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class Friendship extends Model {}

// create fields/columns for User model
Friendship.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: 'user',
          key: 'user_id'
      }
    },

    friend: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_id'
      }
    }
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'friendship'
  }
);

module.exports = Friendship;