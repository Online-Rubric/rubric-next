import Header from '../components/header';
import Nav from '../components/nav';
import FixedFooter from '../components/fixed-footer';
import loadingGif8 from '../data/images/loading-8.gif';

export default function Loading() {
    return (
        <>
        <div className="flex flex-col items-center justify-start w-full min-h-screen bg-gray-300 ">
            <Header/>
            <Nav/>
                <main className="absolute z-20 flex items-center justify-center w-screen h-screen bg-gray-500 bg-opacity-50">
                    <img src={loadingGif8.src} className="inline-block"/>
                </main>
            <FixedFooter/>
        </div>
        </>
    )
}