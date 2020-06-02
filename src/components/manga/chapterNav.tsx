import React from "react";

interface ChapterNavProps {
	chapters: number[];
	currentChapter: number;
}

class ChapterNav extends React.Component<ChapterNavProps> {
	render() {
		console.log(this);

		let { currentChapter, chapters } = this.props;
		currentChapter = Number(currentChapter);
		let doNext = chapters.find(v => v === currentChapter + 1);
		let doPrevious = chapters.find(v => v === currentChapter - 1);

		let nextChapterButton = (
			<div className="nextChapter chapterNavItem">
				<span>Next chapter</span>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
			</div>
		)

		let previousChapterButton = (
			<div className="nextChapter chapterNavItem">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
				<span>Previous chapter</span>
			</div>
		)

		return (
			<nav>
				{doPrevious ? previousChapterButton : ""}
				{doNext ? nextChapterButton : ""}

			</nav>
		)
	}
}

export default ChapterNav;