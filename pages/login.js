import Head from "next/head";
import { Instagram, Youtube, X } from "lucide-react";

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

const LoginPage = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle login logic here
		console.log("Email:", "Password:");
	};

	return (
		<div className="min-h-screen bg-black/95 text-zinc-50">
			<Head>
				<title>Login</title>
			</Head>

			<div className="min-h-screen bg-black/95 text-zinc-50 flex flex-col items-center justify-center p-8 pt-24">
				<div className="w-full max-w-md bg-black/20 rounded-lg shadow-xl border border-zinc-800 border-dashed p-8 hover:bg-black/40 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-2xl">
					<h2 className="text-3xl font-bold text-white mb-6 text-center">
						Login
					</h2>
					<form onSubmit={handleSubmit} className="space-y-6">
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-zinc-400"
							>
								Email address
							</label>
							<input
								type="email"
								id="email"
								placeholder="Enter email"
								name="email"
								autoComplete="email"
								required
								className="mt-1 block w-full p-3 rounded-lg bg-transparent border border-dashed border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-zinc-900"
							/>
						</div>
						<div>
							<label
								htmlFor="password"
								className="block text-sm font-medium text-zinc-400"
							>
								Password
							</label>
							<input
								type="password"
								id="password"
								placeholder="Enter password"
								name="password"
								autoComplete="current-password"
								required
								className="mt-1 block w-full p-3 rounded-lg bg-transparent border border-dashed border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-zinc-900"
							/>
						</div>
						<div>
							<button
								type="submit"
								class="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold group"
							>
								<span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
								<span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
								<span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
									Sign in
								</span>
								<span class="absolute inset-0 border border-dashed border-white"></span>
							</button>
						</div>
					</form>
					<div className="mt-6">
						<button class="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold group w-full">
							<span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
							<span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
							<span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900 flex items-center justify-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 48 48"
									width="24"
									height="24"
									className="inline-block mr-2 align-middle"
								>
									<g>
										<path
											fill="#4285F4"
											d="M43.611 20.083H42V20H24v8h11.303C33.973 32.084 29.418 35 24 35c-6.065 0-11-4.935-11-11s4.935-11 11-11c2.507 0 4.808.858 6.646 2.278l6.364-6.364C33.527 6.163 28.973 4 24 4 12.954 4 4 12.954 4 24s8.954 20 20 20c9.94 0 19.09-7.228 19.09-20 0-1.341-.138-2.651-.379-3.917z"
										/>
										<path
											fill="#34A853"
											d="M6.306 14.691l6.571 4.819C14.655 16.084 19.001 13 24 13c2.507 0 4.808.858 6.646 2.278l6.364-6.364C33.527 6.163 28.973 4 24 4c-7.732 0-14.37 4.388-17.694 10.691z"
										/>
										<path
											fill="#FBBC05"
											d="M24 44c5.322 0 10.13-1.757 13.857-4.77l-6.418-5.263C29.418 35 24 35 18.697 32.084l-6.571 5.081C9.63 39.612 16.268 44 24 44z"
										/>
										<path
											fill="#EA4335"
											d="M43.611 20.083H42V20H24v8h11.303c-1.94 4.084-6.495 7-11.303 7-2.507 0-4.808-.858-6.646-2.278l-6.364 6.364C14.473 41.837 19.027 44 24 44c9.94 0 19.09-7.228 19.09-20 0-1.341-.138-2.651-.379-3.917z"
										/>
									</g>
								</svg>
								Sign in with Google
							</span>
							<span class="absolute inset-0 border border-dashed border-white"></span>
						</button>
					</div>
				</div>
			</div>
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

export default LoginPage;
