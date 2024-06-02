import { FaTwitter, FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <img src="icons/logo.png" className="w-36 mb-4" alt="Logo" />
            <div className="flex space-x-4 mb-4">
              <a href="#" aria-label="Instagram" className=" hover:">
                <FaInstagram size={20} />
              </a>
              <a href="#" aria-label="Twitter" className=" hover:">
                <FaTwitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className=" hover:">
                <FaLinkedinIn size={20} />
              </a>
              <a href="#" aria-label="Facebook" className=" hover:">
                <FaFacebookF size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold open-sans mb-4">Our Offices</h3>
            <p className="text-black open-sans mb-2">US Office: 10, Hillcrest Avenue, West Orange, NJ. 07052.</p>
            <p className="text-black open-sans mb-2">Nigeria Office: 40b, Commercial Avenue, Yaba, Lagos.</p>
          </div>
          <div className="">
            <h3 className="text-lg open-sans font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-black open-sans hover:text-black">About Us</a>
              <a href="#" className="text-black open-sans hover:text-black">Partners</a>
              <a href="#" className="text-black open-sans hover:text-black">Contact Us</a>
            </nav>
          </div>
          
        </div>
        <div className="mt-8 pt-4 border-t border-gray-700 text-center text-black">
          <p className="open-sans">&copy; 2023 Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}