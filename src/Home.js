// import { all } from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteTask, updateTask } from "./API/taskAPI";
import "./App.css";

function Home() {
  const [allTask, setAllTask] = useState([]);
  const [loading, setLoding] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:8000/task`);
      const data = await res.json();
      console.log(data);
      setAllTask(data.task);
      setLoding(false);
    })();
  }, [allTask]);

  const changeStatus = async (id, status) => {
    console.log(id, status);
    if(status === "complete"){
      status = "incomplete"
    }else{
      status = "complete"
    }
    const res = await updateTask(id, status);
    if (res.status === 200) {
      console.log("responce message:", res.data.message);
    } else {
      console.log("error");
    }
  }

  const onDeleteTask = async (id) => {
    console.log(id);
    const res = await deleteTask(id);
    if (res.status === 200) {
      console.log("responce message:", res.data.message);
    } else {
      console.log("error");
    }
  };

  return (
    <div className="ms-3">
      <div>
        <button
          className="w-50 btn btn-success"
          onClick={() => navigate("/addTask")}
        >
          ADD TASK
        </button>
      </div>

      {allTask.length === 0 ? (
        <h3 className="text-danger">
          <i>No any todo available...</i>
        </h3>
      ) : (
        <div className="container">
          <div className="margin">
            <div className="row mt-3 ms-5">
              <div className="col-2 text-success fs-3 task-text">Task</div>
              <div className="col-2 text-success fs-3 task-text">AssignTo</div>
              <div className="col-2 text-success fs-3 task-text">DueDate</div>
              <div className="col-2 text-success fs-3 task-text">Priority</div>
              <div className="col-2 text-success fs-3 task-text">Status</div>
            </div>
          </div>

          <div className="margin">
            {loading ? (
              <p>Loading....</p>
            ) : (
              allTask.map((item) => (
                <div className="row mt-3 ms-5 " key={item._id}>
                  <div className="col-2 fs-4 task-text">{item.taskName}</div>
                  <div className="col-2 fs-4 task-text">{item.assignTo}</div>
                  <div className="col-2 fs-4 task-text">{item.dueDate}</div>
                  <div className="col-2 fs-4 task-text">{item.priority}</div>
                  <div
                    className="col-2 fs-4 task-text"
                    onClick={() => changeStatus(item._id, item.complete)}
                  >
                    {item.complete === "complete" ? <i class="fa-solid fa-square-check"></i>: <i class="fa-regular fa-square-check"></i>}
                  </div>
                  <div className="col-2 fs-4 task-text">
                    <i
                      onClick={() => onDeleteTask(item._id)}
                      className="text-danger fa-solid fa-trash-can fs-6"
                    ></i>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
