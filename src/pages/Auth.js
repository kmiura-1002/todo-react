import React, {Component} from 'react';
import {withRouter, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

class Auth extends Component {

	constructor(props){
		super(props);
		const {auth: authState} = this.props;
		const authObj = authState.auth;
		this.state = {
			isAuthenticated:authObj.isSignin
		}
	}

	componentWillMount() {
		this.userWillTransfer(this.props);
	}

	componentWillUpdate(nextProps) {
		this.userWillTransfer(this.props);
	}

	userWillTransfer(props) {
		if (localStorage.getItem('jwt') && this.state.isAuthenticated) {
			this.setState({isAuthenticated: true});
		} else {
			this.setState({isAuthenticated: true});
		}
	}

	render() {
		return (
			this.state.isAuthenticated
			? (<Route children={this.props.children}/>)
			: (<Redirect to={'/login'}/>))
	}
}

const mapState = (state, ownProps) => ({auth:state.auth});

export default withRouter(connect(mapState)(Auth));
