import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
	return (
		<div>
			<h1>Hello, React!</h1>
		</div>
	);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);