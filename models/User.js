const { Model, DataTypes} = require('sequelize');
const bcrypt = require('bcryptjs');
const sequelize = require('../config/connection');

// creates the User model
class User extends Model {
    // method to check password per user
    checkPassword(loginPw){
        return bcrypt.compareSync(loginPw, this.password);
    }
};

// initiates columns for user
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        },
        // book_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true
        // }
    },
    {
        hooks: {
            // hashes password before creating account
            async beforeCreate(newUserData){
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName : 'user'
    }
);

module.exports = User;