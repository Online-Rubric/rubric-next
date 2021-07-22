import Link from 'next/link'
import randomChallenges from './challenges'

export default function Nav() {
    return (
        <>
            <header className="flex items-center w-full h-16 p-6 bg-blue-500 justify-left">
                <a href="/landing" className="w-6/12 text-2xl font-semibold text-gray-900 hover:text-blue-200">Rubric.</a>
                <nav className="flex items-center justify-end w-full ">
                    {/* <Link href="/">
                        <a className="mr-4">Admin View</a>
                    </Link> */}
                    <Link href={randomChallenges()} onClick={() => window.location.reload()}>
                        <a target='_blank' className="ml-2 text-lg font-semibold text-gray-900 hover:text-blue-200">Get Challenges</a>
                    </Link>
                   
                    <Link href="/about">
                        <a className="ml-2 text-lg text-gray-900 hover:text-blue-200">About us</a>
                    </Link>
                    <Link href="https://github.com/Online-Rubric">
                        <button className="p-2 ml-4 text-blue-100 border-2 border-gray-900 hover:border-blue-200 hover:text-gray-900" target="_blank">See on Github</button>
                    </Link>
                    {/* <a className="ml-2 text-lg" href="/api/auth/logout">Logout</a> */}
                </nav>
            </header>
            
        </>
    )

}