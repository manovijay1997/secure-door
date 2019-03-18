import React, { Component } from 'react';
import './toast.css';
class Toast extends Component {
	state = {};
	render() {
		return (
			<div className="toastbox1">
				<h1 className="toasthead">SECURE DOOR</h1>
				<p className="toastContent">Please select control service serial number from wifi</p>
				<button type="submit" onClick={() => this.props.OnPop()} className="okButton">
					ok
				</button>
			</div>
		);
	}
}

export default Toast;
