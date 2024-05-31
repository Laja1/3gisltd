const patnersData = [{
  'imageUrl':'icons/napbs.jpg',
  'alt':'Napbs Logo',
  'text':"The National Association of Professional Background Screeners (NAPBS) exists to promote ethical business practices, compliance with the Fair Credit Reporting Act (FCRA) in the U.S., equal employment opportunity and state and international consumer protection laws relating to the background screening profession. 3GIS is a member of the NAPBS to support the professional delivery of Background Screening service to Nigeria.",
 'reversed':false
},
{
  'imageUrl':'icons/asseco.gif',
  'alt':'Asseco Logo',
  'text':"Asseco Spain is a subsidiary under the Asseco Group with about 13,000 professional spread over 25 countries around the world. Asseco Spain, headquarters of Asseco South West Europe and operating up to 450 professionals has documented track record providing Self Service solutions to airports and the travel industry. Asseco Spain is in exclusive partnership with 3GIS to provide this service to Nigeria.",
  'reversed':true
},
{
  'imageUrl':"icons/secugen.jpg",
  'alt':'Secugen Logo',
  'text':"SecuGen Corporation is the world's leading provider of advanced, optical fingerprint recognition technology, products, tools and platforms. Known for their extreme durability, accuracy, and support for a wide range of platforms, SecuGen's fingerprint biometric products include FBI-certified fingerprint sensors. 3GIS is in partnership with SecuGen as an Independent Software Vendor providing identity management based applications in Nigeria.",
'reversed':false},
{
  'imageUrl':'icons/acs_logo.jpg',
  'alt':'ACS Logo',
  'text':"Advanced Card Systems Ltd. founded in 1995, is one of the world's top 3 suppliers of PC-linked smart card readers, as well as the winner of the Product Quality Leadership Award for Smart Card Readers from Frost & Sullivan. A leader in the smart card industry, ACS has the technology, expertise and global resources to facilitate an easier adoption of smart card applications in different industries across the globe. 3GIS is in partnership with ACS as a Value Added Reseller of its smart card products in Nigeria to further enhance electronic banking and commerce is the country.",
  'reversed':true
},
{
  'imageUrl':'icons/nitgen_logo.jpg',
  'alt':'Nitigen Logo',
  'text':"Through relentless efforts in R&D, and responding dynamically to demands from the biometric security market, NITGEN is rapidly becoming the leader in biometric application/technology markets. NITGEN has developed and now offers, advanced biometric authentication solutions, which would not have been possible without the core technologies for fingerprint recognition solutions that NITGEN has. 3GIS is in partnership with NITGEN as a Value Added Reseller of its security products in Nigeria.",
'reversed':false
},
{
  'imageUrl':'icons/dlink_logo.jpg',
  'alt':'Dlink Logo',
  'text':"Founded in 1986, D-Link is a global leader in the design, manufacture and marketing of advanced IP networking, broadband, digital, voice and data communications solutions. D-Link continually meets the global networking and connectivity needs of digital home consumers, small office professionals, small- to medium-sized businesses, and enterprise environments. 3GIS believe IP is the future and therefore is in partnership with D-Link as a Value Added Reseller of its Networking products to provide IP connectivity solutions to small and medium-sized companies in Nigeria. These include IP CCTV Surveillance and Wireless solutions.",
'reversed':true},
{
  'imageUrl':'icons/ruckus_logo.png',
  'alt':'Ruckus Logo',
  'text':"Ruckus Wireless™, founded in 2004, have been designing, manufacturing, and marketing Smart Wi-Fi products and Smart Wireless LAN (WLAN) systems. As one of the fastest growing companies in the wireless LAN space according to Gartner, their enterprise customers span every vertical market including world-class hotel brands, hospitals, universities, school districts, retailers, warehouses, global carrier customers such as AT&T, Belgacom, Deutsche Telecom and others. 3GIS is in partnership with Ruckus Wireless™ as a Value Added Reseller of its IP Convergence products to provide 3play (data, voice and video) convergence solutions to businesses in Nigeria.",
'reversed':false},
]

export default function Partners() {
  return (
    <div>
      <div className="items-center py-10 mx-auto flex-col flex justify-center">
        <h1 className="ralewayy py-2 text-xl text-black md:text-2xl lg:text-3xl font-bold">
          Our Partners
        </h1>
        <div className="w-14 h-1 rounded-full bg-[#BCDBFF]" />
      </div>
      <div className="flex-col pb-10 px-10  flex gap-10  items-center justify-center">
      {patnersData.map((item, index) => (
  <div
    key={index}
    className={`lg:flex flex-col gap-10 space-y-3 items-center justify-center ${
      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
    }`}
  >
    <img
      src={item.imageUrl}
      alt={item.alt}
      className="w-[250px] h-[100px]"
    />
    <div className="w-full max-w-2xl">
         <p className="text-sm raleway">{item.text}</p>
    </div>
  </div>
))}
      </div>
    </div>
  );
}