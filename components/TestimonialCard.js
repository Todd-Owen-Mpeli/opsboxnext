import DOMPurify from "isomorphic-dompurify";
import styles from "../styles/components/Testimonial.module.scss";

const TestimonialCard = (props) => {
	function createParagraphMarkup() {
		return {
			__html: DOMPurify.sanitize(`${props?.paragraph}`),
		};
	}

	return (
		<>
			<div className={styles.testimonialSliderContent}>
				<div
					className="text-base font-[400] leading-xl text-center"
					dangerouslySetInnerHTML={createParagraphMarkup()}
				/>
				<h2 className="mt-5 text-center text-lg md:text-xl font-light">
					{props?.personName}
				</h2>
			</div>
		</>
	);
};

export default TestimonialCard;
