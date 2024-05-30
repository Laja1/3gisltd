import {motion} from 'framer-motion'
export default function About() {
  return (
    <div className="flex flex-col  justify-center p-10">
    <div className="items-center flex-col flex justify-center"><h1 className="ralewayy py-2 text-xl text-black md:text-2xl lg:text-3xl font-bold">About Us</h1>
          <div className="w-14  h-1  rounded-full bg-[#BCDBFF]" /></div>
         <div className="space-y-5 pt-10 text-center "> <p className="text-sm raleway">3G Integrated Systems Ltd is an Information and Communication Technology (ICT) based company with strong project management culture. The company’s objective is to be one of the world’s topmost specialized service firms catering to private and government agencies seeking to transform their businesses through innovative technology.</p>
          <p className="text-sm raleway">3G Integrated Systems focuses on developing customer services for our clients, which will "Close the Gap Between the End Users and Technology."</p>
          <p className="text-sm raleway">We at 3G Integrated Systems continuously seek ways to make computing resources of all kinds easier to use, more reliable, and better suited to the needs of the organization and individual user.</p>
          </div>
          <div>
               
        <div className='lg:flex-row flex-col py-10 gap-5 flex items-center justify-center'>  <motion.div initial={{scale:1}} whileHover={{scale:1.1}} style={{ backgroundColor: '#A3B2C230' }} className='rounded-md items-center justify-center flex w-[300px] h-[250px] py-10 px-5'>
                  <div>
                      <p className="font-bold ralewayy pt-3 text-center">What Are We</p>
                  <div className=""><p className="text-[13px]  raleway text-[#56627b] py-3">3G Integrated Systems is an information technology firm dedicated exclusively to delivering end-to-end computing, telecommunication and project management solutions.</p></div>
                  </div></motion.div>
                  <motion.div initial={{scale:1}} whileHover={{scale:1.1}} style={{ backgroundColor: '#A3B2C230' }} className='rounded-md items-center justify-center flex w-[300px] h-[250px] py-10 px-5'>
                  <div>
                      <p className="font-bold ralewayy pt-3 text-center">What Are We</p>
                  <div className=""><p className="text-[13px]  raleway text-[#56627b] py-3">3G Integrated Systems is an information technology firm dedicated exclusively to delivering end-to-end computing, telecommunication and project management solutions.</p></div>
                  </div></motion.div>
              </div>
          </div>
        <div className="items-start ">
          <div className="flex-row flex pt-10 items-center">
              <div className="w-10    h-1 rotate-90 rounded-full bg-[#222]" />
              <p className="font-bold ralewayy text-2xl  text-center">Our Profile</p>
              </div>
              <div className="space-y-1 pt-10"> <p className="text-sm raleway">3G Integrated Systems is an information technology firm dedicated exclusively to delivering end-to-end computing, telecommunication and project management solutions. We deliver complete solutions to the government, health, banking, manufacturing and distribution industries.</p>
          <p className="text-sm raleway">We invest in our clients, our employees and our core values and you can rely on our industry expertise for all your needs.</p>
          <p className="text-sm  raleway">"For more details, please download our"<a target="_blank" href="profile.pdf"><u> company profile<u></u></u></a></p>
          </div>
              </div>
          </div>
  )
}
