import About from "./About";

import Partners from "./Patners";
import Projects from "./Projects";
import Service from './Service'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Helmet } from 'react-helmet-async';
export default function Home() {
     
    return (
        <div> <Helmet>
    <title>Home</title>
    <meta name='description' content="Our Services, Our Projects, About Us" />
    <link rel='canonical' href="/" />
</Helmet>
        <div className="bg-white flex items-center flex-col justify-center min-h-screen w-screen">
           
        <div className="items-center justify-center  flex">
 <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showThumbs={false} transitionTime={1000} showArrows={false} swipeable={true}>
                <div>
                    <div className="relative h-screen w-full">
          <img src="pictures/3gis.svg" className="w-full lg:h-full md:h-[85vh] h-[75vh]    object-cover" alt="Home"/>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
        <p className="playfair-display text-3xl pb-2 md:text-4xl lg:text-5xl font-bold">3GIS Edge</p>
        <div className="w-14  h-1  rounded-full bg-[#BCDBFF]" />
                <p className="open-sans text-sm md:text-base lg:text-lg leading-relaxed lg:leading-loose text-gray-400 py-3 w-80 md:w-[550px] lg:w-[650px]">
                    With years of experience in business and Finance, we identify industry challenges and meet business needs through proactive delivery of solutions backed with Technology that enable growth and development for the organization.
                </p>  <div className="pt-5 flex justify-center">
          <div className="w-72 h-12 text-white flex rounded-md bg-blue-700 items-center justify-center cursor-pointer">
                    Get in touch
          </div>
         </div>
        </div>
   
            </div> 
                </div>
                <div>
                    <div className="relative h-screen w-full">
          <img src="pictures/team.svg" className="w-full lg:h-full md:h-[85vh] h-[75vh]    object-cover" alt="Home"/>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
       <p className="playfair-display text-3xl pb-2 md:text-4xl lg:text-5xl font-bold">3GIS Edge</p>
        <div className="w-14  h-1  rounded-full bg-[#BCDBFF]" />
                <p className="open-sans text-sm md:text-base lg:text-lg leading-loose text-gray-400 py-3 w-80 md:w-[550px] lg:w-[650px]">
                    3GIS adopts a systematic project management approach to ensure the delivery of project benefits and objectives. This strategy involves aligning with established project management principles to guarantee success.  </p> 
                    
                     <div className="pt-5 flex justify-center">
          <div className="w-72 h-12 text-white flex rounded-md bg-blue-700 items-center justify-center cursor-pointer">
                    Get in touch
          </div></div>
        </div>
   
            </div> 
            
                </div>
                <div>
                   <div className="relative h-screen w-full">
          <img src="pictures/woman.svg" className="w-full lg:h-full md:h-[85vh] h-[75vh]    object-cover" alt="Home"/>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
             <p className="playfair-display text-3xl pb-2 md:text-4xl lg:text-5xl font-bold">3GIS Edge</p>
              <div className="w-14  h-1  rounded-full bg-[#BCDBFF]" />
                <p className="open-sans text-sm md:text-base lg:text-lg leading-loose text-gray-400 py-3 w-80 md:w-[550px] lg:w-[650px]">
                   3GIS offers a solution by integrating business process re-engineering and customized software development to enhance workforce efficiency and streamline operations through automation. 
                </p>  <div className="pt-5 flex justify-center">
          <div className="w-72 h-12 text-white flex rounded-md bg-blue-700 items-center justify-center cursor-pointer">
                    Get in touch
          </div>
         </div>
        </div>
   
            </div> 
                
                </div>
            </Carousel>

        </div>
          {/* <div className="relative w-full">
          <img src="pictures/3gis.png" className="w-full lg:h-[98vh] md:h-[85vh] h-[75vh]    object-cover" alt="Home"/>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
        <p className="playfair-display text-3xl md:text-4xl lg:text-5xl font-bold">3GIS Edge</p>
                <p className="open-sans text-lg text-gray-400 py-3 w-80 md:w-[550px] lg:w-[650px]">
                    With years of experience in business and Finance, we identify industry challenges and meet business needs through proactive delivery of solutions backed with Technology that enable growth and development for the organization.
                </p>  <div className="pt-5 flex justify-center">
          <div className="w-72 h-12 text-white flex rounded-md bg-blue-700 items-center justify-center cursor-pointer">
                    Get in touch
          </div>
         </div>
        </div>
   
            </div> */}
    
        <Service />
           <Projects />
            <div className="lg:mt-[-200px] mt-10 w-full"><About /></div>
               <div className="py-10 lg:py-0"><Partners /></div>  
               <section className="grid bg-gray-100 h-[80vh] md:h-[25vh] lg:h-[40vh] grid-rows-2 md:grid-cols-2 lg:grid-cols-2 items-center justify-center px-32 md:pt-20  lg:pt-20">
  <header className="flex flex-col gap-2">
    <h2 className="playfair-display text-3xl md:text-4xl lg:text-5xl font-bold">Testimonials</h2>
    <p className="open-sans text-sm">Hear what some of our customers have to say</p>
  </header>

  <blockquote className="flex flex-col gap-2">
    <p className="open-sans leading-loose"><span className='noto-sans-kr text-3xl'>“</span>Our experience with 3GIS has been fantastic, they offer dynamic, practical and tailored-to-need services to meet clients' unique demands and peculiarities.<br /> We strongly recommend them for your IT and Web Management requirements.<span className='noto-sans-kr text-3xl'>”</span></p>
    <cite className="playfair-display text-sm font-bold">MD, Seaeagle Marine Services</cite>
  </blockquote>
</section>
 </div></div>
    );
}
