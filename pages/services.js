import Head from "next/head";
import {gql} from "@apollo/client";
import {client} from "../lib/apollo";

// Components
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReadBlogs from "../components/ReadBlogs";
import TextImageJumbo from "../components/TextImageJumbo";
import ContentSquares from "../components/ContentSquares";
import TitleAndParagraph from "../components/TitleAndParagraph.js";
import TextImage from "../components/TextImage";

const services = ({
	pageTitle,
	navbarContent,
	navbarMenu,
	servicesPageContent,
	readBlogsContent,
	footerContent,
	footerMenu,
}) => {
	// console.log(navbarMenu);

	return (
		<div>
			<Head>
				<title>{pageTitle}</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/svg/favicon.svg" />
			</Head>

			{/* <!--===== NAVBAR =====--> */}
			<Navbar navbarContent={navbarContent} menuLinks={navbarMenu} />

			<main>
				{/* HERO */}
				<Hero
					title={servicesPageContent?.heroSection?.title}
					backgroundImage={
						servicesPageContent?.heroSection?.heroImage?.sourceUrl
					}
				/>

				{/* TITLE AND PARAGRAPH */}
				<TitleAndParagraph
					// Content
					title={servicesPageContent?.titleTwoParagraphsButton?.title}
					boldParagraph={
						servicesPageContent?.titleTwoParagraphsButton?.boldParagraph
					}
					paragraphOne={
						servicesPageContent?.titleTwoParagraphsButton?.paragraphOne
					}
					paragraphTwo={
						servicesPageContent?.titleTwoParagraphsButton?.paragraphTwo
					}
					buttonLink={servicesPageContent?.titleTwoParagraphsButton?.buttonLink}
					// Display Options
					displayThreeSquaresOption={
						servicesPageContent?.titleTwoParagraphsButton
							?.displayThreeSquaresOption
					}
					displayEmailLinkOption={
						servicesPageContent?.titleTwoParagraphsButton
							?.displayEmailLinkOption
					}
					displayButtonOption={
						servicesPageContent?.titleTwoParagraphsButton?.displayButtonOption
					}
					displayBoldText={
						servicesPageContent?.titleTwoParagraphsButton?.displayBoldText
					}
				/>

				{/* CONTENT SQUARES */}
				<ContentSquares
					// Content
					title={servicesPageContent?.contentSquares?.title}
					columnOne={servicesPageContent?.contentSquares?.column}
					columnTwo={servicesPageContent?.contentSquares?.columnTwo}
					columnThree={servicesPageContent?.contentSquares?.columnThree}
					columnFour={servicesPageContent?.contentSquares?.columnFour}
					// Display Options
					displayTitle={servicesPageContent?.contentSquares?.displayTitle}
					displayNumberOfColumns={
						servicesPageContent?.contentSquares?.displayNumberOfColumns
					}
					// Display Squares (Blue/Grey)
					displayBlueGreySquares={
						servicesPageContent?.contentSquares?.displayBlueGreySquares
					}
					// Display Background Squares Aesthetics
					displayBackgroundAesthetics={
						servicesPageContent?.contentSquares?.displayBackgroundAesthetics
					}
				/>

				<TextImage
					title={servicesPageContent?.textImage?.title}
					subtitle={servicesPageContent?.textImage?.subtitle}
					paragraphOne={servicesPageContent?.textImage?.paragraphOne}
					paragraphTwo={servicesPageContent?.textImage?.paragraphTwo}
					buttonLink={servicesPageContent?.titleTwoParagraphsButton?.buttonLink}
					image={servicesPageContent?.textImage?.image?.sourceUrl}
					// Display Options
					displayButton={servicesPageContent?.textImage?.displayButton}
					// Display Squares (Blue/Grey)
					displayBlueGreySquares={
						servicesPageContent?.textImage?.displayBlueGreySquares
					}
				/>

				{/* READ BLOGS */}
				<ReadBlogs
					title={servicesPageContent?.readOurBlogsTitle}
					readBlogsContent={readBlogsContent}
				/>
			</main>

			{/* <!--===== FOOTER =====--> */}
			<Footer footerContent={footerContent} footerMenu={footerMenu} />
		</div>
	);
};

