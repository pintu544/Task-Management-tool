const express = require('express');
const { createtask, getTask, updateTask, deleteTask } = require('../controller/taskContoller');
const route = express.Router();


// create task
route.post('/create-task',createtask);
// get all task
route.get('/task',getTask);
// update task
route.patch('/update-task/:id', updateTask)
// detete task
route.delete('/task/:id', deleteTask)


module.exports = route