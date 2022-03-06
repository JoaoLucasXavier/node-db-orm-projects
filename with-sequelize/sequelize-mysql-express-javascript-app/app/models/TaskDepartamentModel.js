const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TaskDepartamentModel extends Model {
    static associate(models) {
      this.hasMany(models.Task, {
        foreignKey: 'taskDepartamentId',
        as: 'tasks',
      });
    }
  }

  TaskDepartamentModel.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'TaskDepartament',
    },
  );

  return TaskDepartamentModel;
};
