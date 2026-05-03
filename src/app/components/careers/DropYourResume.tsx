"use client";

export default function DropYourResume() {
  return (
    <section
      className="
      min-h-screen
      flex items-center justify-center
      px-4 py-16
      bg-gradient-to-br from-[#0b1446] via-[#132c6b] to-[#4c7d73]
      "
      id="business"
    >
      <div className="w-full max-w-3xl text-center">
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-white mb-3">
          Drop Your Resume Here
        </h2>

        <p className="text-[16px] text-gray-300 mb-10">
          We’ll contact you if your qualification match with the requirements
        </p>

        {/* FORM BOX */}
        <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-2xl text-left">
          <form className="space-y-2">
            {/* ROW 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-[16px] font-medium text-[#111827] mb-3">
                  First Name*
                </label>

                <input
                  type="text"
                  placeholder="Type first name"
                  className="
                  w-full h-[56px]
                  rounded-xl
                  border border-[#e5e7eb]
                  bg-[#fafafa]
                  px-4
                  text-[16px]
                  placeholder:text-[16px]
                  outline-none
                  focus:border-[#4c56e8]
                "
                />
              </div>

              <div>
                <label className="block text-[16px] font-medium text-[#111827] mb-3">
                  Last Name*
                </label>

                <input
                  type="text"
                  placeholder="Type last name"
                  className="
                  w-full h-[56px]
                  rounded-xl
                  border border-[#e5e7eb]
                  bg-[#fafafa]
                  px-4
                  text-[16px]
                  placeholder:text-[16px]
                  outline-none
                  focus:border-[#4c56e8]
                "
                />
              </div>
            </div>

            {/* ROW 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* PHONE */}
              <div>
                <label className="block text-[16px] font-medium text-[#111827] mb-3">
                  Phone Number*
                </label>

                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="
                    flex-1 h-[56px]
                    rounded-xl
                    border border-[#e5e7eb]
                    bg-[#fafafa]
                    px-4
                    text-[16px]
                    placeholder:text-[16px]
                    outline-none
                    focus:border-[#4c56e8]
                  "
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-[16px] font-medium text-[#111827] mb-3">
                  Email*
                </label>

                <input
                  type="email"
                  placeholder="Type your email"
                  className="
                  w-full h-[56px]
                  rounded-xl
                  border border-[#e5e7eb]
                  bg-[#fafafa]
                  px-4
                  text-[16px]
                  placeholder:text-[16px]
                  outline-none
                  focus:border-[#4c56e8]
                "
                />
              </div>
            </div>

            {/* ROW 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-[16px] font-medium text-[#111827] mb-3">
                  Select department you wish to work
                </label>

                <select
                  className="
                  w-full h-[56px]
                  rounded-xl
                  border border-[#e5e7eb]
                  bg-[#fafafa]
                  px-4
                  text-[16px]
                  text-gray-500
                  outline-none
                  focus:border-[#4c56e8]
                "
                >
                  <option>Select department you wish to work</option>
                  <option>Frontend Developer</option>
                  <option>Backend Developer</option>
                  <option>UI/UX Designer</option>
                </select>
              </div>

              <div>
                <label className="block text-[16px] font-medium text-[#111827] mb-3">
                  Select your location you wish to work
                </label>

                <select
                  className="
                  w-full h-[56px]
                  rounded-xl
                  border border-[#e5e7eb]
                  bg-[#fafafa]
                  px-4
                  text-[16px]
                  text-gray-500
                  outline-none
                  focus:border-[#4c56e8]
                "
                >
                  <option>Select your location you wish to work</option>
                  <option>Dhaka</option>
                  <option>Remote</option>
                  <option>Singapore</option>
                </select>
              </div>
            </div>

            {/* FILE */}
            <div>
              <label className="block text-[16px] font-medium text-[#111827] mb-3">
                Upload Your Resume/CV:
              </label>

              <input
                type="file"
                className="
                w-full
                rounded-xl
                border border-[#e5e7eb]
                bg-[#fafafa]
                text-[16px]
                file:mr-4
                file:border-0
                file:bg-white
                file:px-5
                file:py-4
                file:text-[16px]
                file:font-medium
              "
              />
            </div>

            {/* TEXTAREA */}
            <div>
              <textarea
                rows={6}
                placeholder="What interests you about this department? Please write briefly. We would love to read"
                className="
                w-full
                rounded-xl
                border border-[#e5e7eb]
                bg-[#fafafa]
                px-5 py-5
                text-[16px]
                placeholder:text-[16px]
                outline-none
                resize-none
                focus:border-[#4c56e8]
              "
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="
              w-full h-[58px]
              rounded-xl
              bg-[#4c56e8]
              hover:bg-[#3f49db]
              text-white
              text-[18px]
              font-semibold
              transition-all duration-300
            "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
