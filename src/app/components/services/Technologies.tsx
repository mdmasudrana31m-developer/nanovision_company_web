"use client";
import { useRef, useState } from "react";
import Image from "next/image";
const techData = {
  frontend: [
    { name: "HTML", icon: "/icons/frontend/html.png" },
    { name: "CSS", icon: "/icons/frontend/css.png" },
    { name: "JavaScript", icon: "/icons/frontend/js.png" },
    { name: "TypeScript", icon: "/icons/frontend/ts.png" },
    { name: "React(JS)", icon: "/icons/frontend/react.png" },
    { name: "Bootstrap", icon: "/icons/frontend/bootstarp.png" },
    { name: "C#", icon: "/icons/frontend/c.png" },
    { name: "Electron", icon: "/icons/frontend/electron.png" },
    { name: "Node.js", icon: "/icons/frontend/node.png" },
    { name: "Npm", icon: "/icons/frontend/npm.png" },
    { name: "Redux", icon: "/icons/frontend/redux.png" },
    { name: "VSTO", icon: "/icons/frontend/scss.png" },
    { name: "SQL", icon: "/icons/frontend/sql-lite.png" },
    { name: "XAML", icon: "/icons/frontend/xaml.png" },
    { name: "WinForms", icon: "/icons/frontend/yam.png" },
  ],
  backend: [
    { name: "C", icon: "/icons/backend/c+.png" },
    { name: "Java", icon: "/icons/backend/java.png" },
    { name: "Golang", icon: "/icons/backend/golang.png" },
    { name: "Python", icon: "/icons/backend/paython.png" },
    { name: "Struts", icon: "/icons/backend/struts.png" },
    { name: "SpringBoot", icon: "/icons/backend/spring.png" },
    { name: "MySQL", icon: "/icons/backend/mysql.png" },
    { name: "Oracle", icon: "/icons/backend/oracal.png" },
    { name: "PostgreSQL", icon: "/icons/backend/posgresql.png" },
    { name: "MariaDB", icon: "/icons/backend/mariadb.png" },
    { name: "MongoDB", icon: "/icons/backend/mongodb.png" },
    { name: "Redis", icon: "/icons/backend/redis.png" },
    { name: "Apache Kafka", icon: "/icons/backend/apache-kafka.png" },
    { name: "Pytorch", icon: "/icons/backend/pytorch.png" },
    { name: "FastApi", icon: "/icons/backend/fastapi.png" },
    { name: "Tomcat", icon: "/icons/backend/tomcat.png" },
    { name: "My Flow", icon: "/icons/backend/ml.png" },
  ],
  mobile: [
    { name: "Java", icon: "/icons/mobile/java .png" },
    { name: "kotlin", icon: "/icons/mobile/kotlin.png" },
    { name: "Objective-C", icon: "/icons/mobile/objective-c.png" },
    { name: "SQLite", icon: "/icons/mobile/sqlite.png" },
    { name: "Swift", icon: "/icons/mobile/swift.png" },
  ],
  cloud: [
    { name: "Jenkins", icon: "/icons/cloud&Devop/jenkins.png" },
    { name: "ArgoCD", icon: "/icons/cloud&Devop/argocd.png" },
    { name: "TerraForm", icon: "/icons/cloud&Devop/terraform.png" },
    { name: "Docker", icon: "/icons/cloud&Devop/docker.png" },
    { name: "AWS", icon: "/icons/cloud&Devop/aws.png" },
    { name: "Prometheus", icon: "/icons/cloud&Devop/prome.png" },
    { name: "Jira", icon: "/icons/cloud&Devop/jira.png" },
    { name: "CircleCI", icon: "/icons/cloud&Devop/circle.png" },
    { name: "Spinnaker", icon: "/icons/cloud&Devop/spinnaker.png" },
    { name: "Ansible", icon: "/icons/cloud&Devop/ansible.png" },
    { name: "OpenShift", icon: "/icons/cloud&Devop/openshift.png" },
    { name: "Grafana", icon: "/icons/cloud&Devop/gra.png" },
    { name: "Snyk", icon: "/icons/cloud&Devop/syn.png" },
    { name: "Slack", icon: "/icons/cloud&Devop/slack.png" },
    { name: "GitLab Ci", icon: "/icons/cloud&Devop/githabci.png" },
    { name: "Flux", icon: "/icons/cloud&Devop/flux.png" },
    { name: "Kubernetes", icon: "/icons/cloud&Devop/kube.png" },
    { name: "Azure", icon: "/icons/cloud&Devop/azure.png" },
    { name: "Aqua Security", icon: "/icons/cloud&Devop/aqa.png" },
    { name: "Confluence", icon: "/icons/cloud&Devop/con.png" },
    { name: "GCP", icon: "/icons/cloud&Devop/gcp.png" },
  ],
};

export default function Technologies() {
  const [active, setActive] = useState("frontend");
  const tabRefs = useRef({});

  const tabs = [
    { key: "frontend", label: "Frontend Development" },
    { key: "backend", label: "Backend Development" },
    { key: "mobile", label: "Mobile App Development" },
    { key: "cloud", label: "Cloud & DevOps" },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-100 text-center">
      {/* Heading */}
      <div className="max-w-3xl mx-auto mb-8 sm:mb-10 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3">
          Technologies We Use
        </h2>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          We combine proven frameworks with next-gen platforms to deliver
          solutions that are built to last and engineered for growth.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-8 sm:mb-10 px-3 sm:px-4 ">
        <div className="flex gap-2 bg-gray-200 p-2 no-scrollbar rounded-full shadow-inner overflow-x-auto justify-evenly scrollbar-hide w-full max-w-5xl">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              ref={(el) => (tabRefs.current[tab.key] = el)}
              onClick={() => {
                setActive(tab.key);

                // 🔥 AUTO SCROLL TO ACTIVE TAB
                tabRefs.current[tab.key]?.scrollIntoView({
                  behavior: "smooth",
                  inline: "center",
                  block: "nearest",
                });
              }}
              className={`flex-shrink-0 whitespace-nowrap px-4 sm:px-5 py-2 text-xs sm:text-sm rounded-full transition-all duration-300 ${
                active === tab.key
                  ? "bg-[#5f82ff] text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Icons Grid */}
      <div className="max-w-4xl mx-auto px-4">
        <div
          key={active}
          className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 justify-items-center transition-all duration-300"
        >
          {techData[active as keyof typeof techData].map((item, i) => (
            <div key={i} className="flex flex-col items-center group w-full">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 bg-gray-200 rounded-xl flex items-center justify-center shadow-inner transition-transform duration-300 group-hover:-translate-y-1">
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </div>

              <p className="mt-2 text-xs sm:text-sm text-gray-700 text-center">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
