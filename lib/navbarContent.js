import {gql} from "@apollo/client";
import {client} from "./apollo";

// Navbar Content (Menu Links)
export async function getNavbarContent() {
	const content = gql`
		{
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
		}
	`;

	const response = await client.query({
		query: content,
	});

	return {
		pageTitle:
			response?.data?.themesOptions?.edges[0]?.node?.themesOptions?.siteTitle,
		navbarContent: response?.data?.themesOptions?.edges[0]?.node?.themesOptions,
		navbarMenu: [
			response?.data?.serviceMenuLinks?.edges,
			response?.data?.aboutMenuLinks?.edges[0],
			response?.data?.remainingMenuLinks?.edges,
		],
	};
}
