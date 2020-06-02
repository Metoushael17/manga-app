import React from "react";
import { Link } from "react-router-dom";

interface ChapterNavProps {
	chapters: number[];
	currentChapter: number;
}

class ChapterNav extends React.Component<ChapterNavProps> {
	render() {

		let { currentChapter, chapters } = this.props;
		currentChapter = Number(currentChapter);

		let previousChapter = currentChapter - 1;
		let nextChapter = currentChapter + 1;

		let doNext = chapters.includes(nextChapter);
		let doPrevious = chapters.includes(previousChapter);

		let previousChapterButton = (
			<Link to={(previousChapter).toString()} className="nextChapter chapterNavItem">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
				<span>Previous chapter</span>
			</Link>
		)
		let nextChapterButton = (
			<Link to={(nextChapter).toString()} className="nextChapter chapterNavItem">
				<span>Next chapter</span>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
			</Link>
		)

		return (
			<nav>
				{doPrevious ? previousChapterButton : <div></div>}
				{doNext ? nextChapterButton : <div></div>}

			</nav>
		)
	}
}

export default ChapterNav;