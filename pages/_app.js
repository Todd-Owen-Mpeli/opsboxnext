import {client} from "../lib/apollo";
import {ApolloProvider} from "@apollo/client/react";

// Styling
import "../styles/globals.scss";

function MyApp({Component, pageProps}) {
	return (
		<ApolloProvider client={client}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

export default MyApp;
