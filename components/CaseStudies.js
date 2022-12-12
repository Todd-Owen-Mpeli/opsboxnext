import CaseStudiesCards from "./CaseStudiesCards";

const CaseStudies = (props) => {
	/* Calculates How many iterations and gets 
    the next object content per iteration */
	let iterationCount = 0;

	return (
		<section className="caseStudies">
			<div className="content flex flex-col justify-center items-center">
				<div className="topSection flex flex-col">
					<h5 className="uppercase text-center text-grey text-xs">
						OPS-BOX WAY
					</h5>
					<h2 className="text-center text-3xl text-blue px-5">
						{props?.title}
					</h2>
					<p className="text-center text-tiny text-black py-8 px-5 w-full lg:w-[50rem]">
						{props?.paragraph}
					</p>
				</div>
				<div className="bottomSection pt-4 flex flex-col lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-3 gap-1 justify-center items-center">
					{/* Menu Array from Wordpress */}
					{props?.caseStudiesContent.map((keys) => (
						<CaseStudiesCards
							Key={iterationCount++}
							title={keys?.node?.title}
							content={keys?.node?.content}
							link={keys?.node?.link}
							featuredImage={keys?.node?.featuredImage?.node?.sourceUrl}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default CaseStudies;
