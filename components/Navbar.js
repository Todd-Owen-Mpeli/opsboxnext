import Link from "next/link";
import {useState} from "react";
import NavbarMenuLinks from "./NavbarMenuLinks";
import NavbarMenuSublinks from "./NavbarMenuSublinks";
import styles from "../styles/components/Navbar.module.scss";

const Navbar = (props) => {
	// Phone Number and Email Links
	const phoneNumber = `tel:${props?.navbarContent?.phoneNumber}`;
	const phoneNumberOptionTwo = `tel:${props?.navbarContent?.phoneNumberOptionTwo}`;
	const emailOptionTwo = `mailto:${props?.footerContent?.emailOptionTwo}`;

	// Display Drop Down Navigation
	const [navbarOpen, setNavbarOpen] = useState(false);
	function displayDropdownNavbar() {
		setNavbarOpen(!navbarOpen);
	}

	// Display Services sublinks
	const [servicesSublinksOpen, setServicesSublinksOpen] = useState(false);
	function displayServicesSublinks() {
		setServicesSublinksOpen(!servicesSublinksOpen);
	}

	// Display About sublinks
	const [aboutSublinksOpen, setAboutSublinksOpen] = useState(false);
	function displayAboutSublinks() {
		setAboutSublinksOpen(!aboutSublinksOpen);
	}

	return (
		<section className={styles.navbar}>
			<div className="container mx-auto">
				<div className="content">
					<div className="flex justify-between items-center pt-4">
						<div className="z-50">
							<a href="">
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
							<div className={styles.box}>
								<button className={styles.btn} onClick={displayDropdownNavbar}>
									<span />
									<span />
									<span />
								</button>
							</div>
						</div>
					</div>
					{navbarOpen ? (
						<div className="dropdownNavbar absolute right-0 justify-end item-center w-full lg:w-[36%] bg-blue bg-opacity-75 z-50">
							<div className="closeMenuButton relative flex justify-center h-full">
								<button
									className="squareXButton p-4 w-[75px] h-[50px] absolute  top-0 right-0 bg-yellow hover:bg-orange"
									onClick={displayDropdownNavbar}
								>
									<a
										className="uppercase text-white w-[75px] h-[50px]"
										href="#"
									>
										<img
											className="mx-auto w-[100%] h-[100%] object-contain"
											src="/svg/icons/CloseDropDownMenuButton.svg"
											alt="Close PopUp Icon"
										/>
									</a>
								</button>
							</div>
							<div className="content pt-8 pb-0 px-16 h-[fit-content] flex flex-col z-50">
								<div className="flex flex-col text-center py-8">
									<div className="menuLink">
										<button
											className="flex justify-center items-center space-x-4 w-full mt-2 py-4 border-b border-white border-solid"
											onClick={displayServicesSublinks}
										>
											<a
												href="#"
												className="text-base text-center text-white hover:text-yellow hover:ease-in-out hover:duration-200"
											>
												Services
											</a>
											<span>
												<img
													className="w-full h-[17px] m-auto rotate-[270deg]"
													src="/svg/Navigation Menu Dropdown Arrow.svg"
												/>
											</span>
										</button>
										{servicesSublinksOpen ? (
											<div className="flex flex-col justify-center items-center w-full py-4 border-b border-orange border-solid">
												{/* Menu Array from Wordpress */}
												{props.menuLinks[1].map((keys) => (
													<NavbarMenuSublinks
														Key={keys.id}
														linkUrl={keys?.node?.url}
														linkName={keys?.node?.label}
													/>
												))}
											</div>
										) : null}
									</div>
									<div className="menuLink">
										<button
											className="flex justify-center items-center space-x-4 w-full py-6 border-b border-white border-solid"
											onClick={displayAboutSublinks}
										>
											<a
												href="#"
												className="text-base text-center text-white hover:text-yellow hover:ease-in-out hover:duration-200"
											>
												About
											</a>
											<span>
												<img
													className="w-full h-[17px] m-auto rotate-[270deg]"
													src="/svg/Navigation Menu Dropdown Arrow.svg"
												/>
											</span>
										</button>
										{aboutSublinksOpen ? (
											<div className="flex flex-col justify-center items-center w-full py-2 border-b border-orange border-solid">
												{/* Menu Array from Wordpress */}
												<NavbarMenuSublinks
													linkUrl={props?.menuLinks[0]?.node?.url}
													linkName={props?.menuLinks[0]?.node?.label}
												/>
											</div>
										) : null}
									</div>
									<div className="menuLink">
										{/* Menu Array from Wordpress */}
										{props.menuLinks[2].map((keys) => (
											<NavbarMenuLinks
												linkUrl={keys?.node?.url}
												linkName={keys?.node?.label}
											/>
										))}
									</div>
								</div>
								<div className="bottomSection flex flex-col mx-auto mt-0 px-3 py-8">
									<div className="flex mt-1 gap-2">
										<a
											href={phoneNumber}
											className="text-tiny text-white hover:text-yellow hover:ease-in-out hover:duration-200"
										>
											{props?.navbarContent?.phoneNumber}
										</a>
										<p className="text-tiny text-white">or</p>
										<a
											href={phoneNumberOptionTwo}
											className="text-tiny text-white hover:text-yellow hover:ease-in-out hover:duration-200"
										>
											{props?.navbarContent?.phoneNumberOptionTwo},
										</a>
										<p className="text-tiny text-white">or email</p>
										<a
											href={emailOptionTwo}
											className="text-tiny text-white hover:text-yellow hover:ease-in-out hover:duration-200"
										>
											{props?.navbarContent?.emailOptionTwo}
										</a>
									</div>
								</div>
							</div>
						</div>
					) : null}
				</div>
			</div>
		</section>
	);
};

export default Navbar;
