export const infor = {
  homePageTitle: "Jimna Njoroge | Software Engineer",
  name: "Jimna Njoroge",
  profession: "Fullstack Developer",
  languages: [
    { name: "English", level: 1 },
    { name: "Swahili", level: 0.95 },
    { name: "Mandarin", level: 0.2 },
  ],
  programmingSkills: [
    { name: "Java", value: 0.9 },
    { name: "ReactJS", value: 0.9 },
    { name: "Spring", value: 0.75 },
    { name: "DevOps", value: 0.75 },
  ],
  resume: "https://my-personal-stuff-on-aws-including-resume.s3.amazonaws.com/Jimna's+Resume+v1.0.0.pdf",
  socialMedia: [
    { name: "LinkedIn", link: "https://www.linkedin.com/in/jimna-njoroge-4b5a4b178/" },
    { name: "GitHub", link: "https://github.com/godzillajim" },
    { name: "Twitter", link: "https://twitter.com/jimnam99" },
  ],
  briefPortfolio: [
    { label: "Years of Experience", value: "3+" },
    { label: "Delivered Projects", value: "10+" },
    { label: "Partnerships", value: "20+" },
  ],
  menu: [
    { name: "Home", link: "#home" },
    { name: "Blog", link: "#blog" },
    { name: "Portfolio", link: "#portfolio" },
  ],
  projects: [
    {
      name: "SignSay - Sign Language Recognition App",
      image: "/images/projects/signsay.png",
      stack: ["Python", "PyTorch", "Keras", "Tensorflow"],
      summary:
        "This project was completed in partial fulfillment of the BSc. in Informatics. This application aims to facilitate communication between the deaf and hearing-impaired whose first language is sign language and the rest of the community. The hard of hearing have trouble interacting with people in informal settings such as at a coffee shop because few people in the community understand sign language. In addition, the high number of people who do not understand sign language limits how often the hearing impaired can air their views even when the subject at hand is of significant concern. This project develops SignSay, which bridges this communication gap by translating sign language into English text in real-time, allowing signers to interact with non-signers. SignSay applies computer vision to capture BSL gestures and machine learning to associate the gestures with their meaning in textual format. SignSay will increase the hearing impaired involvement in communities and improve their social interaction by bridging the communication gap between signers and no-signers.",
      github: "https://github.com/godzillajim/signsay",
      site: "https://signsay.herokuapp.com/",
    },
    {
      name: "SpurSoft Online Software Shop",
      image: "/images/projects/spursoft.png",
      stack: ["MongoDB", "NodeJS", "ExpressJS", "ReactJS", "Redux"],
      summary:
        "I completed this project to fulfill the requirements of INF 470E Software Engineering course. This online store mimics other online retailers but is customized to sellSoftware only on one-time purchase or on license terms. A registered user selects software, checks out and links to each product are generated and sent to an email address provided during checkout. These links point to a folder containing the software, activation keys or licenses. This process is automated.",
      github: "https://github.com/godzillajim/spursoft",
      site: "https://spursoft.herokuapp.com/",
    },
    {
      name: "Pigeon",
      image: "/images/projects/pigeon.png",
      stack: ["NodeJS", "ExpressJS", "ReactJS", "Redux"],
      summary:
        "A simple Bible reading application for accessing the King James Version. Read your Bible and pray everyday if you want to grow.",
      github: "https://github.com/godzillajim/pigeon",
      site: "https://pigeon-bible.herokuapp.com/",
    },
  ],
};
