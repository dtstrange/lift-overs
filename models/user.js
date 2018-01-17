// Dependicies
module.exports = function(sequelize, DataTypes){

// Create a "User" model
var User = sequelize.define('user_tbl', {
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
    user_email: {
        type: DataTypes.STRING
    }
}, {
  timestamps: false
});
    return User;

}


