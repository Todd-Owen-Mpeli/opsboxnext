import Head from "next/head";
import {gql} from "@apollo/client";
import {client} from "../lib/apollo";

// Components
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReadBlogs from "../components/ReadBlogs";
import TextImageQuote from "../components/TextImageQuote";
import TitleTwoParagraphButton from "../components/TitleTwoParagraphButton.js";
import TitleAndParagraph from "../components/TitleAndParagraph";
import ContactForm from "../components/ContactForm";

const contact = ({
	pageTitle,
	navbarContent,
	contactPageContent,
	contactForm,
	readBlogsContent,
	navbarMenu,
	footerContent,
	footerMenu,
}) => {
	// console.log(contactForm);

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
					title={contactPageContent?.heroSection?.title}
					backgroundImage={
						contactPageContent?.heroSection?.heroImage?.sourceUrl
					}
				/>

				{/* TITLE AND PARAGRAPH */}
				<TitleAndParagraph
					title={contactPageContent?.titleParagraphs?.title}
					paragraph={contactPageContent?.titleParagraphs?.paragraph}
				/>

				{/* TEXT IMAGE QUOTE */}
				<TextImageQuote
					title={contactPageContent?.textQuoteImage?.title}
					quoteText={contactPageContent?.textQuoteImage?.quoteText}
					personName={contactPageContent?.textQuoteImage?.personName}
					image={contactPageContent?.textQuoteImage?.image?.sourceUrl}
					buttonLink={contactPageContent?.textQuoteImage?.buttonLink}
					paragraphOne={contactPageContent?.textQuoteImage?.paragraphOne}
					paragraphTwo={contactPageContent?.textQuoteImage?.paragraphTwo}
					positioningOptions={
						contactPageContent?.textQuoteImage
							?.backgroundAestheticsLocationPositioningOptions
					}
					// Display Options
					displayThreeSquaresOption={
						contactPageContent?.textQuoteImage?.displayThreeSquaresOption
					}
					selectBackgroundAestheticsOptions={
						contactPageContent?.textQuoteImage
							?.selectBackgroundAestheticsOptions
					}
					displayQuoteOption={
						contactPageContent?.textQuoteImage?.displayQuoteOption
					}
					displayImageOption={
						contactPageContent?.textQuoteImage?.displayImageOption
					}
					displayBoldParagraphOption={
						contactPageContent?.textQuoteImage?.displayBoldParagraphOption
					}
					displayButtonOption={
						contactPageContent?.textQuoteImage?.displayButtonOption
					}
					displayBackgroundAestheticsOptions={
						contactPageContent?.textQuoteImage
							?.displayBackgroundAestheticsOptions
					}
				/>

				{/* CONTACT FORM */}
				<ContactForm title={contactForm?.title} contactForm={contactForm} />

				{/* READ BLOGS */}
				<ReadBlogs
					title={contactPageContent?.readOurBlogsTitle}
					readBlogsContent={readBlogsContent}
				/>
			</main>

			{/* <!--===== FOOTER =====--> */}
			<Footer footerContent={footerContent} menuLinks={footerMenu} />
		</>
	);
};

export default contact;

export async function getStaticProps() {
	const getContactPageContent = gql`
		{
			mainContent: pages(where: {status: PUBLISH, id: 335}) {
				edges {
					node {
						contactPage {
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
							readOurBlogsTitle
							heroSection {
								title
								heroImage {
									sourceUrl
								}
							}
							titleParagraphs {
								title
								paragraph
							}
						}
					}
				}
			}
			gfForms(where: {formIds: "2"}) {
				nodes {
					formId
					title
					submitButton {
						text
					}
					formFields(first: 10) {
						nodes {
							... on NameField {
								id
								label
								type
							}
							... on TextField {
								id
								type
								label
							}
							... on EmailField {
								id
								type
								label
							}
							... on CaptchaField {
								id
								label
								type
							}
							... on PhoneField {
								id
								label
								type
							}
							... on TextAreaField {
								id
								type
								label
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
		query: getContactPageContent,
	});

	return {
		revalidate: 1,
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
			contactPageContent:
				response?.data?.mainContent?.edges[0]?.node?.contactPage,
			contactForm: response?.data?.gfForms?.nodes[0],
			readBlogsContent: response?.data?.readBlogsContent?.edges,
			footerContent:
				response?.data?.themesOptions?.edges[0]?.node?.themesOptions,
			footerMenu: response?.data?.footerMenuLinks?.edges,
		},
	};
}