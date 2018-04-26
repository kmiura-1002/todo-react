import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchSignin} from '../redux/actions/AuthActions';
// import initialState from '../redux/state/ToDoState'
import {Redirect, withRouter} from 'react-router-dom';
import './Login.css'

class Login extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox'
			? target.checked
			: target.value;
		const name = target.name;

		this.setState({[name]: value});
	}
	handleSubmit(e) {
		e.preventDefault();
		this.props.dispatch(fetchSignin('hoge','foo'));
	}

	render() {
		const {auth: tauthState} = this.props;
		const authObj = tauthState.auth;
		return authObj.isSignin
			? (<Redirect to={'/'}/>)
			: (<div>
				<form className="form-signin text-center" onSubmit={this.handleSubmit}>
					<h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
					<label htmlFor="inputEmail" className="sr-only">Email address</label>
					<input type="email" id="id" className="form-control" placeholder="Email address" required="" autoFocus={true} onChange={this.handleInputChange}/>
					<label htmlFor="inputPassword" className="sr-only">Password</label>
					<input type="password" id="pass" className="form-control" placeholder="Password" required="" onChange={this.handleInputChange}/>
					<button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
					<p className="mt-5 mb-3 text-muted">© 2017-2018</p>
				</form>
				{authObj.error && <p>{authObj.error}</p>}
			</div>);
	}
}
const mapState = (state, ownProps) => ({auth: state.auth});

export default withRouter(connect(mapState)(Login));
