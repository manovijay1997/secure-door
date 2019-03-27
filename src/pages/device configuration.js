import React, { Component } from 'react';
import Header from '../header/header';
import logo from '../Images/logo.jpg';
import Slide from '../sidebar/sidebar';
import './device-cofig.css';
import Hide from '../Images/Password/hide.png';
import Show from '../Images/Password/show.png';
import Toast from './device_config_toast/toast';
import Mqtt from './mqtt/mqtt';
import { Connector, subscribe } from 'mqtt-react';




class Device_config extends Component {
	state = {
		menu: true,
		pop: false,
		password: true,
		toggleImage: true,
		//address: 'http://192.168.4.1:80',
		mqttshow: true,
		message: " ",
		subscribe: " "
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
	message = (event) => {
		event.preventDefault();
		this.setState({ message: event.target.value });
		//console.log("mesage in device config is ", this.state.message)
	}
	subscribe = (event) => {
		event.preventDefault();
		this.setState({ subscribe: event.target.value });
		//console.log("mesage in device config is ", this.state.message)
	}

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
		event.preventDefault();
		this.setState({ mqttshow: !this.state.mqttshow });
		console.log("mqtt is", this.state.mqttshow);
	};

	render() {
		// var mqtt = require('mqtt')
		// var host = "ws://broker.hivemq.com";
		// var port = 8000;
		// var client = mqtt.connect(host, port, "vijay")

		// client.on('connect', function () {
		// 	client.subscribe('presence', function (err) {
		// 		if (!err) {
		// 			client.publish('presence', 'Hello mqtt')
		// 		}
		// 	})
		// })

		// client.on('message', function (topic, message) {
		// 	// message is Buffer
		// 	console.log(message.toString())
		// 	client.end()
		// })
		const { message, subscribe } = this.state;
		return (
			<div>

				{this.state.menu ? null : <Slide onchange={this.change} OnNav={this.nav} />}
				<img src={logo} className="dashimg" />
				<Header OnSide={this.change} />
				{this.state.pop ? null : <Toast OnPop={this.pop} />}
				{this.state.mqttshow ? null : <Mqtt message={message} onsubscribe={subscribe} ></Mqtt>}
				{/* <Connector mqttProps="ws://broker.hivemq.com:8000"> */}
				<div className="background">
					<div className="box1">
						<div className="box2">
							<p>Message</p>
							<input className="usernameInput" type="text" value={this.state.message} onChange={(event) => this.message(event)} />
							<p>Subscribe</p>
							<input className="passwordInput" value={this.state.subscribe} onChange={(event) => this.subscribe(event)} type={this.state.toggleImage ? 'password' : 'text'} />
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
				{/* </Connector> */}
			</div>
		);
	}
}

export default Device_config;
