const SingleQuote = (props) => {
	return (
		<section className="py-2">
			<div className="container mx-auto">
				<div className="p-5 px-12">
					<h5 class="my-3 text-lg leading-[2.25rem] font-[400] text-left text-blue">
						{props?.quoteText}
					</h5>
					<h6 class="text-base font-[500] text-right text-blue">
						{props?.personName}
					</h6>
				</div>
			</div>
		</section>
	);
};

export default SingleQuote;
