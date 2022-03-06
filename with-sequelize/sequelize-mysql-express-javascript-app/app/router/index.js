const taskRouter = require('./taskRouter');
const taskCategoryRouter = require('./taskCategoryRouter');
const taskDepartamentRouter = require('./taskDepartamentRouter');

const router = (app) => {
  taskRouter(app);
  taskCategoryRouter(app);
  taskDepartamentRouter(app);
};

module.exports = router;
