import { useParams } from "react-router-dom"

const serviceData = [
    {
        "id":"1",
        "title": "Project Management Consulting",
        "description1": "Ensuring that projects deliver on their benefits and objectives is the reason for systematic project management approach adopted by 3GIS to project delivery.",
        "description2":"In achieving this, we align ourselves as a company to applying project management tenets that bring about eventual gain for all stakeholders within a project. 3GIS consists of PRINCE2 and PMI project management certified consultants that bring to bare all the requisite skills and knowledge areas necessary to achieve project success.",
        "description3":"3GIS projects are managed to time, within budget and meeting stakeholder objectives by employing PRINCE2 and PMI project management methodologies. Projects are divided into stages, with each stage reflecting the project management process groups, (initiation, planning, execution, control and close-out) for easy management. Divided into manageable stages, the method enables an efficient control of resources and activities.",
        "description4":"Tools used for project management include web, email and Enterprise Microsoft Project for offline and online reporting, Microsoft Visio and Word for diagramming and overall project documentations. Bespoke web applications can also be developed to improve access to documents by team and stakeholders in geographically dispersed locations working on same projects.",
        "imageUrl":"/pictures/project_mg.jpg",
        "alt":"Project Manager"
        
    },
      { "id":"2",
        "title": "Web page Design",
        "description1": "Everywhere you turn these days; someone is doing business on the Web. The Internet is the most cost effective way to advertise your company to potential customers. 3G Integrated Systems state-of-the-art servers--connected to the Internet by high-speed lines are backed by one of the most powerful Internet network operation centers in the world.",
        "description3":"Our approach towards designing global standards based web pages will be achieved through our staff who will be well vast in the use of software development programs such as Java and FoxPro and certifications and training from world acclaimed vendors such as Microsoft and Veritas"
    ,"imageUrl":"/pictures/web_des.jpg",
        "alt":"Web Designer"
    },
       {
         "id":"3",
        "title": "E-Commerce & Network Security",
        "description1": "Our powerful E-Commerce Solutions will provide for you a total integration of the components, which will be required to offer your clients the best of services over any electronic media including the Internet.",
        "description2":"Electronic Commerce, which involves the deployment of Information Technology to do trading, will require the client to safeguard its data infrastructure since her network will be exposed to the public for online business. As a result of this, the need for network security cannot be over emphasized at this point.",
        "description3":"We are competent in the design and installation of E-commerce solutions from Lucent Technologies, Ericsson and Cisco Systems (for data centric E-commerce solutions). E-Commerce solutions will include Telephone Banking, Internet Banking, PC banking and Contact Centers."
         ,"imageUrl":"/pictures/app_dev.jpg",
        "alt":"Network Manager"
    },
         {
             "id":"4",
        "title": "Custom Software Design",
        "description1": "3G Integrated Systems offers custom programming services for all types of businesses. We specialize in database software. We can also assist small businesses with setting up networks and trouble-shooting systems. Feel free to contact us with any questions you may have. Our focus is in helping companies capitalize on the advent of the Internet for business opportunities. We utilize a unique approach that combines three core disciplines, strategic consulting, creative design and technology services.",
        "description2": "Some of the services that we will provide for our clients include the design and development of:",
        "services": [
            "Internet strategy solutions that help integrate a client's Internet initiatives with its broader corporate strategies and business practices",
            "Electronic commerce solutions that enable a company to attract new customers, and sell goods and services over a Web site",
            "Business partner solutions, or extranets, that allow companies to share information and communicate efficiently with one another",
            "Internal information solutions, or intranets, that improve a company's ability to capture, store, and distribute helpful information to its employees",
            "New business ventures exclusively for the Internet",
            "Develop Quality Assurance system around any development",
            "Bespoke software development to meet specific corporate needs"
        ]
         ,"imageUrl":"/pictures/software.jpg",
        "alt":"Software Designer"
    },
           {
             "id":"5",
        "title": "Networking Solutions",
        "description1": "3G Integrated Systems will offer the design and implementation of the following networking areas: Data, voice and converged Network Infrastructure. A sound Structured Cabling System is the infrastructure upon which a successful LAN for data and voice is built. Its reliability is a must to ensure quick and efficient communication between the workstations, network devices (such as hubs, switches) and fileservers.",
        "description2": "3G understands that installation of modern high-speed data transfer cable requires highly trained personnel whose expertise, experience and knowledge are unquestionable. It is their goal to avoid common errors such as pinching and stretching to ensure the smooth passage for data moving at ever-faster speeds. We shall implement LANs ranging from simple shared Ethernet networks to multiplayer switched Gigabit Ethernet networks using Unshielded Twisted Pair cables to single-mode and multimode Fiber Optic cables. We also plan to deploy Unified Networks for both Voice, video and Data. The cabling system will be future-ready for the deployment of these various applications thereby protecting the investment of our clients.",
        "description3": "3G Integrated Systems’ WAN infrastructures will deliver speed, maximum flexibility and simplicity. Metropolitan area networks (MANs) and wide area networks (WANs) utilizing Fire Optics, Wireless Radios, Microwave, VSAT. We design and deploy networks that provide for simplicity of connection methods without sacrificing the high bandwidth and quality needed for constantly evolving applications.",
        "description4": "Simplicity: to reduce the complexity, cost and inefficiencies associated with making conversions between your local area network (LAN) and traditional wide area network (WAN) protocols, so there’s no learning curve for your IT staff. With the deployment and optimization of the appropriate static and routing protocols (such as RIPv2, IGRP, EIGRP, OSPF etc.), we will ensure and maintain optimum performance on your Wide Area connections. Quality and Class of Service/Traffic Engineering mechanisms: To support the required service levels of customer applications, providing robust and stable networks. Our solutions will also provide remote access for our clients’ sales workforce and high net-worth customers while securing their internal network from unauthorized access from the public."
     ,"imageUrl":"/pictures/networking.jpg",
        "alt":"Network Solution"
    },
       {
        "id":"6",
        "title": "Data Warehousing and Content-based Networking",
        "description1": "This will involve the collating of humungous vital data/ information in electronic form and making it available at the touch of a button. We shall provide these services to clients who require these installations on their private networks. This will be achieved with the use of database platforms such as Oracle, Microsoft SQL etc, creating a structure database system for the corporation.",
    "imageUrl":"/pictures/data_warehousing.jpg",
        "alt":"Software Designer"
     },
    {
        "id":"7",
        "title": "Installation of Data Centers and Backup Power Systems",
        "description1": "The data center can also be regarded as the heart of any network as this is where all the networking and communications devices used on the network will be accommodated. With this in mind, 3G will provide the environmental conditions necessary for these devices to be physically managed. This will be achieved through the installation of fire detection and extinguishing systems, access control for security, raised flooring for proper cable management and environmental humidifiers for optimum temperature control.",
        "descritption2":"As part of a total solution for our clients, we shall also provide clean and stable power for all data equipments which are very sensitive to power fluctuations, surges and outages through the installation of Uninterruptible Power Systems (UPS). This will also help to provide power backup in case of failure of the primary power source such as NEPA."
     ,"imageUrl":"/pictures/networking.jpg",
        "alt":"Network Solution"
    },
    {
        "id":"8",
        "title": "Network Support Solution",
        "description1": "We at 3G believe that it is not enough to carry out these installations and just leave the network for the client to worry about. In light of this, we will offer free and chargeable after sales support for all networks deployed by us or/ and other companies. This we believe will guarantee our valued customers ‘Peace of Mind’. Our various support services will include;",
        "description2":"Capacity Planning: Capacity Planning procedures are important to the life of your network. Staying ahead of your users' requirements prevents service outages or performance problems. Our engineers can review your current resources and needs and project future needs. We also recommend procedures for collecting capacity planning data over time to allow for future projections.",
        "description3":"Performance Tuning:Our engineers can analyze the performance of your servers and networks. We work with Ethernet networks, Novell file servers, and NT file servers.",
        "decsription4":"Asset Management: Use our staff to inventory your computer assets. Physical inventory can be done on site at any level of detail. Our experienced technicians can inventory your systems down to the component level. We also support asset inventory systems such as Microsoft Systems Management Server to provide ongoing asset control in larger network environments.",
        "description5":"Network Administration: We also provide network administrators full or part time to manage your users accounts, server logs, backups, and security changes.",
        "description6":"TCP/ IP Management: Using BOOTP or DHCP to manage TCP/IP addresses on your network eliminates addressing conflicts and lengthy troubleshooting sessions. WINS services translate TCP/IP for Microsoft networks for wide area network use.",
        "description7":"Other Allied services: This will include the supply of any mechanical or electrical/ electronic devices, which could form a part of a total IT solution or just a stand alone service."
    ,"imageUrl":"/pictures/networking.jpg",
        "alt":"Network Solution"
    },
]

