import {
	CreditCard,
	Home,
	Layout,
	Mail,
	MessageCircle,
	Monitor,
	Palette,
	SwatchBook,
	PencilRuler,
	Check,
	Plus,
	MapPin,
	Instagram,
	Youtube,
	X,
	LogIn,
	AlertTriangle,
	ScrollText,
	Newspaper,
} from "lucide-react";
import router from "next/router";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Navbar from "../modules/Navbar";

const testimonials = [
	{
		id: 1,
		name: "Juno C.",
		title: "Small Business Owner",
		image:
			"https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=256&h=256&facepad=2",
		rating: 5,
		text: "Alex transformed our vision into a stunning reality. Their creativity and attention to detail brought our brand to life in ways we couldn't have imagined!",
	},
	{
		id: 2,
		name: "Jordan P.",
		title: "Startup Founder",
		image:
			"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=256&h=256&facepad=2",
		rating: 5,
		text: "Alex's work exceeded all expectations. They brought fresh ideas to the table, and the final designs were nothing short of exceptional.",
	},
	{
		id: 3,
		name: "Lucas M.",
		title: "Photographer",
		image:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=256&h=256&facepad=2",
		rating: 5,
		text: "Working with Alex was a game-changer. Their innovative designs not only look amazing but also perfectly align with our brand's identity.",
	},
	{
		id: 4,
		name: "Samantha R.",
		title: "Creative Director",
		image:
			"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=256&h=256&facepad=2",
		rating: 5,
		text: "Alex is a true creative talent. From concept to completion, they delivered a portfolio that truly reflects my style and personality.",
	},
	{
		id: 5,
		name: "David L.",
		title: "Marketing Manager",
		image:
			"https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=256&h=256&facepad=2",
		rating: 4,
		text: "Alex's strategic approach to design significantly boosted our campaign's visual appeal. Highly recommend!",
	},
	{
		id: 6,
		name: "Emily K.",
		title: "Product Manager",
		image:
			"https://images.unsplash.com/photo-1519340333755-c1aa5571fd46?auto=format&fit=facearea&w=256&h=256&facepad=2",
		rating: 5,
		text: "The design solutions provided were intuitive and beautiful, greatly enhancing our user experience. A pleasure to work with!",
	},
	{
		id: 7,
		name: "Priya S.",
		title: "E-commerce Owner",
		image:
			"https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=256&h=256&facepad=2",
		rating: 5,
		text: "Alex's expertise helped us launch our online store with a beautiful, user-friendly design. Sales have increased and our customers love the new look!",
	},
	{
		id: 8,
		name: "Carlos T.",
		title: "App Developer",
		image:
			"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&w=256&h=256&facepad=2",
		rating: 4,
		text: "The collaboration with Alex was smooth and productive. The UI/UX improvements made a noticeable difference in our app's retention rates.",
	},
	{
		id: 9,
		name: "Mina W.",
		title: "Nonprofit Director",
		image:
			"https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=facearea&w=256&h=256&facepad=2",
		rating: 5,
		text: "Alex brought our mission to life with a website that truly tells our story. The process was easy and the results are outstanding.",
	},
];

const serviceData = [
	{
		id: 1,
		icon: Monitor,
		title: "Complete websites",
		description:
			"Strategic, beautiful websites that achieve your business goals.",
	},
	{
		id: 2,
		icon: Palette,
		title: "Design systems",
		description:
			"Building scalable design foundations that keep your product consistent and efficient.",
	},
	{
		id: 3,
		icon: SwatchBook,
		title: "Branding",
		description:
			"Creating distinctive visual identities that make your brand memorable.",
	},
	{
		id: 4,
		icon: PencilRuler,
		title: "Product Design",
		description:
			"Turning complex ideas into intuitive digital products people love.",
	},
];

