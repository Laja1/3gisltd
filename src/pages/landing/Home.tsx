import About from "./About";
// import Contact from "./Location";
import Partners from "./Patners";
import Service from './Service'


export default function Home() {
    return (
        <div className="bg-white flex items-center flex-col justify-center min-h-screen w-full">
        
          <div className="relative w-full">
          <img src="pictures/3GIS.png" className="w-full lg:h-[98vh] md:h-[85vh] h-[75vh]    object-cover" alt="Home"/>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
        <p className="ralewayy text-3xl md:text-4xl lg:text-5xl font-bold">3GIS Edge</p>
                <p className="raleway text-lg text-gray-400 py-3 w-80 md:w-[550px] lg:w-[650px]">
                    With years of experience in business and Finance, we identify industry challenges and meet business needs through proactive delivery of solutions backed with Technology that enable growth and development for the organization.
                </p>  <div className="pt-5 flex justify-center">
          <div className="w-72 h-12 text-white flex rounded-md bg-blue-700 items-center justify-center cursor-pointer">
                    Get in touch
          </div>
         </div>
        </div>
   
            </div>
    
        <Service />
           
            <About />
               <div className="py-10 lg:py-0"></div>  <Partners />
            {/* <Contact /> */}
        </div>
    );
}
