// Import images
import Image1 from "../images/Forkify/forkify1.png";
import Image2 from "../images/Forkify/forkify2.png";
import Image3 from "../images/Forkify/forkify3.png";
import Image4 from "../images/VisitRethymno/visitrethymno4.png";
import Image5 from "../images/popcorn/popcorn1.png";
import Image6 from "../images/TravelerList/travelerList1.png";
import Image7 from "../images/Nexter/nexter1.png";
// Import icons
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiGithub,
} from "react-icons/fi";

export const singleProjectData = {
  ProjectHeader: {
    title: "Forkify",
    publishDate: "15 Jun, 2023",
    tags: "UI / Frontend / Fetch",
  },
  ProjectImages: [
    {
      id: 1,
      title: "forkify",
      img: Image1,
    },
    {
      id: 2,
      title: "forkify",
      img: Image2,
    },
    {
      id: 3,
      title: "forkify",
      img: Image3,
    },
  ],
  ProjectInfo: {
    ClientHeading: "About Site",
    CompanyInfo: [
      {
        id: 1,
        title: "Name",
        details: "Forkify",
      },
      {
        id: 2,
        title: "Services",
        details: "Frontend Development ,Fetch data",
      },
      {
        id: 3,
        title: "Website",
        details: "https://github.com/nNikiforos/forkify-Udemy-app",
      },
      {
        id: 4,
        title: "Phone",
        details: "+30 697 188 3855",
      },
    ],
    ObjectivesHeading: "Objective",
    ObjectivesDetails:
      "The project involved building an app using Sass for styling and fetching food data from an API. Users could bookmark their favorite foods for easy access.",
    Technologies: [
      {
        title: "Tools & Technologies",
        techs: ["HTML", "CSS", "JavaScript", "VSCode"],
      },
    ],
    ProjectDetailsHeading: "Challenge",
    ProjectDetails: [
      {
        id: 1,
        details:
          "This project was developed with the help of a Udemy course to enhance my knowledge of JavaScript and data fetching techniques.",
      },
      {
        id: 2,
        details:
          "The site allows users to search for food recipes by typing into a search bar. It fetches relevant recipes from an API and displays them dynamically.",
      },
      {
        id: 3,
        details:
          "Users can bookmark their favorite recipes for easy access. Additionally, there is an option to upload personal recipes, making the site interactive and user-friendly.",
      },
      {
        id: 4,
        details:
          "The most challenging aspect of this project was handling the data fetching process efficiently and managing any errors that arose during the API requests.",
      },
    ],
    SocialSharingHeading: "Share This",
    SocialSharing: [
      {
        id: 1,
        name: "Twitter",
        icon: <FiTwitter />,
        url: "https://x.com/nikiforos_nikos",
      },
      {
        id: 2,
        name: "Instagram",
        icon: <FiInstagram />,
        url: "https://www.instagram.com/Nikosnikiforos",
      },
      {
        id: 3,
        name: "Facebook",
        icon: <FiFacebook />,
        url: "https://www.facebook.com/NikosNikiforos13",
      },
      {
        id: 4,
        name: "LinkedIn",
        icon: <FiLinkedin />,
        url: "https://www.linkedin.com/in/nikolaos-nikiforos-3b0b1a251/",
      },
      {
        id: 5,
        icon: <FiGithub />,
        url: "https://github.com/nNikiforos/Coach-finder",
      },
    ],
  },
  RelatedProject: {
    title: "Related Projects",
    Projects: [
      {
        id: 1,
        title: "Visit Rethymno",
        img: Image4,
      },
      {
        id: 2,
        title: "Use Popcorn",
        img: Image5,
      },
      {
        id: 3,
        title: "Traveler list",
        img: Image6,
      },
      {
        id: 4,
        title: "Nexter",
        img: Image7,
      },
    ],
  },
};
