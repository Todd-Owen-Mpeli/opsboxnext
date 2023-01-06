import RedIconBulletPointsTwoCard from "./RedIconBulletPointsTwoCard";

/* eslint-disable @next/next/no-img-element */
const RedIconBulletPointsTwo = (props) => {
	/* Used to change the Red Bullet
	  Point Icon every iteration */
	let iterationCount = 0;

	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling = "hidden text-pureBlack w-full lg:w-[40rem] mx-auto";
		} else {
			contentStyling = "block text-pureBlack w-full lg:w-[40rem] mx-auto";
		}
		return contentStyling;
	}

	function createParagraphMarkup() {
		return {
			__html: DOMPurify.sanitize(`${props?.paragraph}`),
		};
	}
	return (
		<section>
			<div className="container mx-auto">
				<div className="flex flex-col p-5">
					{/* Background Aesthetics Icons */}
					<div className="mx-auto py-5">
						<img
							className="mx-auto w-[100%] h-[80px] object-contain"
							width="100%"
							height="80px"
							src="/svg/threeContentSquares/threeBackgroundSquaresIcons.svg"
							alt="Background Squares"
						/>
					</div>
					<div className="flex flex-col text-center">
						<h5 className="uppercase mb-3 text-grey">OPS-BOX WAY</h5>
						<h2 className="text-2xl md:text-4xl text-blue pb-4">
							{props?.title}
						</h2>
						<div
							className={isParagraphContent(props?.paragraph)}
							dangerouslySetInnerHTML={createParagraphMarkup()}
						/>
					</div>
					<div className="flex flex-col md:flex-row gap-x-12">
						<div className="w-full md:w-1/2 p-5">
							{/* Content Array from Wordpress */}
							{props?.columnOne?.bulletPoint.map((keys) => (
								<RedIconBulletPointsTwoCard
									Key={keys?.id}
									title={keys?.title}
									paragraph={keys?.paragraph}
									iterationCount={iterationCount++}
								/>
							))}
						</div>
						<div className="w-full md:w-1/2 p-5">
							{/* Content Array from Wordpress */}
							{props?.columnTwo?.bulletPoint.map((keys) => (
								<RedIconBulletPointsTwoCard
									Key={keys?.id}
									title={keys?.title}
									paragraph={keys?.paragraph}
									iterationCount={iterationCount++}
								/>
							))}
						</div>
					</div>
					{/* Background Aesthetics Icons */}
					<div className="mx-auto pt-5">
						<img
							className="mx-auto w-[100%] h-[80px] object-contain"
							width="100%"
							height="80px"
							src="/svg/threeContentSquares/threeBackgroundSquaresIcons.svg"
							alt="Background Squares"
						/>
					</div>
				</div>
				{/* Background Aesthetics (Grey Squares) */}
				<div className="relative z-0">
					<div className="absolute left-[-280px] top-[-640px] opacity-50">
						<img
							className="mx-auto w-[300%] h-[650px] object-contain"
							src="/svg/backgroundIcons/IconFive.svg"
							alt="Background Squares"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default RedIconBulletPointsTwo;
