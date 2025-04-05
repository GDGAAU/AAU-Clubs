import React from "react";
import { createRoot } from "react-dom/client";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

const App = () => {
	return (
		<div>
			<NavBar />
			<Footer />
		</div>
	);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);