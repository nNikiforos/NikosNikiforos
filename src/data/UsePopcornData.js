// Import images
import Image1 from "../images/popcorn/popcorn1.png";
import Image2 from "../images/popcorn/popcorn2.png";
import Image3 from "../images/popcorn/popcorn4.png";
import Image4 from "../images/TravelerList/travelerList1.png";
import Image5 from "../images/VisitRethymno/visitrethymno3.png";
import Image6 from "../images/coachFinder/coachfinder1.png";
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
    title: "UsePopcorn",
    publishDate: "31 Aug, 2023",
    tags: "UI / Frontend",
  },
  ProjectImages: [
    {
      id: 1,
      title: "UsePopcorn",
      img: Image1,
    },
    {
      id: 2,
      title: "UsePopcorn",
      img: Image2,
    },
    {
      id: 3,
      title: "UsePopcorn",
      img: Image3,
    },
  ],
  ProjectInfo: {
    ClientHeading: "About Site",
    CompanyInfo: [
      {
        id: 1,
        title: "Name",
        details: "UsePopcorn",
      },
      {
        id: 2,
        title: "Services",
        details: "UI Design , Frontend Development , Fetching ",
      },
      {
        id: 3,
        title: "Website",
        details: "https://github.com/nNikiforos/UsePopcorn",
      },
      {
        id: 4,
        title: "Phone",
        details: "+30 697 188 3855",
      },
    ],
    ObjectivesHeading: "Objective",
    ObjectivesDetails:
      "The project involved fetching data from a server to display information dynamically, enhancing the overall user experience.",
    Technologies: [
      {
        title: "Tools & Technologies",
        techs: ["HTML", "CSS", "JavaScript", "React.js", "VSCode"],
      },
    ],
    ProjectDetailsHeading: "Challenge",
    ProjectDetails: [
      {
        id: 1,
        details:
          "The site focused on fetching movies from a server based on user search queries. This process was particularly challenging, as I had to ensure accurate data retrieval.",
      },
      {
        id: 2,
        details:
          "Implementing a feature that allows users to add their favorite movies to a list and rate them with stars added another layer of complexity.",
      },
      {
        id: 3,
        details:
          "I faced challenges in handling different error messages that could occur during the fetching process. Providing clear feedback to users was essential.",
      },
      {
        id: 4,
        details:
          "Additionally, I learned how to store data in the local browser, which was important for maintaining the user's movie list. This project was completed with the help of Udemy, and it provided a solid learning experience despite the challenges.",
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
        url: "https://github.com/nNikiforos/UsePopcorn",
      },
    ],
  },
  RelatedProject: {
    title: "Related Projects",
    Projects: [
      {
        id: 1,
        title: "image4",
        img: Image4,
      },
      {
        id: 2,
        title: "image5",
        img: Image5,
      },
      {
        id: 3,
        title: "image6",
        img: Image6,
      },
      {
        id: 4,
        title: "image7",
        img: Image7,
      },
    ],
  },
};
