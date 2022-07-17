import React from "react";
import { Link } from "react-router-dom";
import Table from "../components/Table";

function EmployeeList() {
	return (
		<div>
			<div className="container">
				<h1>Current Employees</h1>
				<Table />
				<Link to="/">Home</Link>
			</div>
		</div>
	);
}

export default EmployeeList;
