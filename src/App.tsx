import React from "react";
import "./css/main.css";
import { Header } from "./components/layout";
import Routers from "./routers";

function App() {
	return (
		<div className="App">
			<Header />
			<div className="bodyWrapper">
				<div className="body">
					<Routers />
				</div>
			</div>
		</div>
	);
}

export default App;
