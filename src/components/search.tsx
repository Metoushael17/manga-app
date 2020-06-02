import React from "react";
import { Link } from "react-router-dom";

interface SearchResults {
	title: string;
	slug: string;
}

class Search extends React.Component {

	state: {
		searchResults: SearchResults[]
	} = {
		searchResults: []
	}

	async search() {
		let url = "https://mangaseeonline.us/search/request.php";
		// let newUrl = "https://api.allorigins.win/get?url=" + url;
		let newUrl = "https://cors-anywhere.herokuapp.com/" + url;

		let form = new FormData();
		form.append("page", "");
		form.append("keyword", "");
		form.append("year", "");
		form.append("author", "");
		form.append("sortBy", "popularity");
		form.append("sortOrder", "");
		form.append("status", "");
		form.append("pstatus", "");
		form.append("type", "");
		form.append("genre", "");
		form.append("genreNo", "");

		let searchResultHTML = await (await fetch(newUrl, {
			method: "POST",
			body: form
		})).text();
		
		let divs = searchResultHTML.split(`<div class="requested">`).map((str: string) => str.split(`col-xs-8`)[1]).filter(Boolean);
		let results = divs.map((str: string) => {
			let contentMatch = str.match(/<a class="resultLink" href="(.+)">(.+)<\/a>/);
			if(!contentMatch) return null;

			let slug = contentMatch[1].split("/").filter(Boolean).pop();
			let title = contentMatch[2];

			return {
				title,
				slug
			};
		});
		console.log(divs);
		console.log(results);
		this.setState({
			searchResults: results.filter(Boolean)
		});

	}

	componentDidMount() {
		this.search();
	}

	updateSearch(e: any) {
		console.log(e);
	}

	render() {
		return (
			<section className="search">
				Search

				<input type="text" placeholder="Search" onKeyUp={this.updateSearch} />

				<div className="searchResults mangaList">
					{this.state.searchResults.map(obj => {
						return (
							<div className="chapterLink" key={obj.slug}>
								<Link className="isLink" to={`/${obj.slug}`}>
									<img className="linkImage" src={`https://static.mangaboss.net/cover/${obj.slug}.jpg`} />
									<div className="content">{obj.title}</div>
								</Link>
							</div>
						)
					})}
				</div>
			</section>
		)	
	}
}

export default Search;