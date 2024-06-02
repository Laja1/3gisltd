import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

    const serviceData = [
      {
         title: 'Project Management Consulting',
      description: 'Ensuring that projects deliver on their benefits and objectives is the reason for the systematic project management approach adopted by 3GIS to project delivery. In achieving this, we align ourselves as a company to applying proven project management tenets.',
        imageUrl: 'pictures/project_mg.jpg',
        imageAlt: 'Project Management',
      
      },
      {
          title: 'Web page Design',
      description: 'Everywhere you turn these days; someone is doing business on the Web. The Internet is the most cost effective way to advertise your company to potential customers. 3G Integrated Systems state-of-the-art servers--connected to the Internet by high-speed lines are backed by one of the most powerful Internet network operation centers in the world.',
        imageUrl: 'pictures/web_des.jpg',
        imageAlt: 'Business Process Re-Engineering',
        reversed: true, // Reversed layout
      },
      {
         title: 'E-Commerce & Network Security',
      description: 'Our powerful E-Commerce Solutions will provide for you a total integration of the components, which will be required to offer your clients the best of services over any electronic media including the Internet.',
        imageUrl: 'pictures/app_dev.jpg',
        imageAlt: 'Application Development',
      
      },
       {
         title: 'Custom Software Design',
        description: '3G Integrated Systems offers custom programming services for all types of businesses. We specialize in database software. We can also assist small businesses with setting up networks and trouble-shooting systems. Feel free to contact us with any questions you may have. Our focus is in helping companies capitalize on the advent of the Internet for business opportunities.',
        imageUrl: 'pictures/software.jpg',
        imageAlt: 'Application Development',
      
      },
       {
         title: 'Network Design & Installations',
        description: '3G Integrated Systems will offer the design and implementation of the following networking areas; Data, voice and converged Network Infrastructure and Wide Area Networking',
        imageUrl: 'pictures/networking.jpg',
        imageAlt: 'Application Development',
      
      },
      
       {
          title: 'Data Warehousing and Content-based Networking',
        description: 'This will involve the collating of humungous vital data/ information in electronic form and making it available at the touch of a button. We shall provide these services to clients who require these installations on their private networks.',
        imageUrl: 'pictures/data_warehousing.jpg',
        imageAlt: 'Application Development',
      
      },
    ]


  
export default function Services() {
  return (
    <div className=" flex flex-col items-center justify-center mx-auto py-10">
         <Helmet>
    <title>Services</title>
    <meta name='Services' content="Our Services" />
    <link rel='canonical' href="/Services" />
</Helmet>  
          <h1 className="playfair-display py-2 text-xl text-black md:text-2xl lg:text-3xl font-bold">Our Services</h1>
          <div className="w-14  h-1  rounded-full bg-[#BCDBFF]"/>
          <div className="flex-wrap  mx-auto pt-5 justify-center gap-5 md:gap-10 lg:gap-10   flex">
              {serviceData.map((item) =>
                 <motion.div initial={{ y: 0 }} whileHover={{ y: [-10, 10, -10] }}  className="lg:w-[400px] w-[330px] md:[360px] rounded-lg     border-[1px] shadow-xl  border-[#fdfdf] flex flex-col ">
                      <img src={item.imageUrl} alt={item.imageAlt} className="rounded-t-lg" />
                      <div className="px-5  flex flex-col">
                         
                              <p className="font-bold     open-sanss pt-3 text-center">{item.title}</p>
                          <p className="text-[13px] leading-loose open-sans text-[#56627b] py-3">{item.description}</p>
                          
                      </div>
                  </motion.div>
 ) }
          </div>
          
    
    </div>
  )
}
