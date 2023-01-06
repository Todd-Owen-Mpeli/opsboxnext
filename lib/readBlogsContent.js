import {gql} from "@apollo/client";
import {client} from "./apollo";

// Read Blogs Content (Menu Links)
export async function getReadBlogsContent() {
	const content = gql`
		{
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
		query: content,
	});

	return {
		readBlogsContent: response?.data?.readBlogsContent?.edges,
	};
}
