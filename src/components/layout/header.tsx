import React from "react";
import { Link } from "react-router-dom";

export function Header() {
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
				:)
			</nav>
		</>
	)
}