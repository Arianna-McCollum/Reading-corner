const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

// creates book model
class Book extends Model{}

// initiates book table
Book.init(
    {
        id : {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        author:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "book"
    }
);

module.exports = Book;