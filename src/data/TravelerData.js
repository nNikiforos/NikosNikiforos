// Import images
import Image1 from "../images/TravelerList/travelerList1.png";
import Image2 from "../images/TravelerList/travelerList2.png";
import Image3 from "../images/TravelerList/travelerList3.png";
import Image4 from "../images/VisitRethymno/visitrethymno4.png";
import Image5 from "../images/popcorn/popcorn1.png";
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
    title: "Traveler-List",
    publishDate: "16 Aug, 2024",
    tags: "UI / Frontend",
  },
  ProjectImages: [
    {
      id: 1,
      title: "travelerList1",
      img: Image1,
    },
    {
      id: 2,
      title: "travelerList1",
      img: Image2,
    },
    {
      id: 3,
      title: "travelerList1",
      img: Image3,
    },
  ],
  ProjectInfo: {
    ClientHeading: "About Site",
    CompanyInfo: [
      {
        id: 1,
        title: "Name",
        details: "Traveler List",
      },
      {
        id: 2,
        title: "Services",
        details: "Frontend Development , filtering",
      },
      {
        id: 3,
        title: "Website",
        details: "https://github.com/nNikiforos/Traveler-List",
      },
      {
        id: 4,
        title: "Phone",
        details: "+30 697 188 3855",
      },
    ],
    ObjectivesHeading: "Objective",
    ObjectivesDetails:
      "Implement a filtering system to display provided data, allowing users to add items to a list that can be sorted by number or name.",
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
          "This project was done with the help of a Udemy course. Learning to implement sorting by numbers and letters was challenging.",
      },
      {
        id: 2,
        details:
          "The project focused on adding items and specifying how many of each item you need for your travels. Users can also delete items and add new ones.",
      },
      {
        id: 3,
        details:
          "Despite these challenges, the site was a small project, allowing me to focus on understanding these key concepts.",
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
        url: "https://github.com/nNikiforos",
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
        title: "UsePopcorn",
        img: Image5,
      },
      {
        id: 3,
        title: "Coach Finder",
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
