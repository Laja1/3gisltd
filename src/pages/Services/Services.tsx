import { motion } from 'framer-motion'
const serviceData = [
    {
      title: 'Project Management Consulting',
      description: 'Ensuring that projects deliver on their benefits and objectives is the reason for the systematic project management approach adopted by 3GIS to project delivery. In achieving this, we align ourselves as a company to applying proven project management tenets.',
        cardColor: "#A3B2C230"
    },
    {
      title: 'Web page Design',
      description: 'Everywhere you turn these days; someone is doing business on the Web. The Internet is the most cost effective way to advertise your company to potential customers. 3G Integrated Systems state-of-the-art servers--connected to the Internet by high-speed lines are backed by one of the most powerful Internet network operation centers in the world.',
      cardColor: "#EEDEDE30"
    },
    {
      title: 'E-Commerce & Network Security',
      description: 'Our powerful E-Commerce Solutions will provide for you a total integration of the components, which will be required to offer your clients the best of services over any electronic media including the Internet.',
      cardColor: "#BAFED530"
    },
    {
        title: 'Custom Software Design',
        description: '3G Integrated Systems offers custom programming services for all types of businesses. We specialize in database software. We can also assist small businesses with setting up networks and trouble-shooting systems. Feel free to contact us with any questions you may have. Our focus is in helping companies capitalize on the advent of the Internet for business opportunities.',
        cardColor: "#BCBBF330"
    },
    {
        title: 'Network Design & Installations',
        description: '3G Integrated Systems will offer the design and implementation of the following networking areas; Data, voice and converged Network Infrastructure and Wide Area Networking',
        cardColor: "#FFB5B530"
    },
    {
        title: 'Data Warehousing and Content-based Networking',
        description: 'This will involve the collating of humungous vital data/ information in electronic form and making it available at the touch of a button. We shall provide these services to clients who require these installations on their private networks.',
        cardColor: "#FFF3EA30"
      },
  ]

  
export default function Services() {
  return (
    <div className="text-center flex flex-col items-center justify-center p-10">
           
          <h1 className="ralewayy py-2 text-xl text-black md:text-2xl lg:text-3xl font-bold">Our Services</h1>
          <div className="w-14  h-1  rounded-full bg-[#BCDBFF]"/>
          <div className="flex-row pt-10 items-center justify-center flex-wrap flex gap-5">
              {serviceData.map((item) =>
                  
                  <motion.div initial={{scale:1}} whileHover={{scale:1.1}} style={{ backgroundColor: item.cardColor }} className=' items-center justify-center flex w-[300px] h-[330px] py-10 px-5'>
                  <div>
                      <p className="font-bold ralewayy pt-3 text-center">{item.title}</p>
                  <div className=""><p className="text-[13px]  raleway text-[#56627b] py-3">{item.description}</p></div>
                  </div></motion.div>)}
              </div>
          
    
    </div>
  )
}
