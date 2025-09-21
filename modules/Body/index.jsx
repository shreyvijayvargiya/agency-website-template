import React from "react";
import Navbar from "../Navbar";

const Body = ({ children }) => {
	return (
		<>
			<Navbar />
			<div className="fixed bottom-4 text-zinc-800 bg-zinc-50 text-sm hover:text-black hover:scale-105 transition-all duration-100 ease-in right-4 px-4 py-2">
				<a
					href="https://shreyvijayvargiya.gumroad.com/l/agency-client-website-template?layout=profile"
					target="_blank"
					className=""
				>
					Buy template
				</a>
			</div>
			{children}
		</>
	);
};

export default Body;
