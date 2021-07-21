import Link from 'next/link'
export default function Nav() {

    return (
        <>
            <header className="flex items-center w-full h-24 p-6 border-t justify-left">
                <a href="/landing" className="w-6/12 text-2xl font-semibold">Whiteboard Rubric</a>
                <nav className="flex justify-end w-full">
                    {/* <Link href="/">
                        <a className="mr-4">Admin View</a>
                    </Link> */}
                    <Link className="mr-2" href="/about">
                        <a className="ml-2 text-lg">About us</a>
                    </Link>
                    <a className="ml-2 text-lg" href="/api/auth/logout">Logout</a>
                </nav>
            </header>
            
        </>
    )

}