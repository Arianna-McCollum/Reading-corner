const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

// creates post model
class Post extends Model{}

// initiates post table
Post.init(
    {
        id : {
            type: DataTypes.INTEGER,
            
        }
    }
);