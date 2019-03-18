import React, { Component } from 'react';
import './dashboard.css';
import logo from '../Images/logo.jpg';
import menu from '../Images/menuicon.png';
import Slide from '../sidebar/sidebar';
import Camera from '../Images/dashboard images/doorbell.png';
import Phone from '../Images/dashboard images/phone-call.png';
import video from '../Images/dashboard images/playlist.png';
import Emergency from '../Images/dashboard images/police.png';
import Header from '../header/header';

class Dashboard extends Component {
	state = {
		menu: true
	};
	change = (event) => {
		this.setState({ menu: !this.state.menu });
		event.preventDefault();
		console.log('state menu is', this.state.menu);
	};
	clicked = (event) => {
		if (event.target.name === 'camera') {
			window.alert('Camera clicked');
		} else if (event.target.name === 'phone') {
			window.alert('Phone is clicked');
		} else if (event.target.name === 'video') {
			window.alert('Video is clicked');
		} else if (event.target.name === 'emergency') {
			window.alert('emergency is clicked');
		}
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
				{/* <header className="header">
					<button type="button" className="sidebarbutton" onClick={(event) => this.change(event)}>
						<img src={menu} alt="menu" />
					</button>
				</header> */}
				<div className="quickAcessBlock1">
					<div className="quickAcessBlock2">
						<img
							src={Camera}
							className="QuickAcessImgs"
							name="camera"
							onClick={(event) => this.clicked(event)}
						/>
						<img
							src={Phone}
							className="QuickAcessImgs"
							name="phone"
							onClick={(event) => this.clicked(event)}
						/>
						<img
							src={video}
							className="QuickAcessImgs"
							name="video"
							onClick={(event) => this.clicked(event)}
						/>
						<img
							src={Emergency}
							className="QuickAcessImgs"
							name="emergency"
							onClick={(event) => this.clicked(event)}
						/>
					</div>
					<div className="QuickAcessName">
						<h1 className="QuickAcessNote">Camera</h1>
						<h1 className="QuickAcessNote">Phone</h1>
						<h1 className="QuickAcessNote">Video</h1>
						<h1 className="QuickAcessNote">Emergency</h1>
					</div>
				</div>
			</div>
		);
	}
}

export default Dashboard;
