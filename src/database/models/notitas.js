const {DataTypes} = require('sequelize');

module.exports = sequelize => {
  const cols = {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id"
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "description"
    },
    title: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "title"
    },
    prioridades: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "prioridades"
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "status"
    }
  };
  const config = {
    tableName: "notitas",
    timestamps:false,
    underscored: true,
    comment: "",
    indexes: []
  };
  const NotitasModel = sequelize.define("notitas", cols, config);
  return NotitasModel;
};