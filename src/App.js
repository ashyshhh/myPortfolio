import { motion } from "framer-motion";
import "./App.css";
import React, { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const slideLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const slideRight = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const projects = [
  {
    img: "https://ashyshhfileupload.s3.eu-north-1.amazonaws.com/new/Screenshot+2025-06-17+195729.png",
    title: "LONGENY",
    desc: "Multifunctional full-stack platform combining e-commerce, CMS, & analytics. Built with React.js & Node.js, integrated WooCommerce and WordPress, CRM and optimized SEO.",
    tech: [
      "React Js",
      "Node JS",
      "PHP",
      "WordPress",
      "WooCommerce",
      "Brevo",
      "Gallabox",
      "RESTful APIs",
      "JavaScript",
      "CI/CD",
      "SEO",
    ],
  },
  {
    img: "https://github.com/ashyshhh/myPortfolio/blob/master/Screenshot%202024-03-11%20144144.png?raw=true",
    title: "AM CHAT AI",
    desc: "Smart chat app with document upload and reading. Built using React.js, TypeScript, REST APIs, and Node.js for intelligent real-time communication.",
    tech: [
      "React Js",
      "TypeScript",
      "CSS",
      "HTML",
      "Redux",
      "JavaScript",
      "RESTful APIs",
      "NodeJs",
      "ExpressJS",
      "MongoDB",
    ],
  },
  {
    img: "https://github.com/ashyshhh/myPortfolio/blob/master/Screenshot%202024-05-05%20155111.png?raw=true",
    title: "Snapdeal",
    desc: "Worked on Snapdeal's e-commerce frontend to improve UX and performance. Implemented new features and resolved issues for seamless user shopping experience.",
    tech: [
      "React.js",
      "JavaScript",
      "CSS",
      "HTML",
      "RESTful APIs",
    ],
  },
  {
    img: "https://github.com/ashyshhh/myPortfolio/blob/master/Screenshot%202024-04-03%20000324.png?raw=true",
    title: "Afrikkom Global",
    desc: "Company website developed in Next.js to showcase services, team, and portfolio with elegant design of the website.",
    tech: [
      "Next.js",
      "React.js",
      "JavaScript",
      "CSS",
      "HTML",
      "Bootstrap",
    ],
  },
  {
    img: "https://github.com/ashyshhh/myPortfolio/blob/master/Screenshot%202024-03-11%20143922.png?raw=true",
    title: "LMS",
    desc: "Educational platform supporting Google & JWT Auth. Built for managing and delivering training content with a responsive UI.",
    tech: [
      "React Js",
      "Next.js",
      "Javascript",
      "Bootstrap",
      "Redux",
      "RESTful APIs",
      "HTML5",
      "CSS3",
    ],
  },
  {
    img: "https://github.com/ashyshhh/myPortfolio/blob/master/Screenshot%202024-04-08%20230836.png?raw=true",
    title: "Physician App",
    desc: "Healthcare management system with secure role-based access and encrypted records. Built with React.js and Node.js.",
    tech: [
      "React.js",
      "JavaScript",
      "CSS",
      "HTML",
      "Bootstap",
      "Redux",
      "RESTful APIs",
      "NodeJs",
      "ExpressJS",
      "MySql",
    ],
  },
  {
    img: "https://user-images.githubusercontent.com/64485885/234602896-a1bd8bcc-b72b-4821-83d6-8ad885bf435e.png",
    title: "Podstream",
    desc: "Full-stack podcast platform with search, playback, and user authentication using Google Auth and JWT.",
    tech: ["React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
  },
];


const skills = {
  frontend: [
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Material UI", icon: "https://mui.com/static/logo.png" },
  ],
  backend: [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "WooCommerce", icon: "https://cmscritic.com/ms-content/uploads/2023/08/woocommerce-product-logo.png" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    
  ],
  tools: [
    { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },

    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  ],
};

const education = [
  { school: "Technocrat Institute Of Technology, Bhopal", date: "Aug 2018 - July 2022", degree: "B.Tech, ECE" },
  { school: "Singhia College", date: "May 2016 - Apr 2018", degree: "ISC (XII), Science" },
  { school: "BNB High School", date: "May 2014 - Apr 2016", degree: "ICSC (X)" },
];

const work = [
  { title: "Associate Fullstack Developer @ Brave Labs", date: "May 2024 – Present", details: "Developed full-stack web applications using React.js and Node.js. Created and managed MySQL databases and integrated APIs using Express.js. Collaborated with marketing teams to optimize SEO and worked with CRM tools like Brevo and Gallabox. Handled frontend and backend tasks independently." },
  { title: "Trainee Software Engineer @ Areteminds", date: "Feb 2023 – May 2024", details: "Designed responsive interfaces using HTML, CSS, JavaScript, and React.js. Developed RESTful APIs using Node.js and Express.js. Collaborated in an Agile team and integrated MySQL with backend services for dynamic features." },
  { title: "Associate Software Engineer @ Linkquest Telecom", date: "Dec 2021 – Jan 2023", details: "Built responsive, mobile-first web applications using React.js, HTML, CSS, and JavaScript, ensuring consistent user experience. Developed RESTful APIs in Node.js and integrated them with MySQL for frontend features. Collaborated with cross-functional teams to implement full-stack features and resolve UI/UX issues." },
];

function App() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
const closeMobileMenu = () => setMobileMenuOpen(false);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "work", label: "Work" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="main-container">
      <motion.header className="hero-section" id="home" initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
<nav className="navbar">
  <h1 className="logo">Ashish</h1>

  <ul className="nav-links desktop">
    {sections.map((s) => (
      <li key={s.id} onClick={() => scrollTo(s.id)}>{s.label}</li>
    ))}
  </ul>

  <div className="hamburger" onClick={toggleMobileMenu}>
    ☰
  </div>

  <div className={`mobile-drawer ${isMobileMenuOpen ? "open" : ""}`}>
    <span className="close-btn" onClick={toggleMobileMenu}>×</span>
    <ul>
      {sections.map((s) => (
        <li key={s.id} onClick={() => { scrollTo(s.id); closeMobileMenu(); }}>
          {s.label}
        </li>
      ))}
    </ul>
  </div>
</nav>

        <div className="hero-content">
          <motion.h2 variants={fadeUp}>I'm a Full Stack Developer</motion.h2>
          <motion.p variants={fadeUp}>Crafting seamless web experiences with React.js & Node.js</motion.p>
          <motion.div className="hero-buttons" variants={fadeUp}>
            <button onClick={() => scrollTo("projects")} className="btn-outline">View Work</button>
            <button className="btn-filled">
              <a href="https://ashyshhfileupload.s3.eu-north-1.amazonaws.com/new/Ashish_Resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
            </button>
          </motion.div>
        </div>
      </motion.header>

      <motion.section className="about-section" id="about" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideLeft} transition={{ duration: 0.6 }}>
        <h2><span>About</span> Me</h2>
        <p className="section-subtext">Full Stack Developer with 3.5+ years experience building scalable and maintainable applications.</p>
        <div className="about-content">
          <img src="https://github.com/ashyshhh/myPortfolio/blob/master/ashishimg.jpg?raw=true" alt="Ashish" className="about-image" />
          <motion.div className="about-text" variants={slideRight}>
            <h3>Hello, I’m <span className="highlight">Ashish Jha</span></h3>
            <p>I'm a dedicated Full Stack Developer specializing in React JS who thrives on challenges and delivers exceptional results. I bring a dynamic approach to problem-solving and a passion for crafting seamless user experiences, both on the front-end and back-end. With a growth-oriented mindset, I'm poised to make impactful contributions and achieve remarkable milestones.</p>
            <ul className="info-list">
              <li><strong>Location:</strong> Bengaluru, India</li>
              <li><strong>Email:</strong> ashyshhh@gmail.com</li>
<li>
  <div className="social-icons">
    <a href="https://www.linkedin.com/in/ashyshhh" target="_blank" rel="noreferrer">
      <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" />
    </a>
    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
      <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
    </a>
    <a href="https://twitter.com/" target="_blank" rel="noreferrer">
      <img src="https://cdn-icons-png.flaticon.com/512/145/145812.png" alt="Twitter" />
    </a>
    <a href="https://facebook.com/" target="_blank" rel="noreferrer">
      <img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="Facebook" />
    </a>
    <a href="https://github.com/ashyshhh" target="_blank" rel="noreferrer">
      <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" />
    </a>
  </div>
</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      <section className="service-section image-bg projects" id="projects">
        <h2><span>My</span> Projects</h2>
        <div className="cards">
          {projects.map((p,i) => (
            <div key={i} className="card project-card">
              <img src={p.img} alt={p.title}/>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <p className="tech-list"><strong>Technologies:</strong> {p.tech.join(", ")}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="service-section image-bg work" id="work">
        <h2><span>My</span> Work Experience</h2>
        {work.map((w,i) => (
          <div key={i} className="card wide prettier">
            <h3>{w.title}</h3>
            <p><strong>{w.date}</strong></p>
            <p>{w.details}</p>
          </div>
        ))}
      </section>

      <section className="service-section image-bg education" id="education">
        <h2><span>My</span> Education</h2>
        {education.map((edu,i) => (
          <div key={i} className="card wide prettier">
            <h3>{edu.degree}</h3>
            <p><strong>{edu.school}</strong></p>
            <p>{edu.date}</p>
          </div>
        ))}
      </section>

<section className="about-section" id="skills">
  <h2><span>Technical</span> Skills</h2>
  <div className="skills-category">
    {Object.entries(skills).map(([category, list]) => (
      <div className="skill-group" key={category}>
        <h4>{category.toUpperCase()}</h4>
        <div className="skills-grid">
          {list.map((skill) => (
            <div className="skill-item" key={skill.name}>
              <img
                src={skill.icon}
                alt={skill.name}
                style={{
                  width: "20px",
                  height: "20px",
                  marginRight: "8px",
                  verticalAlign: "middle",
                }}
              />
              <span style={{ verticalAlign: "middle" }}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>


      <motion.section className="service-section alt-bg" id="contact" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <h2><span>Get</span> In Touch</h2>
        <motion.form className="contact-form" onSubmit={(e) => e.preventDefault()} variants={fadeUp}>
          <motion.input type="text" placeholder="Your Name" required />
          <motion.input type="email" placeholder="Your Email" required />
          <motion.textarea rows="4" placeholder="Your Message" required />
          <motion.button type="submit">Send Message</motion.button>
        </motion.form>
      </motion.section>

      <motion.footer className="footer" initial="hidden" animate="visible" variants={fadeUp}>
        <p>© {new Date().getFullYear()} Ashish Jha </p>
         <ul className="info-list">
              <li><strong>Location:</strong> Bengaluru, India</li>
              <li><strong>Email:</strong> ashyshhh@gmail.com</li>
<li>
  <div className="social-icons footer-icons">
    <a href="https://www.linkedin.com/in/ashyshhh" target="_blank" rel="noreferrer">
      <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" />
    </a>
    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
      <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
    </a>
    <a href="https://twitter.com/" target="_blank" rel="noreferrer">
      <img src="https://cdn-icons-png.flaticon.com/512/145/145812.png" alt="Twitter" />
    </a>
    <a href="https://facebook.com/" target="_blank" rel="noreferrer">
      <img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="Facebook" />
    </a>
    <a href="https://github.com/ashyshhh" target="_blank" rel="noreferrer">
      <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" />
    </a>
  </div>
</li>
            </ul>
      </motion.footer>
    </div>
  );
}

export default App;
