import Link from 'next/link'
export default function DashNav(props) {

    return (
        <>
            <header className="fixed top-0 z-20 flex items-center w-full h-24 p-6 px-1 pt-2 pb-1 mt-0 bg-gray-800 justify-left md:pt-1">
                <img className="ml-5 rounded-full w-14" src={props.user.picture} alt={props.user.name} />
                <nav className="flex justify-end w-full h-auto px-1 pt-2 pb-1 mt-0 bg-gray-800 md:pt-1">
                    {/* <Link href="/">
                        <a className="mr-4">Admin View</a>
                    </Link> */}
                    <Link href="/about">
                        <a className="mr-5 text-white">About us</a>
                    </Link>
                    <Link href="/overview">
                        <a className="mr-5 text-white">Logout</a>
                    </Link>
                </nav>
            </header>
            
        </>
    )

}