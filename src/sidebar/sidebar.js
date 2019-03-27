import React, { Component } from 'react';
import './sidebar.css';
import close from '../Images/cross-symbol.png';
import Notification from '../Images/alarm.png';
import DeviceConfig from '../Images/deviceConfigration.png';
import PersonalDetail from '../Images/personalDetail.png';
import Setting from '../Images/settings.png';
import Schedule from '../Images/schedule.png';

class Slide extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		console.log("props value", (event) => this.props.onchange(event))
		return (
			<div className="slidebar">
				<div className="slidehead">
					<button type="button" className="slideCloseButton" onClick={(event) => this.props.onchange(event)}>
						<img src={close} className="slideCloseTag" alt="close button" />
					</button>
					<h1 className="heading">Gadgets</h1>
				</div>
				<ul className="ul">
					<p>
						<button
							type="button"
							className="linkbutton"
							onClick={(event) => this.props.OnNav(event)}
							name="dashboard"
						>
							<img src={Notification} alt="dashboard" className="iconimg" /> Dashboard
						</button>
					</p>
					<p>
						<button
							type="button"
							className="linkbutton"
							onClick={(event) => this.props.OnNav(event)}
							name="notification"
						>
							<img src={Notification} alt="Notification" className="iconimg" /> Notification
						</button>
					</p>
					<p>
						<button
							type="button"
							className="linkbutton"
							onClick={(event) => this.props.OnNav(event)}
							name="personal-details"
						>
							<img src={PersonalDetail} alt="personal" className="iconimg" /> Personal detail
						</button>
					</p>
					<p>
						<button
							type="button"
							className="linkbutton"
							onClick={(event) => this.props.OnNav(event)}
							name="schedule"
						>
							<img src={Schedule} alt="schdule" className="iconimg" /> Schedule
						</button>
					</p>
					<p>
						<button
							type="button"
							className="linkbutton"
							onClick={(event) => this.props.OnNav(event)}
							name="device-configuration"
						>
							<img src={DeviceConfig} alt="device" className="iconimg" /> Device configuration
						</button>
					</p>
					<p>
						<button
							type="button"
							className="linkbutton"
							onClick={(event) => this.props.OnNav(event)}
							name="settings"
						>
							<img src={Setting} alt="setting" className="iconimg" /> Settings
						</button>
					</p>
				</ul>
			</div>
		);
	}
}

export default Slide;
