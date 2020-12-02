const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('mariadb::memory');

class User extends Model {
    isValidPassword(password) {
        return true;
    }
}

User.init({
    username: {
        type: DataTypes.STRING(64),
        unique: true,
        index: true
    },
    email: {
        type: DataTypes.TEXT,
        unique: true,
        index: true
    },
    hash: {
        type: DataTypes.STRING
    }
}, { sequelize }, 'User');