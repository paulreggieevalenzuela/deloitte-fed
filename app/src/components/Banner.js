import React, { Component } from 'react';

// Media
import SpaceImage from '../images/space-photo.jpeg';
import chevronDown from '../images/down-chevron.svg';

class Banner extends Component {
	render() {
		return (
			<header className="banner" style={{ backgroundImage: `url(${SpaceImage}` }}>
				<div className="banner__overlay" />
				<h3 className="banner__name">Space Savvy</h3>
				<h1 className="banner__title">Discover Space Missions</h1>
				<div className="banner__icon">
					<img src={chevronDown} alt="Icon"/>
				</div>
			</header>
		);
	}
}

export default Banner;