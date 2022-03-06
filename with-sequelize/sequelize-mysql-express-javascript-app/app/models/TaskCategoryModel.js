const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TaskCategoryModel extends Model {
    static associate(models) {
      this.hasMany(models.Task, {
        foreignKey: 'taskCategoryId',
        as: 'tasks',
      });
    }
  }

  TaskCategoryModel.init(
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
      modelName: 'TaskCategory',
    },
  );

  return TaskCategoryModel;
};
