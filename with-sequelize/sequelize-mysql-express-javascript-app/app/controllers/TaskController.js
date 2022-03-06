const db = require('../models');

class TaskController {
  static findAll = async (request, response) => {
    // const { name } = request.query;
    // const condition = name ? { name: { [db.Op.like]: `%${name}%` } } : null;
    await db.Task.findAll({
      include: [
        {
          model: db.TaskCategory,
          as: 'taskCategory',
        },
        {
          model: db.TaskDepartament,
          as: 'taskDepartament',
        },
      ],
    })
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

  static findOne = async (request, response) => {
    // return response.json({ findOne: 'findOne' });

    const { id } = request.params;

    await db.Task.findByPk(id, {
      include: [
        {
          model: db.TaskCategory,
          as: 'taskCategory',
        },
        {
          model: db.TaskDepartament,
          as: 'taskDepartament',
        },
      ],
    })
      .then((data) => {
        response.json(data);
      })
      .catch((error) => {
        response.status(400).json({
          message:
            error.message || 'Some error accurred while retrieving task.',
        });
      });
  };

  static create = async (request, response) => {
    const { taskCategoryId, taskDepartamentId } = request.params;

    const taskCategory = await db.TaskCategory.findByPk(taskCategoryId);
    const taskDepartament = await db.TaskDepartament.findByPk(
      taskDepartamentId,
    );

    if (!taskCategory || !taskDepartament) {
      response.status(400).json({
        message: 'Category or Departament not found.',
      });
    }

    const { name, active } = request.body;
    // Validate request
    if (!name) {
      response.status(400).json({
        message: 'Content can not be empty.',
      });
    }
    // Create a Book
    const task = {
      name,
      active,
      taskCategoryId,
      taskDepartamentId,
    };
    // Save Book in database
    await db.Task.create(task)
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

module.exports = TaskController;
