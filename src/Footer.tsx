import { FaXTwitter, FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white flex flex-col md:flex-col space-y-5 lg:flex-row items-center justify-between px-10 md:px-15 lg:px-20 py-20 w-full border-t border-gray-200">
      <div className="flex flex-col gap-10 items-start lg:items-start md:items-center   mb-6 md:mb-0">
       <div><p className=" md:text-center  lg:text-start text-xl font-bold playfair-display mb-4">3G Integrated System Ltd</p>
        <div className="flex space-x-4">
          <a href="#" aria-label="Instagram">
            <FaInstagram size={15} className="text-black hover:text-gray-700" />
          </a>
          <a href="#" aria-label="Twitter">
            <FaXTwitter size={15} className="text-black hover:text-gray-700" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedinIn size={15} className="text-black hover:text-gray-700" />
          </a>
          <a href="#" aria-label="Facebook">
            <FaFacebookF size={13} className="text-black hover:text-gray-700" />
          </a>
        </div></div>
        <div className="flex flex-col lg:items-start items-start md:items-center">
        <h3 className=" playfair-display text-lg font-bold">Our Offices</h3>
        <p className="text-sm open-sans py-1">US Office: 10, Hillcrest Avenue, West Orange, NJ. 07052.</p>
        <p className="text-sm open-sans py-1">Nigeria Office: 40b, Commercial Avenue, Yaba, Lagos.</p>
      </div>
      </div>
      
      <nav className="flex space-x-6  items-center justify-center text-black text-sm mb-6 md:mb-0">
        <a href="#" className="open-sans hover:underline">About Us</a>
        <a href="#" className="open-sans hover:underline">Partners</a>
        <div className='bg-black p-3'><a href="#" className="text-white hover:underline open-sans">Contact Us</a></div>
      </nav> 

      
    </footer>
  );
}
