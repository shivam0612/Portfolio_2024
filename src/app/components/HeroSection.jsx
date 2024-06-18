"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-9 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold">
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(to right, #F7E77D, #FF9D9D )",
              }}
            >
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Shivam Patel",
                1000,
                "Cloud Engineer",
                1000,
                "Full Stack Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-2xl sm:text-3xl lg:text-5xl"
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Building tomorrow‘s solutions with today‘s tools and technology.
          </p>
          <div>
            <Link
              href="/#contact"
              style={{
                backgroundImage: "linear-gradient(to right, #F7E77D, #FF9D9D )",
              }}
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 hover:bg-slate-200 text-black"
            >
              Hire Me
            </Link>
            <a
              href="https://drive.google.com/uc?export=download&id=1kVHNtXsPjf-hxXgBFTbbPa7utVUUCGjp"
              style={{
                backgroundImage: "linear-gradient(to right, #F7E77D, #FF9D9D )",
              }}
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-3 place-self-center mt-4 lg:mt-0"
        >
          <div className="animated-border rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-2.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={450}
              height={450}
            />
          </div>
        </motion.div>
      </div>
      <style jsx>{`
        .animated-border {
          position: relative;
        }
        .animated-border::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 4px solid transparent;
          border-top: 4px solid #AED7F0;
          border-right: 4px solid #F2B2B2;
          border-bottom: 4px solid #C3EEC3;
        border-left: 4px solid #FAFAD2;
          transform: translate(-50%, -50%);
          animation: spin 3s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
