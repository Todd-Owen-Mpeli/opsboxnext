import Link from "next/link";

const CaseStudiesCards = (props) => {
	function createTrimmedParagraphMarkup() {
		return {
			__html: `${props?.content.substring(0, 200)}...`,
		};
	}

	function createFullParagraphMarkup() {
		return {
			__html: `${props?.content.substring(0, 1000)}...`,
		};
	}

	return (
		<>
			<div className="cardItem flex flex-col h-full">
				<style jsx>{`
					.cardItem {
						background-image: url("${props?.featuredImage}");
						background-position: 100%;
						background-repeat: no-repeat;
						background-size: cover;
					}
				`}</style>
				<div className="Image h-[400px]">
					<img
						className="w-full h-full object-cover"
						src={props?.featuredImage}
						alt="Image One"
					/>
				</div>

				{/* Displays on hover */}
				<div className="hiddenTextContent flex-col p-16 hidden">
					<div className="content">
						<article className="flex flex-col">
							<h5 className="uppercase text-white">ARTICLE</h5>

							{/* <!--  To get The Latest Case study --> */}
							<Link href={`${props?.link}`}>
								<h2 className="uppercase font-semibold text-white">
									{props?.title}
								</h2>
							</Link>
							<div
								className="my-6 text-left text-white text-tiny leading-[1.5rem]"
								dangerouslySetInnerHTML={createFullParagraphMarkup()}
							></div>
						</article>
					</div>
					<div className="pt-1 justify-end">
						<div className="w-full flex">
							<Link
								href={`${props?.link}`}
								className="uppercase font-semibold text-white hover:text-orange hover:ease-in-out hover:duration-200"
							>
								Read More
							</Link>
							<Link href={`${props?.link}`} className="my-auto ml-2">
								<img
									src="/svg/threeContentSquares/readMoreWhiteArrow.svg"
									alt="Arrow"
								/>
							</Link>
						</div>
					</div>
				</div>

				<div className="h-[100%] flex flex-col justify-between p-8 md:p-16 bg-blue">
					<div className="text-left">
						<h5 className="uppercase text-white text-sm tracking-[0.25rem]">
							CASE STUDY
						</h5>
						<Link href={`${props?.link}`}>
							<h2 className="uppercase mt-3 font-semibold text-white text-lg md:text-xl">
								{props?.title}
							</h2>
						</Link>
						<div
							className="my-6 text-left text-white text-tiny leading-[1.5rem]"
							dangerouslySetInnerHTML={createTrimmedParagraphMarkup()}
						></div>
					</div>
					<div className="pt-10">
						<div className="w-full flex">
							<Link
								href={`${props?.link}`}
								className="uppercase font-semibold text-white hover:text-orange hover:ease-in-out hover:duration-200"
							>
								Read More
							</Link>
							<Link href={`${props?.link}`} className="my-auto ml-2">
								<img
									src="/svg/threeContentSquares/readMoreWhiteArrow.svg"
									alt="Arrow"
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CaseStudiesCards;
