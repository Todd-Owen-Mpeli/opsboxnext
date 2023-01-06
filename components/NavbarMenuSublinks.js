import Link from "next/link";
const NavbarMenuSublinks = (props) => {
	return (
		<>
			<Link
				href={`${props?.linkUrl}`}
				className="text-[0.85rem] my-4 text-white hover:border-b hover:border-orange hover:border-solid hover:text-yellow hover:ease-in-out hover:duration-[0.5s]"
			>
				{props?.linkName}
			</Link>
		</>
	);
};

export default NavbarMenuSublinks;
