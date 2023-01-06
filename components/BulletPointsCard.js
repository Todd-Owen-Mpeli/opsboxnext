/* eslint-disable @next/next/no-img-element */
import DOMPurify from "isomorphic-dompurify";

const BulletPointsCard = (props) => {
	function createParagraphMarkup() {
		return {
			__html: DOMPurify.sanitize(`${props?.paragraph}`),
		};
	}

	/* Allows the user to display the
    Background Square Icon Aesthetics */
	let displaySubtitle;
	// Display SVG Icon One
	if (props?.displaySubtitle === "Yes") {
		displaySubtitle = "hidden";

		// Display SVG Icon Two
	} else if (props?.displaySubtitle === "No") {
		displaySubtitle = "block";
	}

	return (
		<div className="flex py-5 px-4">
			<div className="icon w-[5%]">
				<img
					className="w-[25px] h-[25px] object-contain"
					src="/svg/orangeDiamond.svg"
					alt="Background Squares"
				/>
			</div>
			<div className="text ml-5 flex w-[95%]">
				<span className={`${displaySubtitle} text-tiny mr-1 font-bold`}>
					{props?.subtitle}
					<div
						className="font-[400]"
						dangerouslySetInnerHTML={createParagraphMarkup()}
					/>
				</span>
			</div>
		</div>
	);
};

export default BulletPointsCard;
