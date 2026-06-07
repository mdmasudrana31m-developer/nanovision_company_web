import {
  Package,
} from "lucide-react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaBusinessTime } from "react-icons/fa";
import { GoWorkflow } from "react-icons/go";
import { GrMultiple } from "react-icons/gr";
import { MdInventory2, MdOutlineAccountBalanceWallet, MdOutlineMan2 } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { TbLockAccessOff } from "react-icons/tb";

export default function ERPTechnology() {
  const features = [
    {
      icon: <MdOutlineAccountBalanceWallet size={28} />,
      title: "Finance & Accounting",
      description:
        "Manage budgeting, invoicing, accounts payable, accounts receivable, expenses, payroll, and financial reporting from a single platform.",
    },
    {
      icon: <MdInventory2 size={28} />,
      title: "Inventory Management",
      description:
        "rack inventory levels, warehouse operations, stock movements, procurement, and product availability in real time.",
    },
    {
      icon: <MdOutlineMan2 size={28} />,
      title: "Human Resource Management",
      description:
        "Manage employee records, attendance, payroll, leave requests, performance evaluations, and workforce planning efficiently.",
    },
    {
      icon: <RiCustomerService2Line size={28} />,
      title: "Sales & Customer Management",
      description:
        "Handle leads, quotations, customer records, sales orders, invoices, and customer interactions through an integrated CRM module.",
    },
    {
      icon: <Package size={28} />,
      title: " Procurement & Vendor Management",
      description:
        "Streamline purchasing processes, supplier relationships, approvals, and procurement workflows while maintaining full visibility over spending.",
    },
    {
      icon: <AiOutlineFundProjectionScreen size={28} />,
      title: "Project Management",
      description:
        "Plan, execute, and monitor projects with task tracking, resource allocation, budgeting, and performance reporting.",
    },
    {
      icon: <FaBusinessTime size={28} />,
      title: "Business Intelligence & Reporting",
      description:
        "Access real-time dashboards, performance metrics, and detailed reports that support data-driven decision-making.",
    },
    {
      icon: <GoWorkflow size={28} />,
      title: "Workflow Automation",
      description:
        "Automate repetitive business processes, approvals, notifications, and operational tasks to improve productivity and reduce manual work.",
    },
    {
      icon: <GrMultiple size={28} />,
      title: "Multi-Branch & Multi-Company Support",
      description:
        "Manage multiple offices, branches, subsidiaries, or business units through a centralized management system.",
    },
    {
      icon: <TbLockAccessOff size={28} />,
      title: "Role-Based Access Control",
      description:
        "Protect sensitive business information through advanced security controls, user permissions, and audit trails.",
    },
  ];

  return (
    <section className="py-20 bg-[#f7f8fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#1d2433]">
            A Complete SMS Platform Powered by Advanced Messaging Technology
          </h2>

          <p className="mt-6 text-gray-500 text-md sm:text-lg leading-relaxed">
            Empower your business communication with Nano Vision SMS Platform.
            Send promotional, transactional, OTP, and service messages through a
            secure, high-performance infrastructure designed for speed,
            reliability, and scalability.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                p-8
                border
                border-gray-100
              "
            >
              {/* Icon */}
              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-[#eef3ff]
                  flex
                  items-center
                  justify-center
                  text-[#5d7df5]
                  mb-6
                "
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-medium text-[#1d2433] mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-md sm:text-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
