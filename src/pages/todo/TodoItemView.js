import React, {Component} from 'react';
import TodoItem from './TodoItem'
import {connect} from 'react-redux';

/**
 * Todo
 * @extends Component
 */
class TodoItemView extends Component {
	constructor(props) {
		super(props);
		//初期化しないと実行はできるがエラーが出る
		this.state = {
			todoList: props.todoList
		}
	}
	render() {
		const { todo:{todoList}} = this.props;
		return (<div>{todoList.map((todo, i, a) => <TodoItem index={i} key={i}/>)}</div>);
	}
}

const mapState = (state, ownProps) => ({
  todo: state.todo,
});

export default connect(mapState)(TodoItemView);
