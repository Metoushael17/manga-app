import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import Manga from "./components/manga";

function Routers() {
	return (
		<Router>
			<Switch>
				<Route path="/about">
					<Link to="/about">About</Link>
				</Route>
				<Route exact path="/:id" component={Manga.Chapters} />
				<Route exact path="/:id/:chapter" component={Manga.Chapters} />
			</Switch>
		</Router>
	)
}
export default Routers;