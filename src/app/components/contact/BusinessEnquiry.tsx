"use client";

export default function BusinessEnquiry() {
  return (
    <section
      className="min-h-screen  flex items-center justify-center px-4 py-16 
    bg-gradient-to-br from-[#0b1446] via-[#132c6b] to-[#4c7d73]"
      id="business"
    >
      {/* Container */}
      <div className="w-full max-w-3xl text-center text-white">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
          Business Enquiry
        </h2>
        <p className="text-sm text-gray-300 mb-8">
          To request a quote or a product enquiry, please fill in your details:
        </p>

        {/* Form Box */}
        <div className="bg-white rounded-xl p-6 md:p-8 text-gray-700 shadow-xl">
          <form className="space-y-4 text-left">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label>First Name*</label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  className="w-full border rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label>Last Name*</label>
                <input
                  type="text"
                  placeholder="Enter last name"
                  className="w-full border rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label>Contact</label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full border rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label>Email*</label>

                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full border rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label>What&apos;s app Number*</label>

                <input
                  type="text"
                  placeholder="Enter your WhatsApp number"
                  className="w-full border rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label>Are you currently in a Telecom Business</label>

                <select className="w-full border rounded-md px-4 py-3 outline-none">
                  <option>Select</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>

            {/* Company */}

            <div>
              <label>Company/Organization Name</label>

              <input
                type="text"
                placeholder="Enter your company/organization name"
                className="w-full border rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <label>Message*</label>

              <textarea
                rows={4}
                placeholder="Type message"
                className="w-full border rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Fake Captcha */}
            <div className="bg-gray-100 border rounded-md p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <span className="text-sm text-gray-700">
                  I&apos;m not a robot
                </span>
              </div>
              <span className="text-xs text-gray-500">reCAPTCHA</span>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-md font-medium transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
