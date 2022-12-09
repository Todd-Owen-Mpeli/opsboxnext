import Link from "next/link";
const NavbarMenuSublinks = (props) => {
	return (
		<>
			<a
				className="text-[0.85rem] my-4 text-white hover:border-b hover:border-orange hover:border-solid hover:text-yellow hover:ease-in-out hover:duration-200"
				href={props?.linkUrl}
			>
				{props?.linkName}
			</a>
		</>
	);
};

export default NavbarMenuSublinks;
