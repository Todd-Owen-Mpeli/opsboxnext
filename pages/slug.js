/* eslint-disable @next/next/no-img-element */
/* eslint-disable import/no-anonymous-default-export */
import Head from "next/head";
import Link from "next/link";
import {gql} from "@apollo/client";
import {client} from "../lib/apollo";
import {getNavbarContent} from "../lib/navbarContent";
import {getFooterContent} from "../lib/footerContent";

// Components
import Navbar from "../components/Navbar";
import FooterTwo from "../components/FooterTwo";
import CaseStudies from "../components/CaseStudies";

// Styling
import styles from "../styles/pages/SinglesSlug.module.scss";

const [slug] = ({navbarContent, caseStudiesContent, footerContent}) => {
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
				{/* Background Aesthetics (Grey Squares) */}
				<div class="relative z-0">
					<div class="absolute left-[110px] top-[650px] opacity-[5%]">
						<img
							class="mx-auto w-[300%] h-[500px] object-contain"
							src="/svg/backgroundIcons/IconThree.svg"
							alt="Background Squares"
						/>
					</div>
				</div>

				<section className={styles.pageContent}>
					<div className="container mx-auto">
						<div>Enter</div>
					</div>
				</section>

				{/* Background Aesthetics (Grey Squares) */}
				<div class="relative z-0">
					<div class="absolute left-[500px] top-[-400px] opacity-50">
						<img
							class="mx-auto w-[300%] h-[500px] object-contain"
							src="/svg/backgroundIcons/IconFour.svg"
							alt="Background Squares"
						/>
					</div>
				</div>

				{/* CONTACT BANNER */}
				<section className="my-2 py-4 bg-yellow z-50">
					<div className="container mx-auto">
						<div className="flex flex-col gap-8 p-2 lg:gap-0 md:py-1 md:px-6 md:flex-row justify-between items-center">
							<div className="text-white">
								<p className="text-base text-center md:text-left">
									If you’d like to discuss how we could help you achieve success
									for your business, get in touch to arrange a free
									no-obligatory meeting.
								</p>
								<h2 class="py-1 text-xl text-center md:text-left leading-normal font-[600]">
									It’s easy to take the next step.
								</h2>
							</div>
							<div className="py-2 px-8 w-[fit-content] text-white bg-blue hover:bg-darkblue hover:ease-in-out hover:duration-[0.5s]">
								<Link
									href="/contact"
									className="uppercase font-[600] text-base"
									target=""
								>
									Arrange a Meeting
								</Link>
							</div>
						</div>
					</div>
				</section>

				{/* Background Aesthetics Icons */}
				<div class="mx-auto pt-5 my-5">
					<img
						class="mx-auto w-[100%] h-[80px] object-contain"
						src="/svg/threeContentSquares/threeBackgroundSquaresIcons.svg"
						alt="Background Squares"
					/>
				</div>
			</main>

			{/* CASE STUDIES */}
			<CaseStudies
				title={`We’ve helped businesses like yours succeed`}
				paragraph={`Our experience is wide-ranging and varied. We’ve worked with businesses of all sizes and in different sectors and industries.`}
				content={caseStudiesContent}
			/>

			{/* <!--===== FOOTER =====--> */}
			<FooterTwo
				footerContent={footerContent?.footerContent}
				menuLinks={footerContent?.footerMenu}
			/>
		</>
	);
};

export default [slug];

export async function getServerSideProps() {
	const getSinglesContent = gql`
		{
			caseStudies: caseStudies(
				where: {orderby: {field: DATE, order: DESC}, status: PUBLISH}
				first: 3
			) {
				edges {
					node {
						title
						link
						content(format: RENDERED)
						featuredImage {
							node {
								sourceUrl
							}
						}
					}
				}
			}
		}
	`;

	const response = await client.query({
		query: getSinglesContent,
	});

	const navbarContent = await getNavbarContent();
	const footerContent = await getFooterContent();

	return {
		props: {
			navbarContent,
			caseStudiesContent: response.data?.caseStudies?.edges,
			footerContent,
		},
	};
}