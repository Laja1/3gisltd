import {motion} from 'framer-motion'
import Methodology from './Methodology'
import {Helmet} from 'react-helmet-async'
export default function About() {
  return (
    <div className='justify-center   flex'>
    <div className="flex flex-col  items-center mx-auto  justify-center ">
        <Helmet>
    <title>About Us</title>
    <meta name='About Us' content="About Us" />
    <link rel='canonical' href="/About" />
</Helmet>
   <div className="relative w-full h-full">
        <img
          src="pictures/about_us.png"
          className="w-full object-cover h-[75vh] md:h-[85vh] lg:h-[95vh]"
          alt="About Us"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
          <div className="flex flex-col items-center justify-center py-5">
            <h1 className="playfair-display text-xl md:text-2xl lg:text-3xl font-bold py-2">About Us</h1>
            <div className="w-14 h-1 bg-[#BCDBFF] rounded-full" />
          </div>
          <div className="space-y-6  lg:px-36">
            <p className="md:text-base text-sm lg:text-lg leading-loose open-sans">
              3G Integrated Systems Ltd is an Information and Communication Technology (ICT) based company with strong project management culture. The company’s objective is to be one of the world’s topmost specialized service firms catering to private and government agencies seeking to transform their businesses through innovative technology.
            </p>
            <p className="text-sm md:text-base lg:text-lg leading-loose open-sans">
              3G Integrated Systems focuses on developing customer services for our clients, which will  <span className="text-sm md:text-base text-blue-300 lg:text-lg leading-loose open-sans">"Close the Gap Between the End Users and Technology."</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-10">
        <div className="flex flex-col items-center justify-center">
          <p className="md:text-base text-sm lg:text-lg leading-loose text-center open-sans">
            We at 3G Integrated Systems continuously seek ways to make computing resources of all kinds easier to use, more reliable, and better suited to the needs of the organization and individual user.
          </p>
        </div>
               
        <div className='lg:flex-row  flex-col py-10 gap-5 flex items-center justify-center'> 
         <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="flex items-center justify-center w-[300px] h-[250px] bg-[#FFB5B530] rounded-md py-10 px-5"
          >
            <div>
              <p className="font-bold  poppins-medium text-center pt-3">Who Are We?</p>
              <p className="text-[13px] leading-loose open-sans text-[#56627b] py-3">
                3G Integrated Systems is an information technology firm dedicated exclusively to delivering end-to-end computing, telecommunication and project management solutions.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="flex items-center justify-center w-[300px] h-[250px] bg-blue-100 rounded-md py-10 px-5"
          >
            <div>
              <p className="font-bold  poppins-medium text-center pt-3">What Do We Do?</p>
              <p className="text-[13px] leading-loose open-sans text-[#56627b] py-3">
                We at 3G Integrated Systems strive to understand the needs of the consumers, and provide the most effective computing solutions to meet those need.
              </p>
            </div>
          </motion.div>
              </div>
          </div>
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: 'easeIn' }}
          className="items-start pt-10"
        >
          <div className="flex items-center">
            <div className="w-10 h-1 rotate-90 bg-[#222] rounded-full" />
            <p className="font-bold playfair-display text-2xl text-center ml-3">Our Profile</p>
          </div>
          <div className="pt-10 px-10 space-y-1">
            <p className="text-sm leading-loose  open-sans">
              3G Integrated Systems is an information technology firm dedicated exclusively to delivering end-to-end computing, telecommunication and project management solutions. We deliver complete solutions to the government, health, banking, manufacturing and distribution industries.
            </p>
            <p className="text-sm leading-loose  open-sans">
              We invest in our clients, our employees and our core values and you can rely on our industry expertise for all your needs.
            </p>
            <p className="text-sm leading-loose  open-sans">
              "For more details, please download our" <a href="profile.pdf" target="_blank" className="underline">company profile</a>
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: 'easeIn' }}
          className="items-end flex flex-col pt-10"
        >
          <div className="flex items-center">
            <p className="font-bold playfair-display text-2xl text-center mr-3">Our Mission</p>
            <div className="w-10 h-1 rotate-90 bg-[#222] rounded-full" />
          </div>
          <div className="pt-10 px-10 space-y-1">
            <p className="text-sm leading-loose open-sans">
              3G Integrated Systems' mission is to provide customer satisfaction, as this is the key to success. We will continue supplying quality services and products to meet our customers' needs. We will maintain highly skilled and professional workforce in partnership with you, our customer, towards meeting your business objectives.
            </p>
          </div>
        </motion.div>
              <div className="items-center py-10 flex-col flex justify-center">
      <h1 className="playfair-display py-2 text-xl text-black md:text-2xl lg:text-3xl font-bold">Meet Our Team</h1>
          <div className="w-14  h-1  rounded-full bg-[#BCDBFF]" /></div>
          
            <div className='lg:flex-row lg:w-full px-10 flex-col  gap-5 pt-5 items-center flex justify-center'>
           <div className='items-center flex flex-col'> 
           <img src='pictures/profile.jpg' alt='Managing Director' className='w-[250px]  h-[350px] rounded-md'/>
           <p className='text-sm font-bold text-center open-sanss'>Adekunle Adebayo, ACA Managing Director</p>
           <p className='text-sm raleway'>Accounts and Finance</p>
           </div>
            <div className='items-center flex flex-col'> 
            <img src='pictures/adeyemi.jpg' alt='Technical Director' className='w-[250px]  h-[350px] rounded-md'/>
           <p className='text-sm font-bold text-center open-sanss'>Adeyemi Adebiyi, MSc, PMP, CSM, ITIL Technical Director</p>
           <p className='text-sm raleway'>Technical and Presales</p>
           </div>
            <div className='items-center flex flex-col'> 
            <img src='pictures/temidayo.jpg' alt='External Consultant' className='w-[250px]  h-[350px] rounded-md'/>
           <p className='text-sm font-bold  text-center open-sanss' >Temidayo Adekanye, PGCE, MSc External Consultant</p>
           <p className='text-sm raleway'>Business Process Re-engineering and Strategy</p>
           </div>
            <div className='items-center flex flex-col'> 
            <img src='pictures/adeyemi.jpg' alt='Senior Consultant' className='w-[250px]  h-[350px] rounded-md'/>
           <p className='text-sm font-bold open-sanss'>Jubril IdrisMBA Senior Consultant</p>
           <p className='text-sm raleway'>Consulting and Operations</p>
           </div></div>
                    <div className="items-center pt-10 flex-col flex justify-center">
      <h1 className="playfair-display py-2 text-xl text-black md:text-2xl lg:text-3xl font-bold">Methodology</h1>
          <div className="w-14  h-1  rounded-full bg-[#BCDBFF]" /></div>
          <div ><Methodology /></div>

          <div>
            
          </div>
          <div>
            
          </div>
          </div></div>
  )
}
