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
            type: DataTypes.STRING,
            unique: true,
            require: true,
            validate:{
                isEmail: true
            }
        },
        user_password: {
            type: DataTypes.STRING
        },
        user_type: {
            type: DataTypes.STRING
        },
        salt: {
            type: DataTypes.STRING
        },
        hash: {
            type: DataTypes.STRING(1500)
        }

    }, {
      timestamps: false
    });
    
    User.associate = function(models){
        User.hasMany(models.Organization, {
            onDelete:"cascade"
        })
    };

    User.associate = function(models){
        User.hasMany(models.Driver, {
            onDelete:"cascade"
        })
    };
    
    return User;
    
    }    
