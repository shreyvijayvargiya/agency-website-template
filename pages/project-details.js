import { motion } from "framer-motion";
import React, { useRef } from "react";
import { Instagram, Youtube, X, Check } from "lucide-react";

const sampleProject = {
	id: 1,
	title: "CRM Dashboard",
	fullTitle: "Comprehensive CRM Dashboard Design & Development",
	category: "Web Application",
	duration: "8 Weeks",
	client: "Global Solutions Inc.",
	overview:
		"Designed and developed a robust CRM dashboard to streamline client management and sales processes for Global Solutions Inc. The project focused on creating an intuitive, data-rich interface that enhances productivity and provides actionable insights.",
	sections: [
		{
			id: 1,
			title: "Discovery & Strategy",
			image: "/finance-dashboard.webp",
			content:
				"Conducted in-depth interviews with stakeholders and end-users to understand existing workflows, pain points, and desired functionalities. Defined key performance indicators (KPIs) and established a clear project roadmap.",
		},
		{
			id: 2,
			title: "Design & Prototyping",
			image: "/finance-app.webp",
			content:
				"Created wireframes and interactive prototypes to visualize the user experience and interface. Iterated on designs based on feedback, ensuring a user-centric approach and adherence to brand guidelines.",
		},
		{
			id: 3,
			title: "Development & Implementation",
			image: "/health-app-design.webp",
			content:
				"Developed the front-end using React and integrated with existing backend systems. Implemented robust data visualization components and ensured responsiveness across all devices.",
		},
		{
			id: 4,
			title: "Testing & Deployment",
			image: "/crm-dashboard.webp",
			content:
				"Conducted comprehensive testing, including user acceptance testing (UAT), to identify and resolve any issues. Successfully deployed the dashboard, followed by post-launch monitoring and optimization.",
		},
	],
	timeline: [
		{
			id: 1,
			date: "Week 1-2",
			title: "Project Kick-off & Research",
			description:
				"Initial meetings, requirements gathering, and competitive analysis.",
		},
		{
			id: 2,
			date: "Week 3-4",
			title: "Wireframing & UI/UX Design",
			description:
				"Creation of low-fidelity wireframes and initial high-fidelity UI designs.",
		},
		{
			id: 3,
			date: "Week 5-6",
			title: "Front-end Development",
			description:
				"Implementation of the user interface and core functionalities.",
		},
		{
			id: 4,
			date: "Week 7-8",
			title: "Integration & Testing",
			description:
				"Backend integration, comprehensive testing, and bug fixing.",
		},
		{
			id: 5,
			date: "Week 8",
			title: "Deployment & Launch",
			description: "Final deployment and launch of the CRM dashboard.",
		},
	],
	pricing: {
		title: "Project Investment",
		description: "The estimated investment for a project of this scope.",
		price: "$15,000",
		type: "one-time",
		features: [
			"Custom UI/UX Design",
			"Responsive Development",
			"Data Integration",
			"User Training (optional)",
			"1-month Post-launch Support",
		],
	},
	caseStudy: [
		{
			heading: "The Challenge",
			content:
				"Global Solutions Inc. faced significant challenges in managing their growing client base and sales pipeline. Their existing system was fragmented, leading to inefficiencies, data silos, and a lack of real-time insights into customer interactions and sales performance. The primary goal was to develop a centralized CRM platform that could integrate various data sources, automate key processes, and provide comprehensive analytics to support informed decision-making.",
		},
		{
			heading: "Our Solution",
			content:
				"We embarked on a comprehensive design and development journey, starting with extensive user research and stakeholder interviews. This allowed us to map out critical user flows and identify essential features. Our solution involved building a custom CRM dashboard with a modular architecture, enabling easy scalability and future enhancements. Key features included a personalized user dashboard, advanced contact management, sales pipeline visualization, activity tracking, and custom reporting tools.",
		},
		{
			heading: "Impact & Results",
			content:
				"The new CRM dashboard revolutionized Global Solutions Inc.'s operations. Within three months of deployment, they reported a 25% increase in sales team productivity, a 15% improvement in customer satisfaction due to streamlined support, and a 30% reduction in manual data entry errors. The comprehensive analytics module provided management with unprecedented visibility into sales trends and customer behavior, enabling agile strategic adjustments. The project was lauded for its intuitive design and robust performance, exceeding initial expectations.",
		},
	],
	technologies: [
		"React",
		"Next.js",
		"Tailwind CSS",
		"Node.js",
		"MongoDB",
		"GSAP",
		"Framer Motion",
	],
	callToAction: {
		liveDemo: "#",
		github: "#",
	},
};

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