const pricingPlans = [
	{
		id: 1,
		title: "Per project",
		description:
			"For clients seeking a professionally designed landing page with no recurring costs.",
		price: "$5000",
		type: "project",
		features: [
			"One-time investment",
			"Full ownership",
			"Get all the design files",
		],
	},
	{
		id: 2,
		title: "Monthly",
		description: "For clients who want ongoing design updates and support.",
		price: "$2500",
		type: "month",
		features: [
			"Lower upfront cost",
			"Monthly updates and support",
			"Easily add new features",
		],
	},
];

const faqData = [
	{
		id: 1,
		question: "What types of digital products do you design?",
		answer:
			"I design a wide range of digital products, including websites, mobile apps, web applications, and interactive prototypes.",
	},
	{
		id: 2,
		question: "What is your design process like?",
		answer:
			"My design process typically involves discovery, research, wireframing, prototyping, user testing, and iteration. I believe in a collaborative approach, keeping clients involved at every stage.",
	},
	{
		id: 3,
		question: "What is your typical timeline for projects?",
		answer:
			"Project timelines vary depending on complexity and scope. A typical website might take 4-8 weeks, while a more complex application could take several months. I provide detailed timelines after the initial discovery phase.",
	},
	{
		id: 4,
		question: "What do you need from me to get started?",
		answer:
			"To get started, I'll need a clear understanding of your project goals, target audience, brand guidelines, and any existing content or assets you have. A detailed brief is always helpful.",
	},
	{
		id: 5,
		question: "How do you handle revisions and feedback?",
		answer:
			"I include several rounds of revisions in my project proposals to ensure client satisfaction. Feedback is typically gathered through dedicated review sessions and collaborative tools.",
	},
	{
		id: 6,
		question: "What is your communication style during projects?",
		answer:
			"I believe in clear, open, and regular communication. I'm available for scheduled calls, emails, and real-time chat, ensuring you're always informed about project progress.",
	},
];

const contactDetails = {
	email: "hello@prabhat.com",
	phone: "+91 9876543210",
	address: {
		street: "New Delhi",
		zipCity: "1234 AB New Delhi",
	},
};

const projects = [
	{
		id: 1,
		title: "CRM Dashboard",
		description: "CRM Dashboard for a company",
		image: "/crm-dashboard.webp",
	},
	{
		id: 2,
		title: "Finance Dashboard",
		description: "Finance Dashboard for a company",
		image: "/finance-dashboard.webp",
	},
	{
		id: 3,
		title: "Finance app",
		description: "Finance app for a company",
		image: "/finance-app.webp",
	},
	{
		id: 4,
		title: "Health app",
		description: "Health app for a company",
		image: "/health-app-design.webp",
	},
];

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

