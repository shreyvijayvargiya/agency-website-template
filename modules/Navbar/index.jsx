import router from "next/router";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { CreditCard, Home, Mail, ScrollText, Newspaper } from "lucide-react";

const navabarRoutes = [
	{
		id: "home",
		route: "/",
		icon: (props) => <Home {...props} />,
	},
	{
		id: "pricing",
		route: "/pricing",
		icon: (props) => <CreditCard {...props} />,
	},
	{
		id: "blog",
		route: "/blogs",
		icon: (props) => <Newspaper {...props} />,
	},
	{
		id: "contact",
		route: "/contact-us",
		icon: (props) => <Mail {...props} />,
	},
	{
		id: "policy",
		route: "/policy",
		icon: (props) => <ScrollText {...props} />,
	},
];

const Navbar = () => {
	return (
		<motion.div className="fixed top-4 left-1/2 -translate-x-1/2 rounded-full w-fit py-2 px-4 shadow-xl bg-black/80 border border-zinc-800 flex items-center justify-between gap-2 z-50 ring-4 ring-zinc-800 ring-opacity-50">
			{navabarRoutes.map((route) => (
				<a
					key={route.id}
					onClick={() => router.push(route.route)}
					className={`relative inline-flex items-center justify-center px-3 py-3 rounded-full cursor-pointer transition-all duration-200 ease-in-out text-white hover:bg-zinc-900/50
						`}
				>
					{route.icon({
						size: 24,
					})}
				</a>
			))}
		</motion.div>
	);
};

export default Navbar;
