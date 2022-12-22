const Task = require("../models/Task");



// create a task
exports.createtask =  async(req,res) =>{
    console.log(req.body)
    try {
        const task = await Task.create(req.body);

        if(!task){
            return res.status(400).json({message: 'task creation error.'});
        }
        return res.status(200).json({ message: 'task added successful.'});

    } catch (error) {
        console.log(error);
        return res.status(500).json({error, message: 'Internal server error.'});
    }
}

// fetch all tasks
exports.getTask = async(req,res) => {
    try {
        const task = await Task.find();

        if(task.length == 0){
            return res.status(400).json({task:[], message: 'task is empty'});
        }
        return res.status(200).json({ task: task, message: 'task fetch successful.'});

    } catch (error) {
        console.log(error);
        return res.status(500).json({error, message: 'Internal server error.'});
    }
}

// update task
exports.updateTask = async(req,res) =>{
    console.log(req.params.id, req.body)
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, {complete:req.body.status});

        if(!task){
            return res.status(400).json({message: 'Error updating task.'});
        }

        return res.status(200).json({message: 'task updated successfully.'});

    } catch (error) {
        console.log(error);
        return res.status(500).json({error, message: 'Internal server error.'});
    }
}


// delete task

exports.deleteTask = async(req,res) =>{
    try{
        const task = await Task.findByIdAndDelete({"_id": req.params.id})

        if(!task){
            return res.status(400).json({message: 'Error deleting task.'});
        }
        return res.status(200).json({message: 'task deleted successfully.'});

    } catch (error) {
        console.log(error);
        return res.status(500).json({error, message: 'Internal server error.'});
    }
}

