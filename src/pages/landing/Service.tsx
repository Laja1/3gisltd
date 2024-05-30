
    const serviceData = [
      {
        title: 'Project Management Consulting',
        description: 'Ensuring that projects deliver on their benefits and objectives is the reason for the systematic project management approach adopted by 3GIS to project delivery. In achieving this, we align ourselves as a company to applying proven project management tenets.',
        imageUrl: 'pictures/project_mg.jpg',
        imageAlt: 'Project Management',
        reversed: false, // Normal layout
      },
      {
        title: 'Business Process Re-Engineering',
        description: 'For efficient running of any business, it is not enough to define the processes and procedures. Businesses must cultivate the habit of documenting these processes as well. Challenges however creep in when these processes stop yielding results due to lack of review and upgrade of the processes to solve new business challenges',
        imageUrl: 'pictures/business_reegineering.jpg',
        imageAlt: 'Business Process Re-Engineering',
        reversed: true, // Reversed layout
      },
      {
        title: 'Application Development',
        description: 'Once processes are working effectively for the organization, the frequency at which transactions occur would reach a level whereby businesses need automation to improve efficiencies of existing manual processes. Combining business process re-engineering and bespoke software development, 3GIS can help to improve workforce efficiency and throughput.',
        imageUrl: 'pictures/app_dev.jpg',
        imageAlt: 'Application Development',
        reversed: false, // Normal layout
      },
    ]

    
export default function Service() {
  return (
    <div className="bg-[#f9f9f9] py-10 flex flex-col items-center justify-center min-h-screen w-full">
    <div>
      <h1 className="ralewayy pb-5 text-xl text-black md:text-2xl lg:text-3xl font-bold">Our Services</h1>
          </div>
          <div className="flex-wrap mx-auto  justify-center gap-5 md:gap-10 lg:gap-20   flex">
              {serviceData.map((item) =>
                  <div className="w-[330px]      border-[1px] shadow-xl  border-[#fdfdf] flex flex-col ">
                      <img src={item.imageUrl} alt={item.imageAlt} className="" />
                      <div className="px-5  flex flex-col">
                          <div className="flex-row flex justify-between">
                              <p className="font-bold ralewayy pt-3 text-center">{item.title}</p></div>
                          <p className="text-[13px] raleway text-[#56627b] py-3">{item.description}</p>
                          
                      </div>
                  </div>
 ) }
          </div>
    </div>
  )
}