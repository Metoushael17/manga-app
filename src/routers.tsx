import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import { Header } from "./components/layout";
import Search from "./components/search";

import Manga from "./components/manga";

function Routers() {
	return (
		<Router>
			<Header />
			<div className="bodyWrapper">
				<div className="body">
					<Switch>
						<Route path="/about">
							<Link to="/about">About</Link>
						</Route>
						<Route exact path="/search">
							<Search />
						</Route>
						<Route exact path="/:id" component={Manga.Chapters} />
						<Route exact path="/:id/:chapter" component={Manga.Chapters} />
					</Switch>	
				</div>
			</div>
		</Router>
	)
}
export default Routers;