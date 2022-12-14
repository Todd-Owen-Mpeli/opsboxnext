import Head from "next/head";
import {gql} from "@apollo/client";
import {client} from "../lib/apollo";
import {getNavbarContent} from "../lib/navbarContent";
import {getFooterContent} from "../lib/footerContent";
import {getReadBlogsContent} from "../lib/readBlogsContent";
import {getCaseStudiesContent} from "../lib/caseStudiesContent";

// Components
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReadBlogs from "../components/ReadBlogs";
import CaseStudies from "../components/CaseStudies";
import Testimonial from "../components/Testimonial";
import BulletPoints from "../components/BulletPoints";
import ContactBanner from "../components/ContactBanner";
import TextImageQuote from "../components/TextImageQuote";
import TitleTwoParagraphButton from "../components/TitleTwoParagraphButton";

const consultancy = ({
	navbarContent,
	consultancyContent,
	caseStudiesContent,
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
					title={consultancyContent?.heroSection?.title}
					backgroundImage={
						consultancyContent?.heroSection?.heroImage?.sourceUrl
					}
				/>

				{/* TITLE AND PARAGRAPH */}
				<TitleTwoParagraphButton
					// Content
					title={consultancyContent?.titleTwoParagraphsButton?.title}
					boldParagraph={
						consultancyContent?.titleTwoParagraphsButton?.boldParagraph
					}
					paragraphOne={
						consultancyContent?.titleTwoParagraphsButton?.paragraphOne
					}
					paragraphTwo={
						consultancyContent?.titleTwoParagraphsButton?.paragraphTwo
					}
					buttonLink={consultancyContent?.titleTwoParagraphsButton?.buttonLink}
					// Display Options
					displayThreeSquaresOption={
						consultancyContent?.titleTwoParagraphsButton
							?.displayThreeSquaresOption
					}
					displayEmailLinkOption={
						consultancyContent?.titleTwoParagraphsButton?.displayEmailLinkOption
					}
					displayButtonOption={
						consultancyContent?.titleTwoParagraphsButton?.displayButtonOption
					}
					displayBoldText={
						consultancyContent?.titleTwoParagraphsButton?.displayBoldText
					}
				/>

				{/* TEXT IMAGE QUOTE */}
				<TextImageQuote
					title={consultancyContent?.textImage?.title}
					quoteText={consultancyContent?.textImage?.quoteText}
					personName={consultancyContent?.textImage?.personName}
					image={consultancyContent?.textImage?.image?.sourceUrl}
					buttonLink={consultancyContent?.textImage?.buttonLink}
					paragraphOne={consultancyContent?.textImage?.paragraphOne}
					paragraphTwo={consultancyContent?.textImage?.paragraphTwo}
					positioningOptions={
						consultancyContent?.textImage
							?.backgroundAestheticsLocationPositioningOptions
					}
					// Display Options
					displayThreeSquaresOption={
						consultancyContent?.textImage?.displayThreeSquaresOption
					}
					selectBackgroundAestheticsOptions={
						consultancyContent?.textImage?.selectBackgroundAestheticsOptions
					}
					displayQuoteOption={consultancyContent?.textImage?.displayQuoteOption}
					displayImageOption={consultancyContent?.textImage?.displayImageOption}
					displayBoldParagraphOption={
						consultancyContent?.textImage?.displayBoldParagraphOption
					}
					displayButtonOption={
						consultancyContent?.textImage?.displayButtonOption
					}
					displayBackgroundAestheticsOptions={
						consultancyContent?.textImage?.displayBackgroundAestheticsOptions
					}
				/>

				{/* BULLET POINTS */}
				<BulletPoints
					columnOne={consultancyContent?.bulletPoints?.columnOne}
					columnTwo={consultancyContent?.bulletPoints?.columnTwo}
					buttonLink={consultancyContent?.bulletPoints?.buttonLink}
					// Display Options
					displaySubtitleOption={
						consultancyContent?.bulletPoints?.displaySubtitleOption
					}
					displayBackgroundAestheticsOptions={
						consultancyContent?.bulletPoints?.displayBackgroundAestheticsOptions
					}
					selectBackgroundAestheticsOptions={
						consultancyContent?.bulletPoints?.selectBackgroundAestheticsOptions
					}
				/>

				{/* TEXT IMAGE QUOTE TWO */}
				<TextImageQuote
					title={consultancyContent?.textImageTwo?.title}
					quoteText={consultancyContent?.textImageTwo?.quoteText}
					personName={consultancyContent?.textImageTwo?.personName}
					image={consultancyContent?.textImageTwo?.image?.sourceUrl}
					buttonLink={consultancyContent?.textImageTwo?.buttonLink}
					paragraphOne={consultancyContent?.textImageTwo?.paragraphOne}
					paragraphTwo={consultancyContent?.textImageTwo?.paragraphTwo}
					positioningOptions={
						consultancyContent?.textImageTwo
							?.backgroundAestheticsLocationPositioningOptions
					}
					// Display Options
					displayThreeSquaresOption={
						consultancyContent?.textImageTwo?.displayThreeSquaresOption
					}
					selectBackgroundAestheticsOptions={
						consultancyContent?.textImageTwo?.selectBackgroundAestheticsOptions
					}
					displayQuoteOption={
						consultancyContent?.textImageTwo?.displayQuoteOption
					}
					displayImageOption={
						consultancyContent?.textImageTwo?.displayImageOption
					}
					displayBoldParagraphOption={
						consultancyContent?.textImageTwo?.displayBoldParagraphOption
					}
					displayButtonOption={
						consultancyContent?.textImageTwo?.displayButtonOption
					}
					displayBackgroundAestheticsOptions={
						consultancyContent?.textImageTwo?.displayBackgroundAestheticsOptions
					}
				/>

				{/* BULLET POINTS TWO */}
				<BulletPoints
					columnOne={consultancyContent?.bulletPointsTwo?.columnOne}
					columnTwo={consultancyContent?.bulletPointsTwo?.columnTwo}
					buttonLink={consultancyContent?.bulletPointsTwo?.buttonLink}
					// Display Options
					displaySubtitleOption={
						consultancyContent?.bulletPointsTwo?.displaySubtitleOption
					}
					displayBackgroundAestheticsOptions={
						consultancyContent?.bulletPointsTwo
							?.displayBackgroundAestheticsOptions
					}
					selectBackgroundAestheticsOptions={
						consultancyContent?.bulletPointsTwo
							?.selectBackgroundAestheticsOptions
					}
				/>

				{/* TEXT IMAGE QUOTE THREE */}
				<TextImageQuote
					title={consultancyContent?.textImageThree?.title}
					quoteText={consultancyContent?.textImageThree?.quoteText}
					personName={consultancyContent?.textImageThree?.personName}
					image={consultancyContent?.textImageThree?.image?.sourceUrl}
					buttonLink={consultancyContent?.textImageThree?.buttonLink}
					paragraphOne={consultancyContent?.textImageThree?.paragraphOne}
					paragraphTwo={consultancyContent?.textImageThree?.paragraphTwo}
					positioningOptions={
						consultancyContent?.textImageThree
							?.backgroundAestheticsLocationPositioningOptions
					}
					// Display Options
					displayThreeSquaresOption={
						consultancyContent?.textImageThree?.displayThreeSquaresOption
					}
					selectBackgroundAestheticsOptions={
						consultancyContent?.textImageThree
							?.selectBackgroundAestheticsOptions
					}
					displayQuoteOption={
						consultancyContent?.textImageThree?.displayQuoteOption
					}
					displayImageOption={
						consultancyContent?.textImageThree?.displayImageOption
					}
					displayBoldParagraphOption={
						consultancyContent?.textImageThree?.displayBoldParagraphOption
					}
					displayButtonOption={
						consultancyContent?.textImageThree?.displayButtonOption
					}
					displayBackgroundAestheticsOptions={
						consultancyContent?.textImageThree
							?.displayBackgroundAestheticsOptions
					}
				/>

				{/* BULLET POINTS THREE */}
				<BulletPoints
					columnOne={consultancyContent?.bulletPointsThree?.columnOne}
					columnTwo={consultancyContent?.bulletPointsThree?.columnTwo}
					buttonLink={consultancyContent?.bulletPointsThree?.buttonLink}
					// Display Options
					displaySubtitleOption={
						consultancyContent?.bulletPointsThree?.displaySubtitleOption
					}
					displayBackgroundAestheticsOptions={
						consultancyContent?.bulletPointsThree
							?.displayBackgroundAestheticsOptions
					}
					selectBackgroundAestheticsOptions={
						consultancyContent?.bulletPointsThree
							?.selectBackgroundAestheticsOptions
					}
				/>

				{/* TESTIMONIAL */}
				<Testimonial
					// Content
					title={consultancyContent?.testimonialSlider?.title}
					testimonialContent={
						consultancyContent?.testimonialSlider?.testimonialContent
					}
					// Display Options
					displayBackgroundAesthetics={
						consultancyContent?.testimonialSlider?.displayBackgroundAesthetics
					}
				/>

				{/* CASE STUDIES */}
				<CaseStudies
					title={consultancyContent?.caseStudies?.title}
					paragraph={consultancyContent?.caseStudies?.paragraph}
					content={caseStudiesContent?.caseStudiesContent}
				/>

				{/* CTA ONE */}
				<ContactBanner
					title={consultancyContent?.contactUsBanner?.title}
					paragraph={consultancyContent?.contactUsBanner?.paragraph}
					buttonLink={consultancyContent?.contactUsBanner?.buttonLink}
				/>

				{/* READ BLOGS */}
				<ReadBlogs
					title={consultancyContent?.readOurBlogs?.title}
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

export default consultancy;

export async function getStaticProps() {
	const getConsultancyContent = gql`
		{
			mainContent: pages(where: {id: 331}) {
				edges {
					node {
						ConsultancyPage {
							heroSection {
								title
								heroImage {
									sourceUrl
								}
							}
							readOurBlogs {
								title
							}
							testimonialSlider {
								title
								displayBackgroundAestheticsOption
								testimonialContent {
									personName
									paragraph
								}
							}
							caseStudies {
								title
								paragraph
							}
							contactUsBanner {
								title
								paragraph
								buttonLink {
									url
									title
									target
								}
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
							bulletPoints {
								selectBackgroundAestheticsOptions
								displaySubtitleOption
								displayBackgroundAestheticsOptions
								buttonLink {
									url
									title
									target
								}
								columnOne {
									title
									bulletPoints {
										subtitle
										paragraph
									}
								}
								columnTwo {
									title
									bulletPoints {
										subtitle
										paragraph
									}
								}
							}
							textImage {
								title
								selectBackgroundAestheticsOptions
								paragraphTwo
								paragraphOne
								displayThreeSquaresOption
								displayQuoteOption
								displayImageOption
								displayButtonOption
								displayBoldParagraphOption
								displayBackgroundAestheticsOptions
								backgroundAestheticsLocationPositioningOptions {
									top
									right
									left
									bottom
								}
								buttonLink {
									url
									title
									target
								}
								image {
									sourceUrl
								}
							}
							bulletPointsTwo {
								selectBackgroundAestheticsOptions
								displaySubtitleOption
								displayBackgroundAestheticsOptions
								buttonLink {
									url
									title
									target
								}
								columnOne {
									title
									bulletPoints {
										subtitle
										paragraph
									}
								}
								columnTwo {
									title
									bulletPoints {
										subtitle
										paragraph
									}
								}
							}
							textImageTwo {
								title
								selectBackgroundAestheticsOptions
								paragraphTwo
								paragraphOne
								displayThreeSquaresOption
								displayQuoteOption
								displayImageOption
								displayButtonOption
								displayBoldParagraphOption
								displayBackgroundAestheticsOptions
								backgroundAestheticsLocationPositioningOptions {
									top
									right
									left
									bottom
								}
								buttonLink {
									url
									title
									target
								}
								image {
									sourceUrl
								}
							}
							bulletPointsThree {
								selectBackgroundAestheticsOptions
								displaySubtitleOption
								displayBackgroundAestheticsOptions
								buttonLink {
									url
									title
									target
								}
								columnOne {
									title
									bulletPoints {
										subtitle
										paragraph
									}
								}
								columnTwo {
									title
									bulletPoints {
										subtitle
										paragraph
									}
								}
							}
							textImageThree {
								title
								selectBackgroundAestheticsOptions
								paragraphTwo
								paragraphOne
								displayThreeSquaresOption
								displayQuoteOption
								displayImageOption
								displayButtonOption
								displayBoldParagraphOption
								displayBackgroundAestheticsOptions
								backgroundAestheticsLocationPositioningOptions {
									top
									right
									left
									bottom
								}
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
					}
				}
			}
		}
	`;

	const response = await client.query({
		query: getConsultancyContent,
	});

	const navbarContent = await getNavbarContent();
	const footerContent = await getFooterContent();
	const readBlogsContent = await getReadBlogsContent();
	const caseStudiesContent = await getCaseStudiesContent();

	return {
		props: {
			navbarContent,
			consultancyContent:
				response?.data?.mainContent?.edges[0]?.node?.ConsultancyPage,
			caseStudiesContent,
			readBlogsContent,
			footerContent,
		},
		revalidate: 1,
	};
}
