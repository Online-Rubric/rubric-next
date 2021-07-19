import Header from '../components/header'
import Nav from '../components/nav'
import RubricForm from '../components/rubric_form'
import Footer from '../components/footer'

export default function Landing() {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <Header/>
                <Nav/>

                <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
                    <h1 className="text-6xl font-bold">
                       New Rubric
                    </h1>
                    <RubricForm/>
                </main>
                    
                <Footer/>
            </div>
        </>
    )
}