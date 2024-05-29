import About from "./About";
import Patners from "./Patners";
import Services from "./Services";

export default function Home() {
  return (
    <div className="bg-[#030c17f8] flex items-center flex-col justify-center min-h-screen w-full">
      <div className="text-white mx-auto py-20  justify-center items-center flex-col md:flex-col lg:flex-row flex  gap-4 px-4">
        <div className="flex flex-col mx-auto justify-center gap-5 items-center text-center md:text-left">
          <p className="ralewayy text-3xl md:text-4xl lg:text-5xl font-bold">3GIS Edge</p>
          <p className="raleway text-xl w-[330px] md:w-[550px] lg:w-[650px]">With years of experience in business and Finance, we identify industry challenges and meet business needs through proactive delivery of solutions backed with Technology that enable growth and development for the organization.</p>
       <div className="w-[300px] h-[50px] text-black flex rounded-md bg-white items-center justify-center">
        Get in touch
       </div>
        </div>
        <div className="flex justify-center items-center">
          <img alt="3gisltd home picture" src="pictures/3GIS1.png" className="rounded-lg h-[50vh] md:h-[62.5vh] lg:h-[75vh]"/>
        </div>
      </div>
      <Patners />
       <Services />
       <About />
    </div>
  )
}
