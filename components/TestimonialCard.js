const TestimonialCard = (props) => {
	return (
		<div>
			<div>
				<h2>{props?.personName}</h2>
				<p>{props?.paragraph}</p>
			</div>
		</div>
	);
};

export default TestimonialCard;
