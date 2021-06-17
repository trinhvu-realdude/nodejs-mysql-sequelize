'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contact_info extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      contact_info.belongsTo(models.user, {
        foreignKey: 'user_id'
      });
    }
  };
  contact_info.init({
    user_id: DataTypes.INTEGER,
    city: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'contact_info',
  });
  return contact_info;
};