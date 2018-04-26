import type from '../types/TodoActionTypes'

export function addTodo(todo) {
	return {type: type.ADD_TODO, todo: todo}
}

export function editTodo(todo){
	return {type: type.EDIT_TODO, todo: todo}
}

export function deleteTodo(todo){
	return {type: type.DELETE_TODO, todo: todo}
}
