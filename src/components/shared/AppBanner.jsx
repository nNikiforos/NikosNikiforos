import { FiArrowDownCircle } from "react-icons/fi";
import developerImg from "../../images/developer-dark.jpeg";
import { motion } from "framer-motion";
import resume from "../../assets/ResumeNikos.pdf";

const AppBanner = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-4"
    >
      <div className="w-full text-left">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.1,
          }}
          className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
        >
          Hey, I am NIKOS NIKIFOROS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.2,
          }}
          className="font-general-medium mt-4 text-lg md:text-3xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
        >
          I’m a Front-End Developer and coding enthusiast, ready to build and
          learn as I go.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.3,
          }}
          className="flex justify-center sm:block"
          npx
        >
          <a
            download="Nikiforos-Resume.pdf"
            href={resume}
            className=" flex font-general-medium justify-center items-center w-36 sm:w-48  mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
            aria-label="Download Resume"
          >
            <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
            <span className="text-sm sm:text-lg font-general-medium duration-100">
              Download CV
            </span>
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="w-full text-right float-right mt-12  sm:mt-0"
      >
        <img
          src={developerImg}
          alt="Developer"
          className="rounded-md transition-all duration-500 " // Add border and transition
          style={{
            clipPath: "polygon(0 0, 85% 0, 100% 100%, 15% 100%)", // Default clip-path
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.clipPath =
              "polygon(0 0, 100% 0, 100% 100%, 0 100%)"; // Hover clip-path
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.clipPath =
              "polygon(0 0, 85% 0, 100% 100%, 15% 100%)"; // Revert to default
          }}
        />
      </motion.div>
    </motion.section>
  );
};

export default AppBanner;
