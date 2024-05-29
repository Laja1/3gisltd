
export default function Patners() {
  return (
    <div className="bg-[#fff] py-10 flex items-center justify-center h-[50vh] w-full">
        <div className="text-black grid justify-center items-center grid-cols-1 md:grid-cols-2 gap-10 px-4">
        <div className="flex flex-col justify-center gap-5  text-center md:text-center">
          <p className="ralewayy text-3xl md:text-4xl lg:text-5xl font-bold">Different people choose us</p>
          <p className="raleway text-xl ">what’s your excuse ?</p>
       <div className="flex-row flex justify-center items-center gap-2">
         <p className="raleway">View Our Partners</p>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>

       </div>
        </div>
        <div className="grid grid-cols-4 gap-10 justify-center items-center">
          <img  alt="NAPBS Logo" src="icons/napbs.jpg" className="rounded-full size-20"/>
           <img  alt="Asseco Logo" src="icons/asseco.gif" className="rounded-full size-20"/>
            <img  alt="Asseco Logo" src="icons/secugen.jpg" className="rounded-full size-20"/>
             <img  alt="ACS Logo" src="icons/acs_logo.jpg" className="rounded-full size-20"/>
        </div>
      </div>
    </div>
  )
}
