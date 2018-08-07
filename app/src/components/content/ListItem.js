import React from 'react';

import { convertDate, convertTime } from '../../utils/utils';

/**
* List item.
*
* @props {data} objects
* return list;
*/

const ListItem = ({ data }) =>
	<li className="list__item">
		<div className="list__item-left">
			<div className="list__item-image">
				<img src={data.links.mission_patch} alt="Mission Thumbnail" />
			</div>
			<div className="list__item-desc">
				<h3 className="list__item-title">{data.rocket.rocket_name} - {data.payloads[0].payload_id}</h3>
				<p className="list__item-info">
					Launched on {convertDate(data.launch_date_local)} at {convertTime(data.launch_date_local)} from {data.launchpad_fullname}
				</p>
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
			<p className="number">#{data.flight_number}</p>
			<p className="number-desc">Flight Number</p>
		</div>
	</li>;

export default ListItem;