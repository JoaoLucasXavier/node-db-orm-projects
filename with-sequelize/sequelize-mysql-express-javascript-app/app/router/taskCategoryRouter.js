const { Router } = require('express');
const TaskCategoryController = require('../controllers/TaskCategoryController');

const taskCategoryRouter = (app) => {
  const router = Router();

  router.get('/', TaskCategoryController.findAll);

  router.get('/:id', TaskCategoryController.findOne);

  router.post('/', TaskCategoryController.create);

  router.put('/:id', TaskCategoryController.update);

  router.delete('/:id', TaskCategoryController.delete);

  router.delete('/', TaskCategoryController.deleteAll);

  app.use('/api/task-categories', router);
};

module.exports = taskCategoryRouter;
