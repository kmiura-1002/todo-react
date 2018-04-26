import actionType from '../types/TodoActionTypes'
import initialState from '../state/ToDoState'

export default function todo(state = initialState, action) {
	switch (action.type) {
		case actionType.ADD_TODO:
			{
				const _todoList = state.todoList;
				const _todo = action.todo;
				_todo.id = state.todoList.length > 0
					? _todoList[state.todoList.length - 1].id + 1
					: 0;
				return Object.assign({}, state, {
					todoList: [
						..._todoList,
						_todo
					]
				});
			}

		case actionType.EDIT_TODO:
			{
				const _todo = action.todo
				const _todoList = state.todoList
				_todoList[_todo.id] = _todo
				return Object.assign({}, state, {
					todoList: [..._todoList]
				});
			}
		case actionType.DELETE_TODO:
			{
				const _deleteTodo = action.todo
				const _todoList = state.todoList

				const getIndex = (value, arr, prop) => {
					for (var i = 0; i < arr.length; i++) {
						if (arr[i][prop] === value) {
							return i;
						}
					}
					return -1; //値が存在しなかったとき
				}
				const deleteIndex = getIndex(_deleteTodo.id, state.todoList, 'id')
				_todoList.splice(deleteIndex,1)

				return Object.assign({}, state, {
					todoList: [..._todoList]
				});
			}
		default:
			return state;
	}
}
