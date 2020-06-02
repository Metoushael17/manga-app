import React from "react";
import { Link } from "react-router-dom";

export class Header extends React.Component {
	
	render() {
		console.log(this.props);
		return (
			<>
				<header>
					<div className="headerContent bodyWidth">
						<Link className="icon" to="/">
							<img alt="" src="https://mvlist.jipfr.nl/icon-big.png" className="icon"></img>
						</Link>
					</div>
				</header>
				<nav className="footerNav">
					<Link className="footerIcon feedLink" to="/">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
						<span>Feed</span>
					</Link>
					<Link className="footerIcon searchLink" to="/search">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
						<span>Search</span>
					</Link>
				</nav>
			</>
		)
	}
}