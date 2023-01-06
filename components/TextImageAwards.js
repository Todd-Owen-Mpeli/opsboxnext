/* eslint-disable @next/next/no-img-element */
import styles from "../styles/components/TextImageAwards.module.scss";

const TextImageAwards = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling = "hidden w-full md:w-[35rem]";
		} else {
			contentStyling = "block w-full md:w-[35rem]";
		}
		return contentStyling;
	}

	function createParagraphMarkup() {
		return {
			__html: DOMPurify.sanitize(`${props?.paragraph}`),
		};
	}

	return (
		<section className={styles.textImageAwards}>
			<div className="container mx-auto">
				<div className="flex flex-col">
					<div class="flex flex-col lg:flex-row gap-8 justify-between items-center py-12 px-2">
						<div class="my-auto flex flex-col w-full xl:w-1/2 px-8">
							<div class="w-full md:w-[40rem] text-left">
								<h5 class="uppercase text-grey">OPS-BOX WAY</h5>
								<h2 class="text-2xl md:text-4xl my-6 mt-3 w-full md:w-[35rem] text-blue">
									{props?.title}
								</h2>
								<div
									className={isParagraphContent(props?.paragraph)}
									dangerouslySetInnerHTML={createParagraphMarkup()}
								/>
							</div>
							<div class="mt-8 mx-auto lg:mx-0 flex flex-row gap-8 lg:justify-center items-start">
								<img
									class="w-full md:w-[175px] h-[300px] object-contain"
									width="175"
									height="300"
									src={props?.awardsOne}
									alt="Awards Image"
								/>
								<img
									class="w-full md:w-[400px] h-[275px] object-contain"
									width="400"
									height="275"
									src={props?.awardsTwo}
									alt="Awards Image"
								/>
							</div>
						</div>
						<div class="my-auto relative w-full xl:w-1/2">
							<div className={styles.colorBoxOne}></div>
							<img
								className="object-cover h-[500px]"
								src={props?.image}
								width="750"
								height="500"
								alt="Image One"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TextImageAwards;
