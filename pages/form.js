import Header from '../components/header'
import Nav from '../components/nav'
import RubricForm from '../components/rubric_form'
import Footer from '../components/footer'
import axios from 'axios'
import useSWR from 'swr'
import Loading from './loading'

export default function Form() {

    async function apiPost(formData){
        await axios.post('https://rubric-api-project.herokuapp.com/api/v1/rubrics/', formData);
    }

    async function fetcher(url){
        const {data} = await axios.get(url)
        return data
    }

    const {data: students, error} = useSWR('https://rubric-api-project.herokuapp.com/api/v1/rubrics/students', fetcher)
    const {data: proctors, error2} = useSWR('https://rubric-api-project.herokuapp.com/api/v1/rubrics/proctors', fetcher)
    

    if (error || error2) return "Big Oh No NO";
    if (!students) return <Loading/>
    if (!proctors) return <Loading/>

    console.log(JSON.stringify(students) + " OBJECT? " + JSON.stringify(proctors))

    
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
                <Header/>
                <Nav/>

                <main className="flex flex-col items-center justify-center flex-1 w-full px-20 mt-10 text-center">
                    <h1 className="mb-5 text-6xl font-bold drop-shadow-md">
                       New Rubric
                    </h1>
                    <RubricForm apiPost={apiPost} students={students} proctors={proctors}/>

                </main>
                    
                <Footer/>
            </div>
        </>
    )
}