import {client} from "../lib/apollo";
import {ApolloProvider} from "@apollo/client/react";

// Components
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// Styling
import "../styles/globals.scss";

function MyApp({
	Component,
	pageProps,
	// pageTitle,
	// navbarContent,
	// navbarMenu,
	// footerContent,
	// footerMenu,
}) {
	return (
		<ApolloProvider client={client}>
			{/* <!--===== NAVBAR =====--> */}
			{/* <Navbar navbarContent={navbarContent} menuLinks={navbarMenu} /> */}

			<Component {...pageProps} />

			{/* <!--===== FOOTER =====--> */}
			{/* <Footer footerContent={footerContent} menuLinks={footerMenu} /> */}
		</ApolloProvider>
	);
}

export default MyApp;

// export async function getServerSideProps() {
// 	const getContent = gql`
// 		{
// 			themesOptions(
// 				where: {id: 1604, status: PUBLISH, name: "Themes Options"}
// 			) {
// 				edges {
// 					node {
// 						themesOptions {
// 							siteTitle
// 							twitterLink
// 							phoneNumber
// 							linkedinLink
// 							email
// 							emailOptionTwo
// 							contactAddress
// 							contactPostcode
// 							contactPostcodeText
// 							phoneNumberOptionTwo
// 							companyLogo {
// 								sourceUrl
// 							}
// 						}
// 					}
// 				}
// 			}
// 			serviceMenuLinks: menuItems(where: {location: SERVICES}) {
// 				edges {
// 					node {
// 						url
// 						label
// 					}
// 				}
// 			}
// 			aboutMenuLinks: menuItems(where: {location: ABOUT}) {
// 				edges {
// 					node {
// 						url
// 						label
// 					}
// 				}
// 			}
// 			remainingMenuLinks: menuItems(where: {location: PRIMARY}) {
// 				edges {
// 					node {
// 						url
// 						label
// 					}
// 				}
// 			}
// 			footerMenuLinks: menuItems(where: {location: FOOTER}) {
// 				edges {
// 					node {
// 						url
// 						label
// 					}
// 				}
// 			}
// 		}
// 	`;

// 	const response = await client.query({
// 		query: getContent,
// 	});

// 	return {
// 		props: {
// 			pageTitle:
// 				response?.data?.themesOptions?.edges[0]?.node?.themesOptions?.siteTitle,
// 			navbarContent:
// 				response?.data?.themesOptions?.edges[0]?.node?.themesOptions,
// 			navbarMenu: [
// 				response?.data?.serviceMenuLinks?.edges,
// 				response?.data?.aboutMenuLinks?.edges[0],
// 				response?.data?.remainingMenuLinks?.edges,
// 			],
// 			footerContent:
// 				response?.data?.themesOptions?.edges[0]?.node?.themesOptions,
// 			footerMenu: response?.data?.footerMenuLinks?.edges,
// 		},
// 	};
// }
