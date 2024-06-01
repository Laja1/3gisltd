
import { Link } from 'react-router-dom'
export default function Patners() {
  return (
    <div className="bg-[#fff] py-10 flex gap-5 items-center flex-col justify-center h-[50vh] w-full">
        <p className="playfair-display text-xl md:text-4xl lg:text-3xl font-bold">Different people choose us</p>
          
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-6 gap-10 justify-center items-center">
          <img  alt="NAPBS Logo" src="icons/napbs.jpg" className="h-15 w-32"/>
           <img  alt="Asseco Logo" src="icons/asseco.gif" className="h-15 w-32"/>
            <img  alt="Asseco Logo" src="icons/secugen.jpg" className="h-15 w-32"/>
        <img alt="ACS Logo" src="icons/acs_logo.jpg" className="h-15 w-32" />
        
        <img alt="Nitgen logo" src="icons/nitgen_logo.jpg" className="h-15 w-32" />
        <img src="icons/dlink_logo.jpg" alt="dlink Logo"className="h-15 w-32" />
        </div>
          <Link to='/Partners'><div className="flex-row animate-bounce flex justify-center items-center gap-2">
      <p className="open-sans">View Our Partners</p>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>

       </div></Link> 
    </div>
  )
}
