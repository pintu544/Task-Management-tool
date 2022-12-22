const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    taskName:{
        type: String,
        required: true,
    },
    assignTo:{
        type: String,
        required: true,
    },
    description:{
        type: String,
    },
    priority:{
        type: Number,
        required: true,
    },
    dueDate:{
        type: String,
        required: true,
    },
    complete:{
        type: String,
        default: "incomplete",
        required: true,
    },
})

const Task = mongoose.model('Task',taskSchema);

module.exports = Task