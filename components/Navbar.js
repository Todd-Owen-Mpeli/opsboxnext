import Link from "next/link";
import styles from "../styles/components/Navbar.module.scss";
import NavbarMenuLinks from "./NavbarMenuLinks";

const Navbar = (props) => {
	console.log(props?.menuLinks[1]);

	const phoneNumber = `tel:${props?.navbarContent?.phoneNumber}`;
	const phoneNumberOptionTwo = `tel:${props?.navbarContent?.phoneNumberOptionTwo}`;
	const emailOptionTwo = `mailto:${props?.footerContent?.emailOptionTwo}`;

	return (
		<section className={styles.navbar}>
			<div className="container mx-auto">
				<div className="content">
					<div className="flex justify-between items-center pt-4">
						<div className="z-50">
							<a href="/">
								<img
									className="w-[100%] h-[60px] object-contain"
									src={props?.navbarContent?.companyLogo?.sourceUrl}
								/>
							</a>
						</div>
						<div className="rightSide flex space-x-16">
							<div className="contactNumber flex space-x-2">
								<p className="text-yellow text-base font-bold">T:</p>
								<a
									href={phoneNumber}
									className="text-blue text-base font-bold hover:text-yellow hover:ease-in-out hover:duration-200"
									target="blank"
								>
									{props?.navbarContent?.phoneNumber}
								</a>
							</div>
							<div className="socialLinks flex justify-end space-x-6">
								<a href={props?.navbarContent?.twitterLink} target="blank">
									<img
										className="socialIcons"
										src="/svg/Twitter Icon Blue.svg"
									/>
								</a>
								<a href={props?.navbarContent?.linkedinLink} target="blank">
									<img
										className="socialIcons"
										src="/svg/LinkedIn Icon Blue.svg"
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="content">
				<div className="bottomSection flex flex-col">
					<div className={styles.bottomNavBar}>
						<div className="w-[64%] backgroundSquare z-0">
							{/* <!-- Background Aesthetics (White Square top-left) --> */}
							<div
								id="whiteNavigationBackgroundSquare"
								className="whiteNavigationBackgroundSquare relative"
							>
								<div className="pageBackgroundIcons absolute left-[225px] top-[-125px]">
									<img
										className="mx-auto w-[100%] h-[300px] object-contain"
										src="/svg/headerSection/whiteSquare.svg"
										alt="Background Squares"
									/>
								</div>
							</div>
						</div>
						<div className={styles.BurgerButton}>
							<div className="box flex flex-col justify-between items-center py-6 z-50">
								<button className="btn not-active">
									<span className="bg-white"></span>
									<span className="bg-white"></span>
									<span className="bg-white"></span>
								</button>
							</div>
						</div>
					</div>
					<div className="dropdownNavbar block absolute right-0 justify-end item-center bg-blue bg-opacity-75 z-50">
						<div className="closeMenuButton relative flex justify-center h-full">
							<button className="squareXButton p-4 w-[75px] h-[50px] absolute  top-0 right-0 bg-yellow hover:bg-orange">
								<a className="uppercase text-white w-[75px] h-[50px]" href="#">
									<img
										className="mx-auto w-[100%] h-[100%] object-contain"
										src="/svg/icons/CloseDropDownMenuButton.svg"
										alt="Close PopUp Icon"
									/>
								</a>
							</button>
						</div>
						<div className="content pt-8 pb-0 px-6 pr-16 h-[fit-content] flex flex-col z-50">
							<div className="flex flex-col text-center py-8">
								<div className="menuLink">
									<button className="flex justify-center items-center space-x-4">
										<a
											href="<?php echo get_permalink(327); ?>"
											className="text-base text-center text-white hover:text-yellow hover:ease-in-out hover:duration-200"
										>
											Services
										</a>
										<span>
											<img
												className="w-full h-[17px] m-auto"
												src="/svg/Navigation Menu Dropdown Arrow.svg"
											/>
										</span>
									</button>
									<div className="flex flex-col justify-center items-center gap-8">
										{/* Menu Array from Wordpress */}
										{props.menuLinks[1].map((keys) => (
											<NavbarMenuLinks
												Key={keys.id}
												linkUrl={keys?.node?.url}
												linkName={keys?.node?.label}
											/>
										))}
									</div>
								</div>
								<div className="menuLink">
									<button className="flex justify-center items-center space-x-4">
										<a
											href="<?php echo get_permalink(327); ?>"
											className="text-base text-center text-white hover:text-yellow hover:ease-in-out hover:duration-200"
										>
											About
										</a>
										<span>
											<img
												className="w-full h-[17px] m-auto"
												src="/svg/Navigation Menu Dropdown Arrow.svg"
											/>
										</span>
									</button>
									<div className="flex flex-col justify-center items-center gap-8">
										{/* Menu Array from Wordpress */}
										{props.menuLinks.map((keys) => (
											<NavbarMenuLinks
												Key={keys.id}
												linkUrl={keys?.node?.url}
												linkName={keys?.node?.label}
											/>
										))}
									</div>
								</div>
							</div>
							<div className="bottomSection flex flex-col mx-auto mt-0 px-3 py-8">
								<div className="flex mt-1 gap-1">
									<a
										href={phoneNumber}
										className="text-sm text-white hover:text-yellow hover:ease-in-out hover:duration-200"
									>
										{props?.navbarContent?.phoneNumber}
									</a>
									<p className="text-sm text-white hover:text-yellow hover:ease-in-out hover:duration-200">
										or
									</p>
									<a
										href={phoneNumberOptionTwo}
										className="text-sm text-white hover:text-yellow hover:ease-in-out hover:duration-200"
									>
										{props?.navbarContent?.phoneNumberOptionTwo},
									</a>
									<p className="text-sm text-white hover:text-yellow hover:ease-in-out hover:duration-200">
										or email
									</p>
									<a
										href={emailOptionTwo}
										className="text-sm text-white hover:text-yellow hover:ease-in-out hover:duration-200"
									>
										{props?.navbarContent?.emailOptionTwo}
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Navbar;
