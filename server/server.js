import express, { json } from 'express'
import cors from 'cors'
const app = express()
app.use(cors())
app.use(json())

let todos = [
  { id: 1, title: 'Buy milk', completed: false },
  { id: 2, title: 'Write workshop', completed: true },
]

// GET /todos
app.get('/todos', (req, res) => {
  res.json(todos)
})

// GET /todos/:id
app.get('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === Number(req.params.id))
  if (!todo) return res.status(404).send('Not found')
  res.json(todo)
})

// POST /todos
app.post('/todos', (req, res) => {
  const newTodo = {
    id: Date.now(),
    title: req.body.title,
    completed: req.body.completed ?? false,
  }
  todos.push(newTodo)
  res.status(201).json(newTodo)
})

app.listen(4000, () => {
  console.log('✅ API running on http://localhost:4000')
})
