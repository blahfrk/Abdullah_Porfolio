import openLight from "../icons/open-light.svg";
import openDark from "../icons/open-dark.svg";
import { motion } from "motion/react";

export default function ProjectCard({
  title,
  description,
  tools,
  link,
  darkMode,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="flex flex-col  gap-[10px] my-[20px] p-[15px] rounded-[20px] border-solid border-2 border-black dark:border-white font-roboto"
    >
      <h1 className="text-xl font-bold text-black dark:text-white">{title}</h1>
      <p className="text-black dark:text-gray-200">{description}</p>
      <div className="flex justify-end items-start gap-[10px]">
        <div className="flex mr-auto gap-[5px]">
          {tools.map((ToolIcon, index) => (
            <div key={index}>
              <img
                src={ToolIcon}
                alt="tool icon"
                className="w-[24px] h-[24px]"
              />
            </div>
          ))}
        </div>
        <div className="flex gap-[10px]">
          <h2 className="text-sm">Visit Project</h2>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              src={darkMode ? openDark : openLight}
              alt="open icon"
              className="w-[15px] hover:scale-110 transition-transform"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
