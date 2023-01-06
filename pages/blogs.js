/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import {gql} from "@apollo/client";
import {client} from "../lib/apollo";
import {getNavbarContent} from "../lib/navbarContent";
import {getFooterContent} from "../lib/footerContent";

// Components
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import FooterTwo from "../components/FooterTwo";
import CaseStudies from "../components/CaseStudies";
import CaseStudiesCardsTwo from "../components/CaseStudiesCardsTwo";

const blogs = ({
	navbarContent,
	pageContent,
	blogsContent,
	caseStudiesContent,
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
					title={pageContent?.heroSection?.title}
					backgroundImage={pageContent?.heroSection?.heroImage?.sourceUrl}
				/>

				{/* !-- Background Aesthetics (Grey Squares) --> */}
				<div className="backgroundAesthetics relative z-0">
					<div className="pageBackgroundIcons absolute left-[-100px] top-[-110px] opacity-[5%]">
						<img
							className="mx-auto w-[300%] h-[650px] object-contain"
							src="<?php echo get_template_directory_uri() . '/src/svg/backgroundIcons/IconThree.svg' ?>"
							alt="Background Squares"
						/>
					</div>
				</div>

				{/* BLOG POSTS- */}
				<div className="py-20 z-50">
					<div className="container mx-auto">
						{blogsContent.map((keys) => (
							<CaseStudiesCardsTwo
								Key={keys?.id}
								title={keys?.node?.title}
								content={keys?.node?.content}
								link={keys?.node?.link}
								featuredImage={keys?.node?.featuredImage?.node?.sourceUrl}
							/>
						))}
					</div>
				</div>

				{/* CASE STUDIES */}
				<CaseStudies
					title={pageContent?.caseStudies?.title}
					paragraph={pageContent?.caseStudies?.paragraph}
					content={caseStudiesContent}
				/>
			</main>

			{/* <!--===== FOOTER =====--> */}
			<FooterTwo
				footerContent={footerContent?.footerContent}
				menuLinks={footerContent?.footerMenu}
			/>
		</>
	);
};

export default blogs;

export async function getServerSideProps() {
	const getBlogsContent = gql`
		{
			mainContent: pages(where: {id: 1166}) {
				edges {
					node {
						blogsArchivePageOptions {
							heroSection {
								title
								heroImage {
									sourceUrl
								}
							}
							titleParagraph {
								paragraph
								title
							}
							caseStudies {
								title
								paragraph
							}
						}
					}
				}
			}
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
			blogPost: posts(
				where: {orderby: {field: DATE, order: DESC}, status: PUBLISH}
				first: 10
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
		query: getBlogsContent,
	});

	const navbarContent = await getNavbarContent();
	const footerContent = await getFooterContent();

	return {
		props: {
			navbarContent,
			pageContent:
				response?.data?.mainContent?.edges[0]?.node?.blogsArchivePageOptions,
			blogsContent: response.data?.blogPost?.edges,
			caseStudiesContent: response.data?.caseStudies?.edges,
			footerContent,
		},
	};
}
