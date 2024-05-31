import { FaXTwitter, FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white flex flex-col md:flex-col space-y-5 lg:flex-row items-center justify-between px-10 py-2 w-full border-t border-gray-200">
      <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
        <p className="text-3xl font-bold mb-4">Logo</p>
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
        </div>
      </div>
      
      <nav className="flex space-x-6 text-black text-sm mb-6 md:mb-0">
        <a href="#" className="hover:underline">About Us</a>
        <a href="#" className="hover:underline">Partners</a>
        <a href="#" className="hover:underline">Contact Us</a>
      </nav>

      <div className="flex flex-col lg:items-end items-center md:items-center">
        <h3 className="text-xl font-bold mb-4">Our Offices</h3>
        <p className="text-sm py-2">US Office: 10, Hillcrest Avenue, West Orange, NJ. 07052.</p>
        <p className="text-sm py-2">Nigeria Office: 40b, Commercial Avenue, Yaba, Lagos.</p>
      </div>
    </footer>
  );
}
