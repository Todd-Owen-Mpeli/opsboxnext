import styles from "../styles/components/Testimonial.module.scss";

const TestimonialCard = (props) => {
	return (
		<>
			<div className={styles.testimonialSliderContent}>
				<p className="text-tiny font=[400] leading-xl text-center">
					{props?.paragraph}
				</p>
				<h2 className="mt-5 text-center text-2xl font-light">
					{props?.personName}
				</h2>
			</div>
		</>
	);
};

export default TestimonialCard;
