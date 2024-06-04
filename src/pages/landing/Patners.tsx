
import { Link } from 'react-router-dom'
export default function Patners() {
  return (
    <div className="bg-[#fff] py-10 flex gap-5 items-center flex-col justify-center h-[50vh] w-full">
        <p className="playfair-display text-center text-xl md:text-4xl lg:text-3xl font-bold">Different people choose us</p>
          
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-10 justify-center  items-center">
       
          <img  alt="MTN Logo" src="icons/mtn.svg" className=" w-20"/>
           <img  alt="Leadway Logo" src="icons/leadway.png" className="h-15 w-32"/>
            <img  alt="Atarapay Logo" src="icons/atarapay.png" className="h-15 w-32"/>
        <img alt="Laspa Logo" src="icons/laspa.png" className="h-15 w-32" />
        
        <img alt="Sailbond logo" src="icons/sailbond.png" className="h-15 w-32" />
      
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
