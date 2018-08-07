import React, { Component } from 'react';
import { connect } from 'react-redux';
import find from 'lodash/find';
import filter from 'lodash/filter';
import isEmpty from 'lodash/isEmpty';

// Filter
import Filter from './Filter';
import ListItem from './ListItem';

// Actions
import { browseLaunchpads, browseLaunches } from '../../actions/actions';
class Content extends Component {
	constructor(props) {
		super(props);

		this.state = {
			copyLaunchesData: [],
			launchesData: [],
			params: {},
		}
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.launches.length) {
			const launchesData = nextProps.launches.map(d => ({
				...d,
				launchpad_fullname: find(nextProps.launchpads, 'id': d.site_id).full_name,
				...d.rocket,
			}));

			this.setState({ launchesData, copyLaunchesData: launchesData });
		}
	}

	componentDidMount() {
		this.props.dispatch(browseLaunchpads());
		this.props.dispatch(browseLaunches());
	}

	onFilter = (e) => {
		const { params } = this.state;
		const name = e.target.name;
		const value = e.target.value;

		params[name] = value;
		this.setState({ params });
	}

	handleSubmitFilter = () => {
		const { params, copyLaunchesData } = this.state;

		if(!isEmpty(params)) {
			this.setState({ launchesData: filter(copyLaunchesData, params)})
		} else {
			this.setState({ launchesData: copyLaunchesData });
		}
	}

	renderList(data) {
		return (
			<ul className="content__list">
				{data.length ? data.map((item, index) => <ListItem key={index} data={item} />) : null}
			</ul>
		);
	}

	render() {
		const { launchesData } = this.state;

		return (
			<section className="content">
				<div className="content__inner">
					<Filter data={launchesData} onChange={this.onFilter} onClick={this.handleSubmitFilter} />
					<div className="content__list">
						<h3 className="content__list-title">Showing {launchesData.length} Missions</h3>
						{this.renderList(launchesData)}
					</div>
				</div>
				<div className="content__footer">
					<p className="content__footer-copyright">Copyright © 2018 Space Savvy</p>
					<span className="content__footer-back">Back to Top</span>
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