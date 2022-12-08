const Hero = (props) => {
	return (
		<section className="heroSection">
			<div className="content">
				<div className="topSection flex flex-col justify-end relative z-50 h-[85vh] bg-cover bg-center bg-no-repeat">
					<style jsx>{`
						.topSection {
							background-image: url("${props.backgroundImage}");
						}
					`}</style>
					<div className="title flex justify-center items-center py-10 bg-blue bg-opacity-75">
						<h1 className="text-white font-bold text-4xl text-center leading-8">
							{props?.title}
						</h1>
					</div>
				</div>
				{/* <!-- SVG Icons  --> */}
				<div className="mx-auto">
					<div className="flex flex-col relative z-[5] mb-0 lg:mb-14">
						<div className="flex flex-row overflow-hidden space-x-4 px-8 justify-center items-center relative top-[0px] lg:top-[-65px]">
							<img
								className="w-[350px] max-h-[350px]"
								width="350px"
								height="350px"
								src="/svg/HeroIcons/IconOne.svg"
							/>
							<img
								className="w-[350px] max-h-[350px]"
								width="350px"
								height="350px"
								src="/svg/HeroIcons/IconTwo.svg"
							/>
							<img
								className="w-[350px] max-h-[350px]"
								width="350px"
								height="350px"
								src="/svg/HeroIcons/IconThree.svg"
							/>
							<img
								className="w-[350px] max-h-[350px]"
								width="350px"
								height="350px"
								src="/svg/HeroIcons/IconFour.svg"
							/>
							<img
								className="w-[350px] max-h-[350px]"
								width="350px"
								height="350px"
								src="/svg/HeroIcons/IconFive.svg"
							/>
						</div>
						<h2 className="uppercase flex justify-center items-center font-medium text-xl text-grey">
							OPS-BOX WAY
						</h2>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
