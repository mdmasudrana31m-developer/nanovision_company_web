"use client";

import Image from "next/image";
import Link from "next/link";

import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";

export default function Foooter() {
  return (
    <>
      <footer className="">
        <div
          className="
        relative
        overflow-hidden
        bg-cover
        bg-center
        bg-no-repeat
        text-white
      "
          style={{
            backgroundImage: "url('/Footerbackground.webp')",
          }}
        >
          {/* ===== TOP WAVE ===== */}
          <div className="absolute lg:top-[-10px]  top-[-40px] left-0 w-full overflow-hidden leading-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
              className="w-full h-[90px] md:h-[60px]"
            >
              {/* Wave 1 */}
              <path
                fill="rgba(255,255,255,0.25)"
                d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7
      c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7
      S492.4,59,473,67.3z"
              />

              {/* Wave 2 */}
              <path
                fill="rgba(255,255,255,0.45)"
                d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1
      s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5
      c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
              />

              {/* Main Wave */}
              <path
                fill="white"
                d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6
      C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0
      h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
              />
            </svg>
          </div>
          {/* Main Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6  pt-18 pb-6 ">
            <div
              className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-12
          "
            >
              {/* Logo & About */}
              <div>
                <div className="bg-white inline-block rounded-lg p-2 mb-6">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width={240}
                    height={70}
                    className="object-contain"
                  />
                </div>

                <p className="text-[17px] leading-[1.9] text-gray-100 max-w-[320px]">
                  Never despair never worry never lose patience keep trying
                  inshallah you will succeed
                </p>

                {/* Social */}
                <div className="flex items-center gap-3 mt-6">
                  <Link
                    href="https://www.facebook.com/profile.php?id=61579937264212"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white text-[#3b5998] flex items-center justify-center hover:scale-110 transition"
                  >
                    <FaFacebookF />
                  </Link>

                  <Link
                    href="#"
                    className="w-10 h-10 rounded-full bg-white text-[#1da1f2] flex items-center justify-center hover:scale-110 transition"
                  >
                    <FaTwitter />
                  </Link>

                  <Link
                    href="#"
                    className="w-10 h-10 rounded-full bg-white text-[#25d366] flex items-center justify-center hover:scale-110 transition"
                  >
                    <FaWhatsapp />
                  </Link>

                  <Link
                    href="#"
                    className="w-10 h-10 rounded-full bg-white text-[#e1306c] flex items-center justify-center hover:scale-110 transition"
                  >
                    <FaInstagram />
                  </Link>

                  <Link
                    href="#"
                    className="w-10 h-10 rounded-full bg-white text-[#0077b5] flex items-center justify-center hover:scale-110 transition"
                  >
                    <FaLinkedinIn />
                  </Link>
                </div>
              </div>

              {/* Quick Menu */}
              <div>
                <h3 className="text-[32px] font-semibold mb-6 relative inline-block">
                  Quick Menu
                  <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-white" />
                </h3>

                <ul className="space-y-2 text-[18px] text-gray-100">
                  <li>
                    <Link href="/" className="hover:text-yellow-300 transition">
                      ⦿ Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/products"
                      className="hover:text-yellow-300 transition"
                    >
                      ⦿ Products
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/services"
                      className="hover:text-yellow-300 transition"
                    >
                      ⦿ Services
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/careers"
                      className="hover:text-yellow-300 transition"
                    >
                      ⦿ Careers
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-yellow-300 transition"
                    >
                      ⦿ Contact
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/about-us"
                      className="hover:text-yellow-300 transition"
                    >
                      ⦿ About Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Our Services */}
              <div>
                <h3 className="text-[32px] font-semibold mb-6 relative inline-block">
                  Our Services
                  <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-white" />
                </h3>

                <ul className="space-y-1 text-[18px] text-gray-100">
                  <li>⦿ Custom Software Development</li>
                  <li>⦿ Web Design & Development</li>
                  <li>⦿ ERP Development</li>
                  <li>⦿ UI/UX Design</li>
                  <li>⦿ Cloud Engineering & DevOps</li>
                  <li>⦿ AI & ML Development</li>
                  <li>⦿ Banking Solution</li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-[32px] font-semibold mb-6 relative inline-block">
                  Contact Us
                  <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-white" />
                </h3>

                <div className="space-y-6 text-[18px] text-gray-100">
                  <div className="flex items-start gap-4">
                    <FiPhoneCall className="mt-1 text-[22px]" />

                    <p>Call Us - +8801976350591</p>
                  </div>

                  <div className="flex items-start gap-4">
                    <FiMail className="mt-1 text-[22px]" />

                    <p>nano@vision.com</p>
                  </div>

                  <div className="flex items-start gap-4">
                    <FiMapPin className="mt-1 text-[22px]" />

                    <p>
                      128, Boikali, Jessore Roard Khulna
                      <br />
                      Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/30 mt-14 pt-8">
              <div
                className="
              flex
              flex-col
              md:flex-row
              justify-between
              items-center
              gap-5
              text-[16px]
              text-gray-100
            "
              >
                <p className="text-center">
                  © Copyright {new Date().getFullYear()} Nonovision All right
                  reserved.
                </p>

                <div className="flex flex-wrap justify-center gap-4 text-center">
                  <Link href="#">Privacy Policy</Link>
                  <span>|</span>
                  <Link href="#">Cookie Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
