module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Tasks', 'taskCategoryId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'TaskCategories', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
    await queryInterface.addColumn('Tasks', 'taskDepartamentId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'TaskDepartaments', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('Tasks', 'taskCategoryId');
    await queryInterface.removeColumn('Tasks', 'taskDepartamentId');
  },
};
