// Dependicies
module.exports = function(sequelize, DataTypes){

// Create a "Organization" model
var Organization = sequelize.define('organization_tbl', {
    organization_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    organization_name: {
        type: DataTypes.STRING
    },
    organization_street_address: {
        type: DataTypes.STRING
    },
    organization_city: {
        type: DataTypes.STRING
    },
    organization_state: {
        type: DataTypes.STRING
    },
    organization_zip: {
        type: DataTypes.STRING
    },
    organization_contact: {
        type: DataTypes.STRING
    },
    organization_website: {
        type: DataTypes.STRING
    },
    organization_phone: {
        type: DataTypes.STRING
    },
    organization_description: {
        type: DataTypes.STRING
    },
    Organization_type: {
        type:DataTypes.String
    }
}, {
  timestamps: false
});
    return Organization;

}


