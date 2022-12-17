/* eslint-disable @next/next/no-img-element */
const TitleAndParagraph = (props) => {
	return (
		<section className="py-12 bg-white">
			{/* Content Section */}
			<div className="container mx-auto">
				<div className="content px-6">
					<h2 className="text-center text-3xl text-blue py-4 px-5">
						{props?.title}
					</h2>
					<p className="text-tiny text-center py-4">{props?.paragraph}</p>
				</div>
			</div>

			{/* <!-- Background Aesthetics Icons --> */}
			<div className="mt-10 py-3">
				<img
					className="mx-auto w-[100%] h-[80px] object-contain"
					src="/svg/threeContentSquares/threeBackgroundSquaresIcons.svg"
					alt="Background Squares"
				/>
			</div>
		</section>
	);
};

export default TitleAndParagraph;
