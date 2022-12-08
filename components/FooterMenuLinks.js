import Link from "next/link";
const FooterMenuLinks = (props) => {
	return (
		<>
			<a
				className="text-tiny hover:text-yellow hover:ease-in-out hover:duration-200"
				href={props?.linkUrl}
			>
				{props?.linkName}
			</a>
		</>
	);
};

export default FooterMenuLinks;
