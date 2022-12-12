/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "../styles/components/CaseStudies.module.scss";

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
			<div
				className={styles.caseStudiesCards}
				style={{
					background: `linear-gradient(
								0deg,
								rgba(4, 44, 86, 0.80),
								rgba(4, 44, 86, 0.80)
							), url(${props?.featuredImage})`,
					backgroundPosition: "100%",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}
			>
				<div className={styles.Image}>
					<img
						className="w-full h-full object-cover"
						src={props?.featuredImage}
						alt={`${props?.title} Image`}
					/>
				</div>

				{/* Displays on hover */}
				<div className={styles.hiddenTextContent}>
					<article className="flex flex-col">
						<h5 className="uppercase text-white">ARTICLE</h5>

						{/* <!--  To get The Latest Case study --> */}
						<Link href={`${props?.link}`}>
							<h2 className="uppercase mt-3 font-semibold text-white text-medium md:text-lg">
								{props?.title}
							</h2>
						</Link>
						<div
							className="my-6 text-left text-white text-tiny leading-[1.5rem]"
							dangerouslySetInnerHTML={createFullParagraphMarkup()}
						></div>
					</article>
					<div className="pt-1">
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

				<div className={styles.textSection}>
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
