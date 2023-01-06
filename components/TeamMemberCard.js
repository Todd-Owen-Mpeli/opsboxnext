/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {useState} from "react";
import DOMPurify from "isomorphic-dompurify";
import styles from "../styles/components/TeamMember.module.scss";

const TeamMemberCard = (props) => {
	function createProfileDescriptionMarkup() {
		return {
			__html: DOMPurify.sanitize(`${props?.description}`),
		};
	}

	// Display Drop Down Navigation
	const [profilesFullDescription, setIndividualProfiles] = useState(false);
	function revealProfilesFullDescription() {
		setIndividualProfiles(!profilesFullDescription);
	}

	return (
		<>
			<div className={styles.profileContent}>
				<div
					className="flex flex-col bg-center bg-cover bg-[no-repeat]"
					style={{
						backgroundImage: `url(${props?.profileImage})`,
					}}
				>
					<div className="h-[750px] bg-blue opacity-[55%] hover:opacity-[0%] hover:ease-in-out hover:duration-[0.5s]"></div>
					<div className="flex flex-col h-[25%] pt-10 pl-8 bg-blue text-left text-white">
						<div className="mb-6">
							<h2 className="uppercase font-bold">{props?.name}</h2>
						</div>
						<div className="flex flex-col">
							<div className="textSection">
								<p className="mb-2">{props?.jobPosition}</p>
								<Link href={`mailto: ${props?.emailAddress}`}>
									<span className="text-white hover:text-orange hover:ease-in-out hover:duration-[0.5s]">
										<span className="text-white">Email: </span>
										{props?.emailAddress}
									</span>
								</Link>
							</div>
							<div className="flex justify-end">
								<div className="p-6 w-[fit-content] bg-yellow hover:bg-orange hover:ease-in-out hover:duration-[0.5s]">
									<button onClick={revealProfilesFullDescription}>
										<Link
											className="uppercase text-white w-[fit-content]"
											href="#individualProfiles"
										>
											<img
												className="mx-auto w-[100%] h-[30px] object-contain"
												src="/svg/icons/arrowRight.svg"
												alt="Close PopUp Icon"
											/>
										</Link>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Pop Up : Full Profile Description */}
			{profilesFullDescription ? (
				<div
					id="individualProfiles"
					className="z-[999] fixed m-auto w-full xl:w-[1100px] h-[fit-content] top-0 left-0 right-0 bottom-0"
				>
					<div className="flex justify-center absolute">
						<button
							className="relative py-2 px-8 w-[100px] h-[100px] top-[0px] right-[-1000px] z-[999] bg-yellow border-50 order-2 border-yellow hover:bg-transparent hover:bg-blue hover:border-orange"
							onClick={revealProfilesFullDescription}
						>
							<span className="uppercase text-white w-[100px] h-[100px]">
								<img
									className="mx-auto w-[100%] h-[100%] object-contain"
									src="/svg/icons/ClosePopupButton.svg"
									alt="Close PopUp Icon"
								/>
							</span>
						</button>
					</div>
					<div className="flex flex-col lg:flex-row p-2 bg-white border-orange border-2 hover:border-orange border-solid">
						<div className="w-full lg:w-1/2 h-[fit-content] object-cover">
							<img
								className="w-full h-[250px] lg:h-[700px] lg:w-[100%] lg:max-h-[100%] object-cover"
								src={props?.profileImage}
								alt={`${props?.jobPosition}: ${props?.name} Profile Image`}
							/>
						</div>
						<div className="w-full lg:w-1/2 flex flex-col justify-between py-10 px-8 lg:px-12 lg:pb-12 lg:pt-2">
							<div className="flex flex-col ">
								<h2 className="text-2xl lg:text-4xl font-bold">
									{props?.name}
								</h2>
								<div className="my-4 max-w-[150px] md:max-w-[250px] h-[2px] bg-orange" />
								<h5 className="text-grey text-medium py-2">
									{props?.jobPosition}
								</h5>
								<div
									className="mt-3 text-tiny"
									dangerouslySetInnerHTML={createProfileDescriptionMarkup()}
								/>
							</div>
							<div className="mt-8 flex justify-center">
								<div className="py-2 px-8 w-[fit-content] text-white hover:text-orange bg-yellow hover:bg-transparent border-2 border-yellow hover:border-orange">
									<Link
										href={`mailto: ${props?.emailAddress}`}
										className="uppercase w-[fit-content]"
									>
										Email Me
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
};

export default TeamMemberCard;
