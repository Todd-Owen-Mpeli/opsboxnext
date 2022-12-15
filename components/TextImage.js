/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "../styles/components/TextImage.module.scss";

const TextImage = (props) => {
	/* Allows the user to display
	 the Button Icons */
	let displayButton;
	if (props?.displayButton === "Yes") {
		displayButton = "block mt-8 px-4 w-[fit-content]";
	} else if (props?.displayButton === "No") {
		displayButton = "hidden mt-8 px-4 w-[fit-content]";
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
		<section className={styles.textImage}>
			<div className="container mx-auto">
				<div className="item flex flex-col-reverse gap-10 justify-between lg:flex-row py-12 lg:px-2 z-50">
					<div className="relative w-full lg:w-1/2 z-50">
						<div className={styles.colorBoxTwo}></div>
						<img
							className="object-cover w-full h-[500px]"
							src={props?.image}
							width="750px"
							height="500px"
							alt="Image Two"
						/>
					</div>
					<div className="flex flex-col w-full lg:w-1/2 z-50">
						<div className="p-4 text-left">
							<h5 className="uppercase text-grey text-xs">{props?.subtitle}</h5>
							<h2 className="my-6 mt-3 text-2xl md:text-[2.5rem] text-blue">
								{props?.title}
							</h2>
							<p className="text-tiny py-1">{props?.paragraphOne}</p>
							<p className="text-tiny py-1">{props?.paragraphTwo}</p>
						</div>
						<div className={displayButton}>
							<div className="py-2 px-8 w-full text-white bg-yellow hover:text-orange border-2 border-yellow hover:border-orange hover:bg-white hover:border-solid">
								<Link
									href={`${props?.buttonLink?.url}`}
									className="uppercase font-semibold hover:text-orange"
									target={`${props?.buttonLink?.target}`}
								>
									{props?.buttonLink?.title}
								</Link>
							</div>
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
		</section>
	);
};

export default TextImage;
