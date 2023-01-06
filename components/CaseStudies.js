import DOMPurify from "isomorphic-dompurify";
import CaseStudiesCards from "./CaseStudiesCards";
import styles from "../styles/components/CaseStudies.module.scss";

const CaseStudies = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling =
				"hidden text-center text-tiny text-black py-8 px-5 w-full lg:w-[50rem]";
		} else {
			contentStyling =
				"block text-center text-tiny text-black py-8 px-5 w-full lg:w-[50rem]";
		}
		return contentStyling;
	}

	function createParagraphMarkup() {
		return {
			__html: DOMPurify.sanitize(`${props?.paragraph}`),
		};
	}
	return (
		<section className={styles.caseStudies}>
			<div className="content flex flex-col justify-center items-center">
				<div className="flex flex-col">
					<h5 className="uppercase text-center text-grey text-xs">
						OPS-BOX WAY
					</h5>
					<h2 className="text-center text-3xl text-blue px-5">
						{props?.title}
					</h2>
					<div
						className={isParagraphContent(props?.paragraph)}
						dangerouslySetInnerHTML={createParagraphMarkup()}
					/>
				</div>
				<div className="pt-4 flex flex-col lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-3 gap-1 justify-center items-center">
					{/* Content Array from Wordpress */}
					{props?.content.map((keys) => (
						<CaseStudiesCards
							Key={keys?.id}
							title={keys?.node?.title}
							content={keys?.node?.content}
							link={keys?.node?.link}
							featuredImage={keys?.node?.featuredImage?.node?.sourceUrl}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default CaseStudies;
