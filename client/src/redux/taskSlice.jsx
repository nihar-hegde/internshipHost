import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: []
    },
    reducers: {
        getTask : (state, action) => {
            state.tasks = action.payload.map(task => {
                return {id: task._id, title: task.title, description: task.description}
            })
        },
        addTask : (state, action) => {
            state.tasks.push(action.payload)
        },
        updateTask: (state, action) => {
            const index = state.tasks.findIndex(x => x.id === action.payload.id)
            state.tasks[index] = {
                id: action.payload.id,
                title: action.payload.title,
                description: action.payload.description,
                
            }
        },
        deleteTask: (state, action) => {
            const id = action.payload.id;
            state.tasks = state.tasks.filter(u => u.id !== id)
        }
    }
})

export const {getTask, addTask, updateTask, deleteTask} = taskSlice.actions;
export default taskSlice.reducer;