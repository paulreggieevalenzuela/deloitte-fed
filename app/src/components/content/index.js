import React, { Component } from 'react';
import { connect } from 'react-redux';
import find from 'lodash/find';

// Filter
import Filter from './Filter';
import ListItem from './ListItem';

// Actions
import { browseLaunchpads, browseLaunches } from '../../actions/actions';

class Content extends Component {
	componentDidMount() {
		this.props.dispatch(browseLaunchpads());
		this.props.dispatch(browseLaunches());
	}

	renderList(data) {
		return (
			<ul className="list">
				{data.length ? data.map((item, index) => <ListItem key={index} data={item} />) : null}
			</ul>
		);
	}

	render() {
		const { launchpads, launches } = this.props;

		const launchesData = launches.map(d => ({
			...d,
			launchpad_fullname: find(launchpads, 'id': d.site_id).full_name,
		}));
		console.log("launches", launchesData);
		return (
			<section className="content">
				<div className="content__inner">
					<Filter />
					<div className="content__list">
						<h3 className="content__list-title">Showing 5 Missions</h3>
						{this.renderList(launchesData)}
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