// Dependicies
module.exports = function(sequelize, DataTypes){

    // Create a "Supplier Listing" model
    var supplierListing = sequelize.define('org_listing', {
        supplierListing_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        listing_title: {
            type: DataTypes.STRING
        },
        listing_description: {
            type: DataTypes.STRING
        }
    }, {
      timestamps: false
    });
        return supplierListing;
    
    }