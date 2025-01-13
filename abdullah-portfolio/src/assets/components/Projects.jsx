import SkillList from "../common/SkillList";
import ProjectCard from "../common/ProjectCard";
import react from "../icons/react.svg";
import javascript from "../icons/javascript.svg";
import firebase from "../icons/firebase.svg";
import jquery from "../icons/jquery.svg";
import bootstrap from "../icons/bootstrap.svg";
import tailwind from "../icons/tailwind.svg";
import chakra from "../icons/chakra-ui.svg";
import html from "../icons/html.svg";
import css from "../icons/css.svg";
import git from "../icons/git.svg";
import figma from "../icons/figma.svg";
import adalo from "../icons/Adalo.svg";
import { motion } from "motion/react";

export default function Projects({ darkMode }) {
  return (
    <div className="relative flex flex-col items-center gap-[100px] lg:gap-[120px] lg:flex-row lg:justify-center lg:items-start text-black dark:text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 1, bounce: 0.5 },
        }}
        className="flex flex-col items-center gap-[20px] max-w-[350px] md:max-w-[550px] mt-[100px] lg:sticky lg:top-[200px]"
      >
        <h1 className="text-[32px] md:text-[40px] font-rubik">Skills</h1>
        <div className="flex flex-wrap justify-center gap-[15px]">
          <SkillList src={react} skill="React" />
          <SkillList src={javascript} skill="JavaScript" />
          <SkillList src={firebase} skill="Firebase" />
          <SkillList src={jquery} skill="JQuery" />
          <SkillList src={bootstrap} skill="Bootstrap" />
          <SkillList src={tailwind} skill="Tailwind CSS" />
          <SkillList src={chakra} skill="Chakra UI" />
          <SkillList src={html} skill="HTML" />
          <SkillList src={css} skill="CSS" />
          <SkillList src={git} skill="Git/Github" />
          <SkillList src={figma} skill="Figma" />
          <SkillList src={adalo} skill="Adalo" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-col items-center gap-[20px] max-w-[350px] md:max-w-[550px] lg:max-w-[700px] lg:mt-[200px]"
      >
        <h1 className="text-[32px] md:text-[40px] font-rubik">Projects</h1>
        <div className="flex flex-col items-center">
          <ProjectCard
            title="TwitterX"
            description="I developed a functional Twitter clone, replicating key features like user registration, 
            posting, deleting, and editing of tweets. This project broaden my knowledge with implementating CRUD 
            functionalities and Authentication."
            link="https://twitter-x-rose.vercel.app/"
            target="_blank"
            darkMode={darkMode}
            tools={[firebase, react, javascript, chakra]}
          />
          <ProjectCard
            title="Philhealth"
            description="This was one of my early projects, a redesign of the PhilHealth website. This experience 
            introduced me to HTML, CSS, and Bootstrap framework. I learned about designing user-friendly interfaces 
            and faced challenges in creating a visually appealing website."
            link="https://project-1-responsive-website-redesign-woad.vercel.app/"
            darkMode={darkMode}
            tools={[html, css, bootstrap, figma]}
          />
          <ProjectCard
            title="CalmSpace"
            description="For my capstone project, we developed a mobile app using Adalo for a psychological clinic. 
            The clinic encountered challenges with data accuracy due to clients often not writing journals of their 
            episodic attacks. This led to missed information during consultations. To address this, we created an app 
            that allows clients to easily record and share their episode journals directly with their therapists, while 
            also providing a secure chat feature for immediate communication."
            link="https://previewer.adalo.com/65118a6f-9c36-48d3-ac15-b9dd8f1483ae"
            darkMode={darkMode}
            tools={[adalo, figma]}
          />
          <ProjectCard
            title="Todo List"
            description="I developed a Todo List application using HTML, CSS, and JavaScript. This project demonstrated my 
            ability to manipulate the Document Object Model (DOM) to create dynamic and interactive user interfaces."
            link="https://javascript-html-dom-and-events-three.vercel.app/"
            darkMode={darkMode}
            tools={[react, javascript, bootstrap]}
          />
          <ProjectCard
            title="FoodRecipe"
            description="FoodRecipe is an API-based website I built using React and spoonacular API. This project allowed me 
            to learn and apply the fundamentals of fetching data from external APIs."
            link="https://food-recipe-silk-delta.vercel.app/"
            darkMode={darkMode}
            tools={[react, javascript, css]}
          />
          <ProjectCard
            title="Rock Paper Scissors"
            description="I developed a Rock-Paper-Scissors game as an early JavaScript project. This project helped me 
            solidify my understanding of JavaScript fundamentals and explore basic game logic and decision-making within 
            the language."
            link="https://1-javascript-rock-paper-scissor.vercel.app/"
            darkMode={darkMode}
            tools={[javascript, css, html, bootstrap]}
          />
          <ProjectCard
            title="Guess the Number Game"
            description="I also developed a Guess the Number game as an early JavaScript project. This project helped me 
            solidify my understanding of JavaScript fundamentals and explore basic game logic and decision-making within 
            the language."
            link="https://project-2-javascript-game-brown.vercel.app/"
            darkMode={darkMode}
            tools={[javascript, css, html, bootstrap]}
          />
        </div>
      </motion.div>
    </div>
  );
}
