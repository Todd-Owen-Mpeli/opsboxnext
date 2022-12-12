import Link from "next/link";
import styles from "../styles/components/Awards.module.scss";

const Awards = (props) => {
	/* Allows the user to display the Blue 
    SVG Icon in the Yellow Diamond / Square*/
	let displaySVGIcon;
	if (props?.displayStylingOptions === "Yes") {
		displaySVGIcon = "block mx-auto my-4  md:mt-3 md:mb-0 py-1";
	} else if (props?.displayStylingOptions === "No") {
		displaySVGIcon = "hidden mx-auto my-4 md:mb-0 py-1";
	}

	/* Allows the user to display the 
    Button in the Yellow Diamond / Square*/
	let displayButton;
	if (props?.displayButtonOptions === "Yes") {
		displayButton = "block mt-8 mx-auto text-center w-[fit-content]";
	} else if (props?.displayButtonOptions === "No") {
		displayButton = "hidden mt-8 mx-auto text-center w-[fit-content]";
	}

	/* Allows the user to select which
    Background Aesthetics SVG image to display */
	let displayOptionOne;
	let displayOptionTwo;
	const displayTailwindProps = "relative z-0";
	if (props?.selectBackgroundAestheticsOptions === "One") {
		displayOptionOne = `block ${displayTailwindProps}`;
		displayOptionTwo = `hidden ${displayTailwindProps}`;
	} else if (props?.selectBackgroundAestheticsOptions === "Two") {
		displayOptionOne = `hidden ${displayTailwindProps}`;
		displayOptionTwo = `block ${displayTailwindProps}`;
	}

	return (
		<section className={styles.awards}>
			<div className="container mx-auto">
				<div className="flex flex-col py-8 z-50">
					<div className="z-50">
						<div className="text-left">
							<h5 className="text-sm font-[400] text-center lg:text-left uppercase text-grey">
								OPS-BOX WAY
							</h5>
							<h2 className="text-3xl md:text-[2.5rem] text-center lg:text-left font-[400] leading-normal my-6 mt-3 text-blue">
								{props?.title}
							</h2>
						</div>
					</div>
					<div className="flex flex-col xl:flex-row justify-between pt-12 z-50">
						<div className="flex flex-col justify-center items-center md:flex-row gap-y-10 md:gap-x-10">
							<img
								className="w-[100%] h-[300px] md:h-[400px] object-contain"
								width="235px"
								height="400px"
								src={props?.awardsOneImage}
								alt="Awards Image"
							/>
							<img
								className="w-[100%] h-[300px] md:h-[400px] object-contain"
								width="480px"
								height="400px"
								src={props?.awardsTwoImage}
								alt="Awards Image"
							/>
						</div>
						{/* <!-- Larger Laptops & Desktop viewport --> */}
						<div className={styles.yellowDiamond}>
							<div className="flex justify-center items-center relative rounded-[10%] w-[400px] h-[400px] bg-yellow">
								<div className="content flex flex-col mt-5 ml-5 justify-center items-center absolute p-4 text-center rotate-[-45deg]">
									<p className="relative uppercase font-medium text-white">
										{props?.paragraphOne}
									</p>
									{/* <!-- Background Aesthetics Icons --> */}
									<div className={displaySVGIcon}>
										<img
											className="mx-auto w-[fit-content] h-[20px] object-contain"
											src="/svg/blueDiamond.svg"
											alt="Background Squares"
										/>
									</div>
									<p className="relative text-white">{props?.paragraphTwo}</p>
									<div className={displayButton}>
										<div
											id=""
											className="py-2 px-8 bg-blue hover:bg-darkblue w-full"
										>
											<Link
												className="uppercase font-semibold text-white"
												href={`${props?.buttonLink?.url}`}
												target={`${props?.buttonLink?.target}`}
											>
												{props?.buttonLink?.title}
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- Laptop & Mobile Viewport --> */}
						<div className="flex xl:hidden w-full h-full mt-10 flex-col justify-start items-start p-2 border-r-4 border-yellow border-[0.15rem] border-solid z-50">
							<div className="w-full h-full flex justify-center items-center bg-yellow">
								<div className="flex flex-col  justify-center items-center p-4 text-center">
									<p className="uppercase font-medium text-white">
										{props?.paragraphOne}
									</p>
									{/* <!-- Background Aesthetics Icons --> */}
									<div className={displaySVGIcon}>
										<img
											className="mx-auto w-[fit-content] h-[20px] object-contain"
											src="/svg/blueDiamond.svg"
											alt="Background Squares"
										/>
									</div>
									<p className=" paragraphTwo text-white">
										{props?.paragraphTwo}
									</p>
									<div className={displayButton}>
										<div className="py-2 px-8 bg-blue hover:bg-darkblue w-full">
											<Link
												className="uppercase font-semibold text-white"
												href={`${props?.buttonLink?.url}`}
												target={`${props?.buttonLink?.target}`}
											>
												{props?.buttonLink?.title}
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- Background Aesthetics (Grey Squares) --> */}
				<div className={displayOptionOne}>
					<div className="absolute right-[-245px] top-[-535px] opacity-50">
						<img
							className="mx-auto w-[300%] h-[650px] object-contain"
							src="/svg/backgroundIcons/IconFive.svg"
							alt="Background Squares"
						/>
					</div>
				</div>
				<div className={displayOptionTwo}>
					<div className="absolute right-[-245px] top-[-535px] opacity-50">
						<img
							className="mx-auto w-[300%] h-[650px] object-contain"
							src="/svg/backgroundIcons/IconTwo.svg"
							alt="Background Squares"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Awards;