export default function Service() {
  const { id } = useParams();
    const data = serviceData.find((item) => item.id === id);

    if (!data) {
        return <div>Service not found</div>;
    }

  return (
    <div className="p-5">
    <div className="max-w-4xl shadow-xl  mx-auto p-6 rounded-lg mt-10">
       <div className="relative w-full h-full">
      <img 
                src={data.imageUrl} 
                className='w-full rounded-md h-auto object-cover' 
                alt={data.alt}
            />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
          <div className="flex flex-col items-center justify-center py-5">
            <h1 className="playfair-display text-xl md:text-2xl lg:text-3xl font-bold py-2">{data.title}</h1>
            <div className="w-14 h-1 bg-[#BCDBFF] rounded-full" />
          </div>
         
        </div>
      </div>
        <div className="overflow-hidden rounded-t-lg">
            
        </div>
        <h2 className="text-3xl font-bold mb-4 text-gray-800"></h2>
        {[data.description1, data.description2, data.description3, data.description4, data.description5, data.description6, data.description7]
            .filter(Boolean)
            .map((description, idx) => (
                <p key={idx} className="mb-4 open-sans text-sm leading-loose">{description}</p>
            ))}
        {data.services && (
            <ul className="list-disc list-inside mt-4 pl-4 text-gray-700">
                {data.services.map((item, idx) => (
                    <li key={idx} className="mb-2">{item}</li>
                ))}
            </ul>
        )}
    </div></div>
);
                }