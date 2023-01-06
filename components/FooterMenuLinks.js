import Link from "next/link";
const FooterMenuLinks = (props) => {
	return (
		<>
			<Link
				href={`${props?.linkUrl}`}
				className="text-tiny hover:text-yellow hover:ease-in-out hover:duration-[0.5s]"
			>
				{props?.linkName}
			</Link>
		</>
	);
};

export default FooterMenuLinks;
