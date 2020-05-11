import React, { useState, useEffect } from "react";

import NavBar from "./components/navBar";

import HomePage from "./pages/home";
import AboutMePage from "./pages/aboutMe";

import "./App.css";
//todo create context to store config for animation

function App() {
	const [pages, setPages] = useState([
		{ name: "home", title: "home", ref: React.createRef() },
		{ name: "about-me", title: "about me", ref: React.createRef() },
		{ name: "portfolio", title: "portfolio", ref: React.createRef() },
		{ name: "testimonials", title: "testimonials", ref: React.createRef() },
	]);
	const [navbarRef, setNavbarRef] = useState(React.createRef());
	const [navbarFixed, setNavbarFixed] = useState(false);

	const [activePage, setActivePage] = useState("home");

	const navToPage = (toPage) => {
		console.time("look");
		const pageRef = pages.find((page) => page.name === toPage).ref;
		if (pageRef.current) {
			window.scrollTo({
				top: pageRef.current.offsetTop - navbarRef.current.clientHeight,
				left: 0,
				behavior: "smooth",
			});
			setActivePage(toPage);
		} else {
			console.log("no current");
		}
		console.timeEnd("look");
	};

	return (
		<div className="App">
			<HomePage
				ref={pages.find((page) => page.name === "home").ref}
				navigate={(page) => navToPage(page)}
			/>
			<NavBar
				ref={navbarRef}
				pages={pages}
				buttonClicked={(page) => navToPage(page)}
				fixed={navbarFixed}
			/>
			<AboutMePage ref={pages.find((page) => page.name === "about-me").ref} />
			<AboutMePage ref={pages.find((page) => page.name === "portfolio").ref} />
			<AboutMePage ref={pages.find((page) => page.name === "testimonials").ref} />
			<div>
				Icons made by{" "}
				<a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">
					Pixel perfect
				</a>{" "}
				from{" "}
				<a href="https://www.flaticon.com/" title="Flaticon">
					{" "}
					www.flaticon.com
				</a>
			</div>
			<a target="_blank" href="https://icons8.com/icons/set/menu">
				Menu icon
			</a>{" "}
			icon by{" "}
			<a target="_blank" href="https://icons8.com">
				Icons8
			</a>
		</div>
	);
}

export default App;
