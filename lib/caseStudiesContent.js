import {gql} from "@apollo/client";
import {client} from "./apollo";

// Case Studies Content (Menu Links)
export async function getCaseStudiesContent() {
	const content = gql`
		{
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
		}
	`;

	const response = await client.query({
		query: content,
	});

	return {
		caseStudiesContent: response.data?.caseStudies?.edges,
	};
}
