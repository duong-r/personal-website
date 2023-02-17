// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Ryan",
  middleName: "",
  lastName: "Duong",
  message: "Student | Developer | Tech Enthusiast",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/duong-r",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/duongr/",
    },
  ],
};

// About Me SECTION
// If you want the About Me Section to show a profile picture you can fill the image Link either with:
//a) image in "editable-stuff" directory and use require("") to import here,
//      i.e: imageLink: require("../editable-stuff/ryanduong.png")
//b) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: imageLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://drive.google.com/file/d/1JTfkbaZXMyJDDqn8oSE_C_SFyKMBlYZT/view?usp=sharing"
const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/profilepicscaled.jpg"),
  imageSize: 375,
  message:
      "Hi! My name is Ryan Duong and I'm currently studying Computer Science and Biology at Northeastern University. I'm passionate about software engineering and how we can make the world better through technology.",
  resume: "https://drive.google.com/file/d/1BhehXy7oR1OMkdueshQtIPncHeh3cXR6/view?usp=sharing",
};

// Experience SECTION
const experience = {
  show: true,
  heading: "Experience",
  data: [
    {
      role: 'SDE Intern',
      company: 'Amazon',
      companyLogo: require('../assets/images/amazon.png'),
      date: 'June 2022 - August 2022',
    },
    {
      role: 'SDET Intern',
      company: 'Applause',
      companyLogo: require('../assets/images/applause.png'),
      date: 'January 2022 – June 2022',
    },
  ]
}

// Education SECTION
const education = {
  show: true,
  heading: "Education",
  data: [
    {
      school: 'Northeastern University',
      degree: 'Bachelor of Science in Computer Science and Biology',
      schoolLogo: require('../assets/images/northeastern.png'),
      graduationDate: 'Expected Dec. 2023',
    },
    {
      school: 'University of Massachusetts Lowell',
      degree: 'Bachelor of Science in Biology',
      schoolLogo: require('../assets/images/uml.png'),
      graduationDate: 'Sept. 2017 - May 2020',
    },
  ]
}

// Projects SECTION
// Setting up reposLength will automatically fetch that number of most recently updated projects.
// Set this field to 0 to show no repos or if you plan to show specific repos.
//      i.e: reposLength: 0,
// If you want to display specific projects, add the repository names:
//      i.e specificRepos: ["repository-1", "repo-2"],
const repos = {
  show: true,
  heading: "Projects",
  gitHubUsername: "duong-r", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["c4chan", "personal-website"],
};

// Skills SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "TypeScript", value: 90 },
    { name: "JavaScript", value: 90 },
    { name: "Java", value: 90 },
    { name: "C/C++", value: 80 },
    { name: "Git", value: 90 },
    { name: "MongoDB", value: 85 },
    { name: "SQL", value: 75 },
    { name: "React", value: 75 },
    { name: "Redux", value: 75 },
    { name: "HTML/CSS", value: 85 },
    { name: "Bootstrap", value: 75 },
    { name: "AWS", value: 90 },
    { name: "LaTeX", value: 75 },
    { name: "Unix/Linux", value: 80 },
  ],
  softSkills: [
    { name: "Customer Focused", value: 100 },
    { name: "Goal Oriented", value: 95 },
    { name: "Collaboration", value: 95 },
    { name: "Positivity", value: 100 },
    { name: "Project Management", value: 90 },
    { name: "Adaptability", value: 95 },
    { name: "Problem Solving", value: 90 },
    { name: "Empathy", value: 100 },
    { name: "Organization", value: 90 },
    { name: "Creativity", value: 90 },
  ],
};

// Get In Touch SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
      "I'm always looking for opportunities to connect with others and grow professionally. If the feeling's mutual, please feel free to email me at:",
  email: "duong.r@northeastern.edu",
};

export { navBar, mainBody, about, experience, education, repos, skills, getInTouch };