import React from "react";
import "../App.css";

const Header = () => {
	return (
		<div className="header">
			<a href="#default">FE Engineer Test 1</a>
			<a href="#default">Home</a>
			<a href="#default">Entries</a>
			<a href="#default" className="active">
				Divisions
			</a>
			<div className="header-right flex-container1">
				<div>
					<a href="#about">Icon2</a>{" "}
				</div>
				<div>
					<a href="#contact">Icon1</a>
				</div>
				<div className="input-icons">
					<i class="fa fa-search icon"></i>
					<input type="text" />
				</div>
			</div>
		</div>
	);
};

export default Header;
