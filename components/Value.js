/* eslint-disable @next/next/no-img-element */
import ValueCard from "./ValueCard";
import DOMPurify from "isomorphic-dompurify";
import styles from "../styles/components/Value.module.scss";

const Value = (props) => {
	function createParagraphMarkup() {
		return {
			__html: DOMPurify.sanitize(`${props?.paragraph}`),
		};
	}

	/* Calculates How many iterations and sets 
	current value as the MapFunction Key value */
	let iterationCount = 0;

	/* Allows the user to display
	 the Background Icons */
	let displayBlueGreySquares;
	if (props?.displayBlueGreySquares === "Yes") {
		displayBlueGreySquares = "block mx-auto pb-5 z-50";
	} else if (props?.displayBlueGreySquares === "No") {
		displayBlueGreySquares = "hidden mx-auto pb-5 z-50";
	}

	return (
		<section className={styles.values}>
			{/* Background Aesthetics (Grey Squares) */}
			<div className="relative z-0">
				<div className="absolute left-[-100px] top-[-215px] opacity-[5%]">
					<img
						className="mx-auto w-[300%] h-[650px] object-contain"
						src="/svg/backgroundIcons/IconThree.svg"
						alt="Background Squares"
					/>
				</div>
			</div>

			{/* Background Aesthetics Icons */}
			<div className={displayBlueGreySquares}>
				<img
					className="mx-auto w-[100%] h-[80px] object-contain"
					src="/svg/threeContentSquares/threeBackgroundSquaresIcons.svg"
					alt="Background Squares"
				/>
			</div>

			<div className="container mx-auto border-r-4 border-yellow border-[0.15rem] border-solid z-50">
				<div className="flex flex-col justify-center items-center">
					<div className="flex flex-col p-4 text-center z-50">
						<h2 className="my-6 mt-3 text-2xl md:text-[2.5rem] text-blue">
							{props?.title}
						</h2>
						<div
							className="w-full xl:w-[55rem] text-tiny text-black"
							dangerouslySetInnerHTML={createParagraphMarkup()}
						/>
					</div>
					<div className="flex flex-col gap-8 md:grid md:grid-cols-2 xl:gap-0 xl:flex xl:flex-row justify-center items-center mt-6 p-6 space-x-1 z-50">
						{/* Values Array from Wordpress */}
						{props.content.map((keys) => (
							<ValueCard
								Key={keys?.id}
								title={keys?.title}
								paragraph={keys?.paragraph}
								iterationCount={iterationCount++}
							/>
						))}
					</div>
				</div>
			</div>

			{/* Background Aesthetics (Grey Squares) */}
			<div className="relative z-0">
				<div className="absolute right-[-125px] top-[-300px] opacity-50">
					<img
						className="mx-auto w-[300%] h-[650px] object-contain"
						src="/svg/backgroundIcons/IconTwo.svg"
						alt="Background Squares"
					/>
				</div>
			</div>
		</section>
	);
};

export default Value;
