// src/api/todos.ts
import axios from 'axios'
import type { Todo } from './models/Todo'

const api = axios.create({
  baseURL: 'http://localhost:4000',
})

export async function getTodos(): Promise<Todo[]> {
  const { data } = await api.get<Todo[]>('/todos')
  return data
}

export async function createTodo(todo: Omit<Todo, 'id'>): Promise<Todo> {
  const { data } = await api.post<Todo>('/todos', todo)
  return data
}
