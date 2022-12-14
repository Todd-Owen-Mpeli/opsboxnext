import Head from "next/head";
import {gql} from "@apollo/client";
import {client} from "../lib/apollo";
import {getNavbarContent} from "../lib/navbarContent";
import {getReadBlogsContent} from "../lib/readBlogsContent";
import {getFooterContent} from "../lib/footerContent";

// Components
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReadBlogs from "../components/ReadBlogs";
import SingleQuote from "../components/SingleQuote";
import TextImageQuote from "../components/TextImageQuote";
import TextImageAwards from "../components/TextImageAwards";
import RedIconBulletPointsTwo from "../components/RedIconBulletPointsTwo";
import TitleTwoParagraphButton from "../components/TitleTwoParagraphButton";

const businessPartner = ({
	navbarContent,
	businessPartnerContent,
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
					title={businessPartnerContent?.heroSection?.title}
					backgroundImage={
						businessPartnerContent?.heroSection?.heroImage?.sourceUrl
					}
				/>

				{/* TITLE AND PARAGRAPH */}
				<TitleTwoParagraphButton
					// Content
					title={businessPartnerContent?.titleTwoParagraphsButton?.title}
					boldParagraph={
						businessPartnerContent?.titleTwoParagraphsButton?.boldParagraph
					}
					paragraphOne={
						businessPartnerContent?.titleTwoParagraphsButton?.paragraphOne
					}
					paragraphTwo={
						businessPartnerContent?.titleTwoParagraphsButton?.paragraphTwo
					}
					buttonLink={
						businessPartnerContent?.titleTwoParagraphsButton?.buttonLink
					}
					// Display Options
					displayThreeSquaresOption={
						businessPartnerContent?.titleTwoParagraphsButton
							?.displayThreeSquaresOption
					}
					displayEmailLinkOption={
						businessPartnerContent?.titleTwoParagraphsButton
							?.displayEmailLinkOption
					}
					displayButtonOption={
						businessPartnerContent?.titleTwoParagraphsButton
							?.displayButtonOption
					}
					displayBoldText={
						businessPartnerContent?.titleTwoParagraphsButton?.displayBoldText
					}
				/>

				{/* TEXT IMAGE QUOTE */}
				<TextImageQuote
					title={businessPartnerContent?.textImage?.title}
					quoteText={businessPartnerContent?.textImage?.quoteText}
					personName={businessPartnerContent?.textImage?.personName}
					image={businessPartnerContent?.textImage?.image?.sourceUrl}
					buttonLink={businessPartnerContent?.textImage?.buttonLink}
					paragraphOne={businessPartnerContent?.textImage?.paragraphOne}
					paragraphTwo={businessPartnerContent?.textImage?.paragraphTwo}
					positioningOptions={
						businessPartnerContent?.textImage
							?.backgroundAestheticsLocationPositioningOptions
					}
					// Display Options
					displayThreeSquaresOption={
						businessPartnerContent?.textImage?.displayThreeSquaresOption
					}
					selectBackgroundAestheticsOptions={
						businessPartnerContent?.textImage?.selectBackgroundAestheticsOptions
					}
					displayQuoteOption={
						businessPartnerContent?.textImage?.displayQuoteOption
					}
					displayImageOption={
						businessPartnerContent?.textImage?.displayImageOption
					}
					displayBoldParagraphOption={
						businessPartnerContent?.textImage?.displayBoldParagraphOption
					}
					displayButtonOption={
						businessPartnerContent?.textImage?.displayButtonOption
					}
					displayBackgroundAestheticsOptions={
						businessPartnerContent?.textImage
							?.displayBackgroundAestheticsOptions
					}
				/>

				{/* SINGLE QUOTE */}
				<SingleQuote
					quoteText={businessPartnerContent?.singleQuote?.quoteText}
					personName={businessPartnerContent?.singleQuote?.personName}
				/>

				{/* TEXT IMAGE QUOTE TWO */}
				<TextImageQuote
					title={businessPartnerContent?.textImageTwo?.title}
					quoteText={businessPartnerContent?.textImageTwo?.quoteText}
					personName={businessPartnerContent?.textImageTwo?.personName}
					image={businessPartnerContent?.textImageTwo?.image?.sourceUrl}
					buttonLink={businessPartnerContent?.textImageTwo?.buttonLink}
					paragraphOne={businessPartnerContent?.textImageTwo?.paragraphOne}
					paragraphTwo={businessPartnerContent?.textImageTwo?.paragraphTwo}
					positioningOptions={
						businessPartnerContent?.textImageTwo
							?.backgroundAestheticsLocationPositioningOptions
					}
					// Display Options
					displayThreeSquaresOption={
						businessPartnerContent?.textImageTwo?.displayThreeSquaresOption
					}
					selectBackgroundAestheticsOptions={
						businessPartnerContent?.textImageTwo
							?.selectBackgroundAestheticsOptions
					}
					displayQuoteOption={
						businessPartnerContent?.textImageTwo?.displayQuoteOption
					}
					displayImageOption={
						businessPartnerContent?.textImageTwo?.displayImageOption
					}
					displayBoldParagraphOption={
						businessPartnerContent?.textImageTwo?.displayBoldParagraphOption
					}
					displayButtonOption={
						businessPartnerContent?.textImageTwo?.displayButtonOption
					}
					displayBackgroundAestheticsOptions={
						businessPartnerContent?.textImageTwo
							?.displayBackgroundAestheticsOptions
					}
				/>

				{/* RED ICON BULLET POINTS TWO */}
				<RedIconBulletPointsTwo
					title={businessPartnerContent?.redIconsBulletPoints?.title}
					paragraph={businessPartnerContent?.redIconsBulletPoints?.paragraph}
					columnOne={businessPartnerContent?.redIconsBulletPoints?.columnOne}
					columnTwo={businessPartnerContent?.redIconsBulletPoints?.columnTwo}
				/>

				{/* TEXT IMAGE AWARDS */}
				<TextImageAwards
					title={businessPartnerContent?.textImageAwards?.title}
					paragraph={businessPartnerContent?.textImageAwards?.paragraph}
					buttonLink={businessPartnerContent?.textImageAwards?.buttonLink}
					image={businessPartnerContent?.textImageAwards?.image?.sourceUrl}
					awardsOne={
						businessPartnerContent?.textImageAwards?.awardsOne?.sourceUrl
					}
					awardsTwo={
						businessPartnerContent?.textImageAwards?.awardsTwo?.sourceUrl
					}
				/>

				{/* READ BLOGS */}
				<ReadBlogs
					title={businessPartnerContent?.readOurBlogs?.title}
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

export default businessPartner;

export async function getStaticProps() {
	const getBusinessPartnerContent = gql`
		{
			mainContent: pages(where: {id: 333}) {
				edges {
					node {
						businessPartnerPage {
							heroSection {
								title
								heroImage {
									sourceUrl
								}
							}
							readOurBlogs {
								title
							}
							titleTwoParagraphsButton {
								title
								paragraphOne
								paragraphTwo
								boldParagraph
								buttonLink {
									url
									title
									target
								}
								displayThreeSquaresOption
								displayEmailLinkOption
								displayButtonOption
								displayBoldText
							}
							textImage {
								title
								selectBackgroundAestheticsOptions
								quoteText
								personName
								paragraphTwo
								paragraphOne
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
								image {
									sourceUrl
								}
							}
							redIconsBulletPoints {
								title
								paragraph
								columnOne {
									bulletPoint {
										title
										paragraph
									}
								}
								columnTwo {
									bulletPoint {
										title
										paragraph
									}
								}
							}
							singleQuote {
								quoteText
								personName
							}
							textImageAwards {
								title
								paragraph
								image {
									sourceUrl
								}
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
							textImageTwo {
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
						}
					}
				}
			}
		}
	`;

	const response = await client.query({
		query: getBusinessPartnerContent,
	});

	const navbarContent = await getNavbarContent();
	const footerContent = await getFooterContent();
	const readBlogsContent = await getReadBlogsContent();

	return {
		props: {
			navbarContent,
			businessPartnerContent:
				response?.data?.mainContent?.edges[0]?.node?.businessPartnerPage,
			readBlogsContent,
			footerContent,
		},
		revalidate: 1,
	};
}
