import Link from 'next/link'
export default function Nav() {

    return (
        <>
            <header className="flex items-center w-full h-24 p-6 mb-10 bg-gray-500 border-b justify-left">
                <a href="/landing" className="w-6/12 text-2xl font-semibold hover:text-gray-300">Rubric.</a>
                <nav className="flex items-center justify-end w-full ">
                    {/* <Link href="/">
                        <a className="mr-4">Admin View</a>
                    </Link> */}
                    <Link href="/about">
                        <a className="ml-2 text-lg hover:text-gray-300">About us</a>
                    </Link>
                    <Link href="https://github.com/Online-Rubric">
                        <button className="p-2 ml-4 text-gray-200 border-2 hover:border-gray-900 hover:text-gray-100" target="_blank">See on Github</button>
                    </Link>
                    {/* <a className="ml-2 text-lg" href="/api/auth/logout">Logout</a> */}
                </nav>
            </header>
            
        </>
    )

}