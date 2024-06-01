export default function About() {
  return (
    <div className="bg-[#f9f9f9] pt-10 lg:pt-0 pb-10 flex items-center flex-col justify-center h-[50%] w-full">
       <div className="py-5 items-center flex flex-col">
       <h1 className="playfair-display py-2 text-xl text-black md:text-2xl lg:text-3xl font-bold">About Us</h1>
          <div className="w-14  h-1  rounded-full bg-[#BCDBFF]"/>
          </div>
      <div className="text-black gap-10 p-10 justify-center items-center flex-col md:flex-col-reverse lg:flex-row-reverse flex px-4">
        <div>
          <img alt="3gisltd office picture" src="pictures/office.jpg" className="rounded-lg w-[400px]" />
        </div>
        <div>
          <div className="flex flex-col justify-center gap-5 w-80 md:w-[550px] lg:w-[650px]">
            <p className="open-sans leading-loose text-base">
              3G Integrated Systems Ltd is an Information and Communication Technology (ICT) based company with a strong project management culture. The company’s objective is to be one of the world’s topmost specialized service firms catering to private and government agencies seeking to transform their businesses through innovative technology.
              3G Integrated Systems focuses on developing customer services for our clients, which will <span className="open-sans text-lg text-blue-400">"Close the Gap Between the End Users and Technology."</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
