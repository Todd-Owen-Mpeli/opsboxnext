/* eslint-disable @next/next/no-img-element */
import TestimonialCard from "./TestimonialCard";
import styles from "../styles/components/Testimonial.module.scss";

const Testimonial = (props) => {
	/* Allows the user to display the
     Three Background Squares Aesthetics */
	let displayThreeSquaresOption;
	if (props?.displayThreeSquaresOption === "Yes") {
		displayThreeSquaresOption = "block py-3";
	} else if (props?.displayThreeSquaresOption === "No") {
		displayThreeSquaresOption = "hidden py-3";
	}

	return (
		<section className="py-6 container mx-auto">
			<div className={styles.testimonialSlider}>
				<div className="flex flex-col">
					<h5 className="text-center text-base text-black font-[500] uppercase">
						Testimonial
					</h5>
					<h2 className="my-4 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue font-[400] tracking-[0.05rem]">
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
