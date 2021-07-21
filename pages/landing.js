import Header from '../components/header'
import Nav from '../components/nav'
import DataContainer from '../components/data-container'
import Footer from '../components/footer'
import Link from 'next/link'



export default function Landing() {

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-400">
                <Header/>
                <Nav/>

                <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
                    <h1 className="mb-16 text-6xl font-bold">
                    Welcome to{' '}
                    <h2 className="text-gray-300"> 
                        Rubric
                    </h2>
                    </h1>
                    <div className="flex px-6 py-10 mx-10 my-4 text-lg font-bold text-gray-300">
                        <button className="p-6 m-4 border-2">
                            <Link href="/whiteboards">
                                <a>Student Login</a>
                            </Link>
                        </button>
                        <button className="p-6 m-4 border-2" >
                            <Link href="/form">
                            <a>Grade a Student</a>
                            </Link>
                        </button>
                    </div>
                    {/* <DataContainer/> */}
                </main>
                    
                <Footer/>
            </div>
        </>
    )
}