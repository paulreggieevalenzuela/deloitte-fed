import React, { Component } from 'react';
import { connect } from 'react-redux';

// Filter
import Filter from './Filter';
import ListItem from './ListItem';

// Actions
import { browseLaunchpads, browseLaunches } from '../actions/actions';

class Content extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.dispatch(browseLaunchpads());
		this.props.dispatch(browseLaunches());
	}

	renderList(data) {
		return (
			<ul className="list">
				<ListItem />
			</ul>
		);
	}

	render() {
		const { launchpads, launches } = this.props;

		return (
			<section className="content">
				<div className="content__inner">
					<Filter />
					<div className="content__list">
						<h3 className="content__list-title">Showing 5 Missions</h3>
						{this.renderList(launches)}
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