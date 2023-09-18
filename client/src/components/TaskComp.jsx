// TaskComp.js
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask } from "../redux/taskSlice";

function TaskComp() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/deletetask/" + id)
      .then((res) => {
        dispatch(deleteTask({ id }));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="col-md-9 d-flex justify-content-center align-items-center bg-primary">
      <div className="bg-white rounded  p-3 w-100">
        <Link to="/create" className="btn btn-success btn-sm">
          Add +
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>
                  <Link
                    to={`/edit/${task.id}`}
                    className="btn btn-sm btn-success me-2"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TaskComp;