const ProjectDetails = () => {
	const projectRef = useRef(null);
	const overviewRef = useRef(null);
	const timelineRef = useRef(null);
	const projectPricingRef = useRef(null);
	const caseStudyRef = useRef(null);
	const technologiesRef = useRef(null);
	const callToActionRef = useRef(null);

	const project = sampleProject;

	if (!project) {
		return (
			<div className="min-h-screen bg-black/95 text-zinc-50 flex items-center justify-center">
				<p className="text-xl">Project not found.</p>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-black/95 text-zinc-50">
			<motion.section
				ref={projectRef}
				id="project-hero"
				className="relative flex flex-col items-center justify-center py-40 space-y-8 min-h-screen"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
			>
				<div className="relative z-10 text-center px-4 max-w-3xl">
					<h1 className="text-6xl font-serif text-white mb-4">
						{project.fullTitle}
					</h1>
					<p className="text-zinc-300 text-lg mb-8">
						Category: {project.category} | Duration: {project.duration} |
						Client: {project.client}
					</p>
					<p className="text-zinc-400 text-xl leading-relaxed">
						{project.overview}
					</p>
				</div>
			</motion.section>

			<motion.section
				ref={overviewRef}
				id="overview"
				className="py-20 w-full flex flex-col items-center justify-center space-y-12"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
			>
				<span className="text-xs text-zinc-400 p-2 bg-black/20 border border-dashed border-zinc-800 mb-10">
					Project Overview
				</span>
				<h2 className="text-7xl font-serif text-white text-center mb-8 pb-4">
					The Process
				</h2>
				<div className="w-full max-w-5xl mx-auto px-4 space-y-16">
					{project.sections.map((section, index) => (
						<motion.div
							key={section.id}
							className={`flex flex-col ${
								index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
							} items-center gap-8`}
							initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{
								duration: 0.8,
								ease: "easeOut",
								delay: index * 0.1,
							}}
						>
							<div className="w-full md:w-1/2">
								<img
									src={section.image}
									alt={section.title}
									className="rounded-lg shadow-xl border border-zinc-800 border-dashed w-full h-auto object-cover"
								/>
							</div>
							<div className="w-full md:w-1/2 text-center md:text-left">
								<h3 className="text-4xl font-semibold text-white mb-4">
									{section.title}
								</h3>
								<p className="text-zinc-400 text-lg leading-relaxed">
									{section.content}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</motion.section>

			<motion.section
				ref={timelineRef}
				id="timeline"
				className="py-20 w-full flex flex-col items-center justify-center space-y-12"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
			>
				<span className="text-xs text-zinc-400 p-2 bg-black/20 border border-dashed border-zinc-800 mb-10">
					Project Timeline
				</span>
				<h2 className="text-7xl font-serif text-white text-center mb-8 pb-4">
					Our Journey
				</h2>
				<div className="w-full max-w-5xl mx-auto px-4 relative">
					<div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-zinc-700 hidden md:block"></div>
					{project.timeline.map((event, index) => (
						<motion.div
							key={event.id}
							className={`flex items-center w-full mb-8 ${
								index % 2 === 0 ? "md:justify-start" : "md:justify-end"
							}`}
							initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{
								duration: 0.8,
								ease: "easeOut",
								delay: index * 0.15,
							}}
						>
							<div
								className={`w-full md:w-1/2 ${
									index % 2 === 0 ? "md:pr-8 text-right" : "md:pl-8 text-left"
								}`}
							>
								<div className="bg-black/20 p-6 rounded-lg shadow-xl border border-zinc-800 border-dashed hover:bg-black/40 hover:scale-105 transition-all duration-300 ease-in-out">
									<p className="text-zinc-400 text-sm mb-2">{event.date}</p>
									<h3 className="text-xl font-semibold text-white mb-2">
										{event.title}
									</h3>
									<p className="text-zinc-300">{event.description}</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</motion.section>

			<motion.section
				ref={projectPricingRef}
				id="pricing"
				className="pricing flex flex-col items-center justify-center py-20"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
			>
				<span className="text-xs text-zinc-400 p-2 bg-black/20 border border-dashed border-zinc-800 mb-10">
					Pricing
				</span>
				<div className="w-full max-w-5xl mx-auto px-4">
					<h2 className="text-7xl font-serif text-white text-center mb-8 pb-4">
						Project Investment
					</h2>
					<motion.div
						className="bg-black/20 p-8 rounded-lg shadow-xl border border-zinc-800 border-dashed hover:bg-black/40 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-2xl"
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true, amount: 0.4 }}
						transition={{ duration: 0.6, ease: "easeOut" }}
					>
						<h3 className="text-2xl font-semibold text-white mb-2">
							{project.pricing.title}
						</h3>
						<p className="text-zinc-400 mb-4">{project.pricing.description}</p>
						<p className="text-4xl font-bold text-white mb-6">
							{project.pricing.price}/
							<span className="text-xl font-normal text-zinc-400">
								{project.pricing.type}
							</span>
						</p>
						<a
							href="#_"
							className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold group mb-6"
						>
							<span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
							<span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
							<span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
								Book a call
							</span>
							<span className="absolute inset-0 border border-dashed border-white"></span>
						</a>
						<ul className="space-y-3">
							{project.pricing.features.map((feature, index) => (
								<li key={index} className="flex items-center text-zinc-300">
									<Check size={18} className="text-orange-400 mr-2" />
									{feature}
								</li>
							))}
						</ul>
					</motion.div>
				</div>
			</motion.section>

			<motion.section
				ref={caseStudyRef}
				id="case-study"
				className="py-20 w-full flex flex-col items-center justify-center space-y-12"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
			>
				<span className="text-xs text-zinc-400 p-2 bg-black/20 border border-dashed border-zinc-800 mb-10">
					Case Study
				</span>
				<h2 className="text-7xl font-serif text-white text-center mb-8 pb-4">
					Detailed Analysis
				</h2>
				<div className="w-full max-w-5xl mx-auto px-4 space-y-8">
					{project.caseStudy.map((section, index) => (
						<motion.div
							key={index}
							className="bg-black/20 p-8 rounded-lg shadow-xl border border-zinc-800 border-dashed hover:bg-black/40 hover:scale-100 transition-all duration-300 ease-in-out"
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{
								duration: 0.6,
								ease: "easeOut",
								delay: index * 0.15,
							}}
						>
							<h3 className="text-3xl font-semibold text-white mb-4">
								{section.heading}
							</h3>
							<p className="text-zinc-400 text-lg leading-relaxed">
								{section.content}
							</p>
						</motion.div>
					))}
				</div>
			</motion.section>

			<motion.section
				ref={technologiesRef}
				id="technologies"
				className="py-20 w-full flex flex-col items-center justify-center space-y-12"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
			>
				<span className="text-xs text-zinc-400 p-2 bg-black/20 border border-dashed border-zinc-800 mb-10">
					Technologies
				</span>
				<h2 className="text-7xl font-serif text-white text-center mb-8 pb-4">
					Tools We Used
				</h2>
				<div className="w-full max-w-5xl mx-auto px-4 flex flex-wrap justify-center gap-4">
					{project.technologies.map((tech, index) => (
						<motion.span
							key={index}
							className="px-4 py-2 bg-zinc-900 text-zinc-300 rounded-full border border-zinc-800 border-dashed text-sm"
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true, amount: 0.5 }}
							transition={{
								duration: 0.4,
								ease: "easeOut",
								delay: index * 0.1,
							}}
						>
							{tech}
						</motion.span>
					))}
				</div>
			</motion.section>

			<motion.section
				ref={callToActionRef}
				id="call-to-action"
				className="py-20 w-full flex flex-col items-center justify-center space-y-8"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
			>
				<h2 className="text-7xl font-serif text-white text-center mb-8 pb-4">
					Ready to start your project?
				</h2>
				<div className="flex space-x-4">
					{project.callToAction.liveDemo && (
						<a
							href={project.callToAction.liveDemo}
							target="_blank"
							rel="noopener noreferrer"
							className="relative px-6 py-3 font-bold text-black group"
						>
							<span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-1 -translate-y-1 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
							<span className="absolute inset-0 w-full h-full border-2 border-dashed group-hover:border-none border-zinc-800"></span>
							<span className="relative">View Live Demo</span>
						</a>
					)}
					{project.callToAction.github && (
						<a
							href={project.callToAction.github}
							target="_blank"
							rel="noopener noreferrer"
							className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold group"
						>
							<span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
							<span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
							<span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
								View on GitHub
							</span>
							<span className="absolute inset-0 border border-dashed border-white"></span>
						</a>
					)}
				</div>
			</motion.section>

			<motion.footer
				className="bg-transparent text-zinc-50 py-20 bg-gradient-to-tr from-black to-black-10"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
			>
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
			</motion.footer>
		</div>
	);
};

export default ProjectDetails;
