import Nav from '../components/nav';
import Header from '../components/header';
import Footer from '../components/footer';
import brian from '../data/images/brian.jpg';
import mason from '../data/images/mason.png';
import tim from '../data/images/tim-new.jpg';

export default function About() {
  return (
    <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
            <Header/>
            <Nav/>

            <div className="items-center justify-center m-auto my-4 text-3xl font-bold">ABOUT THE DEVELOPERS</div>
            <main className="flex items-center justify-center flex-1 w-full px-20 mb-10 text-center">

            <div className="flex flex-col object-center max-w-xs m-auto">
              <div className="flex m-2 justify-items-end">
                <img className="flex m-2 justify-items-end" src={brian.src} width="300" height="450"/>
              </div> 
              <div>
                <p>Brian is a fullstack software developer specializing in Python and Javascript. While serving in the United States Army; Brian gained a passion for building useful technologies that makes individuals lives easier. He wants to work for a company that values efficency and customer service, along with creating new ideas that can make people's lives easier.</p>
              </div>
            </div>

            <div className="flex flex-col object-center max-w-xs m-auto">
              <div className="flex m-2 justify-items-end">
                <img className="flex m-2 justify-items-end" src={mason.src} width="300" height="450"/>
              </div> 
              <p>Hey, I’m Mason Aviles. I’m a software developer and have been in the front end space for 6 years.  I believe in accessible and creative technology.  I’m really passionate about being in this space because I see myself as a crafter and this is new age crafting.  I love building, creating, and watching people interact with my work.
              </p>
            </div>

            <div className="flex flex-col object-center max-w-xs m-auto">
              <div className="flex m-2 justify-items-end">
                <img className="flex m-2 justify-items-end" src={tim.src} width="300" height="450"/>
              </div> 
              <p>Before enrolling in Code Fellows I spent the past decade in the insurance industry. 

              Though I had been interested in software development (my last two jobs were at InsurTech startups) it took a pandemic before I decided to go full steam ahead with it.  

              Once I finish Code Fellows I am hoping to use my newly acquired skills to make rad software - or maybe finance/insurance software - which is decidedly less rad - but still pretty awesome to me.
              </p>
            </div>

            </main>
                
            <Footer/>
        </div>
    </>
  );
}


