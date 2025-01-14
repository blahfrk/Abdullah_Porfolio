import Lottie from "lottie-react";
import animationData from "../ImagesJson/heroAnimation.json";
import facebookLight from "../icons/facebook-dark.svg";
import facebookDark from "../icons/facebook-light.svg";
import githubLight from "../icons/github-light.svg";
import githubDark from "../icons/github-dark.svg";
import linkedinLight from "../icons/linkedin-light.svg";
import linkedinDark from "../icons/linkedin-dark.svg";
import cv from "../ImagesJson/cv.pdf";
import { motion } from "motion/react";

export default function Hero({ darkMode }) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 md:gap-x-20 lg:gap-x-60 md:flex-row-reverse md:justify-center h-[100dvh] min-h-[500px]">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 1, bounce: 0.5 },
        }}
        className="mt-14 md:mt-0"
      >
        <Lottie
          animationData={animationData}
          className="max-w-64 md:max-w-sm lg:max-w-md"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-col text-center gap-5"
      >
        <h1 className="text-black dark:text-white text-[32px] md:text-[40px] lg:text-[46px] font-rubik leading-tight">
          ABDULLAH <br /> FAROUK
        </h1>
        <h2 className="text-black dark:text-white text-[20px] md:text-[22px] font-roboto font-bold">
          FRONTEND DEVELOPER
        </h2>
        <span className="flex justify-center gap-6">
          <a
            href="https://facebook.com/blahtot"
            target="_blank"
            className="w-fit"
          >
            <img
              src={darkMode ? facebookDark : facebookLight}
              alt="Facebook icon"
              className="m-0 w-8"
            />
          </a>
          <a
            href="https://github.com/blahfrk?tab=repositories"
            target="_blank"
            className="w-fit"
          >
            <img
              src={darkMode ? githubDark : githubLight}
              alt="gitHub icon"
              className="m-0 w-8"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/abdullah-farouk-618360318"
            target="_blank"
            className="w-fit"
          >
            <img
              src={darkMode ? linkedinDark : linkedinLight}
              alt="Linkedin icon"
              className="m-0 w-8"
            />
          </a>
        </span>
        <p className="text-black dark:text-gray-200 text-[16px] md:text-[20px] md font-roboto max-w-[24ch]">
          Developing modern React websites for commercial businesses tailored to
          client satisfaction.
        </p>
        <a
          href="https://docs.google.com/document/d/10hWJmnZWiXn9rTQjnpWwyMD33kytB24G/edit?usp=sharing&ouid=109777921823216899738&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="relative mt-[25px]
            before:absolute before:w-2/3 before:h-2/3 before:top-0 before:left-0 before:rounded-tl-lg
            before:border-t-2 before:border-l-2 before:border-black dark:before:border-white before:border-solid
            after:absolute after:w-2/3 after:h-2/3 after:right-0 after:bottom-0 after:rounded-br-lg
            after:border-r-2 after:border-b-2 after:border-black dark:after:border-white after:border-solid
            hover:before:w-full hover:before:h-full hover:before:rounded-lg
            hover:after:w-full hover:after:h-full hover:after:rounded-lg
            before:duration-300 
            after:duration-300 
            font-bold text-black dark:text-white h-[40px] w-[126px] text-[20px] font-roboto hover:text-[18px] duration-300"
          >
            Resume
          </button>
        </a>
      </motion.div>
    </div>
  );
}
