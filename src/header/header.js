import React, { Component } from 'react';
import menu from '../Images/menuicon.png';

class Head extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<header className="header">
					<button type="button" className="sidebarbutton" onClick={(event) => this.props.OnSide(event)}>
						<img src={menu} alt="menu" />
					</button>
				</header>
			</React.Fragment>
		);
	}
}

export default Head;
