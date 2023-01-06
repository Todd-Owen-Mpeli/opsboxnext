/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "../styles/components/TextImageJumbo.module.scss";

const TextImageJumbo = (props) => {
	/* Check if Button Link content is null
	 And Displays content if it isn't null */
	function isButtonLink(isButtonLink) {
		let contentStyling;
		if (isButtonLink === null) {
			contentStyling = "hidden mt-8 mx-auto w-[fit-content]";
		} else {
			contentStyling = "block mt-8 mx-auto w-[fit-content]";
		}

		return contentStyling;
	}
	/* Check if Image content is null
	 And Displays content if it null */
	function isImageContent(isImageContent) {
		let contentStyling;
		if (isImageContent === null) {
			contentStyling = "hidden object-cover h-[500px]";
		} else {
			contentStyling = "block object-cover h-[500px]";
		}

		return contentStyling;
	}
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling = "hidden text-tiny py-1";
		} else {
			contentStyling = "block text-tiny py-1";
		}

		return contentStyling;
	}

	function createParagraphOneMarkup(contentSectionNumber) {
		return {
			__html: DOMPurify.sanitize(`${contentSectionNumber?.paragraphOne}`),
		};
	}

	function createParagraphTwoMarkup(contentSectionNumber) {
		return {
			__html: DOMPurify.sanitize(`${contentSectionNumber?.paragraphTwo}`),
		};
	}
	return (
		<section className={styles.TextImageJumbo}>
			<div className="py-2 pt-28">
				<div className="container mx-auto z-50">
					{/* Background Aesthetics (Grey Squares) */}
					<div className="relative z-0">
						<div className="absolute left-[-375px] top-[[0.5s]px] opacity-[5%]">
							<img
								className="mx-auto w-[300%] h-[650px] object-contain"
								src="/svg/backgroundIcons/IconThree.svg"
								alt="Background Squares"
							/>
						</div>
					</div>

					{/* Background Aesthetics (Grey Squares) */}
					<div className="relative z-0">
						<div className="absolute right-[-335px] top-[550px] opacity-50">
							<img
								className="mx-auto w-[300%] h-[650px] object-contain"
								src="/svg/backgroundIcons/IconTwo.svg"
								alt="Background Squares"
							/>
						</div>
					</div>

					{/* Content Section */}
					<div className="content z-50 flex flex-col gap-4 justify-between px-4 sm:px-8 lg:px-0">
						{/* First Row of Text & Image Content */}
						<div className="item flex flex-col gap-10 justify-between lg:flex-row py-12 lg:px-2 z-50">
							<div className="my-auto flex flex-col w-full lg:w-1/2 z-50">
								<div className="p-0 lg:px-8 lg:pl-16 text-left">
									<h5 className="uppercase text-grey text-xs">
										{props?.contentSectionOne?.subtitle}
									</h5>
									<h2 className="my-6 mt-3 text-2xl md:text-[2.5rem] text-blue">
										{props?.contentSectionOne?.title}
									</h2>
									<div
										className={isParagraphContent(
											props?.contentSectionOne?.paragraphTwo
										)}
										dangerouslySetInnerHTML={createParagraphOneMarkup(
											props?.contentSectionOne
										)}
									/>
									<div
										className={isParagraphContent(
											props?.contentSectionOne?.paragraphTwo
										)}
										dangerouslySetInnerHTML={createParagraphTwoMarkup(
											props?.contentSectionOne
										)}
									/>
								</div>
								<div
									className={isButtonLink(
										props?.contentSectionOne?.buttonLink?.url
									)}
								>
									<div className="py-2 px-8 w-full text-white bg-yellow hover:text-orange border-2 border-yellow hover:border-orange hover:bg-white hover:border-solid">
										<Link
											href={`${props?.contentSectionOne?.buttonLink?.url}`}
											className="uppercase font-semibold hover:text-orange"
											target={`${props?.contentSectionOne?.buttonLink?.target}`}
										>
											{props?.contentSectionOne?.buttonLink?.title}
										</Link>
									</div>
								</div>
							</div>
							<div className="relative  w-full lg:w-1/2 z-50">
								<div className={styles.colorBoxOne}></div>
								<img
									className={isImageContent(
										props?.contentSectionOne?.image?.sourceUrl
									)}
									src={props?.contentSectionOne?.image?.sourceUrl}
									width="750px"
									height="500px"
									alt="Image One"
								/>
							</div>
						</div>

						{/* Background Aesthetics Icons (Top Half) */}
						<div className="pageBackgroundStylingTop">
							<img
								className="mx-auto w-[300%] h-[80px] object-contain"
								src="/svg/threeContentSquares/threeBackgroundSquaresIcons.svg"
								alt="Background Squares"
							/>
						</div>

						{/* Second Row of Text & Image Content */}
						<div className="item flex flex-col-reverse gap-10 justify-between lg:flex-row py-12 lg:px-2 z-50">
							<div className="relative w-full lg:w-1/2 z-50">
								<div className={styles.colorBoxTwo}></div>
								<img
									className={isImageContent(
										props?.contentSectionTwo?.image?.sourceUrl
									)}
									src={props?.contentSectionTwo?.image?.sourceUrl}
									width="750px"
									height="500px"
									alt="Image Two"
								/>
							</div>
							<div className="my-auto flex flex-col w-full lg:w-1/2 z-50">
								<div className="p-0 lg:px-8 lg:pl-16 text-left">
									<h5 className="uppercase text-grey text-xs">
										{props?.contentSectionTwo?.subtitle}
									</h5>
									<h2 className="my-6 mt-3 text-2xl md:text-[2.5rem] text-blue">
										{props?.contentSectionTwo?.title}
									</h2>
									<div
										className={isParagraphContent(
											props?.contentSectionTwo?.paragraphOne
										)}
										dangerouslySetInnerHTML={createParagraphOneMarkup(
											props?.contentSectionTwo
										)}
									/>
									<div
										className={isParagraphContent(
											props?.contentSectionTwo?.paragraphTwo
										)}
										dangerouslySetInnerHTML={createParagraphTwoMarkup(
											props?.contentSectionTwo
										)}
									/>
								</div>
								<div
									className={isButtonLink(
										props?.contentSectionTwo?.buttonLink?.url
									)}
								>
									<div className="py-2 px-8 w-full text-white bg-yellow hover:text-orange border-2 border-yellow hover:border-orange hover:bg-white hover:border-solid">
										<Link
											href={`${props?.contentSectionTwo?.buttonLink?.url}`}
											className="uppercase font-semibold hover:text-orange"
											target={`${props?.contentSectionTwo?.buttonLink?.target}`}
										>
											{props?.contentSectionTwo?.buttonLink?.title}
										</Link>
									</div>
								</div>
							</div>
						</div>

						{/* Background Aesthetics Icons (Bottom Half) */}
						<div className="pageBackgroundStylingBottom">
							<img
								className="mx-auto w-[300%] h-[80px] object-contain"
								src="/svg/threeContentSquares/threeBackgroundSquaresIcons.svg"
								alt="Background Squares"
							/>
						</div>

						{/* Three Row of Text & Image Content */}
						<div className="item flex flex-col gap-10 justify-between lg:flex-row py-12 lg:px-2 z-50">
							<div className="my-auto flex flex-col w-full lg:w-1/2 z-50">
								<div className="p-0 lg:px-8 lg:pl-16 text-left">
									<h5 className="uppercase text-grey text-xs">
										{props?.contentSectionThree?.subtitle}
									</h5>
									<h2 className="my-6 mt-3 text-2xl md:text-[2.5rem] text-blue">
										{props?.contentSectionThree?.title}
									</h2>
									<div
										className={isParagraphContent(
											props?.contentSectionThree?.paragraphOne
										)}
										dangerouslySetInnerHTML={createParagraphOneMarkup(
											props?.contentSectionThree
										)}
									/>
									<div
										className={isParagraphContent(
											props?.contentSectionThree?.paragraphTwo
										)}
										dangerouslySetInnerHTML={createParagraphTwoMarkup(
											props?.contentSectionThree
										)}
									/>
								</div>
								<div
									className={isButtonLink(
										props?.contentSectionThree?.buttonLink?.url
									)}
								>
									<div className="py-2 px-8 w-full text-white bg-yellow hover:text-orange border-2 border-yellow hover:border-orange hover:bg-white hover:border-solid">
										<Link
											href={`${props?.contentSectionThree?.buttonLink?.url}`}
											className="uppercase font-semibold hover:text-orange"
											target={`${props?.contentSectionThree?.buttonLink?.target}`}
										>
											{props?.contentSectionThree?.buttonLink?.title}
										</Link>
									</div>
								</div>
							</div>
							<div className="relative w-full lg:w-1/2 z-50">
								<div className={styles.colorBoxThree}></div>
								<img
									className={isImageContent(
										props?.contentSectionThree?.image?.sourceUrl
									)}
									src={props?.contentSectionThree?.image?.sourceUrl}
									width="750px"
									height="500px"
									alt="Image Three"
								/>
							</div>
						</div>
					</div>

					{/* Background Aesthetics (Grey Squares) */}
					<div className="relative z-0">
						<div className="absolute left-[175px] top-[-550px] opacity-50">
							<img
								className="mx-auto w-[300%] h-[650px] object-contain"
								src="/svg/backgroundIcons/IconFour.svg"
								alt="Background Squares"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TextImageJumbo;
