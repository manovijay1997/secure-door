import React, { Component } from 'react';
import './login.css';
import '../App.css';
import logo from '../Images/logo.jpg';
class login extends Component {
	state = {
		name: '',
		password: ''
	};
	setusername = (event) => {
		console.log('name', this.state.name);
		this.setState({ name: event.target.value });
	};
	setpassword = (event) => {
		this.setState({ password: event.target.value });
	};
	move = (event) => {
		if (this.state.name === 'vijay' && this.state.password === 'vijay') {
			this.props.history.push('/dashboard');
		} else {
			window.alert('Incorrect username or  password');
		}
		event.preventDefault();
	};
	render() {
		return (
			<div className="cont">
				<div>
					<img src={logo} className="img" />
					<div className="container1">
						<h1 className="h1">Login</h1>
						<div className="container2">
							<p className="p">Username</p>
							<input type="text" className="input" onChange={(event) => this.setusername(event)} />
							<p className="p"> Password</p>
							<input type="password" className="input" onChange={(event) => this.setpassword(event)} />
						</div>
						<button type="button" className="button" onClick={(event) => this.move(event)}>
							<strong>Login</strong>
						</button>
						<button type="button" className="button">
							<strong>Sign Up</strong>
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default login;
