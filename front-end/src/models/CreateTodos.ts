import type { NewTodo } from './NewTodo.ts'

/**
 * @description Created
 */
export type CreateTodos201 = any

export type CreateTodosMutationRequest = NewTodo

export type CreateTodosMutationResponse = CreateTodos201

export type CreateTodosMutation = {
  Response: CreateTodos201
  Request: CreateTodosMutationRequest
  Errors: any
}