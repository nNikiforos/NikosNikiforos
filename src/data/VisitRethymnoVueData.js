// Import images
import Image1 from "../images/VisitRethymno/visitrethymno1.png";
import Image2 from "../images/VisitRethymno/visitrethymno2.png";
import Image3 from "../images/VisitRethymno/visitrethymno3.png";
import Image4 from "../images/Nexter/nexter1.png";
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
    title: "VisitRethymno with Vue.js",
    publishDate: "15 Dec, 2023",
    tags: "UI / Frontend",
  },
  ProjectImages: [
    {
      id: 1,
      title: "Visit Rthymno with vue.js",
      img: Image1,
    },
    {
      id: 2,
      title: "Visit Rthymno with vue.js",
      img: Image2,
    },
    {
      id: 3,
      title: "Visit Rthymno with vue.js",
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
        details: "https://github.com/nNikiforos/visit-rethymno",
      },
      {
        id: 4,
        title: "Phone",
        details: "+30 697 188 3855",
      },
    ],
    ObjectivesHeading: "Objective",
    ObjectivesDetails:
      "I rebuilt my site using the Vue.js framework, which I originally created at SAE Institute in Athens. This helped improve the site’s performance and made it more interactive.",
    Technologies: [
      {
        title: "Tools & Technologies",
        techs: ["HTML", "SCSS", "JavaScript", "Vue.js", "VSCode"],
      },
    ],
    ProjectDetailsHeading: "Challenge",
    ProjectDetails: [
      {
        id: 1,
        details:
          "The first challenge I faced on the site was learning how to organize my Sass files. I needed to understand how to reuse styles and set up my files in a clear way. I also learned how to use variables to make my styling more flexible. At first, this felt hard, but with practice, it became easier.",
      },
      {
        id: 2,
        details:
          "I faced several challenges while working with Vue.js. First, I had to understand how Vue.js works and how to create reusable components. Connecting props between components was tricky at first. The router also posed a challenge, but with practice, I learned to use it effectively. Each page had its own styles, and I imported data via JSON to render on my site.",
      },
      {
        id: 3,
        details:
          "As I continued, I faced challenges with adding animations to the site. I needed to learn how to create smooth transitions and effects to enhance the user experience. It was a bit tricky at first, but I enjoyed figuring out how to make the site feel more dynamic.",
      },
      {
        id: 4,
        details:
          "Another challenge was fixing problems with how the styles and layouts worked. Sometimes, my styles wouldn’t show up correctly, which was frustrating. But by learning how CSS works, I got better at finding and fixing these issues quickly.",
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
        url: "https://github.com/nNikiforos/visit-rethymno",
      },
    ],
  },
  RelatedProject: {
    title: "Related Projects",
    Projects: [
      {
        id: 1,
        title: "Nexter",
        img: Image4,
      },
      {
        id: 2,
        title: "UsePopcorn",
        img: Image5,
      },
      {
        id: 3,
        title: "Traveler list",
        img: Image6,
      },
      {
        id: 4,
        title: "Coach Finder",
        img: Image7,
      },
    ],
  },
};
