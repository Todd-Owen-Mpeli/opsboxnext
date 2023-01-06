import {client} from "../lib/apollo";
import {ApolloProvider} from "@apollo/client/react";

// Components
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// Styling
import "../styles/globals.scss";

function MyApp({Component, pageProps}) {
	return (
		<ApolloProvider client={client}>
			{/* <!--===== NAVBAR =====--> */}
			{/* <Navbar navbarContent={navbarContent} menuLinks={navbarMenu} /> */}

			<Component {...pageProps} />

			{/* <!--===== FOOTER =====--> */}
			{/* <Footer footerContent={footerContent?.footerContent} menuLinks={footerContent?.footerMenu}
			/> */}
		</ApolloProvider>
	);
}

export default MyApp;
