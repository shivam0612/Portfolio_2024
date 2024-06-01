"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    subTabs: [
      { title: "Languages", id: "programmingLanguages" },
      { title: "Web Dev", id: "webDevelopment" },
      { title: "Databases", id: "databaseFrameworks" },
      { title: "Cloud", id: "cloudComputing" },
      { title: "Versioning", id: "versionControl" },
      { title: "Other", id: "other" },
    ],
    content: {
      programmingLanguages: () => (
        <ul className="list-disc pl-2">
          <li>Python</li>
          <li>Node.js</li>
          <li>C#</li>
          <li>Java</li>
          <li>TypeScript</li>
          <li>PowerShell</li>
          <li>JavaScript</li>
        </ul>
      ),
      webDevelopment: () => (
        <ul className="list-disc pl-2">
          <li>MERN Stack</li>
          <li>.NET</li>
          <li>Bootstrap</li>
          <li>Agile Development</li>
          <li>RESTful API</li>
        </ul>
      ),
      databaseFrameworks: () => (
        <ul className="list-disc pl-2">
          <li>MS SQL Server</li>
          <li>MySQL</li>
          <li>MongoDB Atlas</li>
          <li>Oracle</li>
          <li>PL/SQL</li>
        </ul>
      ),
      cloudComputing: () => (
        <ul className="list-disc pl-2">
          <li>
            AWS (S3, Cloud Formation, EC2, CI/CD, Lambda, RDS, DynamoDB, IAM,
            Kubernetes, Route 53, API Gateway, ALB, EC2)
          </li>
          <li>Google Cloud Platform</li>
        </ul>
      ),
      versionControl: () => (
        <ul className="list-disc pl-2">
          <li>Git</li>
          <li>GitHub</li>
        </ul>
      ),
      other: () => (
        <ul className="list-disc pl-2">
          <li>Microsoft Office Suite</li>
          <li>Customer Service</li>
          <li>Multi-Tasking</li>
          <li>Troubleshooting</li>
        </ul>
      ),
    },
  },
  {
    title: "Education",
    id: "education",
    content: () => (
      <ul className="list-disc pl-2">
        <li>
          Lambton College
          <ul>
            <li>Years Attended: 2022 - 2023</li>
            <li>
              Degree: Post Graduate Degree in Computer Software & Database
              Development
            </li>
          </ul>
        </li>
        <hr className="my-1 animated-hr" />
        <li>
          Parul University
          <ul>
            <li>Years Attended: 2017 - 2020</li>
            <li>Degree: Bachelor of Computer Science</li>
          </ul>
        </li>
        <hr className="my-1 animated-hr" />
        <li>
          Parul University
          <ul>
            <li>Years Attended: 2014 - 2017</li>
            <li>Degree: Diploma in Computer Science</li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: () => (
      <ul className="list-disc pl-2">
        <li>AWS Certified Solution Architect Associate</li>
        <ul>
          {" "}
          <li>Validity: May 2024 - May 2027</li>
        </ul>
        <hr className="my-1 animated-hr" />
        <li>AWS Certified Cloud Practitioner</li>
        <ul>
          <li>Validity: March 2024 - March 2027</li>
        </ul>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [subTab, setSubTab] = useState("programmingLanguages");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
      if (id === "skills") {
        setSubTab(TAB_DATA.find((item) => item.id === id)?.subTabs[0].id || "");
      }
    });
  };

  const handleSubTabChange = (id) => {
    startTransition(() => {
      setSubTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="flex justify-center md:justify-start">
          <Image
            src="/images/about-image.png"
            width={500}
            height={500}
            alt="image"
            className="rounded-lg"
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col">
          <h2 className="text-4xl font-bold text-white mb-5 mt-10">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map((tabItem) => (
              <TabButton
                key={tabItem.id}
                selectTab={() => handleTabChange(tabItem.id)}
                active={tab === tabItem.id}
              >
                {tabItem.title}
              </TabButton>
            ))}
          </div>
          {tab === "skills" && (
            <div className="flex flex-row justify-start mt-1">
              {TAB_DATA.find((item) => item.id === "skills")?.subTabs.map(
                (subTabItem) => (
                  <TabButton
                    key={subTabItem.id}
                    selectTab={() => handleSubTabChange(subTabItem.id)}
                    active={subTab === subTabItem.id}
                  >
                    {subTabItem.title}
                  </TabButton>
                )
              )}
            </div>
          )}
          <div
            className="mt-2 h-64 overflow-y-auto"
            style={{ minHeight: "300px" }}
          >
            <ul className="list-disc skills-bullets pl-2">
              {tab === "skills" &&
                TAB_DATA.find((t) => t.id === tab)?.content[subTab]()}
              {tab !== "skills" &&
                TAB_DATA.find((t) => t.id === tab)?.content()}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
