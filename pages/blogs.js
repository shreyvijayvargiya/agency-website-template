import Head from "next/head";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Youtube, X, ArrowLeft } from "lucide-react";

const footerNav = {
	pages: [
		{ name: "Shop", href: "#" },
		{ name: "Work", href: "#" },
		{ name: "Blog", href: "/blogs" },
		{ name: "About", href: "#" },
		{ name: "Contact", href: "/contact-us" },
		{ name: "Login", href: "/login" },
		{ name: "404", href: "/404" },
		{ name: "Policy", href: "/policy" },
	],
	products: [
		{ name: "Keynote", href: "#" },
		{ name: "Directory", href: "#" },
		{ name: "Display", href: "#" },
		{ name: "Gallereee", href: "#" },
		{ name: "Feature", href: "#" },
	],
};

const blogPosts = [
	{
		id: 1,
		title: "The Future of Web Design: Trends to Watch in 2025",
		image: "/crm-dashboard.webp",
		description:
			"Explore the cutting-edge trends shaping web design in the coming years, from AI-powered interfaces to immersive 3D experiences.",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},
	{
		id: 2,
		title: "Mastering SEO: A Comprehensive Guide for Beginners",
		image: "/finance-app.webp",
		description:
			"Unlock the secrets to higher search engine rankings with this essential guide to Search Engine Optimization for novices.",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},
	{
		id: 3,
		title: "The Power of Branding: Building a Memorable Identity",
		image: "/finance-dashboard.webp",
		description:
			"Discover how strong branding can elevate your business and create a lasting impression on your audience.",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},
	{
		id: 4,
		title: "UI/UX Best Practices: Designing for User Engagement",
		image: "/health-app-design.webp",
		description:
			"Learn the fundamental principles of UI/UX design that drive user engagement and satisfaction.",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},
];

const BlogsPage = () => {
	const [selectedBlog, setSelectedBlog] = useState(null);

	const openModal = (blog) => {
		setSelectedBlog(blog);
	};

	const closeModal = () => {
		setSelectedBlog(null);
	};

	return (
		<div className="min-h-screen bg-black/95 text-zinc-50">
			<Head>
				<title>Blogs</title>
			</Head>

			<section className="blogs-content py-40">
				<div className="max-w-5xl mx-auto px-4">
					<h1 className="text-6xl font-serif text-white text-center mb-12">
						Our Blog
					</h1>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
						{blogPosts.map((blog) => (
							<motion.div
								key={blog.id}
								className="bg-black/20 p-6 rounded-lg shadow-xl border border-zinc-800 border-dashed hover:bg-black/40 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
								onClick={() => openModal(blog)}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.3 }}
								transition={{ duration: 0.8, ease: "easeOut" }}
							>
								<img
									src={blog.image}
									alt={blog.title}
									className="w-full h-48 object-cover rounded-md mb-4"
								/>
								<h3 className="text-xl font-semibold text-white mb-2">
									{blog.title}
								</h3>
								<p className="text-zinc-400 text-sm">{blog.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<AnimatePresence>
				{selectedBlog && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
						onClick={closeModal}
					>
						<motion.div
							initial={{ scale: 0.9, y: 50 }}
							animate={{ scale: 1, y: 0 }}
							exit={{ scale: 0.9, y: 50 }}
							transition={{ duration: 0.3, ease: "easeOut" }}
							className="relative bg-black/90 p-8 rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-dashed border-zinc-700"
							onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
						>
							<button
								onClick={closeModal}
								className="absolute top-4 right-4 text-zinc-400 hover:text-white"
							>
								<ArrowLeft size={24} />
							</button>
							<h2 className="text-4xl font-serif text-white mb-4">
								{selectedBlog.title}
							</h2>
							<img
								src={selectedBlog.image}
								alt={selectedBlog.title}
								className="w-full h-64 object-cover rounded-md mb-6"
							/>
							<p className="text-zinc-300 text-lg leading-relaxed">
								{selectedBlog.content}
							</p>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			<footer className="bg-transparent text-zinc-50 py-20 bg-gradient-to-tr from-black to-black-10">
				<div className="w-full max-w-5xl mx-auto px-4">
					<div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12">
						<div className="mb-8 md:mb-0 text-center md:text-left">
							<h2 className="text-5xl font-serif text-white mb-4">
								Let's create something
								<br />
								awesome together.
							</h2>
						</div>
						<div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-20">
							<div>
								<h3 className="text-lg font-semibold text-white mb-4">Pages</h3>
								<ul className="space-y-2">
									{footerNav.pages.map((page) => (
										<li key={page.name}>
											<a
												href={page.href}
												className="text-zinc-400 hover:text-white transition-colors"
											>
												{page.name}
											</a>
										</li>
									))}
								</ul>
							</div>
							<div>
								<h3 className="text-lg font-semibold text-white mb-4">
									Latest products
								</h3>
								<ul className="space-y-2">
									{footerNav.products.map((product) => (
										<li key={product.name}>
											<a
												href={product.href}
												className="text-zinc-400 hover:text-white transition-colors"
											>
												{product.name}
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
					<div className="border-t border-dashed border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm">
						<p>&copy; 2025. Built by Prabhat.</p>
						<div className="flex space-x-4 mt-4 md:mt-0">
							<a href="#" className="hover:text-white transition-colors">
								<X size={20} />
							</a>
							<a href="#" className="hover:text-white transition-colors">
								<Instagram size={20} />
							</a>
							<a href="#" className="hover:text-white transition-colors">
								<Youtube size={20} />
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default BlogsPage;
