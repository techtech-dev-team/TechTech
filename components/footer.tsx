import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaInfoCircle, FaBlog, FaBriefcase, FaPhone } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-700 relative overflow-hidden w-full flex justify-center">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 opacity-30 blur-3xl w-full h-full"></div>
      
      <div className="relative container mx-auto px-6 py-12 max-w-6xl text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-white w-full justify-center">
          
          {/* Company Section */}
          <div className="w-full flex flex-col items-center sm:items-start">
            <h3 className="font-bold text-lg text-cyan-400">Company</h3>
            <ul className="mt-3 space-y-2 text-gray-300">
              <li>
                <Link href="#" className="flex items-center hover:text-white transition duration-300">
                  <FaInfoCircle className="mr-2 text-cyan-400" /> About
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center hover:text-white transition duration-300">
                  <FaBlog className="mr-2 text-cyan-400" /> Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center hover:text-white transition duration-300">
                  <FaBriefcase className="mr-2 text-cyan-400" /> Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center hover:text-white transition duration-300">
                  <FaPhone className="mr-2 text-cyan-400" /> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect with Us Section */}
          <div className="w-full flex flex-col items-center sm:items-start">
            <h3 className="font-bold text-lg text-cyan-400">Connect with Us</h3>
            <ul className="mt-3 space-y-2 text-gray-300">
              <li>
                <Link href="https://facebook.com" target="_blank" className="flex items-center hover:text-white transition duration-300">
                  <FaFacebook className="mr-2 text-cyan-400" /> Facebook
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com" target="_blank" className="flex items-center hover:text-white transition duration-300">
                  <FaTwitter className="mr-2 text-cyan-400" /> Twitter
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com" target="_blank" className="flex items-center hover:text-white transition duration-300">
                  <FaInstagram className="mr-2 text-cyan-400" /> Instagram
                </Link>
              </li>
              <li>
                <Link href="mailto:support@techtech.in" className="flex items-center hover:text-white transition duration-300">
                  <FaEnvelope className="mr-2 text-cyan-400" /> support@techtech.in
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Address Section */}
          <div className="w-full flex flex-col items-center sm:items-start">
            <h3 className="font-bold text-lg text-cyan-400">Address</h3>
            <ul className="mt-3 space-y-2 text-gray-300 text-center sm:text-left">
              <li>TechTech Pvt</li>
              <li>Phone: +91 9619555596</li>
              <li>Dalvi Complex, Pimple Nilakh</li>
              <li>In Front of Savitribai Phule Udyan BRT, near Jagtap Dairy Maharashtra 411027</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center text-gray-400 text-sm w-full">
          <p>&copy; 2024 TechTech. All rights reserved | Built with ♥ by Prance Studio</p>
        </div>
      </div>
    </footer>
  );
}
