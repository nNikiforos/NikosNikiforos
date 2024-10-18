// Import images
import Image1 from "../images/Nexter/nexter1.png";
import Image2 from "../images/Nexter/nexter2.png";
import Image3 from "../images/Nexter/nexter3.png";
import Image4 from "../images/VisitRethymno/visitrethymno1.png";
import Image5 from "../images/popcorn/popcorn1.png";
import Image6 from "../images/TravelerList/travelerList1.png";
import Image7 from "../images/coachFinder/coachfinder1.png";
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
    title: "Nexter",
    publishDate: "5 Aug, 2023",
    tags: "UI / Frontend / Sass",
  },
  ProjectImages: [
    {
      id: 1,
      title: "Nexter - Udemy",
      img: Image1,
    },
    {
      id: 2,
      title: "Nexter - Udemy",
      img: Image2,
    },
    {
      id: 3,
      title: "Nexter - Udemy",
      img: Image3,
    },
  ],
  ProjectInfo: {
    ClientHeading: "About Site",
    CompanyInfo: [
      {
        id: 1,
        title: "Name",
        details: "Nexter",
      },
      {
        id: 2,
        title: "Services",
        details: "Frontend Development, Advanced css",
      },
      {
        id: 3,
        title: "Website",
        details: "https://github.com/nNikiforos/Udemy-Nexter",
      },
      {
        id: 4,
        title: "Phone",
        details: "+30 697 188 388 55",
      },
    ],
    ObjectivesHeading: "Objective",
    ObjectivesDetails:
      "To use my skills in front-end development, advanced Sass, and UI design to build clean, easy-to-use websites. I want to work on projects that focus on great user experiences and modern design.",
    Technologies: [
      {
        title: "Tools & Technologies",
        techs: ["HTML", "CSS", "JavaScript", "SASS", "VSCode"],
      },
    ],
    ProjectDetailsHeading: "Challenge",
    ProjectDetails: [
      {
        id: 1,
        details:
          "The first challenge I faced on the site was learning how to organize my Sass files. I needed to understand how to reuse styles and set up my files in a clear way. I also learned how to use variables to make my styling more flexible. At first, this felt hard, but with practice and help, it became easier. I completed this project with support from a Udemy course, which gave us challenges to work on parts of the site by ourselves.",
      },
      {
        id: 2,
        details:
          "As I continued, I faced more challenges with making the website look good on different devices. I had to learn how to use media queries and flexible layouts to ensure everything looked nice on phones, tablets, and computers. It was tough at first, but it felt great when I got it right.",
      },
      {
        id: 3,
        details:
          "Another challenge was fixing problems with how the styles and layouts worked. Sometimes, my styles wouldn’t show up correctly, which was frustrating. But by learning how CSS works, I got better at finding and fixing these issues quickly.",
      },
      {
        id: 4,
        details:
          "Also, putting together different parts of the site and making sure they worked well together was another challenge. I needed to understand how to design components so that they could be easily updated. Thanks to the Udemy course, I became more confident in my skills and enjoyed building a smooth experience for users.",
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
        url: "https://github.com/nNikiforos/Udemy-Nexter",
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
        title: "usePopcorn",
        img: Image5,
      },
      {
        id: 3,
        title: "Traveler list",
        img: Image6,
      },
      {
        id: 4,
        title: "Coach finder",
        img: Image7,
      },
    ],
  },
};
