const { Router } = require('express');

const TaskController = require('../controllers/TaskController');

const taskRouter = (app) => {
  const router = Router();

  router.get('/', TaskController.findAll);

  router.get('/:id', TaskController.findOne);

  router.post(
    '/category/:taskCategoryId/departament/:taskDepartamentId',
    TaskController.create,
  );

  router.put('/:id', TaskController.update);

  router.delete('/:id', TaskController.delete);

  router.delete('/', TaskController.deleteAll);

  app.use('/api/tasks', router);
};

module.exports = taskRouter;
