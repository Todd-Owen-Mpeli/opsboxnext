import Head from "next/head";
import {gql} from "@apollo/client";
import {client} from "../lib/apollo";
import {getNavbarContent} from "../lib/navbarContent";
import {getReadBlogsContent} from "../lib/readBlogsContent";
import {getFooterContent} from "../lib/footerContent";

// Components
import Value from "../components/Value";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TextImage from "../components/TextImage";
import ReadBlogs from "../components/ReadBlogs";
import TextImageQuote from "../components/TextImageQuote";
import ContactBannerTwo from "../components/ContactBannerTwo";
import TitleTwoParagraphButton from "../components/TitleTwoParagraphButton.js";

const about = ({
	navbarContent,
	aboutPageContent,
	readBlogsContent,
	footerContent,
}) => {
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
				{/* HERO */}
				<Hero
					title={aboutPageContent?.heroSection?.title}
					backgroundImage={aboutPageContent?.heroSection?.heroImage?.sourceUrl}
				/>

				{/* TITLE AND PARAGRAPH */}
				<TitleTwoParagraphButton
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

				{/* TEXT IMAGE QUOTE */}
				<TextImageQuote
					title={aboutPageContent?.textQuoteImage?.title}
					quoteText={aboutPageContent?.textQuoteImage?.quoteText}
					personName={aboutPageContent?.textQuoteImage?.personName}
					image={aboutPageContent?.textQuoteImage?.image?.sourceUrl}
					buttonLink={aboutPageContent?.textQuoteImage?.buttonLink}
					paragraphOne={aboutPageContent?.textQuoteImage?.paragraphOne}
					paragraphTwo={aboutPageContent?.textQuoteImage?.paragraphTwo}
					positioningOptions={
						aboutPageContent?.textQuoteImage
							?.backgroundAestheticsLocationPositioningOptions
					}
					// Display Options
					displayThreeSquaresOption={
						aboutPageContent?.textQuoteImage?.displayThreeSquaresOption
					}
					selectBackgroundAestheticsOptions={
						aboutPageContent?.textQuoteImage?.selectBackgroundAestheticsOptions
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
					title={aboutPageContent?.readOurBlogs?.title}
					readBlogsContent={readBlogsContent?.readBlogsContent}
				/>
			</main>

			{/* <!--===== FOOTER =====--> */}
			<Footer
				footerContent={footerContent?.footerContent}
				menuLinks={footerContent?.footerMenu}
			/>
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
		}
	`;

	const response = await client.query({
		query: getAboutPageContent,
	});

	const navbarContent = await getNavbarContent();
	const footerContent = await getFooterContent();
	const readBlogsContent = await getReadBlogsContent();

	return {
		props: {
			navbarContent,
			aboutPageContent: response?.data?.mainContent?.edges[0]?.node?.aboutPage,
			readBlogsContent,
			footerContent,
		},
		revalidate: 1,
	};
}
