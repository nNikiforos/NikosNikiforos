// Import images
import Image1 from "../images/VisitRethymno/visitrethymno1.png";
import Image2 from "../images/VisitRethymno/visitrethymno2.png";
import Image3 from "../images/VisitRethymno/visitrethymno3.png";
import Image4 from "../images/TravelerList/travelerList1.png";
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
    title: "VisitRethymno: My first ever project",
    publishDate: "20 Feb, 2023",
    tags: "UI / Frontend",
  },
  ProjectImages: [
    {
      id: 1,
      title: "Kabul Project Management UI",
      img: Image1,
    },
    {
      id: 2,
      title: "Kabul Project Management UI",
      img: Image2,
    },
    {
      id: 3,
      title: "Kabul Project Management UI",
      img: Image3,
    },
  ],
  ProjectInfo: {
    ClientHeading: "About Site",
    CompanyInfo: [
      {
        id: 1,
        title: "Name",
        details: "Visit Rethymno",
      },
      {
        id: 2,
        title: "Services",
        details: "UI Design & Frontend Development",
      },
      {
        id: 3,
        title: "Website",
        details: "https://github.com/nNikiforos/ProjectSiteSae",
      },
      {
        id: 4,
        title: "Phone",
        details: "+30 697 188 3855",
      },
    ],
    ObjectivesHeading: "Objective",
    ObjectivesDetails:
      "It was my first ever project, created at SAE Edu Athens, marking the start of my career as a developer.",
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
          "It was my first site, so everything felt challenging. Learning JavaScript was particularly tough. I struggled with understanding the basics and how to implement functionality.",
      },
      {
        id: 2,
        details:
          "Even simple CSS concepts posed difficulties. I found it hard to style elements effectively, but I gradually learned how to create a visually appealing layout.",
      },
      {
        id: 3,
        details:
          "The site focused on Rethymno and featured details about summer activities, including various attractions and events. I also added contact information to allow users to reach out directly through the site.",
      },
      {
        id: 4,
        details:
          "I also incorporated many animations to enhance the user experience. While the site had its challenges, it remained a simple project utilizing basic web development languages, allowing me to build a solid foundation.",
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
