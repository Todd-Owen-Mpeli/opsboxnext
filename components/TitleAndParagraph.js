/* eslint-disable @next/next/no-img-element */
import DOMPurify from "isomorphic-dompurify";

const TitleAndParagraph = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling = "hidden text-tiny text-center py-4";
		} else {
			contentStyling = "block text-tiny text-center py-4";
		}

		return contentStyling;
	}

	function createParagraphMarkup() {
		return {
			__html: DOMPurify.sanitize(`${props?.paragraph}`),
		};
	}

	return (
		<section className="py-12 bg-white">
			{/* Content Section */}
			<div className="container mx-auto">
				<div className="content px-6">
					<h2 className="text-center text-3xl text-blue py-4 px-5">
						{props?.title}
					</h2>
					<div
						className={isParagraphContent(props?.paragraph)}
						dangerouslySetInnerHTML={createParagraphMarkup()}
					/>
				</div>
			</div>

			{/* <!-- Background Aesthetics Icons --> */}
			<div className="mt-10 py-3">
				<img
					className="mx-auto w-[100%] h-[80px] object-contain"
					src="/svg/threeContentSquares/threeBackgroundSquaresIcons.svg"
					alt="Background Squares"
				/>
			</div>
		</section>
	);
};

export default TitleAndParagraph;
