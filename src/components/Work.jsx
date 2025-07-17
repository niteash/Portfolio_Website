import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/Foodie.jpeg",
    title: "Foodie Restaurant Website",
    tags: ["Bootstrap", "Libraries", "Development"],
    projectLink: "https://food4foodies.netlify.app/#",
  },
  {
    imgSrc: "/images/innoshwe.png",
    title: "ism digital marketing agency ",
    tags: ["JS", "GSAP"],
    projectLink: "https://ismagency.netlify.app",
  },
  {
    imgSrc: "/images/SWM.jpg",
    title: "Solid Waste Management ",
    tags: ["Development", "SASS", "Bootstrap"],
    projectLink: "https://swmlpu.netlify.app",
  },
  {
    imgSrc: "/images/Shopping Site.jpg",
    title: "Shopping Site",
    tags: ["Reactjs", "TailwindCSS","Development"],
    projectLink: "https://react-shopping-website-three.vercel.app",
  },
  {
    imgSrc: "/images/BookmyHotels.jpg",
    title: "Hotel Booking website",
    tags: ["Nodejs", "Expressjs", "MongoDB", "MVC", "RESTful API", "Development"],
    projectLink: "https://github.com/niteash/BookMyHotels.git",
  },
  {
    imgSrc: "/images/MEN Stack.png",
    title: "MEN stack WebChat App",
    tags: ["MongoDB","ExpressJS","Nodejs", "EJS","Development"],
    projectLink: "https://men-chatapp-backend.onrender.com",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My Portfolio Highlights</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard key={key} imgSrc={imgSrc} title={title} projectLink={projectLink} tags={tags} classes=" reveal-up" />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Work;
