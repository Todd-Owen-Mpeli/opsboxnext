/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";

const ContactBanner = (props) => {
	function createParagraphMarkup() {
		return {
			__html: DOMPurify.sanitize(`${props?.paragraph}`),
		};
	}

	/* Check if Button Link content is null
	 And Displays content if it isn't null */
	function isButtonLink(isButtonLink) {
		let contentStyling;
		const tailwindStyling =
			"py-2 px-8 w-[fit-content] text-white bg-blue hover:bg-darkblue hover:ease-in-out hover:duration-[0.5s]";
		if (isButtonLink === null) {
			contentStyling = `hidden ${tailwindStyling}`;
		} else {
			contentStyling = `block ${tailwindStyling}`;
		}
		return contentStyling;
	}

	return (
		<div className="my-2 py-4 bg-yellow z-50">
			<div className="container mx-auto">
				<div className="flex flex-col gap-8 p-2 lg:gap-0 md:py-1 md:px-6 md:flex-row justify-between items-center">
					<div className="text-white">
						<div
							className="text-base text-center md:text-left"
							dangerouslySetInnerHTML={createParagraphMarkup()}
						/>
						<h2 class="py-1 text-xl text-center md:text-left leading-normal font-[600]">
							{props?.title}
						</h2>
					</div>
					<div className={isButtonLink(props?.buttonLink?.url)}>
						<Link
							href={`${props?.buttonLink?.url}`}
							className="uppercase font-[600] text-base"
							target={`${props?.buttonLink?.target}`}
						>
							{props?.buttonLink?.title}
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactBanner;
