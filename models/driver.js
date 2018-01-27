// Dependicies
module.exports = function(sequelize, DataTypes){

// Create a "Driver" model
var Driver = sequelize.define('Driver', {
    driver_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    driver_monday: {
        type: DataTypes.STRING
    },
    driver_tuesday: {
        type: DataTypes.STRING
    },
    driver_wednesday: {
        type: DataTypes.STRING
    },
    driver_thursday: {
        type: DataTypes.STRING
    },
    driver_friday: {
        type: DataTypes.STRING
    },
    driver_saturday: {
        type: DataTypes.STRING
    },
    driver_sunday: {
        type: DataTypes.STRING
    },
    driver_status_override: {
        type: DataTypes.STRING
    }
}, {
  timestamps: false
});

Driver.associate = function (models) {
    Driver.belongsTo(models.User, {
        foreignKey: {
            allowNull: true
        }
    });
};
    return Driver;

}


