// Import images
import Image1 from "../images/coachFinder/coachfinder1.png";
import Image2 from "../images/coachFinder/coachfinder2.png";
import Image3 from "../images/coachFinder/coachfinder1.png";
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
    title: "Coach-Finder",
    publishDate: "25 dec, 2023",
    tags: "UI / Frontend",
  },
  ProjectImages: [
    {
      id: 1,
      title: "Coach-Finder",
      img: Image1,
    },
    {
      id: 2,
      title: "Coach-Finder",
      img: Image2,
    },
    {
      id: 3,
      title: "Coach-Finder",
      img: Image3,
    },
  ],
  ProjectInfo: {
    ClientHeading: "About Site",
    CompanyInfo: [
      {
        id: 1,
        title: "Name",
        details: "Coach Finder",
      },
      {
        id: 2,
        title: "Services",
        details: "Frontend Development ,Log-in ",
      },
      {
        id: 3,
        title: "Website",
        details: "https://github.com/nNikiforos/Coach-finder",
      },
      {
        id: 4,
        title: "Phone",
        details: "+30 697 188 3855",
      },
    ],
    ObjectivesHeading: "Objective",
    ObjectivesDetails:
      "Implement a filtering system for easy content navigation, create a user-friendly login screen for secure access, and add modals to display important information without leaving the current page.",
    Technologies: [
      {
        title: "Tools & Technologies",
        techs: ["HTML", "CSS", "JavaScript", "Vue.js", "VSCode"],
      },
    ],
    ProjectDetailsHeading: "Challenge",
    ProjectDetails: [
      {
        id: 1,
        details:
          "This project was done with the help of a Udemy course. I learned a lot from it.",
      },
      {
        id: 2,
        details:
          "Creating the login feature was challenging. I had to ensure it was secure and user-friendly.",
      },
      {
        id: 3,
        details:
          "Implementing the filtering system also posed some difficulties. I needed to understand how to sort and search through the content effectively.",
      },
      {
        id: 4,
        details:
          "Despite these challenges, the project was small and focused on learning how to create a simple login and filtering system.",
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
