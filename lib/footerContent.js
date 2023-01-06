import {gql} from "@apollo/client";
import {client} from "../lib/apollo";

// Footer Content (Menu Links)
export async function getFooterContent() {
	const content = gql`
		{
			themesOptions(
				where: {id: 1604, status: PUBLISH, name: "Themes Options"}
			) {
				edges {
					node {
						themesOptions {
							email
							twitterLink
							phoneNumber
							linkedinLink
							contactAddress
							contactPostcode
							contactPostcodeText
						}
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
		}
	`;

	const response = await client.query({
		query: content,
	});

	return {
		footerContent: response?.data?.themesOptions?.edges[0]?.node?.themesOptions,
		footerMenu: response?.data?.footerMenuLinks?.edges,
	};
}
