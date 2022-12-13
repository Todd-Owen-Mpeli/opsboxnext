import Link from "next/link";
import styles from "../styles/components/BrochureRequestBanner.module.scss";

const BrochureRequestBanner = (props) => {
	return (
		<section className="py-10 bg-grey">
			<div className="container mx-auto">
				<div className="flex justify-center items-center gap-x-10">
					<div className="flex items-center">
						<h2 className="px-6 uppercase text-black">{props?.title}</h2>
					</div>
					<div className={styles.contactForm}>
						{/* Contact Form shortcode */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default BrochureRequestBanner;
