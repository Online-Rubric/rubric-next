import Link from 'next/link'
export default function Nav() {

    return (
        <>
            <header className="fixed top-0 z-20 flex items-center w-full h-24 p-6 px-1 pt-2 pb-1 mt-0 bg-gray-800 border-t justify-left md:pt-1">
                <h1 className="text-2xl font-semibold text-white">Whiteboard Rubric</h1>
                <nav className="fixed top-0 z-20 flex justify-end w-full h-auto px-1 pt-2 pb-1 mt-0 bg-gray-800 md:pt-1">
                    {/* <Link href="/">
                        <a className="mr-4">Admin View</a>
                    </Link> */}
                    <Link href="/about">
                        <a className="text-white">About us</a>
                    </Link>
                </nav>
            </header>
            
        </>
    )

}