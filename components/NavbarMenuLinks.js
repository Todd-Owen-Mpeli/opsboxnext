import Link from "next/link";
const NavbarMenuLinks = (props) => {
	return (
		<>
			<a
				className="text-tiny text-white hover:text-yellow hover:ease-in-out hover:duration-200"
				href={props?.linkUrl}
			>
				{props?.linkName}
			</a>
		</>
	);
};

export default NavbarMenuLinks;
