import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dash from '../dashboard/dashboard';
//import App from '../App';
import Login from '../login/login';

import Settings from '../pages/settings';
import Schedule from '../pages/schedule';
import Device_config from '../pages/device configuration';
import Personal_det from '../pages/personal detail';
import Notification from '../pages/notification';

class Routes extends Component {
	state = {};
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/" component={Login} exact />
					<Route path="/dashboard" component={Dash} />
					<Route path="/settings" component={Settings} />
					<Route path="/schedule" component={Schedule} />
					<Route path="/device-congif" component={Device_config} />
					<Route path="/personal-details" component={Personal_det} />
					<Route path="/notification" component={Notification} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default Routes;
