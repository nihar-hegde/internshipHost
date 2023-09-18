import "bootstrap/dist/css/bootstrap.min.css";
import Tasks from "./Tasks";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateTask from "./CreateTask";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getTask } from "./redux/taskSlice";
import UpdateTask from "./UpdateTask";
import Navbar from "./components/Navbar";
import SideBar from "./components/Sidebar";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001");
        dispatch(getTask(response.data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
      
        <Route path="/" element={<Tasks />}></Route>
        <Route path="/create" element={<CreateTask />}></Route>
        <Route path="/edit/:id" element={<UpdateTask />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
