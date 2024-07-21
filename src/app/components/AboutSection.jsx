"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { ToastContainer, toast } from "react-toastify";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [subTab, setSubTab] = useState("programmingLanguages");
  const [isPending, startTransition] = useTransition();
  const [imageSrc, setImageSrc] = useState("/images/about-image.png"); // Default image

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
            <li>Python</li> <li>JavaScript</li>
            <li>Node.js</li>
            <li>C#</li>
            <li>Java</li>
            <li>TypeScript</li>
            <li>PowerShell</li>
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
      content: ({ onHover = () => {} } = {}) => (
        <ul className="list-disc pl-2">
          <li
            className="hover:bg-gray-700 cursor-pointer rounded-md p-2"
            style={{ width: "100%" }}
            onMouseEnter={() => {
              // onHover("/images/AWS_SAA_certificate.png");
              setImageSrc("/images/AWS_SAA_certificate.png");
            }}
            onMouseLeave={() => setImageSrc("/images/about-image.png")}
          >
            AWS Certified Solution Architect Associate{" "}
            <h6 className="font-normal text-sm">
              Validity: May 2024 - May 2027
            </h6>
          </li>
          <hr className="my-1 animated-hr" />
          <li
            className="hover:bg-gray-700 cursor-pointer rounded-md p-2"
            style={{ width: "100%" }}
            onMouseEnter={() => {
              setImageSrc("/images/AWS_CFL_certificate.png");
            }}
            onMouseLeave={() => setImageSrc("/images/about-image.png")}
          >
            AWS Certified Cloud Practitioner
            <h6 className="font-normal text-sm">
              Validity: March 2024 - March 2027
            </h6>
          </li>
        </ul>
      ),
    },
    {
      title: "Experience",
      id: "experience",
      content: () => (
        <ul className="list-disc pl-2">
          <div
            className="hover:bg-gray-700 cursor-pointer rounded-md p-2"
            style={{ width: "100%" }}
            onClick={() => {
              const description = `
      <strong>Description:</strong><br/>
      • Ensured the quality of work and products, adhering to good manufacturing practices, and securely and accurately fulfilling customer orders.<br/>
      • Developed and enhanced time management skills.<br/>
      • Prioritized assignments based on requirements to achieve exceptional performance.<br/>
      • Learned to deliver the best products to customers safely and efficiently.<br/>
      • Achieved high levels of customer satisfaction through accurate and timely order fulfillment.<br/>
      • Contributed to a positive and efficient work environment through effective communication and teamwork.<br/>
      • Utilized proper techniques and knowledge of fall arrest systems.<br/>
      • Operated various equipment, including replenishment/central rider pallet jacks and cherry pickers.<br/>
    `;

              toast.info(
                <div dangerouslySetInnerHTML={{ __html: description }} />
              );
            }}
          >
            <li className="text-lg font-normal ">
              <b>Case Selector | Cherry Picker | Replenishment</b>
            </li>
            <h6 className="text-sm font-normal">
              Matrix Logistics Services Limited · Permanent Full-time{" "}
            </h6>
            <h6 className="text-sm font-normal">Aug 2022 - Present · 2 yrs</h6>
            <h6 className="text-sm font-normal">
              Mississauga, Ontario, Canada · On-site
            </h6>
          </div>
          <hr className="my-1 animated-hr" />

          <div
            className="hover:bg-gray-700 cursor-pointer rounded-md p-2"
            style={{ width: "100%" }}
            onClick={() => {
              const description = `
      <strong>Description:</strong><br/>
      • Engaged proactively with customers, customizing offers with great attention to their needs.<br/>
• Exceeded monthly sales goals, ensuring high customer satisfaction.<br/>
• Utilized MS Office, Google Docs, and Salesforce to maintain customer and sales records.<br/>
• Implemented up-selling and cross-selling strategies, resulting in an 80% sales increase within four weeks.<br/>
• Monitored and reported customer feedback and market shifts.<br/>
• Utilized outsourcing expertise to effectively contact customers for ordering, provide detailed information about services, and resolve queries.<br/>
    `;

              toast.info(
                <div dangerouslySetInnerHTML={{ __html: description }} />
              );
            }}
          >
            <li className="text-lg font-normal ">
              <b>Sales Associate</b>
            </li>
            <h6 className="text-sm font-normal">Bell · On-Call </h6>
            <h6 className="text-sm font-normal">
              Feb 2022 - Jun 2024 · 2 yrs 5 mos
            </h6>
            <h6 className="text-sm font-normal">
              Brampton, Ontario, Canada · Hybrid{" "}
            </h6>
          </div>
          <hr className="my-1 animated-hr" />

          <div
            className="hover:bg-gray-700 cursor-pointer rounded-md p-2"
            style={{ width: "100%" }}
            onClick={() => {
              const description = `
      <strong>Description:</strong><br/>
      • Led a team of 5 developers to align project deliverables with best practices and successfully completed all projects on schedule.<br/>
• Developed and implemented a project using the MERN Stack, reducing page load times by 40% and increasing user engagement by 25%.<br/>
• Conducted over 45 code reviews, implemented testing strategies, and integrated 6-7 third-party APIs, enhancing code quality.<br/>
• Implemented unit testing, increasing code coverage to 85% and managed version control using tools like Git and Github.<br/>
    `;

              toast.info(
                <div dangerouslySetInnerHTML={{ __html: description }} />
              );
            }}
          >
            <li className="text-lg font-normal ">
              <b>Software Engineer</b>
            </li>
            <h6 className="text-sm font-normal">
              Lambton College · Internship{" "}
            </h6>
            <h6 className="text-sm font-normal">May 2023 - Aug 2023 · 4 mos</h6>
            <h6 className="text-sm font-normal">
              Mississauga, Ontario, Canada · Hybrid
            </h6>
          </div>
          <hr className="my-1 animated-hr" />

          <div
            className="hover:bg-gray-700 cursor-pointer rounded-md p-2"
            style={{ width: "100%" }}
            onClick={() => {
              const description = `
      <strong>Description:</strong><br/>
      • Leveraged the MERN Stack to create and maintain dynamic websites, using HTML, CSS, JavaScript, Git, and Agile Methodologies.<br/>
• Led back-end development using Node.js and MongoDB, ensuring cross-browser compatibility and performance optimization.<br/>
• Integrated third-party APIs to enhance website capabilities and user experience.<br/>
• Collaborated with the team to address challenges and ensure project completion, resulting in a 15% increase in overall team productivity.<br/>
• Actively participated in 20 team meetings per quarter, contributing to project planning and execution.<br/>
    `;

              toast.info(
                <div dangerouslySetInnerHTML={{ __html: description }} />
              );
            }}
          >
            <li className="text-lg font-normal ">
              <b>Full Stack Developer</b>
            </li>
            <h6 className="text-sm font-normal">
              Digital Web Weaver · Permanent Full-time{" "}
            </h6>
            <h6 className="text-sm font-normal">
              Jul 2020 - Nov 2021 · 1 yr 5 mos
            </h6>
            <h6 className="text-sm font-normal">
              Vadodara, Gujarat, India · Hybrid
            </h6>
          </div>
          <hr className="my-1 animated-hr" />

          <div
            className="hover:bg-gray-700 cursor-pointer rounded-md p-2"
            style={{ width: "100%" }}
            onClick={() => {
              const description = `
      <strong>Description:</strong><br/>
      • Utilized HTML, CSS, JavaScript, Bootstrap, DOM Events, and SASS during a web development internship, contributing to the successful completion of 3 client projects.<br/>
• Implemented ReactJS, NodeJS, Redux, and NoSQL (MongoDB) along with Restful API to design and develop a website.<br/>
• Analyzed sleep patterns using MongoDB Atlas, leading to the development of a data visualization dashboard that improved data interpretation by 25%.<br/>
    `;

              toast.info(
                <div dangerouslySetInnerHTML={{ __html: description }} />
              );
            }}
          >
            <li className="text-lg font-normal ">
              <b>Web Development Intern</b>
            </li>
            <h6 className="text-sm font-normal">Verzeo · Internship </h6>
            <h6 className="text-sm font-normal">Mar 2021 - Aug 2021 · 6 mos</h6>
            <h6 className="text-sm font-normal">Vadodara, Gujarat, India </h6>
          </div>
          <hr className="my-1 animated-hr" />

          <div
            className="hover:bg-gray-700 cursor-pointer rounded-md p-2"
            style={{ width: "100%" }}
            onClick={() => {
              const description = `
      <strong>Description:</strong><br/>
      • Executed 3 projects in Artificial Intelligence and Machine Learning, specializing in Artificial Neural Networks (ANN) and Convolutional Neural Networks (CNN).<br/>
• Improved model accuracy by an average of 15% through extensive feature engineering, hyperparameter tuning, and validation techniques across various algorithms.<br/>
• Developed a Python-based mask detection system with an accuracy of 90% and an image captioning project, utilizing transfer learning and data augmentation.<br/>
• Created a project capable of recognizing five distinct human emotions with an accuracy of 80%, employing ensemble learning techniques and cross-validation for improved accuracy and generalization.<br/>
    `;

              toast.info(
                <div dangerouslySetInnerHTML={{ __html: description }} />
              );
            }}
          >
            <li className="text-lg font-normal ">
              <b>Artificial Intelligence Intern</b>
            </li>
            <h6 className="text-sm font-normal">Verzeo · Internship </h6>
            <h6 className="text-sm font-normal">Oct 2020 - Dec 2020 · 3 mos</h6>
            <h6 className="text-sm font-normal">Vadodara, Gujarat, India </h6>
          </div>
        </ul>
      ),
    },
  ];

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
        <div className="flex justify-center md:justify-start ">
          <Image
            src={imageSrc}
            width={500}
            height={500}
            alt="image"
            className="rounded-lg img-border-css"
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col">
          <h2 className="text-4xl font-bold text-white mb-5 mt-10">About Me</h2>
          <p className="text-base lg:text-lg">
            A Software Engineer and Cloud Engineer with over three years of
            experience in leading project teams, performing code reviews,
            developing testing strategies, and integrating APIs. Highly
            knowledgeable in AWS cloud services, holding two certifications. I
            am eager to contribute to innovative projects within a dynamic,
            security-focused development environment. As a team player, I look
            forward to collaborating with others to create outstanding
            applications.
          </p>
          <div className="flex flex-row flex-wrap justify-start mt-8">
            {TAB_DATA.map((tabItem) => (
              <TabButton
                key={tabItem.id}
                selectTab={() => handleTabChange(tabItem.id)}
                active={tab === tabItem.id}
                isSubTab={false}
              >
                {tabItem.title}
              </TabButton>
            ))}
          </div>
          {tab === "skills" && (
            <div className="flex flex-row flex-wrap justify-start mt-1">
              {TAB_DATA.find((item) => item.id === "skills")?.subTabs.map(
                (subTabItem) => (
                  <TabButton
                    key={subTabItem.id}
                    selectTab={() => handleSubTabChange(subTabItem.id)}
                    active={subTab === subTabItem.id}
                    isSubTab={true}
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
