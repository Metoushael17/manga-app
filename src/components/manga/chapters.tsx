import React from "react";
import { Link } from "react-router-dom";
import mangasee from "./mangasee";
import ChapterNav from "./chapterNav";

/**
 * This component holds navigation and such for chapters
 * Also includes the images
 */
class Chapters extends React.Component {

	state = {
		chapter: {
			sources: [],
			chapters: [],
			current: {
				chapter: -2
			}
		}
	}

	async componentDidMount() {
		// @ts-ignore For some reason there's no match property on the thing
		let { id, chapter } = this.props.match.params;
		
		let newUrl = "https://cors-anywhere.herokuapp.com/https://mangaseeonline.us/read-online/%slug%.html";

		let data = await mangasee(newUrl, `${id}-chapter-%chapter%`, chapter ?? 0);
		this.setState({
			chapter: data
		});

	}

	async componentDidUpdate() {
		// @ts-ignore For some reason there's no match property on the thing
		let { id, chapter } = this.props.match.params;
		
		let newUrl = "https://cors-anywhere.herokuapp.com/https://mangaseeonline.us/read-online/%slug%.html";

		let data = await mangasee(newUrl, `${id}-chapter-%chapter%`, chapter ?? 0);
		this.setState({
			chapter: data
		});
	}

	render() {
		// @ts-ignore For some reason there's no match property on the thing
		let { id, chapter } = this.props.match.params;
		if(chapter) {
			return (
				<div className="chapterWrapper">
					All
					<ChapterNav chapters={this.state.chapter.chapters} currentChapter={this.state.chapter.current.chapter} />
					{
					this.state.chapter.sources.map((url, i) => {
						return (
							<div className="page" key={i}>
								<img className="pageImg" alt="Page" src={url} loading="lazy" />
							</div>
						)
					})
					}
				</div>
			)
		} else {
			return (
				<div className="chapterList">
					{this.state.chapter.chapters.map(chapterNum => {
						return (
							<div className="chapterLink" key={chapterNum}>
								<Link className="isLink" to={`/${id}/${chapterNum}`}>
									<div className="content">Chapter {chapterNum}</div>
								</Link>
							</div>
						)
					})}
				</div>
			)
		}
	}
}

export default Chapters;
