import { motion } from "motion/react";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center text-black dark:text-white h-[100dvh] min-h-[500px]">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 1, bounce: 0.3 },
        }}
        className="flex flex-col items-center gap-[20px]"
      >
        <h1 className="text-[32px] md:text-[40px] font-rubik">Contact</h1>
        <form
          action="https://formspree.io/f/xlddjzre"
          method="post"
          className="flex flex-col items-center gap-[20px] font-roboto"
        >
          <div className="formGroup">
            <label htmlFor="name" hidden>
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
              className="bg-gray-200 dark:bg-gray-900 h-[50px] pl-[16px] w-[250px] md:w-[600px] lg:w-[800px] rounded-[20px] border-solid border-2  border-black dark:border-white"
            />
          </div>
          <div className="formGroup">
            <label htmlFor="email" hidden>
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              className="bg-gray-200 dark:bg-gray-900 h-[50px] pl-[16px] w-[250px] md:w-[600px] lg:w-[800px] rounded-[20px] border-solid border-2  border-black dark:border-white"
            />
          </div>
          <div className="formGroup">
            <label htmlFor="message" hidden>
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              required
              className="bg-gray-200 dark:bg-gray-900 h-[250px] pt-[16px] pl-[16px] w-[250px] md:w-[600px] lg:w-[800px] rounded-[20px] border-solid border-2  border-black dark:border-white"
            ></textarea>
          </div>
          <button
            type="submit"
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
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  );
}
