/* eslint-disable @next/next/no-img-element */
import DOMPurify from "isomorphic-dompurify";
import TextPointImageCard from "./TextPointImageCard";
import styles from "../styles/components/TextPointImage.module.scss";

const TextPointImage = (props) => {
	/* Used to change the Bullet
	  Point Icon every iteration */
	let iterationCount = 0;

	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling = "hidden text-center lg:text-left";
		} else {
			contentStyling = "block text-center lg:text-left";
		}
		return contentStyling;
	}

	function createParagraphMarkup() {
		return {
			__html: DOMPurify.sanitize(`${props?.paragraph}`),
		};
	}

	return (
		<section className={styles.textPointImage}>
			<div className="container mx-auto">
				<div className="flex flex-col">
					<div className="flex flex-col lg:flex-row gap-8 justify-between items-center py-12 px-2">
						<div className="my-auto px-8 flex flex-col w-full lg:w-1/2 ">
							<div className="w-full lg:w-[40rem] text-left">
								<h5 className="uppercase text-center lg:text-left text-grey text-tiny">
									OPS-BOX WAY
								</h5>
								<h2 className="my-6 mt-3 w-full lg:w-[30rem] text-center lg:text-left text-2xl md:text-4xl text-blue">
									{props?.title}
								</h2>
								<div
									className={isParagraphContent(props?.paragraph)}
									dangerouslySetInnerHTML={createParagraphMarkup()}
								/>
							</div>
							<div className="flex space-x-12">
								<div className="flex flex-col p-5">
									{/* Content Array from Wordpress */}
									{props?.bulletPoint.map((keys) => (
										<TextPointImageCard
											Key={keys?.id}
											title={keys?.title}
											paragraph={keys?.paragraph}
											iterationCount={iterationCount++}
										/>
									))}
								</div>
							</div>
						</div>
						<div className="my-auto relative w-full lg:w-1/2">
							<div className={styles.colorBoxOne}></div>
							<img
								className="object-cover w-full h-[500px]"
								src={props?.image}
								width="750px"
								height="500px"
								alt="Image One"
							/>
						</div>
					</div>
					{/* Background Aesthetics Icons */}
					<div className="mx-auto">
						<img
							className="mx-auto w-[100%] h-[80px] object-contain"
							src="/svg/threeContentSquares/threeBackgroundSquaresIcons.svg"
							alt="Background Squares"
						/>
					</div>
				</div>
				{/* <!-- Background Aesthetics (Grey Squares) --> */}
				<div className="relative z-0">
					<div className="absolute left-[-285px] top-[-335px] opacity-[5%]">
						<img
							className="mx-auto w-[300%] h-[650px] object-contain"
							src="/svg/backgroundIcons/IconThree.svg"
							alt="Background Squares"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TextPointImage;
