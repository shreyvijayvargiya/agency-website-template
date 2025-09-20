import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const Custom404 = () => {
	return (
		<div className="min-h-screen bg-black/95 text-zinc-50 flex flex-col items-center justify-center">
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className="text-center"
			>
				<h1 className="text-9xl font-bold text-white mb-4">404</h1>
				<h2 className="text-3xl font-semibold text-zinc-300 mb-8">
					Page Not Found
				</h2>
				<p className="text-lg text-zinc-400 mb-12 max-w-md mx-auto">
					Oops! The page you are looking for might have been removed, had its
					name changed, or is temporarily unavailable.
				</p>
				<Link href="/" legacyBehavior>
					<a class="relative px-6 py-3 font-bold text-black group">
						<span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-1 -translate-y-1 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
						<span class="absolute inset-0 w-full h-full border-2 border-dashed group-hover:border-none border-zinc-800"></span>
						<span class="relative">Go back home</span>
					</a>
				</Link>
			</motion.div>
		</div>
	);
};

export default Custom404;