export default services;

export async function getServerSideProps() {
	const getServicesPageContent = gql`
		{
			mainContent: pages(where: {status: PUBLISH, id: 327}) {
				edges {
					node {
						ServicesPage {
							readOurBlogsTitle
							titleTwoParagraphsButton {
								title
								paragraphTwo
								paragraphOne
								displayThreeSquaresOption
								displayEmailLinkOption
								displayButtonOption
								displayBoldText
								boldParagraph
								buttonLink {
									target
									title
									url
								}
							}
							textImage {
								title
								subtitle
								paragraphTwo
								paragraphOne
								displayButton
								displayBlueGreySquares
								image {
									sourceUrl
								}
								buttonLink {
									url
									title
									target
								}
							}
							heroSection {
								title
								heroImage {
									sourceUrl
								}
							}
							contentSquares {
								title
								displayTitle
								displayNumberOfColumns
								displayBlueGreySquares
								displayBackgroundAesthetics
								columnTwo {
									title
									paragraph
									buttonLink {
										url
										title
										target
									}
									backgroundImage {
										sourceUrl
									}
								}
								columnThree {
									title
									paragraph
									buttonLink {
										url
										title
										target
									}
									backgroundImage {
										sourceUrl
									}
								}
								columnFour {
									title
									paragraph
									buttonLink {
										url
										title
										target
									}
									backgroundImage {
										sourceUrl
									}
								}
								column {
									title
									paragraph
									buttonLink {
										url
										title
										target
									}
									backgroundImage {
										sourceUrl
									}
								}
							}
						}
					}
				}
			}
			themesOptions(
				where: {id: 1604, status: PUBLISH, name: "Themes Options"}
			) {
				edges {
					node {
						themesOptions {
							siteTitle
							twitterLink
							phoneNumber
							linkedinLink
							email
							emailOptionTwo
							contactAddress
							contactPostcode
							contactPostcodeText
							phoneNumberOptionTwo
							companyLogo {
								sourceUrl
							}
						}
					}
				}
			}
			serviceMenuLinks: menuItems(where: {location: SERVICES}) {
				edges {
					node {
						url
						label
					}
				}
			}
			aboutMenuLinks: menuItems(where: {location: ABOUT}) {
				edges {
					node {
						url
						label
					}
				}
			}
			remainingMenuLinks: menuItems(where: {location: PRIMARY}) {
				edges {
					node {
						url
						label
					}
				}
			}
			footerMenuLinks: menuItems(where: {location: FOOTER}) {
				edges {
					node {
						url
						label
					}
				}
			}
			readBlogsContent: posts(
				where: {orderby: {field: DATE, order: DESC}, status: PUBLISH}
				first: 4
			) {
				edges {
					node {
						title
						link
						featuredImage {
							node {
								sourceUrl
							}
						}
						content(format: RENDERED)
					}
				}
			}
		}
	`;

	const response = await client.query({
		query: getServicesPageContent,
	});

	return {
		props: {
			pageTitle:
				response?.data?.themesOptions?.edges[0]?.node?.themesOptions?.siteTitle,
			navbarContent:
				response?.data?.themesOptions?.edges[0]?.node?.themesOptions,
			navbarMenu: [
				response?.data?.serviceMenuLinks?.edges,
				response?.data?.aboutMenuLinks?.edges[0],
				response?.data?.remainingMenuLinks?.edges,
			],
			servicesPageContent:
				response?.data?.mainContent?.edges[0]?.node?.ServicesPage,
			readBlogsContent: response?.data?.readBlogsContent?.edges,
			footerContent:
				response?.data?.themesOptions?.edges[0]?.node?.themesOptions,
			footerMenu: response?.data?.footerMenuLinks?.edges,
		},
	};
}