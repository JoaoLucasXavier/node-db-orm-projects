const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TaskModel extends Model {
    static associate(models) {
      this.belongsTo(models.TaskCategory, {
        foreignKey: 'taskCategoryId',
        as: 'taskCategory',
      });
      this.belongsTo(models.TaskDepartament, {
        foreignKey: 'taskDepartamentId',
        as: 'taskDepartament',
      });
    }
  }

  TaskModel.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: 'Task', // We need to choose the model name
    },
  );

  return TaskModel;
};
