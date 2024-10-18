function AppFooterCopyright() {
  return (
    <div className="font-general-regular flex flex-col  justify-between items-center text-center md:text-left p-4">
      <div className="text-lg text-ternary-dark dark:text-ternary-light">
        &copy; {new Date().getFullYear()}
        <a
          href="https://github.com/nNikiforos"
          target="__blank"
          className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
        >
          React & Tailwind CSS Portfolio
        </a>
        .
        <a
          href="https://www.linkedin.com/in/nikolaos-nikiforos-3b0b1a251/"
          target="__blank"
          className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
        >
          Nikiforos
        </a>
      </div>
      <div className="mt-4 md:mt-0 text-sm text-gray-500 dark:text-gray-400">
        This is a template with React code written by{" "}
        <a
          href="https://cssauthor.com/"
          target="__blank"
          className="hover:underline text-indigo-600 dark:text-indigo-300 duration-500"
        >
          Stoman
        </a>
        and customized to my preferences. Check it out on{" "}
        <a
          href="https://github.com/realstoman/react-tailwindcss-portfolio"
          target="__blank"
          className="hover:underline text-indigo-600 dark:text-indigo-300 duration-500"
        >
          GitHub
        </a>
        .
      </div>
    </div>
  );
}

export default AppFooterCopyright;
