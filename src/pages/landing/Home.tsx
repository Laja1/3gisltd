import About from "./About";
// import Contact from "./Location";
import Partners from "./Patners";
import Service from './Service'


export default function Home() {
    return (
        <div className="bg-white flex items-center flex-col justify-center min-h-screen w-full">
        
          <div className="relative w-full">
          <img src="pictures/3gis.png" className="w-full lg:h-[98vh] md:h-[85vh] h-[75vh]    object-cover" alt="Home"/>
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
               <div className="py-10 lg:py-0"><Partners /></div>  
               <section className="grid bg-blue-100 h-[60vh] lg:h-[40vh] grid-rows-2 md:grid-cols-2 lg:grid-cols-2 items-center justify-center px-10  lg:pt-20">
  <header className="flex flex-col gap-2">
    <h2 className="ralewayy text-3xl md:text-4xl lg:text-5xl font-bold">Testimonials</h2>
    <p className="raleway text-sm">Hear what some of our customers have to say</p>
  </header>

  <blockquote className="flex flex-col gap-2">
    <p className="raleway"><span className='noto-sans-kr text-3xl'>“</span>Our experience with 3GIS has been fantastic, they offer dynamic, practical and tailored-to-need services to meet clients' unique demands and peculiarities.<br /> We strongly recommend them for your IT and Web Management requirements.<span className='noto-sans-kr text-3xl'>”</span></p>
    <cite className="ralewayy text-sm font-bold">MD, Seaeagle Marine Services</cite>
  </blockquote>
</section>
 </div>
    );
}
