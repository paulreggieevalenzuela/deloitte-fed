import React from 'react';

// Utils
import { getYear } from '../../utils/utils';

/**
* Filter for the listing.
*
* @props {onClick} function
* @props {onChange} function
* @props {data} array of objects
*/

const Filter = ({ data, onChange, onClick }) =>
	<div className="content__inner-filter">
		<div className="form-group">
			<label className="control-label">Keywords</label>
			<input onChange={onChange} className="form-control" type="text" name="rocket_name" placeholder="eg Falcon" />
		</div>
		<div className="form-group">
			<label className="control-label">Launch Pad</label>
			<select className="form-control" disabled>
				<option value='' disabled> --Select-- </option>
			</select>
		</div>
		<div className="form-group">
			<label className="control-label">Min Year</label>
			<select className="form-control" disabled>
				<option value='' disabled> --Select-- </option>
				<option value='any'> Any </option>
			</select>
		</div>
		<div className="form-group">
			<label className="control-label">Max Year</label>
			<select className="form-control" disabled>
				<option value='' disabled> --Select-- </option>
				<option value='any'> Any </option>
			</select>
		</div>
		<button onClick={onClick} className="btn btn-apply">Apply</button>
	</div>;

export default Filter;