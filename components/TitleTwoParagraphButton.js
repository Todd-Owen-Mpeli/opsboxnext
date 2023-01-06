/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";

const TitleAndParagraph = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling = "hidden text-tiny";
		} else {
			contentStyling = "block text-tiny";
		}
		return contentStyling;
	}

	function createBoldParagraphMarkup() {
		return {
			__html: DOMPurify.sanitize(`${props?.boldParagraph}`),
		};
	}

	function createParagraphOneMarkup() {
		return {
			__html: DOMPurify.sanitize(`${props?.paragraphOne}`),
		};
	}

	function createParagraphTwoMarkup() {
		return {
			__html: DOMPurify.sanitize(`${props?.paragraphTwo}`),
		};
	}

	/* Check if Bold paragraph content is null And 
	Allows the user to display the Bold Paragraph */
	function isBoldParagraphContent(isBoldOption) {
		let displayBoldText;
		const styling = "text-tiny font-bold py-2";
		if (isBoldOption === "Yes") {
			displayBoldText = `block ${styling}`;
		} else if (isBoldOption === "No" || isBoldOption === null) {
			displayBoldText = `hidden ${styling}`;
		}
		return displayBoldText;
	}

	/* Check if Button content is null And Allows 
	the user to display or not Display the Button */
	function isButtonContent(isButtonContent) {
		let displayButtonOption;
		const styling =
			"mx-auto mt-14 py-2 px-8 w-[fit-content] cursor-pointer text-white bg-yellow hover:text-orange border-2 border-yellow hover:border-orange hover:bg-white hover:text-orange hover:border-solid";
		if (isButtonContent === "Yes") {
			displayButtonOption = `block ${styling}`;
		} else if (isButtonContent === "No") {
			displayButtonOption = `hidden ${styling}`;
		} else if (isButtonContent === null) {
			displayButtonOption = `hidden ${styling}`;
		}
		return displayButtonOption;
	}

	/* Allows the user to display the
     Three Background Squares Aesthetics */
	let displayThreeSquaresOption;
	if (props?.displayThreeSquaresOption === "Yes") {
		displayThreeSquaresOption = "block py-3";
	} else if (props?.displayThreeSquaresOption === "No") {
		displayThreeSquaresOption = "hidden py-3";
	}

	return (
		<section className="py-12 bg-white">
			{/* Content Section */}
			<div className="container mx-auto">
				<div className="content">
					<h2 className="text-center text-3xl text-blue py-10 px-5">
						{props?.title}
					</h2>
					<div className="flex flex-col md:flex-row gap-x-0 gap-y-2 md:gap-y-0 md:gap-x-6 px-6 xl:px-80 mx-auto">
						<div className="flex flex-col w-full md:w-1/2 m-0">
							<div
								className={isBoldParagraphContent(props?.displayBoldText)}
								dangerouslySetInnerHTML={createBoldParagraphMarkup()}
							/>
							<div
								className={isParagraphContent(props?.paragraphOne)}
								dangerouslySetInnerHTML={createParagraphOneMarkup()}
							/>
						</div>
						<div className="flex flex-col w-full md:w-1/2 m-0">
							<div
								className={isParagraphContent(props?.paragraphTwo)}
								dangerouslySetInnerHTML={createParagraphTwoMarkup()}
							/>
						</div>
					</div>
					<div className={isButtonContent(props?.displayButtonOption)}>
						<Link
							href={`${props?.buttonLink?.url}`}
							className="uppercase text-sm tracking-[0.15rem]"
							target={`${props?.buttonLink?.target}`}
						>
							{props?.buttonLink?.title}
						</Link>
					</div>
				</div>
			</div>

			{/* <!-- Background Aesthetics Icons --> */}
			<div className={displayThreeSquaresOption}>
				<img
					className="mx-auto mt-8 w-[100%] h-[80px] object-contain"
					src="/svg/threeContentSquares/threeBackgroundSquaresIcons.svg"
					alt="Background Squares"
				/>
			</div>
		</section>
	);
};

export default TitleAndParagraph;
