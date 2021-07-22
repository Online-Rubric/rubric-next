import Nav from '../components/nav';
import Header from '../components/header';
import Footer from '../components/footer'

export default function About() {
  return (
    <>
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-400">
            <Header/>
            <Nav/>

            <div className="items-center justify-center m-auto my-4 text-3xl font-bold">ABOUT THE DEVELOPERS</div>
            <main className="flex items-center justify-center flex-1 w-full px-20 text-center">

            <div className="flex flex-col object-center max-w-xs m-auto">
              <div className="flex m-2 justify-items-end">
                <img className="flex m-2 justify-items-end" src="/data/images/brian.jpg" width="300" height="450"></img>
              </div> 
              <div>
                <p>Brian is a fullstack software developer specializing in Python and Javascript. While serving in the United States Army; Brian gained a passion for building useful technologies that makes individuals lives easier. He wants to work for a company that values efficency and customer service, along with creating new ideas that can make people's lives easier.</p>
              </div>
            </div>

            <div className="flex flex-col object-center max-w-xs m-auto">
              <div className="flex m-2 justify-items-end">
                <img className="flex m-2 justify-items-end" src="data/images/mason.png" width="300" height="450"></img>
              </div> 
              <p>Hey, I’m Mason Aviles. I’m a software developer and have been in the front end space for 6 years.  I believe in accessible and creative technology.  I’m really passionate about being in this space because I see myself as a crafter and this is new age crafting.  I love building, creating, and watching people interact with my work.
              </p>
            </div>

            <div className="flex flex-col object-center max-w-xs m-auto">
              <div className="flex m-2 justify-items-end">
                <img className="flex m-2 justify-items-end" src="data/images/tim.JPG" width="300" height="450"></img>
              </div> 
              <p>TIM SORTEN YOUR DANG</p>
            </div>

            </main>
                
            <Footer/>
        </div>
    </>
  );
}


