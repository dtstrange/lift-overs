// Dependicies
module.exports = function(sequelize, DataTypes){

    // Create a "User" model
    var User = sequelize.define('User', {
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_first_name: {
            type: DataTypes.STRING
        },
        user_last_name: {
            type: DataTypes.STRING
        },
        user_phone: {
            type: DataTypes.STRING
        },
        user_email: {
            type: DataTypes.STRING
        },
        user_password: {
            type: DataTypes.STRING
        },
        user_type: {
            type: DataTypes.STRING
        }
    }, {
      timestamps: false
    });
        return User;
    
    }    
