import React from "react";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import mangasee from "./mangasee";
import ChapterNav from "./chapterNav";

/**
 * This component holds navigation and such for chapters
 * Also includes the images
 */
class Chapters extends React.Component<RouteComponentProps<{ id: string, chapter?: string }>> {

	initialState = {
		chapter: {
			sources: [],
			chapters: [],
			current: {
				chapter: -2
			}
		}
	}

	state = Object.assign({}, this.initialState);

	async updateState() {
		let { id, chapter } = this.props.match.params;
		if(Number(chapter) === Number(this.state.chapter.current.chapter)) return;
		
		let msUrl = "https://mangaseeonline.us/read-online/%slug%.html";
		// let newUrl = "https://thingproxy.freeboard.io/fetch/" + msUrl;
		let newUrl = "https://api.allorigins.win/get?url=" + msUrl;

		let data = await mangasee(newUrl, `${id}-chapter-%chapter%`, Number(chapter ?? 1));

		this.setState({
			chapter: data
		});
	}

	async componentDidMount() {
		this.updateState();
	}

	async componentDidUpdate() {
		this.updateState();
	}

	render() {
		let { id, chapter } = this.props.match.params;
		if(chapter) {
			return (
				<div className="chapterWrapper">
					<ChapterNav chapters={this.state.chapter.chapters} currentChapter={this.state.chapter.current.chapter} />
					<section className="imageWrapper">
						{
						this.state.chapter.sources.map((url, i) => {
							return (
								<div className="page" key={i}>
									<img className="pageImg" alt="Page" src={url} loading="lazy" />
								</div>
							)
						})
						}
					</section>
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
