// Dependicies
module.exports = function(sequelize, DataTypes){

// Create a "Pickup" model
var Pickup = sequelize.define('Pickup', {
    pickup_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    pickup_status: {
        type: DataTypes.STRING
    }
}, {
  timestamps: false
});
    return Pickup;
}