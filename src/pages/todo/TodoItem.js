import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Nl2br from '../../components/Nl2br';
import * as action from '../../redux/actions/TodoActions';

/**
 * Todo
 * @extends Component
 */
class TodoItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			index: props.index
		}
		this.changeStatus = this.changeStatus.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
	}

	changeStatus() {
		const {actions: {
				editTodo
			}, todo: todoObj} = this.props;
		const todo = todoObj.todoList[this.state.index]

		if (todo.status === 'finished') {
			todo.status = 'unfinished'
		} else {
			todo.status = 'finished'
		}
		editTodo(todo)
	}

	deleteTodo() {
		if (window.confirm('Do you want to delete this Todo?')) {
			const {actions: {
					deleteTodo
				}, todo: todoObj} = this.props;
			const todo = todoObj.todoList[this.state.index]
			deleteTodo(todo);
		}
	}

	render() {
		const del = {
			textDecoration: 'line-through'
		}
		const {todo: todoObj} = this.props;
		const todo = todoObj.todoList[this.state.index]
		return (<div className="form-check">
			<div className={'card ' + (
					new Date() > new Date(todo.deadline) && todo.status === 'unfinished'
					? 'text-white bg-warning'
					: '')}>
				<div className="card-header" id={'todoh' + todo.id}>
					<h5 className="mb-0">
						<button className="btn btn-link" data-toggle="collapse" data-target={'#todo' + todo.id} aria-expanded="true" aria-controls={'todo' + todo.id}>
							<span style={todo.status === 'finished'
									? del
									: null}>{todo.value}</span>
							{
								(() => {
									if (todo.status === 'finished') {
										return <span className="badge badge-danger">Finished</span>
									} else if (new Date() > new Date(todo.deadline)) {
										return <span className="badge badge-danger">Expiration</span>
									}

								})()
							}
						</button>
					</h5>
				</div>
				<div id={'todo' + todo.id} className="collapse show" aria-labelledby={'todoh' + todo.id} data-parent="#accordion">
					<div className="card-body">
						<div>
							<strong>Description:</strong><br/>
							<Nl2br text={todo.description}></Nl2br>
						</div>
						<div>
							<strong>Deadline:</strong>
							{todo.deadline}
						</div>
						<div className="btn-toolbar">
							<div className="btn-group">
								<button type="button" className="btn btn-success" onClick={this.changeStatus}>{todo.status}</button>
								<button type="button" className="btn btn-danger" onClick={this.deleteTodo}>Delete</button>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>);
	}
}

const mapState = (state, ownProps) => ({todo: state.todo});

function mapDispatch(dispatch) {
	return {
		actions: bindActionCreators(action, dispatch)
	};
}

export default connect(mapState, mapDispatch)(TodoItem);
