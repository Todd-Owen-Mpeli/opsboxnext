/* eslint-disable @next/next/no-img-element */
import styles from "../styles/components/ContactForm.module.scss";

const ContactForm = (props) => {
	console.log(props);
	return (
		<section className={styles.contactForm}>
			<div className="container mx-auto">
				{/* <!-- Background Aesthetics (Grey Squares) --> */}
				<div className="relative z-0">
					<div className="absolute left-[-280px] top-[-400px] opacity-[5%]">
						<img
							className="mx-auto w-[300%] h-[650px] object-contain"
							src="/svg/backgroundIcons/IconThree.svg"
							alt="Background Squares"
						/>
					</div>
				</div>

				<div className="content flex flex-col py-8 px-8 lg:px-28">
					{props?.title}
				</div>

				{/* <!-- Background Aesthetics (Grey Squares) --> */}
				<div className="relative z-0">
					<div className="absolute left-[145px] top-[-475px] opacity-50">
						<img
							className="mx-auto w-[300%] h-[650px] object-contain"
							src="/svg/backgroundIcons/IconFour.svg"
							alt="Background Squares"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;
