const { Router } = require('express');
const TaskDepartamentController = require('../controllers/TaskDepartamentController');

const taskDepartamentRouter = (app) => {
  const router = Router();

  router.get('/', TaskDepartamentController.findAll);

  router.get('/:id', TaskDepartamentController.findOne);

  router.post('/', TaskDepartamentController.create);

  router.put('/:id', TaskDepartamentController.update);

  router.delete('/:id', TaskDepartamentController.delete);

  router.delete('/', TaskDepartamentController.deleteAll);

  app.use('/api/task-departaments', router);
};

module.exports = taskDepartamentRouter;
