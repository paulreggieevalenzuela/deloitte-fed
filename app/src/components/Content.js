import React, { Component } from 'react';
import { connect } from 'react-redux';

import { browseLaunchpads, browseLaunches } from '../actions/actions';

class Content extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.dispatch(browseLaunchpads());
		this.props.dispatch(browseLaunches());
	}

	render() {
		const { launchpads, launches } = this.props;
		console.log("Launchpads", launchpads);
		console.log("launches", launches);
		return (
			<section className="content">
				<div className="content__inner">
					<div className="content__inner-filter">
						<div className="form-group">
							<label className="control-label">Keywords</label>
							<input className="form-control" type="text" />
						</div>
						<div className="form-group">
							<label className="control-label">Launch Pad</label>
							<select className="form-control">
								<option value='' disabled> --Select-- </option>
							</select>
						</div>
						<div className="form-group">
							<label className="control-label">Min Year</label>
							<select className="form-control">
								<option value='' disabled> --Select-- </option>
							</select>
						</div>
						<div className="form-group">
							<label className="control-label">Max Year</label>
							<select className="form-control">
								<option value='' disabled> --Select-- </option>
							</select>
						</div>
						<button className="btn btn-apply">Apply</button>
					</div>
					<div className="content__list">
						<h3 className="content__list-title">Showing 5 Missions</h3>
						<ul className="list">
							<li className="list__item">
								<div className="list__item-left">
									<div className="list__item-image"></div>
									<div className="list__item-desc">
										<h3 className="list__item-title">Falcon 9 - Echostar 105</h3>
										<p className="list__item-info">Launched 11th October 2017 at 6.53pm from Kennedy Space Center Launch Complex 39A</p>
										<div className="list__item-tags">
											<span className="tags">Reddit Campaign</span>
											<span className="tags">Reddit Launch</span>
											<span className="tags">Reddit Media</span>
											<span className="tags">Press Kit</span>
											<span className="tags">Watch Video</span>
										</div>
									</div>
								</div>
								<div className="list__item-right">
									<p className="number">#49</p>
									<p className="number-desc">Flight Number</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</section>
		);
	}
}

const mapStateToProps = (state) => {
    return {
        launchpads: state.request.launchpads,
        launches: state.request.launches,
    };
}

export default connect(mapStateToProps)(Content);