"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Progrsdamming Languages",
    id: "programmingLanguages",
    content: (
      <ul className="list-disc pl-2">
        <li>• Python</li>
        <li>• Node.js</li>
        <li>• C#</li>
        <li>• Java</li>
        <li>• TypeScript</li>
        <li>• PowerShell</li>
        <li>• JavaScript</li>
      </ul>
    ),
    title: " Languages",
    id: "programmingLanguages",
    content: (
      <ul className="list-disc pl-2">
        <li>• Python</li>
        <li>• Node.js</li>
        <li>• C#</li>
        <li>• Java</li>
        <li>• TypeScript</li>
        <li>• PowerShell</li>
        <li>• JavaScript</li>
      </ul>
    ),
  },
  {
    title: "Web Development",
    id: "webDevelopment",
    content: (
      <ul className="list-disc pl-2">
        <li>• MERN Stack</li>
        <li>• .NET</li>
        <li>• Bootstrap</li>
        <li>• Agile Development</li>
        <li>• RESTful API</li>
      </ul>
    ),
  },
  {
    title: "Database Frameworks",
    id: "databaseFrameworks",
    content: (
      <ul className="list-disc pl-2">
        <li>• MS SQL Server</li>
        <li>• MySQL</li>
        <li>• MongoDB Atlas</li>
        <li>• Oracle</li>
        <li>• PL/SQL</li>
      </ul>
    ),
  },
  {
    title: "Cloud Computing",
    id: "cloudComputing",
    content: (
      <ul className="list-disc pl-2">
        <li>• AWS (S3, CloudFormation, EC2, CI/CD, Lambda, RDS, DynamoDB, IAM, Kubernetes, Route 53, API Gateway, ALB, EC2)</li>
        <li>• Google Cloud Platform</li>
      </ul>
    ),
  },
  {
    title: "Version Control",
    id: "versionControl",
    content: (
      <ul className="list-disc pl-2">
        <li>• Git</li>
        <li>• GitHub</li>
      </ul>
    ),
  },
  {
    title: "Other",
    id: "other",
    content: (
      <ul className="list-disc pl-2">
        <li>• Microsoft Office Suite</li>
        <li>• Customer Service</li>
        <li>• Multi-Tasking</li>
        <li>• Troubleshooting</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("programmingLanguages");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
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
          <div
            className="mt-8 h-64 overflow-y-auto"
            style={{ maxHeight: "300px" }}
          >
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
