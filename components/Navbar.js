/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {useState} from "react";
import NavbarMenuLinks from "./NavbarMenuLinks";
import NavbarMenuSublinks from "./NavbarMenuSublinks";
import styles from "../styles/components/Navbar.module.scss";

const Navbar = (props) => {
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
					<div className="flex justify-between items-center pt-4 pb-4 lg:pb-0 px-10 gap-x-10 sm:gap-x-0">
						<div className="z-50">
							<Link href="/">
								<img
									className="w-[100%] h-[60px] object-contain"
									src={props?.navbarContent?.companyLogo?.sourceUrl}
								/>
							</Link>
						</div>
						<div className="rightSide flex gap-x-16">
							<div className="flex space-x-2">
								<p className="hidden sm:block text-yellow text-base font-bold">
									T:
								</p>
								<Link
									href={`tel:${props?.navbarContent?.phoneNumber}`}
									className="hidden sm:block text-blue text-base font-bold hover:text-yellow hover:ease-in-out hover:duration-[0.5s]"
								>
									{props?.navbarContent?.phoneNumber}
								</Link>
								<Link
									href={`tel:${props?.navbarContent?.phoneNumber}`}
									className="block sm:hidden text-blue text-base font-bold hover:text-yellow hover:ease-in-out hover:duration-[0.5s]"
								>
									<img
										className="w-[25px] h-[25px] text-blue"
										src="/svg/mobilePhoneIcon.png"
									/>
								</Link>
							</div>
							<div className="hidden md:flex justify-end space-x-6">
								<Link
									href={`${props?.navbarContent?.twitterLink}`}
									target="blank"
								>
									<img
										className="socialIcons"
										src="/svg/Twitter Icon Blue.svg"
									/>
								</Link>
								<Link
									href={`${props?.navbarContent?.linkedinLink}`}
									target="blank"
								>
									<img
										className="socialIcons"
										src="/svg/LinkedIn Icon Blue.svg"
									/>
								</Link>
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
								className="relative hidden xl:block"
							>
								<div className="absolute left-[225px] top-[-125px]">
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
							<div className="relative flex justify-center h-full">
								<button
									className="squareXButton p-4 w-[75px] h-[50px] absolute  top-0 right-0 bg-yellow hover:bg-orange"
									onClick={displayDropdownNavbar}
								>
									<Link
										href="#"
										className="uppercase text-white w-[75px] h-[50px]"
									>
										<img
											className="mx-auto w-[100%] h-[100%] object-contain"
											src="/svg/icons/CloseDropDownMenuButton.svg"
											alt="Close PopUp Icon"
										/>
									</Link>
								</button>
							</div>
							<div className="content pt-8 pb-0 px-16 h-[fit-content] flex flex-col z-50">
								<div className="flex flex-col text-center py-8">
									<div className="menuLink">
										<button
											className="flex justify-center items-center space-x-4 w-full mt-2 py-4 border-b border-white border-solid"
											onClick={displayServicesSublinks}
										>
											<Link
												href="/services"
												className="text-base text-center text-white hover:text-yellow hover:ease-in-out hover:duration-[0.5s]"
											>
												Services
											</Link>
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
												{props?.menuLinks[0].map((keys) => (
													<NavbarMenuSublinks
														Key={keys?.id}
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
											<Link
												href="/about"
												className="text-base text-center text-white hover:text-yellow hover:ease-in-out hover:duration-[0.5s]"
											>
												About
											</Link>
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
													linkUrl={props?.menuLinks[1]?.node?.url}
													linkName={props?.menuLinks[1]?.node?.label}
												/>
											</div>
										) : null}
									</div>
									<div className="menuLink">
										{/* Menu Array from Wordpress */}
										{props.menuLinks[2].map((keys) => (
											<NavbarMenuLinks
												key={keys?.id}
												linkUrl={keys?.node?.url}
												linkName={keys?.node?.label}
											/>
										))}
									</div>
								</div>
								<div className="flex flex-col mx-auto mt-0 p-0 pb-8 sm:px-3 sm:py-8">
									<div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row mt-1 gap-2">
										<div className="flex flex-row gap-2">
											<Link
												href={`tel:${props?.navbarContent?.phoneNumber}`}
												className="text-tiny text-white text-center sm:text-left hover:text-yellow hover:ease-in-out hover:duration-[0.5s]"
											>
												{props?.navbarContent?.phoneNumber}
											</Link>
											<p className="text-tiny text-white hidden sm:block">or</p>
											<Link
												href={`tel:${props?.navbarContent?.phoneNumberOptionTwo}`}
												className="text-tiny text-white text-center sm:text-left hover:text-yellow hover:ease-in-out hover:duration-[0.5s]"
											>
												{props?.navbarContent?.phoneNumberOptionTwo}
											</Link>
										</div>
										<div className="flex flex-row gap-2">
											<p className="text-tiny text-white hidden sm:block">
												or email
											</p>
											<Link
												href={`mailto:${props?.footerContent?.emailOptionTwo}`}
												className="text-tiny text-white text-center sm:text-left  hover:text-yellow hover:ease-in-out hover:duration-[0.5s]"
											>
												{props?.navbarContent?.emailOptionTwo}
											</Link>
										</div>
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
