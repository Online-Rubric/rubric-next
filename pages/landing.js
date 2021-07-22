import Header from '../components/header'
import Nav from '../components/nav'
import DataContainer from '../components/data-container'
import Footer from '../components/footer'
import Link from 'next/link'



export default function Landing() {

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <Header/>
                <Nav/>

                <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
                    <h1 className="mb-16 text-6xl font-bold">
                    Welcome to{' '}
                    <h2 className="text-gray-400"> 
                        Rubric.
                    </h2>
                    </h1>
                    <div className="flex px-6 py-10 mx-10 my-4 text-lg font-bold text-gray-800">

                        <Link href="/whiteboards">
                            <button className="p-6 m-4 border-2 border-gray-600 hover:border-gray-400 hover:text-gray-600">See Whiteboards</button>
                        </Link>

                        <Link href="/form">
                            <button className="p-6 m-4 border-2 border-gray-600 hover:border-gray-400 hover:text-gray-600">Grade a Student</button>
                        </Link>

                    </div>
                    {/* <DataContainer/> */}
                </main>
                    
                <Footer/>
            </div>
        </>
    )
}