/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const ContactBannerTwo = (props) => {
	/* Check if Button Link content is null
	 And Displays content if it isn't null */
	function isButtonLink(isButtonLink) {
		let contentStyling;
		if (isButtonLink === null) {
			contentStyling =
				"hidden py-2 px-8 w-[fit-content] mx-auto text-white hover:text-orange bg-yellow hover:text-orange border-2 border-yellow hover:border-orange hover:bg-white hover:border-solid";
		} else {
			contentStyling =
				"block py-2 px-8 w-[fit-content] mx-auto text-white hover:text-orange bg-yellow hover:text-orange border-2 border-yellow hover:border-orange hover:bg-white hover:border-solid";
		}
		return contentStyling;
	}

	/* Allows the user to display
	 the Background Icons */
	let displayBlueGreySquares;
	if (props?.displayBlueGreySquares === "Yes") {
		displayBlueGreySquares = "block mx-auto pt-5";
	} else if (props?.displayBlueGreySquares === "No") {
		displayBlueGreySquares = "hidden mx-auto pt-5";
	}

	return (
		<div className="my-2 py-4">
			<div className="container mx-auto">
				<div className="flex flex-col justify-between items-center">
					<h2 className="py-5 text-blue text-center text-2xl md:text-[2.5rem] font-[400]">
						{props?.title}
					</h2>
					<div className={isButtonLink(props?.buttonLink?.url)}>
						<Link
							href={`${props?.buttonLink?.url}`}
							className="uppercase font-[600] text-base"
							target={`${props?.buttonLink?.target}`}
						>
							{props?.buttonLink?.title}
						</Link>
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
		</div>
	);
};

export default ContactBannerTwo;
