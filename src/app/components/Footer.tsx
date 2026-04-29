import Link from "next/link";
import { FaFacebook, FaSquareXTwitter, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FiFacebook, FiLinkedin, FiYoutube } from "react-icons/fi";
import { LiaLinkedinIn } from "react-icons/lia";

export default function Footer() {
  return (
    <footer className="bg-[#020c2c] text-gray-300 px-8 py-12">
      <div className="max-w-7xl mx-auto ">
        {/* 🔹 Top Section */}
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Become a Partner</Link>
              </li>
              <li>
                <Link href="#">Clients</Link>
              </li>
              <li>
                <Link href="#">Awards & Certifications</Link>
              </li>
              <li>
                <Link href="#">Event List</Link>
              </li>
              <li>
                <Link href="#">Beyond Business</Link>
              </li>
              <li>
                <Link href="#">Career</Link>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">All Products</Link>
              </li>
              <li>
                <Link href="#">Blogs</Link>
              </li>
              <li>
                <Link href="#">Resources</Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>

            {/* Icons */}
            <div className="flex gap-4 text-xl mb-4">
              <span className="cursor-pointer hover:text-white">
                <LiaLinkedinIn />
              </span>
              <span className="cursor-pointer hover:text-white"><FaXTwitter/></span>
              <span className="cursor-pointer hover:text-white">
                <FaFacebook />
              </span>
              <span className="cursor-pointer hover:text-white">
                <FaYoutube />
              </span>
            </div>

            {/* Email */}
            <div>
              <p className="text-white font-medium">Email</p>
              <p className="text-sm">marketing@revesoft.com</p>
            </div>
          </div>
        </div>
        {/* 🔹 Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2026 Nano vision. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
