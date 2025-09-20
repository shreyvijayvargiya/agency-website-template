import React from "react";
import Navbar from "../Navbar";

const Body = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
};

export default Body;
