import Header from '../components/header'
import Nav from '../components/nav'
import FixedFooter from '../components/fixed-footer'
import Link from 'next/link'



export default function Landing() {

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen ">
                <Header/>
                <Nav/>

                <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
                    <div className="vimeo-wrapper">
                        <iframe src="https://player.vimeo.com/video/577943028?background=1&autoplay=1&loop=1&byline=0&title=0"
                            frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                    </div>
                    <div className="px-3 py-4 bg-opacity-25 border-solid bg-gray-50">
                        <h1 className="text-6xl font-bold">
                            Welcome to{' '}
                        <h2 className="text-blue-500"> 
                            Rubric.
                        </h2>
                        </h1>
                    </div>
                    <div className="flex px-6 py-10 mx-10 my-4 text-lg font-bold text-gray-800">

                        <Link href="/whiteboards">
                            <button className="p-6 m-4 bg-blue-100 bg-opacity-25 border-2 border-gray-600 hover:border-blue-400 hover:text-blue-600">See Whiteboards</button>
                        </Link>

                        <Link href="/form">
                            <button className="p-6 m-4 bg-blue-100 bg-opacity-25 border-2 border-gray-600 hover:border-blue-400 hover:text-blue-600">Grade a Student</button>
                        </Link>

                    </div>
                    {/* <DataContainer/> */}
                </main>
                    
                <FixedFooter/>
            </div>
        </>
    )
}