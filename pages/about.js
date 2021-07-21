import Nav from '../components/nav';
import Header from '../components/header';
import Footer from '../components/footer'

export default function About() {
  return (
    <>
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-400">
            <Header/>
            <Nav/>


            <div className="items-center justify-center m-auto my-4 text-3xl">ABOUT THE DEVELOPERS</div>
            <main className="flex items-center justify-center flex-1 w-full px-20 text-center">


            <div className="flex flex-col object-center max-w-xs m-auto">
              <div className="flex m-2 justify-items-end">
                <img className="flex m-2 justify-items-end" src="https://via.placeholder.com/300x450"></img>
              </div> 
              <div>
                <p>Brian is a fullstack software developer specializing in Python and Javascrip. While serving in the United States Army; Brian gained a passion for building useful technologies that makes individuals lives easier. He wants to work for a company that values efficency and customer service, along with creating new ideas that can make people's lives easier.</p>
              </div>
            </div>

            <div className="flex flex-col object-center max-w-xs m-auto">
              <div className="flex m-2 justify-items-end">
                <img className="flex m-2 justify-items-end" src="https://via.placeholder.com/300x450"></img>
              </div> 
              <p>Brian is a fullstack software developer specializing in Python and Javascrip. While serving in the United States Army; Brian gained a passion for building useful technologies that makes individuals lives easier. He wants to work for a company that values efficency and customer service, along with creating new ideas that can make people's lives easier.</p>
            </div>

            <div className="flex flex-col object-center max-w-xs m-auto">
              <div className="flex m-2 justify-items-end">
                <img className="flex m-2 justify-items-end" src="https://via.placeholder.com/300x450"></img>
              </div> 
              <p>Brian is a fullstack software developer specializing in Python and Javascrip. While serving in the United States Army; Brian gained a passion for building useful technologies that makes individuals lives easier. He wants to work for a company that values efficency and customer service, along with creating new ideas that can make people's lives easier.</p>
            </div>

            </main>
                
            <Footer/>
        </div>
    </>
  );
}


