const express = require('express');
const task = express.Router();

const controllers = require('../controllers/TaskControllers');



task.route('/')
    .post(controllers.add)
    .get(controllers.getAll);

task.route('/:id')
    .get(controllers.getById)    
    .post(controllers.update)
    .delete(controllers.delete);

module.exports = task;