const ClientTemplate = () => {
	gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

	const [activeSection, setActiveSection] = useState("home");

	const homeRef = useRef(null);
	const whatIDoRef = useRef(null);
	const testimonialsRef = useRef(null);
	const pricingRef = useRef(null);
	const faqRef = useRef(null);
	const contactRef = useRef(null);
	const mainContentRef = useRef(null);

	const projectsRef = useRef(null);
	const tagsContentRef = useRef(null);

	const testimonialRef = useRef(null);

	const navabarRoutes = [
		{
			id: "home",
			route: "/",
			icon: (props) => <Home {...props} />,
			ref: homeRef,
		},
		{
			id: "what-i-do",
			route: "#what-i-do",
			icon: (props) => <Layout {...props} />,
			ref: whatIDoRef,
		},
		{
			id: "testimonials",
			route: "#testimonials",
			icon: (props) => <MessageCircle {...props} />,
			ref: testimonialsRef,
		},
		{
			id: "pricing",
			route: "#pricing",
			icon: (props) => <CreditCard {...props} />,
			ref: pricingRef,
		},
		{
			id: "blog",
			route: "/blogs",
			icon: (props) => <Newspaper {...props} />,
			ref: null,
		},
		{
			id: "contact",
			route: "#contact",
			icon: (props) => <Mail {...props} />,
			ref: contactRef,
		},
		{
			id: "login",
			route: "/login",
			icon: (props) => <LogIn {...props} />,
			ref: null,
		},
		{
			id: "404",
			route: "/404",
			icon: (props) => <AlertTriangle {...props} />,
			ref: null,
		},
		{
			id: "policy",
			route: "/policy",
			icon: (props) => <ScrollText {...props} />,
			ref: null,
		},
	];

	const handleScroll = (ref, id, route) => {
		if (ref && ref.current) {
			gsap.to(window, {
				duration: 1,
				scrollTo: ref.current,
				ease: "power2.inOut",
				autoKill: true,
			});
			setActiveSection(id);
		} else if (route) {
			router.push(route);
			setActiveSection(id);
		}
	};

	useEffect(() => {
		if (tagsContentRef.current) {
			gsap.to(tagsContentRef.current, {
				x: -50,
				repeat: -1,
				ease: "linear",
				duration: 10,
			});
		}
		if (testimonialRef.current) {
			gsap.to(testimonialRef.current, {
				y: -100,
				repeat: -1,
				ease: "linear",
				duration: 10,
			});
		}
		// Hide animation for small devices (width < 768px)
		if (projectsRef.current && window.innerWidth >= 768) {
			gsap.to(projectsRef.current, {
				x: -50,
				repeat: -1,
				yoyo: true,
				ease: "linear",
				duration: 10,
			});
		}
	}, []);

	const FAQItem = ({ question, answer }) => {
		const [isOpen, setIsOpen] = useState(false);
		const toggleOpen = () => {
			setIsOpen(!isOpen);
		};

		return (
			<div
				className="bg-zinc-900/20 p-6 max-w-2xl rounded-lg shadow-lg border border-dashed border-zinc-800 cursor-pointer hover:bg-black/40"
				onClick={toggleOpen}
			>
				<div className="flex justify-between items-center">
					<h3 className="text-lg font-semibold text-white">{question}</h3>
					<Plus
						size={20}
						className={`text-zinc-400 transform transition-transform duration-300 ${
							isOpen ? "rotate-45" : ""
						}`}
					/>
				</div>
				{isOpen && (
					<p className="mt-4 max-w-xl text-zinc-300 transition-all duration-300 ease-in-out">
						{answer}
					</p>
				)}
			</div>
		);
	};

	return (
		<div className="min-h-screen bg-black/95 text-zinc-50">
			<div ref={mainContentRef}>
				<motion.section
					ref={homeRef}
					id="home"
					className="home flex flex-col items-center justify-center py-40 space-y-8"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					<div className="flex space-x-2 overflow-hidden w-full max-w-sm">
						<div
							ref={tagsContentRef}
							className="flex space-x-2 whitespace-nowrap will-change-transform"
						>
							<span className="px-3 py-1 text-sm rounded-full bg-zinc-900 text-zinc-300 border border-zinc-800 border-dashed">
								No-Coding
							</span>
							<span className="px-3 py-1 text-sm rounded-full bg-zinc-900 text-zinc-300 border border-zinc-800 border-dashed">
								Branding
							</span>
							<span className="px-3 py-1 text-sm rounded-full bg-zinc-900 text-zinc-300 border border-zinc-800 border-dashed">
								Web Design
							</span>
							<span className="px-3 py-1 text-sm rounded-full bg-zinc-900 text-zinc-300 border border-zinc-800 border-dashed">
								Social Media
							</span>
							<span className="px-3 py-1 text-sm rounded-full bg-zinc-900 text-zinc-300 border border-zinc-800 border-dashed">
								Video Editing
							</span>

							<span className="px-3 py-1 text-sm rounded-full bg-zinc-900 text-zinc-300 border border-zinc-800 border-dashed">
								No-Coding
							</span>
							<span className="px-3 py-1 text-sm rounded-full bg-zinc-900 text-zinc-300 border border-zinc-800 border-dashed">
								Branding
							</span>
							<span className="px-3 py-1 text-sm rounded-full bg-zinc-900 text-zinc-300 border border-zinc-800 border-dashed">
								Web Design
							</span>
							<span className="px-3 py-1 text-sm rounded-full bg-zinc-900 text-zinc-300 border border-zinc-800 border-dashed">
								Social Media
							</span>
							<span className="px-3 py-1 text-sm rounded-full bg-zinc-900 text-zinc-300 border border-zinc-800 border-dashed">
								Video Editing
							</span>
						</div>
					</div>
					<h1 className="text-center pt-10">
						<span className="font-light font-serif text-5xl text-zinc-400 my-4">
							I'm Prabhat, <br />
						</span>
						<span className="font-semibold text-6xl text-white">
							Content Creator.
						</span>
					</h1>
					<p className="text-zinc-400 text-lg text-center max-w-md pb-10">
						<a
							href="https://www.google.com/maps/place/New+Delhi,+Delhi,+India"
							target="_blank"
							rel="noopener noreferrer"
							className="underline border border-dashed bg-black/20 hover:bg-black/50 border-zinc-700 p-2 transition-all duration-75 ease-in hover:text-zinc-100"
						>
							New Delhi
						</a>{" "}
						based digital storyteller for worldwide brands.
					</p>
					<div className="flex space-x-4">
						<a href="#_" class="relative px-6 py-3 font-bold text-black group">
							<span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-1 -translate-y-1 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
							<span class="absolute inset-0 w-full h-full border-2 border-dashed group-hover:border-none border-zinc-800"></span>
							<span class="relative">See work</span>
						</a>
						<a
							href="#_"
							class="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold group"
						>
							<span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
							<span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
							<span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
								Contact me
							</span>
							<span class="absolute inset-0 border border-dashed border-white"></span>
						</a>
					</div>
					<div className="max-w-5xl mx-auto overflow-hidden h-full">
						<motion.img
							src="/user-image.avif"
							alt="hero"
							className="object-cover object-top w-full"
						/>
					</div>
				</motion.section>
				<motion.section
					id="projects"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
					viewport={{ once: true, amount: 0.2 }}
					className="projects flex flex-col items-center justify-center py-40 space-y-8"
				>
					<span className="text-xs text-zinc-400 text-center mx-auto p-2 bg-black/20 border border-dashed border-zinc-800 mb-10">
						Projects
					</span>
					<div className="w-full max-w-5xl mx-auto px-4">
						<h2 className="text-7xl font-serif text-white text-center pb-4">
							Projects
						</h2>
					</div>
					<div
						className="flex gap-10 md:flex-nowrap sm:flex-wrap px-10"
						ref={projectsRef}
					>
						{projects.map((project) => (
							<div
								key={project.id}
								className="group relative cursor-pointer"
								onClick={() =>
									router.push(`/project-details?name=${project.title}`)
								}
							>
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover object-top rounded-xl ring-4 hover:ring-8 ring-zinc-800 ring-opacity-50 hover:ring-opacity-80 transition-all duration-150 ease-in"
								/>
								<div className="block md:hidden group-hover:absolute group-hover:block text-center mx-auto w-full mb-4">
									<h3 className="text-xl font-semibold text-white mt-4">
										{project.title}
									</h3>
									<p className="text-zinc-400 text-sm ">
										{project.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</motion.section>
				<motion.section
					ref={whatIDoRef}
					initial={{ opacity: 0, y: 80 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
					viewport={{ once: true, amount: 0.2 }}
					id="what-i-do"
					className="what-i-do w-full flex flex-col items-center justify-center py-20"
				>
					<span className="text-xs text-zinc-400 text-center mx-auto p-2 bg-black/20 border border-dashed border-zinc-800 mb-10">
						About
					</span>
					<div className="w-full max-w-5xl mx-auto px-4">
						<h2 className="text-7xl font-serif text-white text-center mb-8 pb-4">
							What I do
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
							{serviceData.map((service) => (
								<div
									key={service.id}
									className="bg-black/20 p-6 rounded-lg shadow-xl border border-zinc-800 border-dashed hover:bg-black/40 hover:scale-105 transition-all duration-300 ease-in-out"
								>
									<div className="p-3 bg-black/20 rounded-full w-fit mb-4">
										<service.icon size={24} className="text-zinc-400" />
									</div>
									<h3 className="text-xl font-semibold text-white mb-2">
										{service.title}
									</h3>
									<p className="text-zinc-400 text-sm">{service.description}</p>
								</div>
							))}
						</div>
					</div>
				</motion.section>
				<motion.section
					ref={testimonialsRef}
					id="testimonials"
					className="testimonials flex flex-col items-center justify-center py-20"
					initial={{ opacity: 0, y: 50, x: -50 }}
					whileInView={{ opacity: 1, y: 0, x: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					<span className="text-xs text-zinc-400 p-2 bg-black/20 border border-dashed border-zinc-800 mb-10">
						Testimonials
					</span>
					<div className="max-w-5xl mx-auto px-4">
						<h2 className="text-7xl font-serif text-white mb-8 pb-4 text-center">
							What others say
						</h2>
						<div className="overflow-auto">
							<div
								ref={testimonialRef}
								className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
							>
								{testimonials.map((testimonial) => (
									<div
										key={testimonial.id}
										className="md:w-80 w-full bg-black/20 p-6 rounded-lg shadow-xl border border-zinc-800 border-dashed hover:bg-black/50 hover:border-zinc-700 hover:scale-100 scale-95 transition-all duration-300 ease-in-out hover:shadow-2xl"
									>
										<div className="flex items-center mb-4">
											{[...Array(testimonial.rating)].map((_, i) => (
												<span key={i} className="text-lime-600">
													★
												</span>
											))}
										</div>
										<p className="text-zinc-300 mb-4">{testimonial.text}</p>
										<div className="flex items-center">
											<img
												src={testimonial.image}
												alt={testimonial.name}
												className="w-10 h-10 rounded-full mr-3 object-cover"
											/>
											<div>
												<p className="font-semibold text-white">
													{testimonial.name}
												</p>
												<p className="text-sm text-zinc-400">
													{testimonial.title}
												</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</motion.section>
				<motion.section
					ref={pricingRef}
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
							Pricing
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{pricingPlans.map((plan) => (
								<div
									key={plan.id}
									className="bg-black/20 p-8 rounded-lg shadow-xl border border-zinc-800 border-dashed hover:bg-black/40 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-2xl"
								>
									<h3 className="text-2xl font-semibold text-white mb-2">
										{plan.title}
									</h3>
									<p className="text-zinc-400 mb-4">{plan.description}</p>
									<p className="text-4xl font-bold text-white mb-6">
										{plan.price}/
										<span className="text-xl font-normal text-zinc-400">
											{plan.type}
										</span>
									</p>
									<a
										href="#_"
										class="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold group mb-6"
									>
										<span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
										<span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
										<span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
											Book a call
										</span>
										<span class="absolute inset-0 border border-dashed border-white"></span>
									</a>
									<ul className="space-y-3">
										{plan.features.map((feature, index) => (
											<li
												key={index}
												className="flex items-center text-zinc-300"
											>
												<Check size={18} className="text-orange-400 mr-2" />
												{feature}
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
				</motion.section>
				<motion.section
					ref={faqRef}
					id="faq"
					className="faq flex flex-col items-center justify-center py-20"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					<span className="text-xs text-zinc-400 p-2 bg-black/20 border border-dashed border-zinc-800 mb-10">
						FAQ
					</span>
					<div className="w-full max-w-2xl mx-auto px-4">
						<h2 className="text-7xl font-serif text-white mb-8 pb-4 text-center">
							Any questions?
						</h2>
						<div className="space-y-4">
							{faqData.map((faq) => (
								<FAQItem
									key={faq.id}
									question={faq.question}
									answer={faq.answer}
								/>
							))}
						</div>
					</div>
				</motion.section>
				<motion.section
					ref={contactRef}
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
								<h3 className="text-xl font-semibold text-white mb-4">
									Address
								</h3>
								<div className="flex items-center mb-2">
									<MapPin size={20} className="text-zinc-400 mr-2" />
									<p className="text-zinc-300">
										{contactDetails.address.street}
									</p>
								</div>
								<p className="text-zinc-300">
									{contactDetails.address.zipCity}
								</p>
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

export default ClientTemplate;
