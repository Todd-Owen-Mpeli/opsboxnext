/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
import styles from "../styles/components/CaseStudies.module.scss";

const CaseStudiesCardsTwo = (props) => {
	function createTrimmedParagraphMarkup() {
		const sanitizedContent = DOMPurify.sanitize(props?.content);
		return {
			__html: `${sanitizedContent.substring(0, 200)}...`,
		};
	}

	return (
		<div className={styles.caseStudiesCardsTwo}>
			<div className="w-full md:w-1/2 flex flex-col p-6 md:py-4 md:px-8 ">
				<Link href={`${props?.link}`}>
					<h3 className="text-2xl md:text-4xl text-blue font-[400] my-4 mb-8">
						{props?.title}
					</h3>
				</Link>
				<div
					className="mb-2 py-4 text-base text-left text-black"
					dangerouslySetInnerHTML={createTrimmedParagraphMarkup()}
				/>
				<Link
					href={`${props?.link}`}
					className="flex justify-end uppercase text-blue font-semibold hover:text-orange hover:ease-in-out hover:duration-[0.5s]"
				>
					Read More
					<span className="my-auto ml-2">
						<img
							className="w-[100%] h-[15px] object-contain"
							src="/svg/Blue Arrow.svg"
							alt="Blue Arrow"
						/>
					</span>
				</Link>
			</div>
			<div className="w-full md:w-1/2 p-4 md:p-10 ">
				<Link href={`${props?.link}`}>
					<img
						className="Image w-full h-[250px] md:h-[400px] object-cover"
						src={props?.featuredImage}
						alt="News Article Image"
					/>
				</Link>
			</div>
		</div>
	);
};

export default CaseStudiesCardsTwo;
