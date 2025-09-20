import React, { useEffect } from "react";
import "tailwindcss/tailwind.css";
import "../globals.css";
import Body from "../modules/Body";
import { Analytics } from "@vercel/analytics/next";
import Router from "next/router";
import NProgress from "nprogress";

// Configure NProgress
NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		// Start NProgress on route change start
		Router.events.on("routeChangeStart", () => {
			NProgress.start();
		});

		// Complete NProgress on route change complete
		Router.events.on("routeChangeComplete", () => {
			NProgress.done();
		});

		// Complete NProgress on route change error
		Router.events.on("routeChangeError", () => {
			NProgress.done();
		});

		return () => {
			// Clean up event listeners
			Router.events.off("routeChangeStart", () => {
				NProgress.start();
			});
			Router.events.off("routeChangeComplete", () => {
				NProgress.done();
			});
			Router.events.off("routeChangeError", () => {
				NProgress.done();
			});
		};
	}, []);

	return (
		<>
			<Analytics />
			<Body>
				<Component {...pageProps} />
			</Body>
		</>
	);
}

export default MyApp;
