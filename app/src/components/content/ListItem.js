import React from 'react';

/**
* List item.
*
* @props {data} objects
* return list;
*/

const ListItem = ({ data }) =>
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
	</li>;

export default ListItem;