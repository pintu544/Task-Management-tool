import { useState } from "react";
import React from "react";
import { createTask } from "./API/taskAPI";
import { useNavigate } from "react-router-dom";

function AddTask() {
  const [task, setTask] = useState({});
  const navigate = useNavigate();

  const onAddTask = async () => {
    console.log(task);
    const response = await createTask(task);
    if (response.status === 200) {
      console.log("responce-message", response.data.message);
      navigate("/home");
    } else {
      console.log("error");
    }
  };

  const onHandleEvent = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form className="d-flex flex-column align-items-center ">
        <input
          type="text"
          name="taskName"
          placeholder="Enter task"
          className="form-control w-50 mt-2"
          onChange={(e) => onHandleEvent(e)}
        />

        <input
          type="text"
          name="assignTo"
          placeholder="Assign To"
          className="form-control w-50 mt-2"
          onChange={(e) => onHandleEvent(e)}
        />

        <textarea
          type="text"
          name="description"
          placeholder="Description"
          className="form-control w-50 mt-2"
          onChange={(e) => onHandleEvent(e)}
        />

        <input
          type="text"
          name="priority"
          placeholder="Priority (1-5)"
          className="form-control w-50 mt-2"
          onChange={(e) => onHandleEvent(e)}
        />

        <input
          type="date"
          name="dueDate"
          placeholder="Due Date"
          className="form-control w-50 mt-2"
          onChange={(e) => onHandleEvent(e)}
        />
      </form>
      <button
        className="form-control w-50 btn btn-primary mt-3 btn"
        onClick={() => onAddTask()}
      >
        Add task
      </button>
    </div>
  );
}

export default AddTask;
