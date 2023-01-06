/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import TeamMemberCard from "./TeamMemberCard";
import styles from "../styles/components/TeamMember.module.scss";

const TeamMember = (props) => {
	/* Check if Button content is null And Allows 
	the user to display or not Display the Button */
	function isButtonContent(isButtonContent) {
		let displayButtonOption;
		const styling =
			"py-2 px-8 w-[fit-content] bg-yellow hover:bg-transparent border-2 border-yellow hover:border-orange";
		if (isButtonContent === "Yes") {
			displayButtonOption = `block ${styling}`;
		} else if (isButtonContent === "No") {
			displayButtonOption = `hidden ${styling}`;
		} else if (isButtonContent === null) {
			displayBoldText = `hidden ${styling}`;
		}
		return displayButtonOption;
	}

	return (
		<section className={styles.teamMembers}>
			<div className="container mx-auto z-30">
				{/* Background Aesthetics (Grey Squares) */}
				<div className="backgroundAesthetics relative z-0">
					<div className="pageBackgroundIcons absolute left-[-310px] top-[675px] opacity-[5%]">
						<img
							className="mx-auto w-[300%] h-[650px] object-contain"
							src="/svg/backgroundIcons/IconThree.svg"
							alt="Background Squares"
						/>
					</div>
				</div>
				<div className="z-50">
					<div className="flex flex-col gap-8 p-8 lg:grid lg:grid-cols-2 lg:gap-16 lg:py-6 lg:px-32">
						{/* Menu Array from Wordpress */}
						{props?.teamMembersContent.map((keys) => (
							<TeamMemberCard
								Key={keys?.id}
								name={keys?.information?.name}
								jobPosition={keys?.information?.jobPosition}
								emailAddress={keys?.information?.emailAddress}
								description={keys?.information?.description}
								profileImage={keys?.information?.profileImage?.sourceUrl}
							/>
						))}
					</div>
					<div className="py-10 z-50">
						<div className="buttonSection flex justify-center">
							<div className={isButtonContent(props?.buttonLink?.url)}>
								<Link
									href={`${props?.buttonLink?.url}`}
									className="uppercase text-white text-sm tracking-[0.15rem]"
									target={`${props?.buttonLink?.target}`}
								>
									{props?.buttonLink?.title}
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TeamMember;
