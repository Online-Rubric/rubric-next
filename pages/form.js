import Header from '../components/header'
import Nav from '../components/nav'
import RubricForm from '../components/rubric_form'
import Footer from '../components/footer'
import axios from 'axios'

export default function Form() {

    async function apiPost(formData){
        await axios.post('http://127.0.0.1:8000/api/v1/rubrics/', formData);
    }

    
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <Header/>
                <Nav/>

                <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
                    <h1 className="text-6xl font-bold">
                       New Rubric
                    </h1>
                    <RubricForm apiPost={apiPost}/>

                </main>
                    
                <Footer/>
            </div>
        </>
    )
}