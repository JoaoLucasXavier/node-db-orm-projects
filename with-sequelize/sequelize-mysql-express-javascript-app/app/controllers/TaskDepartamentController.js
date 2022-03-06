const db = require('../models');

class TaskDepartamentController {
  static findAll = async (request, response) => {
    const { name } = request.query;
    const condition = name ? { name: { [db.Op.like]: `%${name}%` } } : null;
    await db.TaskDepartament.findAll({ where: condition })
      .then((data) => {
        response.json(data);
      })
      .catch((error) => {
        response.status(400).json({
          message:
            error.message || 'Some error accurred while retrieving tasks.',
        });
      });
  };

  static findOne = (request, response) => {
    response.json({ id: 10, name: 'Task 1' });
  };

  static create = async (request, response) => {
    const { name, active } = request.body;
    // Validate request
    if (!name) {
      response.status(400).json({
        message: 'Content can not be empty!',
      });
      return;
    }
    // Create a Book
    const task = {
      name,
      active,
    };
    // Save Book in database
    await db.TaskDepartament.create(task)
      .then((data) => {
        response.json(data);
      })
      .catch((error) => {
        response.status(500).json({
          message:
            error.message || 'Some error occurred while creating the Task.',
        });
      });
  };

  static update = (request, response) => {
    response.json({ id: 10, name: 'Task 1' });
  };

  static delete = (request, response) => {
    response.json({ id: 10, name: 'Task 1' });
  };

  static deleteAll = (request, response) => {
    response.json({ id: 10, name: 'Task 1' });
  };
}

module.exports = TaskDepartamentController;
