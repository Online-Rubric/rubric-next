import Header from '../components/header'
import Nav from '../components/nav'
import FixedFooter from '../components/fixed-footer'

export default function Loading() {
    return (
        <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400">
            <Header/>
            <Nav/>
                <main className="container block w-full h-screen my-5 items-left">
                    <h3 className="inline-block mr-3 text-xl">Loading...</h3>
                </main>
            <FixedFooter/>
        </div>
        </>
    )
}