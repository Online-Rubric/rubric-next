import Header from '../components/header'
import Nav from '../components/nav'
import DataContainer from '../components/data-container'
import Footer from '../components/footer'


export default function Landing() {

    // const LoginButton = () => {
    //     const { loginWithRedirect, isAuthenticated } = useAuth0();
    // }

    // onClick={() => loginWithRedirect()}

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-500">
                <Header/>
                <Nav/>

                <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
                    <h1 className="mb-16 text-6xl font-bold">
                    Welcome to{' '}
                    <h2 className="text-gray-300"> 
                        Rubric
                    </h2>
                    </h1>
                    <div className="flex px-6 py-10 mx-10 my-4 text-lg font-bold text-gray-400">
                        <button className="p-6 m-4 border-2">
                            <a href="/api/auth/login">
                                Student Login
                            </a>
                        </button>
                        <button className="p-6 m-4 border-2" >
                            <a href="https://www.google.com" className="text-lg">
                                Grade a Student
                            </a>
                        </button>
                    </div>
                    <DataContainer/>
                </main>
                    
                <Footer/>
            </div>
        </>
    )
}