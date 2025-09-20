import Head from "next/head";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Instagram, Youtube, X } from "lucide-react";

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

const contactDetails = {
	email: "hello@prabhat.com",
	phone: "+91 9876543210",
	address: {
		street: "New Delhi",
		zipCity: "1234 AB New Delhi",
	},
};

const ContactUs = () => {
	const contactRef = useRef(null);

	return (
		<div className="min-h-screen bg-black/95 text-zinc-50">
			<Head>
				<title>Contact Us</title>
			</Head>

			<motion.section
				id="contact"
				className="contact flex flex-col items-center justify-center py-40 w-fu2l"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
			>
				<span className="text-xs text-zinc-400 p-2 bg-black/20 border border-dashed border-zinc-800 mb-10">
					Contact us
				</span>
				<div className="w-full max-w-2xl mx-auto px-4">
					<h2 className="text-7xl font-serif text-white mb-8 pb-4 text-center">
						Contact
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
						<div className="bg-black/20 p-6 rounded-lg shadow-lg border border-zinc-800 border-dashed">
							<h3 className="text-xl font-semibold text-white mb-4">
								Contact details
							</h3>
							<div className="flex items-center mb-2">
								<Mail size={20} className="text-zinc-400 mr-2" />
								<p className="text-zinc-300">{contactDetails.email}</p>
							</div>
							<p className="text-zinc-300">{contactDetails.phone}</p>
						</div>
						<div className="bg-black/20 p-6 rounded-lg shadow-lg border border-zinc-800 border-dashed">
							<h3 className="text-xl font-semibold text-white mb-4">Address</h3>
							<div className="flex items-center mb-2">
								<MapPin size={20} className="text-zinc-400 mr-2" />
								<p className="text-zinc-300">{contactDetails.address.street}</p>
							</div>
							<p className="text-zinc-300">{contactDetails.address.zipCity}</p>
						</div>
					</div>
					<div className="bg-black/20 p-8 rounded-lg shadow-lg border border-zinc-800 border-dashed">
						<h3 className="text-xl font-semibold text-white mb-4">
							Send a message
						</h3>
						<div className="space-y-4">
							<div>
								<label
									htmlFor="name"
									className="block text-zinc-400 text-sm font-bold mb-2"
								>
									Name
								</label>
								<input
									type="text"
									id="name"
									className="w-full p-3 rounded-lg bg-transparent border border-dashed border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-zinc-900"
									placeholder="Jane Smith"
								/>
							</div>
							<div>
								<label
									htmlFor="email"
									className="block text-zinc-400 text-sm font-bold mb-2"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									className="w-full p-3 rounded-lg bg-transparent border border-dashed border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-zinc-900"
									placeholder="jane@framer.com"
								/>
							</div>
							<div>
								<label
									htmlFor="question"
									className="block text-zinc-400 text-sm font-bold mb-2"
								>
									Question
								</label>
								<textarea
									id="question"
									rows="5"
									className="w-full p-3 rounded-lg bg-transparent border border-dashed border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-zinc-900"
									placeholder="What's on your mind?"
								></textarea>
							</div>
							<a
								href="#_"
								class="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold group"
							>
								<span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
								<span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
								<span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
									Submit form
								</span>
								<span class="absolute inset-0 border border-dashed border-zinc-700"></span>
							</a>
						</div>
					</div>
				</div>
			</motion.section>

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

export default ContactUs;
