import Link from 'next/link'
export default function Nav() {

    return (
        <>
            <header className="flex items-center w-full h-20 p-6 mb-10 bg-gray-500 justify-left">
                <a href="/landing" className="w-6/12 text-2xl font-semibold hover:text-blue-300">Rubric.</a>
                <nav className="flex items-center justify-end w-full ">
                    {/* <Link href="/">
                        <a className="mr-4">Admin View</a>
                    </Link> */}
                    <Link href="/about">
                        <a className="ml-2 text-lg hover:text-blue-300">About us</a>
                    </Link>
                    <Link href="https://github.com/Online-Rubric">
                        <button className="p-2 ml-4 text-blue-300 border-2 border-blue-300 hover:border-gray-200 hover:text-gray-200" target="_blank">See on Github</button>
                    </Link>
                    {/* <a className="ml-2 text-lg" href="/api/auth/logout">Logout</a> */}
                </nav>
            </header>
            
        </>
    )

}