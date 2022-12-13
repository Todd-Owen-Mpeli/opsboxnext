import styles from "../styles/components/ReadBlogs.module.scss";
import ReadBlogsCard from "./ReadBlogsCard";

const ReadBlogs = (props) => {
	/* Calculates How many iterations and gets 
    the next object content per iteration */
	let iterationCount = 0;

	return (
		<section className={styles.readBlogs}>
			<div className="content flex flex-col justify-between items-center py-3 z-50">
				<div className="container mx-auto z-50">
					<div className="my-6 px-8">
						<h5 className="text-sm font-[400] text-center lg:text-left uppercase text-grey">
							OPS-BOX WAY
						</h5>
						<h2 className="text-3xl md:text-[2.5rem] text-center lg:text-left font-[400] leading-normal my-6 mt-3 text-blue">
							{props?.title}
						</h2>
					</div>
				</div>
				<div className="flex space-x-4 mb-[-250px]">
					{/* First Hidden Card for styling */}
					<div className="blogCardsHiddenDiv hidden sm:block w-1/3" />
					{/* Blogs Post Array (Limit 4) from Wordpress */}
					{props?.readBlogsContent.map((keys) => (
						<ReadBlogsCard
							Key={keys.id}
							title={keys?.node?.title}
							content={keys?.node?.content}
							link={keys?.node?.link}
							featuredImage={keys?.node?.featuredImage?.node?.sourceUrl}
							iterationCount={iterationCount++}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default ReadBlogs;
