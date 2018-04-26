import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './pages/Login'
import TodoPage from './pages/todo/TodoPage'
import Auth from './pages/Auth'
import {fetchSigninState} from './redux/actions/AuthActions'
import './App.css';

class App extends Component {
	componentWillMount() {
	 // this.props.dispatch(fetchSigninState());
	}

	render() {
		return (<BrowserRouter>
			<Switch>
				<Route exact={true} path='/login' component={Login}/>
				<Auth>
					<Route path='/' component={TodoPage}/>
				</Auth>
			</Switch>
		</BrowserRouter>);
	}
}

export default connect()(App);
