
export default function Location() {
  return (
    <div className="bg-gray-100  w-full">
      <div className=" mx-auto py-5 items-center flex justify-center px-4 sm:px-6 lg:px-8">
  
          <div className="flex flex-row items-center justify-between max-w-[1000px] gap-10">
            <div className="flex flex-col justify-center items-center md:items-start">
              <h3 className="ralewayy text-3xl md:text-4xl lg:text-3xl font-bold mb-4">Our Offices</h3>
              <p className="raleway text-sm py-2">US Office: 10, Hillcrest Avenue, West Orange, NJ. 07052.</p>
              <p className="raleway text-sm py-2">Nigeria Office: 40b, Commercial Avenue, Yaba, Lagos.</p>
              
            </div>
            <div>
              <img src="pictures/Map.png" alt="map" className="w-full h-[30vh]" />
            </div>
              </div>
              </div>
    </div>
  );
}