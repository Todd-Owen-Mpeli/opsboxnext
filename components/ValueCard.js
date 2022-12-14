/* eslint-disable @next/next/no-img-element */
const ValueCard = (props) => {
	/* Receives the current iteration number and sets the 
    Background Color a different color per iteration */
	let iconName;

	switch (props?.iterationCount) {
		case 0:
			iconName = "iconOne";
			break;
		case 1:
			iconName = "iconTwo";
			break;
		case 2:
			iconName = "iconThree";
			break;
		case 3:
			iconName = "iconFour";
			break;
	}

	return (
		<div className="flex flex-col justify-between items-start w-full xl:w-1/4 h-full">
			{/* <!-- Icons --> */}
			<img
				className="mx-auto w-[100%] h-[150px] object-contain"
				src={`/svg/values/${iconName}.svg`}
				alt="Icon Squares"
			/>
			<div className="flex flex-col justify-between">
				<h2 className="text-center text-lg py-4 text-blue leading-normal">
					{props?.title}
				</h2>
				<p className="text-center text-[0.85rem] text-black font-[400] leading-[1.5rem] px-6 py-2">
					{props?.paragraph}
				</p>
			</div>
		</div>
	);
};

export default ValueCard;
