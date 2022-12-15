import Link from "next/link";

const TextImageQuote = (props) => {
	console.log(props);

	function createFullParagraphOneMarkup() {
		return {
			__html: `${props?.paragraphOne}`,
		};
	}
	function createFullParagraphTwoMarkup() {
		return {
			__html: `${props?.paragraphTwo}`,
		};
	}

	/* Allows the user to display
	 the Image on the Right or Left*/
	let displayRightImage;
	let displayLeftImage;
	if (props?.displayImageOption === "Right") {
		displayRightImage = "block relative w-1/2 z-50";
		displayLeftImage = "hidden relative w-1/2 z-50";
	} else if (props?.displayImageOption === "Left") {
		displayRightImage = "hidden relative w-1/2 z-50";
		displayLeftImage = "block relative w-1/2 z-50";
	}

	/* Allows the user to display
	 the Background Icons */
	let displayQuoteOption;
	if (props?.displayQuoteOption === "Yes") {
		displayQuoteOption = "block py-5 w-full md:w-[25rem] text-left";
	} else if (props?.displayQuoteOption === "No") {
		displayQuoteOption = "hidden py-5 w-full md:w-[25rem] text-left";
	}

	/* Allows the user to display
	 the Background Icons */
	let displayBlueGreySquares;
	if (props?.displayBlueGreySquares === "Yes") {
		displayBlueGreySquares = "block mx-auto mt-3 py-3";
	} else if (props?.displayBlueGreySquares === "No") {
		displayBlueGreySquares = "hidden mx-auto mt-3 py-3";
	}

	return (
		<div className="py-4">
			<div className="container mx-auto">
				{/* <!-- Background Aesthetics (Grey Squares) --> */}
				<div className="backgroundAesthetics relative z-0 <?php echo $displayBackgroundAesthetics ?>">
					{/* <!-- Position the background Aesthetic SVG --> */}
					{/* <div className="pageBackgroundIcons absolute <?php echo $BackgroundAestheticsOpacity?>"
                        style="top:<?php echo $top?>px; right:<?php echo $right?>px; bottom:<?php echo $bottom?>px; left:<?php echo $left?>px;">
                        <img className="mx-auto w-[300%] h-[650px] object-contain"
                            src="<?php echo get_template_directory_uri() . $selectBackgroundAesthetics ?>"
                            alt="Background Squares"/>
                    </div> */}
				</div>

				<div className="content z-50">
					<div className="flex py-12 px-2">
						<div className={displayLeftImage}>
							<div className="colourBoxOne absolute border-yellow"></div>
							<img
								src={props?.image}
								className="object-cover w-full h-[500px]"
								width="750px"
								height="500px"
								alt="Image"
							/>
						</div>
						<div className="my-auto flex flex-col w-1/2 px-8 z-50 <?php echo $displayPadding ?>">
							<div className="w-[40rem] text-left">
								<h5 className="uppercase text-grey">OPS-BOX WAY</h5>
								<h2 className="my-6 mt-3 text-2xl md:text-[2.5rem] text-blue">
									{props?.title}
								</h2>
								<p
									className="mb-2 text-tiny <?php echo $displayBoldParagraph ?> "
									dangerouslySetInnerHTML={createFullParagraphOneMarkup()}
								/>
								<p
									className="text-tiny"
									dangerouslySetInnerHTML={createFullParagraphTwoMarkup()}
								/>
							</div>
							{/* Quote Section */}
							<div className={displayQuoteOption}>
								<h5 className="my-6 mt-3 text-lg font-[400] leading-[1.75rem] tracking-[0.1rem] text-blue">
									"{props?.quoteText}"
								</h5>
								<h6 className="my-6 mt-3 text-blue">{props?.personName}</h6>
							</div>
							<div className="mt-2 w-[fit-content] <?php echo $displayButton ?>">
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
							<div className="colourBoxTwo absolute border-yellow"></div>
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
