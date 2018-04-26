import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {fetchSignout} from '../../redux/actions/AuthActions';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class NavTemplate extends Component {

	constructor(props) {
		super(props);
		this.signout = this.signout.bind(this);
	}

	signout() {
		const {auth: authState} = this.props;
		const authObj = authState.auth;
		this.props.dispatch(fetchSignout(authObj));
	}

	render() {
		const {auth: authState} = this.props;
		const authObj = authState.auth;
		return authObj.isSignin
			? (<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
				<Link to={`/todo`} className="navbar-brand">Todo</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarsExampleDefault">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item"></li>
					</ul>
					<ul className="navbar-nav">
						<li className="nav-item active">
							<button className="nav-link btn btn-link" onClick={this.signout}>
								Signout<span className="sr-only">(current)</span>
							</button>
						</li>
					</ul>
				</div>
			</nav>)
			: (<Redirect to={'/login'}/>);
	}
}
const mapState = (state, ownProps) => {
	console.log(state);
	console.log(ownProps);
	return {auth: state.auth};};

export default connect(mapState)(NavTemplate);
