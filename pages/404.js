/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import {getNavbarContent} from "../lib/navbarContent";
import {getFooterContent} from "../lib/footerContent";

// Components
import Navbar from "../components/Navbar";
import FooterTwo from "../components/FooterTwo";

// Styling
import styles from "../styles/pages/404.module.scss";

const noPageExits = ({navbarContent, footerContent}) => {
	return (
		<>
			<Head>
				<title>{navbarContent?.pageTitle}</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/svg/favicon.svg" />
			</Head>

			{/* <!--===== NAVBAR =====--> */}
			<Navbar
				navbarContent={navbarContent?.navbarContent}
				menuLinks={navbarContent?.navbarMenu}
			/>

			<main>
				<section className={styles.noPageExitsPage}>
					<div
						className="h-[100vh] flex flex-col justify-center items-center bg-center bg-cover bg-[no-repeat]"
						style={{
							background: `linear-gradient(
										0deg,
										rgba(13, 23, 42, 0.45),
										rgba(13, 23, 42, 0.45)
									),
									url("/images/Mask Group 14dsfvdsfs.jpg")`,
						}}
					>
						<div className="px-10 py-44 overflow-hidden">
							<div className="container mx-auto p-0">
								<h1 className="mb-4 text-5xl md:text-7xl text-white text-center font-bold font-heading leading-tight">
									Something went wrong!
								</h1>
								<p className="my-10 text-white text-center text-lg leading-relaxed md:max-w-md mx-auto">
									The page you are looking for is not found! Try something else
									or go back to homepage.
								</p>
								<div className="md:max-w-max mx-auto">
									<button type="button">
										<Link
											href="/"
											className="inline-flex flex-wrap justify-center items-center py-4 px-6 w-full rounded-xl focus:ring focus:ring-blue bg-blue hover:bg-darkblue transition ease-in-out duration-200"
											target=""
										>
											<svg
												className="mr-2.5 text-white"
												width="16"
												height="16"
												viewBox="0 0 16 16"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M6.66667 12.6666L2 7.99998M2 7.99998L6.66667 3.33331M2 7.99998L14 7.99998"
													stroke="currentColor"
													strokeWidth="1.5"
													strokeLinecap="round"
													strokeLinejoin="round"
												></path>
											</svg>
											<span className="font-normal text-white">
												Go Back to Homepage
											</span>
										</Link>
									</button>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>

			{/* <!--===== FOOTER =====--> */}
			<FooterTwo
				footerContent={footerContent?.footerContent}
				menuLinks={footerContent?.footerMenu}
			/>
		</>
	);
};

export default noPageExits;

export async function getStaticProps() {
	const navbarContent = await getNavbarContent();
	const footerContent = await getFooterContent();

	return {
		props: {
			navbarContent,
			footerContent,
		},
	};
}
