import React from "react";

interface ChapterNavProps {
	chapters: number[];
	currentChapter: number;
}

class ChapterNav extends React.Component<ChapterNavProps> {
	render() {
		console.log(this);

		let { currentChapter, chapters } = this.props;
		let doNext = chapters.find(v => v === currentChapter + 1);
		let doPrevious = chapters.find(v => v === currentChapter - 1);

		return (
			<nav>
				{doNext ? "y" : "n"} {doPrevious ? "y" : "n"}
			</nav>
		)
	}
}

export default ChapterNav;