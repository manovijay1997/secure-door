import React, { Component } from 'react';
import Header from '../header/header';
import logo from '../Images/logo.jpg';
import Slide from '../sidebar/sidebar';

class Settings extends Component {
	state = {
		menu: true
	};
	change = (event) => {
		this.setState({ menu: !this.state.menu });
		event.preventDefault();
		console.log('state menu is', this.state.menu);
	};
	pop = () => {
		window.alert('COnnect with configured wifi');
	};
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
	render() {
		return (
			<div>
				{this.state.menu ? null : <Slide onchange={this.change} OnNav={this.nav} />}
				<img src={logo} className="dashimg" />
				<Header OnSide={this.change} />

				<h1>This is settings</h1>
			</div>
		);
	}
}

export default Settings;
