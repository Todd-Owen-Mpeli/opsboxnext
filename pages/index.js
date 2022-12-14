import Head from "next/head";
import {gql} from "@apollo/client";
import {client} from "../lib/apollo";

// Components
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Awards from "../components/Awards";
import ReadBlogs from "../components/ReadBlogs";
import CaseStudies from "../components/CaseStudies";
import Testimonial from "../components/Testimonial";
import TextImageJumbo from "../components/TextImageJumbo";
import ContentSquares from "../components/ContentSquares";
import TitleAndParagraph from "../components/TitleAndParagraph.js";
import BrochureRequestBanner from "../components/BrochureRequestBanner";

// Styling
import styles from "../styles/Home.module.scss";

export default function Home({
	pageTitle,
	navbarContent,
	navbarMenu,
	homePageContent,
	caseStudiesContent,
	readBlogsContent,
	footerContent,
	footerMenu,
}) {
	// console.log(homePageContent);

	return (
		<>
			<Head>
				<title>{pageTitle}</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/svg/favicon.svg" />
			</Head>

			{/* <Navbar navbarContent={navbarContent} menuLinks={navbarMenu} /> */}

			<main>
				{/* HERO */}
				<Hero
					title={homePageContent?.heroSection?.title}
					backgroundImage={homePageContent?.heroSection?.heroImage?.sourceUrl}
				/>

				{/* TITLE AND PARAGRAPH */}
				<TitleAndParagraph
					// Content
					title={homePageContent?.titleTwoParagraphsButton?.title}
					boldParagraph={
						homePageContent?.titleTwoParagraphsButton?.boldParagraph
					}
					paragraphOne={homePageContent?.titleTwoParagraphsButton?.paragraphOne}
					paragraphTwo={homePageContent?.titleTwoParagraphsButton?.paragraphTwo}
					buttonLink={homePageContent?.titleTwoParagraphsButton?.buttonLink}
					// Display Options
					displayThreeSquaresOption={
						homePageContent?.titleTwoParagraphsButton?.displayThreeSquaresOption
					}
					displayEmailLinkOption={
						homePageContent?.titleTwoParagraphsButton?.displayEmailLinkOption
					}
					displayButtonOption={
						homePageContent?.titleTwoParagraphsButton?.displayButtonOption
					}
					displayBoldText={
						homePageContent?.titleTwoParagraphsButton?.displayBoldText
					}
				/>

				{/* CONTENT SQUARES */}
				<ContentSquares
					// Content
					title={homePageContent?.contentSquares?.title}
					columnOne={homePageContent?.contentSquares?.column}
					columnTwo={homePageContent?.contentSquares?.columnTwo}
					columnThree={homePageContent?.contentSquares?.columnThree}
					columnFour={homePageContent?.contentSquares?.columnFour}
					// Display Options
					displayTitle={homePageContent?.contentSquares?.displayTitle}
					displayNumberOfColumns={
						homePageContent?.contentSquares?.displayNumberOfColumns
					}
					// Display Squares (Blue/Grey)
					displayBlueGreySquares={
						homePageContent?.contentSquares?.displayBlueGreySquares
					}
					// Display Background Squares Aesthetics
					displayBackgroundAesthetics={
						homePageContent?.contentSquares?.displayBackgroundAesthetics
					}
				/>

				{/* BROCHURE REQUEST BANNER SECTION */}
				{/* <BrochureRequestBanner
					title={homePageContent?.brochureRequestBanner?.title}
				/> */}

				{/* TEXT & IMAGE JUMBO SECTION */}
				<TextImageJumbo
					contentSectionOne={homePageContent?.textImageJumbo?.textImageGroupOne}
					contentSectionTwo={homePageContent?.textImageJumbo?.textImageGroupTwo}
					contentSectionThree={
						homePageContent?.textImageJumbo?.textImageGroupThree
					}
				/>

				{/* CASE STUDIES */}
				<CaseStudies
					title={homePageContent?.caseStudies?.title}
					paragraph={homePageContent?.caseStudies?.paragraph}
					caseStudiesContent={caseStudiesContent}
				/>

				{/* TESTIMONIAL */}
				<Testimonial
					// Content
					title={homePageContent?.testimonialSlider?.title}
					testimonialContent={
						homePageContent?.testimonialSlider?.testimonialContent
					}
					// Display Options
					displayBackgroundAesthetics={
						homePageContent?.testimonialSlider?.displayBackgroundAesthetics
					}
				/>

				{/* AWARDS */}
				<Awards
					title={homePageContent?.awards?.title}
					buttonLink={homePageContent?.awards?.buttonLink}
					paragraphOne={homePageContent?.awards?.paragraphOne}
					paragraphTwo={homePageContent?.awards?.paragraphTwo}
					awardsOneImage={homePageContent?.awards?.awardsOne?.sourceUrl}
					awardsTwoImage={homePageContent?.awards?.awardsTwo?.sourceUrl}
					// Display Options
					displayStylingOptions={homePageContent?.awards?.displayStylingOptions}
					displayButtonOptions={homePageContent?.awards?.displayButtonOptions}
					selectBackgroundAestheticsOptions={
						homePageContent?.awards?.selectBackgroundAestheticsOptions
					}
				/>
				{/* READ BLOGS */}
				<ReadBlogs
					title={homePageContent?.readOurBlogsTitle}
					readBlogsContent={readBlogsContent}
				/>
			</main>

			{/* <!--===== FOOTER =====--> */}
			<Footer footerContent={footerContent} footerMenu={footerMenu} />
		</>
	);
}

