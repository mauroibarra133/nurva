import Link from 'next/link';

function NavMenuPhone({isOpen} : {isOpen : Boolean}) {
    return ( 
        <div className={`fixed flex justify-center items-center w-full h-fit bg-white sm:hidden ${!isOpen ? '-translate-y-80' : 'translate-y-0'} transition-transform duration-500 z-`}>
        <ul className="flex justify-center items-center gap-4 flex-col w-full px-8 max-w-md">
            <li className='flex justify-center items-center py-2 px-4 border-b border-nurva-blue-600 w-full hover:cursor-pointer group'><Link href={'#'} className='group-hover:ml-4 transition-all duration-200'>Home</Link></li>
            <li className='flex justify-center items-center py-2 px-4 border-b border-nurva-blue-600 w-full hover:cursor-pointer group'><Link href={'#'} className='group-hover:ml-4 transition-all duration-200'>About</Link></li>
            <li className='flex justify-center items-center py-2 px-4 border-b border-nurva-blue-600 w-full hover:cursor-pointer group'><Link href={'#'} className='group-hover:ml-4 transition-all duration-200'>Pricing</Link></li>
            <li className='flex justify-center items-center py-2 px-4 border-b border-nurva-blue-600 w-full hover:cursor-pointer group'><Link href={'#'} className='group-hover:ml-4 transition-all duration-200'>Contact</Link></li>
            <li className='flex justify-center items-center py-2 px-4 border-b border-nurva-blue-600 w-full hover:cursor-pointer group'><Link href={'#'} className='group-hover:ml-4 transition-all duration-200'>Signup</Link></li>
        </ul>
        </div>

     );
}

export default NavMenuPhone;