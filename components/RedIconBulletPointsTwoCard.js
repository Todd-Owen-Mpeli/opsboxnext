/* eslint-disable @next/next/no-img-element */
const RedIconBulletPointsTwoCard = (props) => {
	/* Calculates How many iterations and sets the Icons
    Background SVG to a different SVG per iteration */
	let redIconSvg;
	switch (props?.iterationCount) {
		case 0:
			redIconSvg = "One";
			break;
		case 1:
			redIconSvg = "Two";
			break;
		case 2:
			redIconSvg = "Three";
			break;
		case 3:
			redIconSvg = "Four";
			break;
		case 4:
			redIconSvg = "Five";
			break;
		case 5:
			redIconSvg = "Six";
			break;
		case 6:
			redIconSvg = "Seven";
			break;
		case 7:
			redIconSvg = "One";
			break;
		case 8:
			redIconSvg = "Two";
			break;
		case 9:
			redIconSvg = "Three";
			break;
		case 10:
			redIconSvg = "Four";
			break;
	}

	function createParagraphMarkup() {
		return {
			__html: DOMPurify.sanitize(`${props?.paragraph}`),
		};
	}
	return (
		<>
			<div className="flex flex-col mt-10">
				<div className="flex p-3">
					<div className="icon mr-4 w-[25%]">
						<img
							className="w-[150px] h-[100px] object-contain"
							width="150px"
							height="100px"
							src={`/svg/redIconBulletPoints/icon${redIconSvg}.svg`}
							alt="Red Icon"
						/>
					</div>
					<div className="text flex flex-col justify-center items-left w-[75%]">
						<h2 className="text-blue pb-2">{props?.title}</h2>
						<div
							className="text-tiny font=[400] text-left"
							dangerouslySetInnerHTML={createParagraphMarkup()}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default RedIconBulletPointsTwoCard;
