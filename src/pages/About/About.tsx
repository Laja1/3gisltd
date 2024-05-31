import {motion} from 'framer-motion'
import Methodology from './Methodology'
export default function About() {
  return (
    <div className='justify-center  mx-auto flex'>
    <div className="flex flex-col    items-center mx-auto  justify-center p-10">
    <div className="items-center  flex-col flex justify-center">
      <h1 className="ralewayy py-2 text-xl text-black md:text-2xl lg:text-3xl font-bold">About Us</h1>
          <div className="w-14  h-1  rounded-full bg-[#BCDBFF]" /></div>
         <div className="space-y-5  pt-10 text-center "> <p className="text-sm raleway">3G Integrated Systems Ltd is an Information and Communication Technology (ICT) based company with strong project management culture. The company’s objective is to be one of the world’s topmost specialized service firms catering to private and government agencies seeking to transform their businesses through innovative technology.</p>
          <p className="text-sm raleway">3G Integrated Systems focuses on developing customer services for our clients, which will "Close the Gap Between the End Users and Technology."</p>
          <p className="text-sm raleway">We at 3G Integrated Systems continuously seek ways to make computing resources of all kinds easier to use, more reliable, and better suited to the needs of the organization and individual user.</p>
          </div>
          <div>
               
        <div className='lg:flex-row  flex-col py-10 gap-5 flex items-center justify-center'> 
         <motion.div initial={{scale:1}} whileHover={{scale:1.1}} style={{ backgroundColor: '#FFB5B530' }}
          className='rounded-md items-center justify-center flex w-[300px] h-[250px] py-10 px-5'>
                  <div>
                      <p className="font-bold ralewayy pt-3 text-center">Who Are We?</p>
                  <div className=""><p className="text-[13px]  raleway text-[#56627b] py-3">3G Integrated Systems is an information technology firm dedicated exclusively to delivering end-to-end computing, telecommunication and project management solutions.</p></div>
                  </div></motion.div>
                  <motion.div initial={{scale:1}} whileHover={{scale:1.1}}  className='rounded-md items-center bg-blue-200 justify-center flex w-[300px] h-[250px] py-10 px-5'>
                  <div>
                      <p className="font-bold ralewayy pt-3 text-center">What Do We Do?</p>
                  <div className=""><p className="text-[13px]  raleway text-[#56627b] py-3">We at 3G Integrated Systems strive to understand the needs of the consumers, and provide the most effective computing solutions to meet those need.</p></div>
                  </div></motion.div>
              </div>
          </div>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}} className="items-start ">
          <div className="flex-row flex pt-10 items-center">
              <div className="w-10    h-1 rotate-90 rounded-full bg-[#222]" />
              <p className="font-bold ralewayy text-2xl  text-center">Our Profile</p>
              </div>
              <div className="space-y-1 pt-10"> <p className="text-sm raleway">3G Integrated Systems is an information technology firm dedicated exclusively to delivering end-to-end computing, telecommunication and project management solutions. We deliver complete solutions to the government, health, banking, manufacturing and distribution industries.</p>
          <p className="text-sm raleway">We invest in our clients, our employees and our core values and you can rely on our industry expertise for all your needs.</p>
          <p className="text-sm  raleway">"For more details, please download our"<a target="_blank" href="profile.pdf"><u> company profile<u></u></u></a></p>
          </div>
              </motion.div>
               <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}} className="items-end  flex flex-col">
          <div className="flex-row flex pt-10 items-center">
             
              <p className="font-bold ralewayy text-2xl  text-center">Our Mission</p>
               <div className="w-10    h-1 rotate-90 rounded-full bg-[#222]" />
              </div>
              <div className="space-y-1 pt-10"> <p className="text-sm raleway">3G Integrated Systems' mission is to provide customer satisfaction, as this is the key to success. We will continue supplying quality services and products to meet our customers' needs. We will maintain highly skilled and professional workforce in partnership with you, our customer, towards meeting your business objectives.</p>
         
          </div>
              </motion.div>
              <div className="items-center py-10 flex-col flex justify-center">
      <h1 className="ralewayy py-2 text-xl text-black md:text-2xl lg:text-3xl font-bold">Meet Our Team</h1>
          <div className="w-14  h-1  rounded-full bg-[#BCDBFF]" /></div>
          
            <div className='lg:flex-row lg:w-full  flex-col  gap-5 pt-5 items-center flex justify-center'>
           <div className='items-center flex flex-col'> 
           <img src='pictures/profile.jpg' alt='Managing Director' className='w-[250px]  h-[350px] rounded-md'/>
           <p className='text-sm font-bold text-center ralewayy'>Adekunle Adebayo, ACA Managing Director</p>
           <p className='text-sm raleway'>Accounts and Finance</p>
           </div>
            <div className='items-center flex flex-col'> 
            <img src='pictures/adeyemi.jpg' alt='Technical Director' className='w-[250px]  h-[350px] rounded-md'/>
           <p className='text-sm font-bold text-center ralewayy'>Adeyemi Adebiyi, MSc, PMP, CSM, ITIL Technical Director</p>
           <p className='text-sm raleway'>Technical and Presales</p>
           </div>
            <div className='items-center flex flex-col'> 
            <img src='pictures/temidayo.jpg' alt='External Consultant' className='w-[250px]  h-[350px] rounded-md'/>
           <p className='text-sm font-bold  text-center ralewayy' >Temidayo Adekanye, PGCE, MSc External Consultant</p>
           <p className='text-sm raleway'>Business Process Re-engineering and Strategy</p>
           </div>
            <div className='items-center flex flex-col'> 
            <img src='pictures/adeyemi.jpg' alt='Senior Consultant' className='w-[250px]  h-[350px] rounded-md'/>
           <p className='text-sm font-bold ralewayy'>Jubril IdrisMBA Senior Consultant</p>
           <p className='text-sm raleway'>Consulting and Operations</p>
           </div></div>
                    <div className="items-center pt-10 flex-col flex justify-center">
      <h1 className="ralewayy py-2 text-xl text-black md:text-2xl lg:text-3xl font-bold">Methodology</h1>
          <div className="w-14  h-1  rounded-full bg-[#BCDBFF]" /></div>
          <div ><Methodology /></div>

          <div>
            
          </div>
          <div>
            
          </div>
          </div></div>
  )
}
