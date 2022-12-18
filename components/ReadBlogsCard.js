/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "../styles/components/ReadBlogs.module.scss";

const ReadBlogsCard = (props) => {
	/* Receives the current iteration number and sets the 
    Background Color a different color per iteration */
	let backgroundColor;

	switch (props?.iterationCount) {
		case 0:
			backgroundColor = "#f56a00";
			break;
		case 1:
			backgroundColor = "#FDA730";
			break;
		case 2:
			backgroundColor = "#5ea975";
			break;
		case 3:
			backgroundColor = "#cd5972";
			break;
	}

	return (
		<div
			className={styles.readBlogsCard}
			style={{
				background: `linear-gradient(
								0deg,
								rgba(4, 44, 86, 0.80),
								rgba(4, 44, 86, 0.80)
							), url(${props?.featuredImage})`,
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}
		>
			<div className={styles.Image}>
				<img
					src={props?.featuredImage}
					className="w-full h-[350px]"
					width={100}
					height={100}
					alt={`Article ${props?.title} Image`}
				/>
			</div>
			<div className={styles.hiddenTextContent}>
				<div className="content flex flex-col">
					{/* Desktop Version */}
					<article className="hidden md:block">
						<h5 className="uppercase text-white">ARTICLE</h5>
						<Link href={`${props?.link}`}>
							<h2 className="uppercase mt-3 font-semibold text-white text-medium md:text-lg">
								{props?.title}
							</h2>
						</Link>
						<div className="my-6 text-left text-white text-[0.85rem] leading-[1.5rem]">
							{`${props?.content.substring(0, 800)}...`}
						</div>
					</article>
					{/* Mobile Version */}
					<article className="block md:hidden">
						<h5 className="uppercase text-white">ARTICLE</h5>
						<Link href={`${props?.link}`}>
							<h2 className="uppercase mt-3 font-semibold text-white text-medium md:text-lg">
								{props?.title}
							</h2>
						</Link>
						<div className="my-6 text-left text-white text-[0.85rem] leading-[1.5rem]">
							{`${props?.content.substring(0, 800)}...`}
						</div>
					</article>
				</div>
				<div className="pt-10 justify-end">
					<div className="w-full h-full object-cover flex">
						<Link
							href={`${props?.link}`}
							className="uppercase font-semibold text-white hover:text-orange hover:ease-in-out hover:duration-200"
						>
							Read More
						</Link>
						<Link href={`${props?.link}`} className="my-auto ml-2">
							<img
								src="/svg/threeContentSquares/readMoreWhiteArrow.svg"
								alt="Arrow"
							/>
						</Link>
					</div>
				</div>
			</div>
			<div
				className={styles.textSection}
				style={{
					backgroundColor: `${backgroundColor}`,
				}}
			>
				<div className="text-left">
					<h5 className="uppercase text-white text-sm tracking-[0.25rem]">
						ARTICLE
					</h5>
					<Link href={`${props?.link}`}>
						<h2 className="uppercase mt-3 font-semibold text-white text-medium md:text-lg">
							{props?.title}
						</h2>
					</Link>
					<div className="my-6 text-left text-white text-[0.85rem] leading-[1.5rem]">
						{`${props?.content.substring(0, 250)}...`}
					</div>
				</div>
				<div className="pt-10">
					<div className="w-full h-full object-cover flex">
						<Link
							href={`${props?.link}`}
							className="uppercase font-semibold text-white hover:text-blue hover:ease-in-out hover:duration-200"
						>
							Read More
						</Link>
						<Link href={`${props?.link}`} className="my-auto ml-2">
							<img
								src="/svg/threeContentSquares/readMoreWhiteArrow.svg"
								alt="Arrow"
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReadBlogsCard;
