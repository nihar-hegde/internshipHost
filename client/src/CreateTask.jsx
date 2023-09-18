import axios from "axios";
import { useState } from "react";
import { addTask } from "./redux/taskSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function CreateTask() {

  const [title, setTitle] = useState()
  const [description, setDescription] = useState()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/create', {title,description})
        .then(res => {
            dispatch(addTask(res.data))
            navigate('/')
        })
        .catch(err => console.log(err))
    }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Add Task</h2>
          <div className="mb-2">
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Description</label>
            <input
              type="text"
              placeholder="Enter Description"
              className="form-control"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateTask;
