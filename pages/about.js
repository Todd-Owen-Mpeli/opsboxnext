import Head from "next/head";
import {gql} from "@apollo/client";
import {client} from "../lib/apollo";

// Components
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TextImage from "../components/TextImage";
import ReadBlogs from "../components/ReadBlogs";
import TitleAndParagraph from "../components/TitleAndParagraph.js";
import Value from "../components/Value";
import ContactBannerTwo from "../components/ContactBannerTwo";
import TextImageQuote from "../components/TextImageQuote";

const about = ({
	pageTitle,
	navbarContent,
	navbarMenu,
	aboutPageContent,
	readBlogsContent,
	footerContent,
	footerMenu,
}) => {
	// console.log(aboutPageContent);
	return (
		<>
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
					title={aboutPageContent?.heroSection?.title}
					backgroundImage={aboutPageContent?.heroSection?.heroImage?.sourceUrl}
				/>

				{/* TITLE AND PARAGRAPH */}
				<TitleAndParagraph
					// Content
					title={aboutPageContent?.titleTwoParagraphsButton?.title}
					boldParagraph={
						aboutPageContent?.titleTwoParagraphsButton?.boldParagraph
					}
					paragraphOne={
						aboutPageContent?.titleTwoParagraphsButton?.paragraphOne
					}
					paragraphTwo={
						aboutPageContent?.titleTwoParagraphsButton?.paragraphTwo
					}
					buttonLink={aboutPageContent?.titleTwoParagraphsButton?.buttonLink}
					// Display Options
					displayThreeSquaresOption={
						aboutPageContent?.titleTwoParagraphsButton
							?.displayThreeSquaresOption
					}
					displayEmailLinkOption={
						aboutPageContent?.titleTwoParagraphsButton?.displayEmailLinkOption
					}
					displayButtonOption={
						aboutPageContent?.titleTwoParagraphsButton?.displayButtonOption
					}
					displayBoldText={
						aboutPageContent?.titleTwoParagraphsButton?.displayBoldText
					}
				/>

				<TextImageQuote
					title={aboutPageContent?.textQuoteImage?.title}
					quoteText={aboutPageContent?.textQuoteImage?.quoteText}
					personName={aboutPageContent?.textQuoteImage?.personName}
					image={aboutPageContent?.textQuoteImage?.image?.sourceUrl}
					buttonLink={aboutPageContent?.textQuoteImage?.buttonLink}
					paragraphOne={aboutPageContent?.textQuoteImage?.paragraphOne}
					paragraphTwo={aboutPageContent?.textQuoteImage?.paragraphTwo}
					backgroundAestheticsLocationPositioningOptions={
						aboutPageContent?.textQuoteImage
							?.backgroundAestheticsLocationPositioningOptions
					}
					// Display Options
					displayThreeSquaresOption={
						aboutPageContent?.textQuoteImage?.displayThreeSquaresOption
					}
					displayQuoteOption={
						aboutPageContent?.textQuoteImage?.displayQuoteOption
					}
					displayImageOption={
						aboutPageContent?.textQuoteImage?.displayImageOption
					}
					displayBoldParagraphOption={
						aboutPageContent?.textQuoteImage?.displayBoldParagraphOption
					}
					displayButtonOption={
						aboutPageContent?.textQuoteImage?.displayButtonOption
					}
					displayBackgroundAestheticsOptions={
						aboutPageContent?.textQuoteImage?.displayBackgroundAestheticsOptions
					}
				/>

				{/* VALUES */}
				<Value
					title={aboutPageContent?.values?.title}
					paragraph={aboutPageContent?.values?.paragraph}
					content={aboutPageContent?.values?.content}
					// Display Squares (Blue/Grey)
					displayBlueGreySquares={
						aboutPageContent?.values?.displayBlueGreySquares
					}
				/>

				{/* VALUES */}
				<ContactBannerTwo
					title={aboutPageContent?.contactUsBannerTwo?.title}
					buttonLink={aboutPageContent?.contactUsBannerTwo?.buttonLink}
					// Display Squares (Blue/Grey)
					displayBlueGreySquares={
						aboutPageContent?.contactUsBannerTwo?.displayBlueGreySquares
					}
				/>

				{/* TEXT IMAGE */}
				<TextImage
					title={aboutPageContent?.textImage?.title}
					subtitle={aboutPageContent?.textImage?.subtitle}
					paragraphOne={aboutPageContent?.textImage?.paragraphOne}
					paragraphTwo={aboutPageContent?.textImage?.paragraphTwo}
					buttonLink={aboutPageContent?.titleTwoParagraphsButton?.buttonLink}
					image={aboutPageContent?.textImage?.image?.sourceUrl}
					// Display Options
					displayButton={aboutPageContent?.textImage?.displayButton}
					// Display Squares (Blue/Grey)
					displayBlueGreySquares={
						aboutPageContent?.textImage?.displayBlueGreySquares
					}
				/>

				{/* READ BLOGS */}
				<ReadBlogs
					title={aboutPageContent?.readOurBlogsTitle}
					readBlogsContent={readBlogsContent}
				/>
			</main>

			{/* <!--===== FOOTER =====--> */}
			<Footer footerContent={footerContent} menuLinks={footerMenu} />
		</>
	);
};

export default about;

export async function getStaticProps() {
	const getAboutPageContent = gql`
		{
			mainContent: pages(where: {status: PUBLISH, id: 324}) {
				edges {
					node {
						aboutPage {
							readOurBlogsTitle
							heroSection {
								title
								heroImage {
									sourceUrl
								}
							}
							textImage {
								title
								subtitle
								paragraphTwo
								paragraphOne
								displayButton
								displayBlueGreySquares
								buttonLink {
									url
									title
									target
								}
								image {
									sourceUrl
								}
							}
							contactUsBannerTwo {
								title
								displayBlueGreySquares
								buttonLink {
									url
									title
									target
								}
							}
							textQuoteImage {
								title
								selectBackgroundAestheticsOptions
								quoteText
								personName
								paragraphTwo
								paragraphOne
								image {
									sourceUrl
								}
								displayThreeSquaresOption
								displayQuoteOption
								displayImageOption
								displayButtonOption
								displayBoldParagraphOption
								displayBackgroundAestheticsOptions
								buttonLink {
									url
									title
									target
								}
								backgroundAestheticsLocationPositioningOptions {
									top
									right
									left
									bottom
								}
							}
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
							values {
								title
								paragraph
								content {
									title
									paragraph
								}
								displayBlueGreySquares
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
		query: getAboutPageContent,
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
			aboutPageContent: response?.data?.mainContent?.edges[0]?.node?.aboutPage,
			readBlogsContent: response?.data?.readBlogsContent?.edges,
			footerContent:
				response?.data?.themesOptions?.edges[0]?.node?.themesOptions,
			footerMenu: response?.data?.footerMenuLinks?.edges,
		},
		revalidate: 1,
	};
}