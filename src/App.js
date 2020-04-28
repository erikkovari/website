import React from "react";
import scrollImg from "./assets/down-arrow.svg";
import "./App.css";

function NavigationBar() {
	const onClick = () => {
		console.log("hello");
	};
	return (
		<div className="nav-bar">
			<button className="nav" onClick={() => onClick()}>
				Home
			</button>
			<button className="nav">About me</button>
			<button className="nav">Portfolio</button>
		</div>
	);
}

function Home() {
	return (
		<section id="home" className="home">
			<div className="home-text">
				<div className="title">
					Hi, I'm <div className="title primary">Erik Kovari</div>.
				</div>
				<div className="title">
					I like to solve the problems of <span className="title primary">today</span> and{" "}
					<span className="title primary">tomorrow</span>.
				</div>
			</div>

			<button>
				<div className="text">Take a look</div>
				<img className="scroll-img" src={scrollImg} />
			</button>
		</section>
	);
}

function App() {
	return (
		<div className="App">
			<Home />
			<NavigationBar />
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
		</div>
	);
}

export default App;
