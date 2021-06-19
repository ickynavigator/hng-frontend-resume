// links start from public/assets/
// do not remove any value from this file

// index.js
export const tagManagerID = "GTM-NVKR37B";

// Home Page
export const ownerName = "OBI FORTUNE DUBEM";
export const ownerPic = "images/myPic.jpg"; //link
export const ownerTitle = "Student / Web developer";

// About Page
// to make cv dissapear empty the array
export const AboutDetails = [
  "I’m an IT student in my third year, studying Information & Technology, at Eastern Mediterranean University in Northern Cyprus.",
  "I am passionate about Web development and currently I am learningTypeScript (a superset of JS). I like to practice my skills on sites like Code wars, CSS battle and Try Hack Me.",
  "I am currently seeking internship opportunities to help me harness and develop my skills in these areas.",
];
export const cvLocation = ["cv.pdf"]; //link

// Projects Page
// image attribute is link
export const ProjList = [
  {
    name: "Raneda Hair and Makeup",
    image: "images/raneda.png",
    info: "An Ecommerce Website",
    built: "MongoDB, Express, React JS and Node",
    link: "https://raneda.herokuapp.com/",
    src: "https://github.com/ickynavigator/raneda",
    disabled: [],
  },
  {
    name: "Recipe Management",
    image: "images/327Project.png",
    info: "A website showcasing recipes and managing the Recipes.",
    built: "PHP",
    link: "https://itec327-termproject.herokuapp.com/",
    src: "https://github.com/ickynavigator/itec327-termproject",
    disabled: [],
  },
  {
    name: "Personal Website/Portfolio",
    image: "images/profile.png",
    info: "The Website you are currently on 😂.",
    built: "ReactJS and Netlify AWS Lambda functions",
    link: "#",
    src: "https://github.com/ickynavigator/profile",
    disabled: [],
  },
];

// Footer
export const FooterLinks = [
  {
    link: "https://github.com/ickynavigator",
    icon: ["fab", "github"],
    title: "Github",
  },
  // {
  //   link: "https://twitter.com/obifortunebleh",
  //   icon: ["fab", "twitter"],
  //   title: "Twitter",
  // },
  {
    link: "https://www.linkedin.com/in/obifortune/",
    icon: ["fas", "code"],
    title: "Site Source Code",
  },
  {
    link: "https://www.linkedin.com/in/obifortune/",
    icon: ["fab", "linkedin-in"],
    title: "Linkedin",
  },
  {
    link: "https://www.facebook.com/obi.fortune2",
    icon: ["fab", "facebook"],
    title: "Facebook",
  },
];

// Navbar
// dont change this unless you are adding new routes
export const navMenuLinks = [
  ["/projects", "Projects"],
  ["/about", "About"],
  ["/", "Home"],
  ["/contact", "Contact"],
];
