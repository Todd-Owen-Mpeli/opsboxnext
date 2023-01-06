/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
import styles from "../styles/components/TextImageQuote.module.scss";

const TextImageQuote = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling = "hidden";
		} else {
			contentStyling = `${styles.paragraph}`;
		}
		return contentStyling;
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

	/* Allows the user to display
	 the Background Icons */
	let displayBoldParagraphOption;
	if (props?.displayBoldParagraphOption === "Yes") {
		displayBoldParagraphOption = "700";
	} else if (props?.displayBoldParagraphOption === "No") {
		displayBoldParagraphOption = "500";
	}

	/* Allows the user to display
	 the Image on the Right or Left*/
	let displayRightImage;
	let displayLeftImage;
	if (props?.displayImageOption === "Right") {
		displayRightImage = "block relative w-full lg:w-1/2 z-50";
		displayLeftImage = "hidden relative w-full lg:w-1/2 z-50";
	} else if (props?.displayImageOption === "Left") {
		displayRightImage = "hidden relative w-full lg:w-1/2 z-50";
		displayLeftImage = "block relative w-full lg:w-1/2 z-50";
	}

	/* Allows the user to 
    display the Button*/
	// Display Drop Down Navigation
	let displayButtonOption;
	if (props?.displayButtonOption === "Yes") {
		displayButtonOption = "block mt-2 w-[fit-content]";
	} else if (props?.displayButtonOption === "No") {
		displayButtonOption = "hidden mt-2 w-[fit-content]";
	}

	/* Allows the user to 
    display the Button*/
	let displayQuoteContent;
	if (props?.displayQuoteOption === "Yes") {
		displayQuoteContent = "block py-5 text-left";
	} else if (props?.displayQuoteOption === "No") {
		displayQuoteContent = "hidden py-5 text-left";
	}

	/* Check if Quote content is null And 
	Displays content if it is not null */
	function isQuoteContent(isQuoteContent) {
		let contentStyling;
		const tailwindStyling =
			"my-6 mt-3 text-lg font-[400] leading-[1.75rem] tracking-[0.1rem] text-blue";

		if (isQuoteContent === null) {
			contentStyling = `hidden ${tailwindStyling}`;
		} else {
			contentStyling = `block ${tailwindStyling}`;
		}
		return contentStyling;
	}

	/* Allows the user to display
	 the Background Icons */
	let displayBlueGreySquares;
	if (props?.displayThreeSquaresOption === "Yes") {
		displayBlueGreySquares = "block mx-auto mt-3 py-3";
	} else if (props?.displayThreeSquaresOption === "No") {
		displayBlueGreySquares = "hidden mx-auto mt-3 py-3";
	}

	/* Allows the user to display the
    Background Squares Aesthetics */
	let displayBackgroundAesthetics;
	if (props?.displayBackgroundAestheticsOptions === "Yes") {
		displayBackgroundAesthetics = "block relative z-0";
	} else if (props?.displayBackgroundAestheticsOptions === "No") {
		displayBackgroundAesthetics = "hidden relative z-0";
	}

	return (
		<div className={styles.textImageQuote}>
			<div className="container mx-auto">
				{/* <!-- Background Aesthetics (Grey Squares) --> */}
				<div className={displayBackgroundAesthetics}>
					{/* <!-- Position the background Aesthetic SVG --> */}
					<div
						className="absolute"
						style={{
							top: `${props?.positioningOptions?.top}px`,
							right: `${props?.positioningOptions?.right}px`,
							bottom: `${props?.positioningOptions?.bottom}px`,
							left: `${props?.positioningOptions?.left}px`,
						}}
					>
						<img
							className="mx-auto w-full xl:w-[300%] h-[650px] object-cover"
							src={`/svg/backgroundIcons/Icon${props?.selectBackgroundAestheticsOptions}.svg`}
							alt="Background Squares"
						/>
					</div>
				</div>

				<div className="content z-50">
					<div className="flex flex-col lg:flex-row gap-8 py-12 px-2">
						<div className={displayLeftImage}>
							<div className={styles.colorBox}></div>
							<img
								src={props?.image}
								className="object-cover w-full h-[500px]"
								width="750px"
								height="500px"
								alt="Image"
							/>
						</div>
						<div className="my-auto flex flex-col w-full lg:w-1/2 px-8 z-50">
							<div className="text-left">
								<h5 className="uppercase text-grey">OPS-BOX WAY</h5>
								<h2 className="my-6 mt-3 text-2xl md:text-4xl text-blue">
									{props?.title}
								</h2>
								<div
									className={isParagraphContent(props?.paragraphOne)}
									style={{
										paddingBottom: "0.5rem",
										fontWeight: `${displayBoldParagraphOption}`,
									}}
									dangerouslySetInnerHTML={createParagraphOneMarkup()}
								/>
								<div
									className={isParagraphContent(props?.paragraphTwo)}
									dangerouslySetInnerHTML={createParagraphTwoMarkup()}
								/>
							</div>
							{/* Quote Section */}
							<div className={displayQuoteContent}>
								<h5 className={isQuoteContent(props?.quoteText)}>
									{props?.quoteText}
								</h5>
								<h6 className="my-6 mt-3 text-tiny text-blue">
									{props?.personName}
								</h6>
							</div>
							<div className={displayButtonOption}>
								<div
									className="py-2 px-8 w-full text-white bg-yellow border-2 border-yellow
                        hover:text-orange hover:border-orange hover:bg-white hover:border-solid"
								>
									<Link
										href={`${props?.buttonLink?.url}`}
										className="uppercase text-sm tracking-[0.15rem] font-semibold hover:text-orange"
										target={`${props?.buttonLink?.target}`}
									>
										{props?.buttonLink?.title}
									</Link>
								</div>
							</div>
						</div>
						<div className={displayRightImage}>
							<div className={styles.colorBox}></div>
							<img
								src={props?.image}
								className="object-cover w-full h-[500px]"
								width="750px"
								height="500px"
								alt="Image"
							/>
						</div>
					</div>
				</div>

				{/* <!-- Background Aesthetics Icons --> */}
				<div className={displayBlueGreySquares}>
					<img
						className="mx-auto w-[100%] h-[80px] object-contain"
						src="/svg/threeContentSquares/threeBackgroundSquaresIcons.svg"
						alt="Background Squares"
					/>
				</div>
			</div>
		</div>
	);
};

export default TextImageQuote;
