const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TaskModel = require('./Models/User')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://niharhegde163:niharhegde123@cluster0.qjshhhi.mongodb.net/?retryWrites=true&w=majority/task');

app.get('/', (req, res) => {
    TaskModel.find()
    .then(tasks => res.json(tasks))
    .catch(err => res.json(err))
})

app.post('/create', (req, res) => {
    TaskModel.create(req.body)
    .then(task => res.json(task))
    .catch(err => res.json(err))
})

app.put('/update/:id', (req, res) => {
    const id = req.params.id;
    TaskModel.findByIdAndUpdate({_id: id}, {
        title: req.body.name,
        description: req.body.email,
        
    }).then(task => res.json(task))
    .catch(err => res.json(err))
})

app.delete('/deletetask/:id', (req, res) => {
    const id = req.params.id;
    TaskModel.findByIdAndDelete({_id: id})
    .then(response => res.json(response))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is Running");
})