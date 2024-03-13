import Link from "next/link";

function NavLink({nameLink } : {nameLink : string}) {
    return ( 

    <li className="flex justify-center items-center 
    border border-solid border-nurva-blue-800 rounded-lg 
    py-2 px-4 w-fit hover:bg-nurva-lblue-200  transition-colors hover:cursor-pointer" >
        <Link href={"#"}  className={` text-nurva-blue-800 font-semibold text-xs md:text-sm`}>{nameLink}</Link>
    </li>

     );
}
export default NavLink;