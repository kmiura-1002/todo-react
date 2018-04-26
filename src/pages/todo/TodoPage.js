import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PageTemplate from '../common/PageTemplate'
import TodoItemView from './TodoItemView'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as action from '../../redux/actions/TodoActions';
import initialState from '../../redux/state/ToDoState'

/**
 * Todo
 * @extends Component
 */
class TodoPage extends Component {

	constructor(props) {
		super(props);
		this.state = initialState.todo;

		this.handleInputChange = this.handleInputChange.bind(this);
		this.submitTodo = this.submitTodo.bind(this);
	}
	handleInputChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox'
			? target.checked
			: target.value;
		const name = target.name;

		this.setState({[name]: value});
	}
	submitTodo(e) {
		const {actions: {
				addTodo
			}} = this.props;
		const todo = {
			id: -1,
			value: this.state.value,
			description: this.state.description,
			deadline: this.state.deadline,
			status:'unfinished',
			availability: true
		}
		addTodo(todo);
		for(let k in this.state){
			this.setState({[k]: k==='id'?-1:''});
		}
		e.preventDefault();
	}

	render() {
		return (<PageTemplate>
			<div className="jumbotron">
				<div className="container">
					<h1 className="display-3">Todo List</h1>
				</div>
			</div>
			<div className="container">
				<div className="card">
					<div className="card-header">
						Todo View
					</div>
					<div className="card-body">
						<TodoItemView/>
						<hr/>
						<form onSubmit={this.submitTodo}>
							<div className="form-row align-items-center row">
								<div className="col-auto col-12">
									<label className="sr-only" htmlFor="inlineFormInput">Add Todo</label>
									<div className="input-group mb-3">
										<input name="value" type="text" value={this.state.value} onChange={this.handleInputChange} required={true} className="form-control" id="inlineFormInput" placeholder="Todo"/>
										<div className="input-group-append">
											<a className="input-group-prepend btn btn-primary" data-toggle="collapse" href="#detail" role="button" aria-expanded="false" aria-controls="detail">Detail</a>
										</div>
									</div>
									<div className="col-auto mb-3 collapse" id="detail">
										<div className="card card-body">
											<div className="form-group">
												<label htmlFor="description">
													<strong>Description:</strong>
												</label>
												<textarea name="description" d="text" value={this.state.description} className="form-control" onChange={this.handleInputChange}></textarea>
											</div>
											<div className="form-group">
												<label htmlFor="date">
													<strong>Deadline:</strong>
												</label>
												<input name="deadline" type="date" value={this.state.deadline} className="form-control" onChange={this.handleInputChange}/>
											</div>
										</div>
									</div>

								</div>
								<div className="col-auto">
									<button type="submit" className="btn btn-primary mb-2">Add Todo</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				<hr/>
			</div>
		</PageTemplate>);
	}
}

TodoPage.propTypes = {
	todo: PropTypes.object.isRequired
};

const mapState = (state, ownProps) => ({todo: state.todo, auth:state.auth});

function mapDispatch(dispatch) {
	return {
		actions: bindActionCreators(action, dispatch)
	};
}

export default connect(mapState, mapDispatch)(TodoPage);

// export default TodoPage;
