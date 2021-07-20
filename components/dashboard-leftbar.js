import Link from 'next/link'
export default function LeftBar(props) {

    return (
        <>
            <div className="fixed bottom-0 z-10 w-full h-16 mt-12 bg-gray-800 shadow-xl md:relative md:h-screen md:w-48">

                <div className="content-center justify-center text-left md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 md:content-start">
                    <ul className="flex flex-row px-1 py-0 mt-20 text-center list-reset md:flex-col md:py-3 md:px-2 md:text-left">
                        <li className="flex-1 mr-3">
                            <a href="#" className="block py-1 pl-1 text-white no-underline align-middle border-b-2 border-gray-800 md:py-3 hover:text-white hover:border-pink-500">
                                <span className="block pb-1 text-xs text-gray-600 md:pb-0 md:text-base md:text-gray-400 md:inline-block">Whiteboards</span>
                            </a>
                        </li>
                    </ul>
                </div>


            </div>
            
        </>
    )

}