import { FaXTwitter, FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-white flex md:flex-row flex-col lg:flex-row items-center justify-between px-10 py-10 w-full border-t border-gray-200">
      <div className="flex flex-col items-center mb-6">
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
      <div className="flex space-x-6 text-black text-sm">
        <a href="#" className="hover:underline">About Us</a>
        <a href="#" className="hover:underline">Partners</a>
        <a href="#" className="hover:underline">Contact Us</a>
      </div>
    </div>
  );
}
