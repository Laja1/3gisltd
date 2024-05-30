export default function About() {
  return (
    <div className="bg-white py-10 flex items-center flex-col justify-center min-h-screen w-full">
      <div>
        <h1 className="ralewayy pb-5 text-xl text-black md:text-2xl lg:text-3xl font-bold">About Us</h1>
      </div>
      <div className="text-black gap-10 p-10 justify-center items-center flex-col md:flex-col-reverse lg:flex-row flex px-4">
        <div>
          <img alt="3gisltd office picture" src="pictures/office.jpg" className="rounded-lg" />
        </div>
        <div>
          <div className="flex flex-col justify-center gap-5 w-80 md:w-[550px] lg:w-[650px]">
            <p className="raleway text-lg">
              3G Integrated Systems Ltd is an Information and Communication Technology (ICT) based company with a strong project management culture. The company’s objective is to be one of the world’s topmost specialized service firms catering to private and government agencies seeking to transform their businesses through innovative technology.
              3G Integrated Systems focuses on developing customer services for our clients, which will <span className="raleway text-lg text-blue-400">"Close the Gap Between the End Users and Technology."</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
