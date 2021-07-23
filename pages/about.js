import Nav from '../components/nav';
import Header from '../components/header';
import Footer from '../components/footer';
import brian from '../data/images/brian-new.jpg';
import mason from '../data/images/mason-new.png';
import tim from '../data/images/tim-new-new.jpg';
import logo from '../data/images/LinkedIn.png'

export default function About() {
  return (
    <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
            <Header/>
            <Nav/>

            <div className="items-center justify-center m-auto my-4 text-3xl font-bold">ABOUT THE DEVELOPERS</div>
            <main className="flex items-center justify-center flex-1 w-full px-20 mb-10 text-center">

            <div className="flex m-4">
              <div className="flex flex-col object-center max-w-xs m-auto mx-5">
                <div className="flex m-2 justify-items-end">
                  <img className="flex m-2 justify-items-end" src={brian.src} width="300" height="450"/>
                </div> 
                <div>
                  <p>Brian is a fullstack software developer specializing in Python and Javascript. While serving in the United States Army; Brian gained a passion for building useful technologies that makes individuals lives easier. He wants to work for a company that values efficency along with creating new ideas that can make people's lives easier.

                  <br></br>
                  <br></br>
              
                 <a href="https://www.linkedin.com/in/brian-lemons25/">
                    <img className="flex justify-center m-auto" src={logo.src} width="50" height="50"></img>
                 </a>
                 
                
                  </p>
                </div>
              </div>

              <div className="flex flex-col object-center max-w-xs m-auto mx-5">
                <div className="flex m-2 justify-items-end">
                  <img className="flex m-2 justify-items-end" src={mason.src} width="300" height="450"/>
                </div> 
                <p>Hey, I’m Mason Aviles. I’m a software developer and have been in the front end space for 6 years.  I believe in accessible and creative technology.  I’m really passionate about being in this space because I see myself as a crafter and this is new age crafting.  I love building, creating, and watching people interact with my work.
                
                <br></br>
                <br></br>
                
              
                <a href="https://www.linkedin.com/in/masonaviles/?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABJJyjMBPht3aq-THTOrizsoI9gs_zdRy4Y">
                    <img className="flex justify-center m-auto" src={logo.src} width="50" height="50"></img>
                 </a>

                </p>
              </div>

              <div className="flex flex-col object-center max-w-xs m-auto mx-5">
                <div className="flex m-2 justify-items-end">
                  <img className="flex m-2 justify-items-end" src={tim.src} width="300" height="450"/>
                </div> 
                <p>Before enrolling in Code Fellows I spent the past decade in the insurance industry. 

                Though I had been interested in software development, it took a pandemic before I decided to go full steam ahead with it.  

                I am hoping to use my newly acquired skills to make rad software - or maybe finance/insurance software.
                
                <br></br>
                <br></br>
              
                <a href="https://www.linkedin.com/in/timothy-viccari/">
                    <img className="flex justify-center m-auto" src={logo.src} width="50" height="50"></img>
                 </a>

                </p>
              </div>
            </div>
            </main>
                
            <Footer/>
        </div>
    </>
  );
}