export async function getServerSideProps() {
	const getNavbarContent = gql`
		{
			generalSettings {
				title
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
							emailOptionTwo
							phoneNumberOptionTwo
							companyLogo {
								sourceUrl
							}
						}
					}
				}
			}
		}
	`;

	const getServicesNavbarMenuLinks = gql`
		{
			menuItems(where: {location: SERVICES}) {
				edges {
					node {
						url
						label
					}
				}
			}
		}
	`;

	const getAboutNavbarMenuLinks = gql`
		{
			menuItems(where: {location: ABOUT}) {
				edges {
					node {
						url
						label
					}
				}
			}
		}
	`;

	const getRemainingNavbarMenuLinks = gql`
		{
			menuItems(where: {location: PRIMARY}) {
				edges {
					node {
						url
						label
					}
				}
			}
		}
	`;

	const getHomePageContent = gql`
		{
			pages(where: {id: 7}) {
				edges {
					node {
						homePage {
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
									url
									title
									target
								}
							}
							textImageJumbo {
								textImageGroupTwo {
									title
									subtitle
									paragraphTwo
									paragraphOne
									image {
										sourceUrl
									}
									buttonLink {
										url
										title
										target
									}
								}
								textImageGroupThree {
									title
									subtitle
									paragraphTwo
									paragraphOne
									buttonLink {
										url
										title
										target
									}
									image {
										sourceUrl
									}
								}
								textImageGroupOne {
									title
									subtitle
									paragraphTwo
									paragraphOne
									buttonLink {
										url
										title
										target
									}
									image {
										sourceUrl
									}
								}
							}
							testimonialSlider {
								title
								displayBackgroundAestheticsOption
								testimonialContent {
									personName
									paragraph
								}
							}
							readOurBlogsTitle
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
							}
							caseStudies {
								title
								paragraph
							}
							brochureRequestBanner {
								title
							}
							awards {
								title
								selectBackgroundAestheticsOptions
								paragraphTwo
								paragraphOne
								displayStylingOptions
								displayButtonOptions
								buttonLink {
									url
									title
									target
								}
								awardsTwo {
									sourceUrl
								}
								awardsOne {
									sourceUrl
								}
							}
						}
					}
				}
			}
			caseStudies(
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

	const getReadBlogsContent = gql`
		{
			posts(
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

	const getFooterContent = gql`
		{
			themesOptions(
				where: {id: 1604, status: PUBLISH, name: "Themes Options"}
			) {
				edges {
					node {
						themesOptions {
							twitterLink
							email
							contactPostcodeText
							contactPostcode
							contactAddress
							phoneNumber
							linkedinLink
						}
					}
				}
			}
			menuItems(where: {location: FOOTER}) {
				edges {
					node {
						url
						label
					}
				}
			}
		}
	`;

	const responseNavbarContent = await client.query({
		query: getNavbarContent,
	});

	const responseAboutNavbarMenuLinks = await client.query({
		query: getServicesNavbarMenuLinks,
	});

	const responseServicesNavbarMenuLinks = await client.query({
		query: getAboutNavbarMenuLinks,
	});

	const responseRemainingNavbarMenuLinks = await client.query({
		query: getRemainingNavbarMenuLinks,
	});

	const response = await client.query({
		query: getHomePageContent,
	});

	const responseReadBlogs = await client.query({
		query: getReadBlogsContent,
	});

	const responseFooter = await client.query({
		query: getFooterContent,
	});

	return {
		props: {
			pageTitle: responseNavbarContent.data?.generalSettings?.title,
			navbarContent:
				responseNavbarContent.data?.themesOptions?.edges[0]?.node
					?.themesOptions,
			navbarMenu: [
				responseServicesNavbarMenuLinks?.data?.menuItems?.edges[0],
				responseAboutNavbarMenuLinks?.data?.menuItems?.edges,
				responseRemainingNavbarMenuLinks?.data?.menuItems?.edges,
			],
			homePageContent: response.data?.pages?.edges[0]?.node?.homePage,
			caseStudiesContent: response.data?.caseStudies?.edges,
			readBlogsContent: responseReadBlogs?.data?.posts?.edges,
			footerContent:
				responseFooter.data?.themesOptions?.edges[0]?.node?.themesOptions,
			footerMenu: responseFooter.data?.menuItems?.edges,
		},
	};
}
