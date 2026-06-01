import { Workflow, RefreshCcw, Link2, Users } from "lucide-react";

export default function TicketingSystem() {
  const features = [
    {
      title: "Streamline Processes",
      description:
        "Prioritize customer requests and track their progress throughout the support process",
      icon: Workflow,
      color: "bg-purple-600",
    },
    {
      title: "Minimize Repetitive Tasks",
      description:
        "Automate your ticketing support system to reduce repetitive tasks, freeing up time for more complex customer cases",
      icon: RefreshCcw,
      color: "bg-blue-700",
    },
    {
      title: "Seamless Connection",
      description:
        "Utilize an advanced ticketing system to establish a seamless link between live chat and ticketing, enabling faster resolution of customer issues",
      icon: Link2,
      color: "bg-indigo-600",
    },
    {
      title: "Boost Team Efficiency",
      description:
        "An online ticketing system enhances your customer support team's efficiency, allowing them to deliver quicker and more comprehensive service to clients",
      icon: Users,
      color: "bg-green-600",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#f5f6fa]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827]">
            Ticketing System
          </h2>

          <p className="mt-5 text-[#4B5563] text-lg leading-relaxed">
            Our fast-track ticketing system, integrated with live chat and
            chatbots, offers a centralized platform for effortlessly managing
            and tracking customer inquiries. It efficiently routes incoming
            requests to the appropriate team, ensuring clear and consistent
            communication between customers and support staff.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  bg-white
                  rounded-2xl
                  p-6
                  shadow-sm
                  hover:shadow-xl
                  transition-all
                  duration-300
                  border
                  border-gray-100
                "
              >
                <div
                  className={`
                    ${item.color}
                    w-14
                    h-14
                    rounded-full
                    flex
                    items-center
                    justify-center
                    text-white
                  `}
                >
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#111827]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[#4B5563] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
