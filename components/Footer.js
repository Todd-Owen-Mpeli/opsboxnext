import Link from "next/link";
import styles from "../styles/components/Footer.module.scss";
import FooterMenuLinks from "./FooterMenuLinks";

const Footer = (props) => {
	/* Calculates How many iterations and sets 
	current value as the MapFunction Key value */
	let iterationCount = 0;

	return (
		<section className={styles.footer}>
			<div className="container mx-auto">
				<div className="flex flex-col lg:grid lg:grid-cols-2 xl:flex xl:flex-row justify-between gap-8 xl:gap-x-4">
					<div className="w-full xl:w-1/4 flex flex-col text-left justify-between">
						<p className="w-[15rem] text-tiny">
							{props?.footerContent?.contactAddress}
						</p>
						<Link
							href={`${props?.footerContent?.contactPostcode}`}
							className="text-tiny hover:text-yellow hover:ease-in-out hover:duration-200"
							target="blank"
						>
							{props?.footerContent?.contactPostcodeText}
						</Link>
						<Link
							href={`tel:${props?.footerContent?.phoneNumber}`}
							className="mt-4 text-tiny hover:text-yellow hover:ease-in-out hover:duration-200"
						>
							{props?.footerContent?.phoneNumber}
						</Link>
						<Link
							href={`mailto:${props?.footerContent?.email}`}
							className="text-tiny hover:text-yellow hover:ease-in-out hover:duration-200"
						>
							{props?.footerContent?.email}
						</Link>
					</div>
					<div className="w-full xl:w-1/4 flex flex-col gap-1 justify-start">
						{/* Menu Array from Wordpress */}
						{props.footerMenu.map((keys) => (
							<FooterMenuLinks
								Key={iterationCount}
								linkUrl={props?.footerMenu[iterationCount]?.node?.url}
								linkName={props?.footerMenu[iterationCount++]?.node?.label}
							/>
						))}
					</div>
					<div className="w-full xl:w-1/4 flex justify-center items-center md:justify-start md:items-start">
						<div className="flex justify-end space-x-8">
							<Link
								href={`${props?.footerContent?.twitterLink}`}
								target="blank"
							>
								<img
									src="/svg/Twitter Icon White.svg"
									width="20px"
									height="20px"
									alt="Twitter Icon"
								/>
							</Link>
							<Link
								href={`${props?.footerContent?.linkedinLink}`}
								target="blank"
							>
								<img
									src="/svg/LinkedIn Icon White.svg"
									width="20px"
									height="20px"
									alt="LinkedIn Icon"
								/>
							</Link>
						</div>
					</div>
					<div className="w-full xl:w-3/4 flex text-sm flex-col text-right justify-center">
						<p className="text-white">
							OPS-BOX Group Ltd. Registered in England and Wales under number
							9307163
							<br />
							<br />
							OPS-BOX Group Limited is an introducer appointed representative of
							AFS Compliance Limited, which is authorised and regulated by the
							Financial Conduct Authority under firm number 625035.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
