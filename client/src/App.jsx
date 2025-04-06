import './assets/styles.css';
import React from "react";
import { createRoot } from "react-dom/client";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Home from "./Pages/home/home";

const App = () => {
	return (
		<div>
			<NavBar />
			<Home />
			<Footer />
		</div>
	);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);