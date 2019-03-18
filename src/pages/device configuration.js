import React, { Component } from 'react';
import Header from '../header/header';
import logo from '../Images/logo.jpg';
import Slide from '../sidebar/sidebar';
import './device-cofig.css';
import Hide from '../Images/Password/hide.png';
import Show from '../Images/Password/show.png';
import Toast from './device_config_toast/toast';
import io from 'socket.io-client';

class Device_config extends Component {
	state = {
		menu: true,
		pop: false,
		password: true,
		toggleImage: true,
		address: 'http://192.168.4.1:80',
		link: true
	};
	//used to open side bar menu
	change = (event) => {
		this.setState({ menu: !this.state.menu });
		event.preventDefault();
		//console.log('state menu is', this.state.menu);
	};

	//used to pop the alert window to user wifi connection
	pop = () => {
		//console.log("i'm from pop");
		if (this.state.pop === false) {
			this.setState({ pop: true });
		}
	};

	//used to password hide and show
	toggleImage = (event) => {
		event.preventDefault();
		this.setState({ toggleImage: !this.state.toggleImage });
	};

	//used to find and navigate the exact page it props from sidebar or <Slide/>
	nav = (event) => {
		if (event.target.name === 'notification') {
			this.props.history.push('/notification');
		} else if (event.target.name === 'personal-details') {
			this.props.history.push('/personal-details');
		} else if (event.target.name === 'schedule') {
			this.props.history.push('/schedule');
		} else if (event.target.name === 'device-configuration') {
			this.props.history.push('/device-congif');
		} else if (event.target.name === 'settings') {
			this.props.history.push('/settings');
		} else if (event.target.name === 'dashboard') {
			this.props.history.push('/dashboard');
		}
		event.preventDefault();
	};
	submit = (event) => {
		/* const app = require('express')();
		var http = require('http').Server(app);
		var io = require('socket.io-client')(http);

		app.listen('192.168.4.1');
		io.on('connection', function(socket) {
			socket.emit('news', { hello: 'world' });
		}); */
		console.log('in function');
		//const socket = io.connect('port:80', { port: 80, reconnection: false });
		//const socket = io.connect('192.168.4.1:80', { reconnection: false });
		//var socket = require('socket.io-client')('192.168.4.1');
		/* socket.on('connect', () => {
			console.log('vijay');
		}); */
		/* const { address } = this.state;
		const socket = io.connect(address);
		socket.on('connect', () => {
			console.log('connected');
		}); */

		//var socket = io.connect('192.168.4.1:80', { reconnection: false });
		this.setState({ link: !this.state.link });
		console.log(this.state.link);
		var socket = io.connect('http://localhost:3000');
		if (this.state.link === true) {
			socket.on('connect', () => {
				console.log('connected');
			});
		} else if (this.state.link === false) {
			socket.on('disconnect', () => {
				console.log('disconnect');
			});
		}
		event.preventDefault();
	};

	render() {
		return (
			<div>
				{this.state.menu ? null : <Slide onchange={this.change} OnNav={this.nav} />}
				<img src={logo} className="dashimg" />
				<Header OnSide={this.change} />
				{this.state.pop ? null : <Toast OnPop={this.pop} />}
				<div className="background">
					<div className="box1">
						<div className="box2">
							<p>SSID</p>
							<input className="usernameInput" type="text" />
							<p>Password</p>
							<input className="passwordInput" type={this.state.toggleImage ? 'password' : 'text'} />
							<button className="hideandshowButton" onClick={(event) => this.toggleImage(event)}>
								<img src={this.state.toggleImage ? Hide : Show} className="passwordImg" />
							</button>
							<br />
							<button type="button" className="button" onClick={(event) => this.submit(event)}>
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Device_config;
