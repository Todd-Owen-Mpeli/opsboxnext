/* eslint-disable @next/next/no-img-element */
import DOMPurify from "isomorphic-dompurify";

const TextPointImageCard = (props) => {
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

	function createParagraphMarkup() {
		return {
			__html: DOMPurify.sanitize(`${props?.paragraph}`),
		};
	}

	/* Calculates How many iterations and sets the Icons
    Background SVG to a different SVG per iteration */
	let iconSvg;
	switch (props?.iterationCount) {
		case 0:
			iconSvg = "One";
			break;
		case 1:
			iconSvg = "Two";
			break;
		case 2:
			iconSvg = "Three";
			break;
		case 4:
			iconSvg = "One";
			break;
		case 5:
			iconSvg = "Two";
			break;
		case 6:
			iconSvg = "Three";
			break;
	}

	return (
		<>
			<div className="flex p-3">
				<div className="my-auto mr-5 w-[25%]">
					<img
						className="w-[150px] h-[150px] object-contain"
						src={`/svg/blueBulletPoints/Icon${iconSvg}.svg`}
						alt="Red Icon"
					/>
				</div>
				<div className="flex flex-col justify-center items-left w-[75%]">
					<h2 className="text-lg mb-4 text-blue">{props?.title}</h2>
					<div
						className={isParagraphContent(props?.paragraph)}
						dangerouslySetInnerHTML={createParagraphMarkup()}
					/>
				</div>
			</div>
		</>
	);
};

export default TextPointImageCard;
