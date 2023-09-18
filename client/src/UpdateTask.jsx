import axios from "axios";
import { useEffect, useState } from "react";
import { updateTask } from "./redux/taskSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function UpdateTask() {
    const {id} = useParams()
   
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
        
    const tasks = useSelector(state => state.tasks.tasks)
    
    useEffect(()=> {
        const task = tasks.find(u => u.id === id)
        setTitle(task.title)
        setDescription(task.description)
        
    }, [])

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleUpdate = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3001/update/'+id, {title,description})
        .then(res => {
            dispatch(updateTask({id, title,description}))
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return ( 
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleUpdate}>
          <h2>Update Task</h2>
          <div className="mb-2">
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="Enter Title"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Description</label>
            <input
              type="text"
              placeholder="Enter Description"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
     );
}

export default UpdateTask;