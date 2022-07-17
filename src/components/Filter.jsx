import propTypes from "prop-types";

function Filter({ handleFilterChange, filterText }) {
	return (
		<div>
			<label>
				Search:
				<input
					type="text"
					name="filter"
					value={filterText}
					onChange={handleFilterChange}
				/>
			</label>
		</div>
	);
}

Filter.propTypes = {
	handleFilterChange: propTypes.func,
	filterText: propTypes.string,
};

export default Filter;
