/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import BulletPointsCard from "./BulletPointsCard";

const BulletPoints = (props) => {
	/* Allows the user to Select the
    Background Square Icon Aesthetics */
	let iconOption;
	// Display SVG Icon One
	if (props?.selectBackgroundAestheticsOptions === "One") {
		iconOption = "/svg/backgroundIcons/IconOne.svg";

		// Display SVG Icon Two
	} else if (props?.selectBackgroundAestheticsOptions === "Two") {
		iconOption = "/svg/backgroundIcons/IconTwo.svg";
	}
	/* Allows the user to display the
    Background Square Icon Aesthetics */
	let displayBackgroundAesthetics;
	// Display SVG Icon One
	if (props?.displayBackgroundAestheticsOptions === "Yes") {
		displayBackgroundAesthetics = "block";

		// Display SVG Icon Two
	} else if (props?.displayBackgroundAestheticsOptions === "No") {
		displayBackgroundAesthetics = "hidden";
	}

	return (
		<section className="overflow-hidden">
			<div className="container mx-auto">
				{/* Background Aesthetics (Grey Squares) */}
				<div className={`relative z-0 ${displayBackgroundAesthetics}`}>
					<div className={`absolute left-[-245px] top-[-225px]`}>
						<img
							className="mx-auto w-[300%] h-[650px] object-contain"
							src={iconOption}
							alt="Background Squares"
						/>
					</div>
				</div>
				<div className="flex flex-col p-5 z-50">
					<div className="flex flex-col lg:flex-row justify-center items-center gap-x-12 z-50">
						<div className="w-full lg:w-1/2 p-5">
							<h2 class="text-2xl md:text-4xl text-left text-blue">
								{props?.columnOne?.title}
							</h2>
							<div className="mt-10">
								{/* Menu Array from Wordpress */}
								{props?.columnOne?.bulletPoints.map((keys) => (
									<BulletPointsCard
										Key={keys?.id}
										subtitle={keys?.subtitle}
										paragraph={keys?.paragraph}
									/>
								))}
							</div>
						</div>
						<div className="w-full lg:w-1/2 p-5">
							<h2 class="text-2xl md:text-4xl text-left text-blue">
								{props?.columnTwo?.title}
							</h2>
							<div className="mt-10">
								{/* Menu Array from Wordpress */}
								{props?.columnTwo?.bulletPoints.map((keys) => (
									<BulletPointsCard
										Key={keys?.id}
										subtitle={keys?.subtitle}
										paragraph={keys?.paragraph}
										displaySubtitle={props?.displaySubtitleOption}
									/>
								))}
							</div>
						</div>
					</div>
					<div className="mt-4 mx-auto w-[fit-content]">
						<div className="py-2 px-8 text-white bg-yellow hover:text-orange border-2 border-yellow hover:border-orange hover:bg-white hover:border-solid">
							<Link
								href={`${props?.buttonLink?.url}`}
								className="uppercase font-semibold text-sm tracking-[0.15rem]"
								target={`${props?.buttonLink?.target}`}
							>
								{props?.buttonLink?.title}
							</Link>
						</div>
					</div>
				</div>
				{/* Background Aesthetics Icons */}
				<div className="pageBackgroundStylingTop py-3">
					<img
						className="mx-auto w-[100%] h-[80px] object-contain"
						src="/svg/threeContentSquares/threeBackgroundSquaresIcons.svg"
						alt="Background Squares"
					/>
				</div>
			</div>
		</section>
	);
};

export default BulletPoints;
