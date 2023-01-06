import Link from "next/link";
const NavbarMenuLinks = (props) => {
	return (
		<>
			<button className="flex justify-center items-center space-x-4 w-full py-6 border-b border-white border-solid">
				<Link
					href={`${props?.linkUrl}`}
					className="text-base text-center text-white hover:text-yellow hover:ease-in-out hover:duration-[0.5s]"
				>
					{props?.linkName}
				</Link>
			</button>
		</>
	);
};

export default NavbarMenuLinks;
