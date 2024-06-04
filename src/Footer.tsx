import { FaTwitter, FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa"; 
 
export default function Footer() { 
  return ( 
    <footer className="bg-white text-black py-5"> 
      <div className="container mx-auto px-6 md:px-12"> 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> 
          <div className="space-y-3"> 
           <img src="logo.png" className="w-[200px]"/>
            <div className="flex space-x-4"> 
              <a href="#" aria-label="Instagram" className="text-black hover:text-gray-400 transition-colors duration-300"> 
                <FaInstagram size={20} /> 
              </a> 
              <a href="#" aria-label="Twitter" className="text-black hover:text-gray-400 transition-colors duration-300"> 
                <FaTwitter size={20} /> 
              </a> 
              <a href="#" aria-label="LinkedIn" className="text-black hover:text-gray-400 transition-colors duration-300"> 
                <FaLinkedinIn size={20} /> 
              </a> 
              <a href="#" aria-label="Facebook" className="text-black hover:text-gray-400 transition-colors duration-300"> 
                <FaFacebookF size={20} /> 
              </a> 
            </div> 
          </div> 
          <div> 
            <h3 className="text-x open-sanss mb-4">Quick Links</h3> 
            <nav> 
              <ul className="space-y-2"> 
                <li><a href="#" className="hover:text-gray-400 text-sm open-sans transition-colors duration-300">About Us</a></li> 
                <li><a href="#" className="hover:text-gray-400 text-sm open-sans -colors duration-300">Partners</a></li> 
                <li><a href="#" className="hover:text-gray-400 text-sm open-sans transition-colors duration-300">Contact Us</a></li> 
              </ul> 
            </nav> 
          </div> 
          <div> 
            <h3 className=" open-sanss  mb-4">Our Office</h3> 
            <p className="mb-2 text-sm open-sans">US Office: 10, Hillcrest Avenue, West Orange, NJ. 07052.</p> 
            <p className="mb-2 text-sm lead open-sans">Nigeria Office: 40b, Commercial Avenue, Yaba, Lagos.</p> 
            <p className="text-sm open-sans">Email: info@3gisltd.com</p> 
          </div> 
        </div> 
        <hr className="my-6 border-gray-700" /> 
        <p className="text-center text-sm">&copy; {new Date().getFullYear()} 3GIS Ltd. All rights reserved.</p> 
      </div> 
    </footer> 
  ); 
}