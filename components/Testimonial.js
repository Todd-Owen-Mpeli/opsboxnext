import styles from "../styles/components/Testimonial.module.scss";
import TestimonialCard from "./TestimonialCard";

const Testimonial = (props) => {
	console.log(props?.testimonialContent);

	/* Allows the user to display the
     Three Background Squares Aesthetics */
	let displayThreeSquaresOption;
	if (props?.displayThreeSquaresOption === "Yes") {
		displayThreeSquaresOption = "block py-3";
	} else if (props?.displayThreeSquaresOption === "No") {
		displayThreeSquaresOption = "hidden py-3";
	}

	return (
		<section className={styles.testimonialSlider}>
			<div className="container mx-auto">
				<div className="flex flex-col">
					<h5 className="text-center text-base text-black font-[500] uppercase">
						Testimonial
					</h5>
					<h2 className="text-center text-5xl text-blue font-[400] tracking-tighter">
						{props?.title}
					</h2>
				</div>
				<div className={styles.bottomSection}>
					{/* Menu Array from Wordpress */}
					{props?.testimonialContent.map((keys) => (
						<TestimonialCard
							Key={keys?.id}
							personName={keys?.personName}
							paragraph={keys?.paragraph}
						/>
					))}
				</div>
			</div>

			{/* <!-- Background Aesthetics Icons --> */}
			<div className={displayThreeSquaresOption}>
				<img
					className="mx-auto w-[100%] h-[80px] object-contain"
					src="/svg/threeContentSquares/threeBackgroundSquaresIcons.svg"
					alt="Background Squares"
				/>
			</div>
		</section>
	);
};

export default Testimonial;
