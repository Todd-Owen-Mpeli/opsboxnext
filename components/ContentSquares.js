const ContentSquares = (props) => {
	/* Allows the user to 
    display the Title Section*/
	let displayTitle;
	if (props?.displayTitle === "Yes") {
		displayTitle = "block";
	} else if (props?.displayTitle === "No") {
		displayTitle = "hidden";
	}

	/* Allows the user to display
	 the Background Icons */
	let displayBlueGreySquares;
	if (props?.displayBlueGreySquares === "Yes") {
		displayBlueGreySquares = "block mx-auto mt-3 py-3";
	} else if (props?.displayBlueGreySquares === "No") {
		displayBlueGreySquares = "hidden mx-auto mt-3 py-3";
	}

	/* Allows the user to display the
    Background Squares Aesthetics */
	let displayBackgroundAesthetics;
	if (props?.displayBackgroundAesthetics === "Yes") {
		displayBackgroundAesthetics = "block relative z-0";
	} else if (props?.displayBackgroundAesthetics === "No") {
		displayBackgroundAesthetics = "hidden relative z-0";
	}

	/* Calculates the number of the Content Squares
	and displays either 3 or 4 Content Squares */
	// props?.displayNumberOfColumns;

	/* Allows the user to display the 
    either 3 or 4 Content Square Cards*/
	let displayFourthCard;
	let gridSectionDisplay;
	let displayNumberCards;
	if (props?.displayNumberOfColumns === "3") {
		displayFourthCard = "none";
		displayNumberCards =
			"singleContentSquare w-full lg:w-1/3 h-full lg:min-h-[500px] flex flex-col group justify-between bg-cover bg-no-repeat bg-center";
		gridSectionDisplay =
			"gridSection z-50 flex flex-col lg:flex-row gap-1 justify-center items-center";
	} else if (props?.displayNumberOfColumns === "4") {
		displayFourthCard = "block";
		displayNumberCards =
			"singleContentSquare w-full md:w-full xl:w-1/4 h-full lg:min-h-[500px] flex flex-col group justify-between bg-cover bg-no-repeat bg-center";
		gridSectionDisplay =
			"gridSection z-50 flex flex-col md:grid md:grid-cols-2 xl:flex xl:flex-row gap-1 justify-center items-center";
	}

	return (
		<div>
			<section className="contentSquares my-2">
				{/* Content Section */}
				<div className="content flex flex-col">
					<div className={displayTitle}>
						<h2 className="text-center text-3xl text-blue py-10 px-5">
							{props?.title}
						</h2>
					</div>

					<div className={gridSectionDisplay}>
						<div className={displayNumberCards}>
							<style jsx>{`
								.singleContentSquare {
									background: linear-gradient(
											0deg,
											rgba(13, 23, 42, 0.45),
											rgba(13, 23, 42, 0.45)
										),
										url("${props?.columnOne?.backgroundImage?.sourceUrl}");
									background-position: 50%;
									background-repeat: no-repeat;
									background-size: cover;
								}
							`}</style>
							<div className="content flex flex-col h-full lg:h-[500px] justify-between">
								<div className="p-20 pb-0">
									<h2 className="text-white text-center uppercase tracking-[0.25rem]">
										{props?.columnOne?.title}
									</h2>
									<p className="text-white text-center text-tiny mt-12 font-light leading-[1.5rem]">
										{props?.columnOne?.paragraph}
									</p>
								</div>
								<div className="relative flex flex-col py-10 px-20">
									<button className="w-[fit-content] py-2 px-8 mx-auto bg-yellow hover:bg-transparent hover: hover:border-white border-2 border-yellow">
										<a
											className="uppercase text-white text-sm tracking-[0.15rem]"
											href={props?.columnOne?.buttonLink?.url}
											target={props?.columnOne?.buttonLink?.target}
										>
											{props?.columnOne?.buttonLink?.title}
										</a>
									</button>
								</div>
							</div>
						</div>
						<div className={displayNumberCards}>
							<style jsx>{`
								.singleContentSquare {
									background: linear-gradient(
											0deg,
											rgba(13, 23, 42, 0.45),
											rgba(13, 23, 42, 0.45)
										),
										url("${props?.columnTwo?.backgroundImage?.sourceUrl}");
									background-position: 50%;
									background-repeat: no-repeat;
									background-size: cover;
								}
							`}</style>
							<div className="content flex flex-col justify-between h-full lg:h-[500px]">
								<div className="p-20 pb-0">
									<h2 className="text-white text-center uppercase tracking-[0.25rem]">
										{props?.columnTwo?.title}
									</h2>
									<p className="text-white text-center text-tiny mt-12 font-light leading-[1.5rem]">
										{props?.columnTwo?.paragraph}
									</p>
								</div>
								<div className="relative flex flex-col py-10 px-20">
									<button className="w-[fit-content] py-2 px-8 mx-auto bg-yellow hover:bg-transparent hover: hover:border-white border-2 border-yellow">
										<a
											className="uppercase text-white text-sm tracking-[0.15rem]"
											href={props?.columnTwo?.buttonLink?.url}
											target={props?.columnTwo?.buttonLink?.target}
										>
											{props?.columnTwo?.buttonLink?.title}
										</a>
									</button>
								</div>
							</div>
						</div>
						<div className={displayNumberCards}>
							<style jsx>{`
								.singleContentSquare {
									background: linear-gradient(
											0deg,
											rgba(13, 23, 42, 0.45),
											rgba(13, 23, 42, 0.45)
										),
										url("${props?.columnThree?.backgroundImage?.sourceUrl}");
									background-position: 50%;
									background-repeat: no-repeat;
									background-size: cover;
								}
							`}</style>
							<div className="content flex flex-col justify-between h-full lg:h-[500px]">
								<div className="p-20 pb-0">
									<h2 className="text-white text-center uppercase tracking-[0.25rem]">
										{props?.columnThree?.title}
									</h2>
									<p className="text-white text-center text-tiny mt-12 font-light leading-[1.5rem]">
										{props?.columnThree?.paragraph}
									</p>
								</div>
								<div className="relative flex flex-col py-10 px-20">
									<button className="w-[fit-content] py-2 px-8 mx-auto bg-yellow hover:bg-transparent hover: hover:border-white border-2 border-yellow">
										<a
											className="uppercase text-white text-sm tracking-[0.15rem]"
											href={props?.columnThree?.buttonLink?.url}
											target={props?.columnThree?.buttonLink?.target}
										>
											{props?.columnThree?.buttonLink?.title}
										</a>
									</button>
								</div>
							</div>
						</div>
						<div className={displayNumberCards}>
							<style jsx>{`
								.singleContentSquare {
									display: ${displayFourthCard};
									background: linear-gradient(
											0deg,
											rgba(13, 23, 42, 0.45),
											rgba(13, 23, 42, 0.45)
										),
										url("${props?.columnFour?.backgroundImage?.sourceUrl}");
									background-position: 50%;
									background-repeat: no-repeat;
									background-size: cover;
								}
							`}</style>
							<div className="content flex flex-col justify-between h-full lg:h-[500px]">
								<div className="p-20 pb-0">
									<h2 className="text-white text-center uppercase tracking-[0.25rem]">
										{props?.columnFour?.title}
									</h2>
									<p className="text-white text-center text-tiny mt-12 font-light leading-[1.5rem]">
										{props?.columnFour?.paragraph}
									</p>
								</div>
								<div className="relative flex flex-col py-10 px-20">
									<button className="w-[fit-content] py-2 px-8 mx-auto bg-yellow hover:bg-transparent hover: hover:border-white border-2 border-yellow">
										<a
											className="uppercase text-white text-sm tracking-[0.15rem]"
											href={props?.columnFour?.buttonLink?.url}
											target={props?.columnFour?.buttonLink?.target}
										>
											{props?.columnFour?.buttonLink?.title}
										</a>
									</button>
								</div>
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

				{/* Background Aesthetics (Grey Squares) */}
				<div className={displayBackgroundAesthetics}>
					<div className="absolute left-[-100px] top-[-450px] opacity-[5%]">
						<img
							className="mx-auto w-[300%] h-[650px] object-contain"
							src="/svg/backgroundIcons/IconThree.svg"
							alt="Background Squares"
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ContentSquares;
