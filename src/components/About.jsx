import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about" id="about">
      <h1 className="header">About</h1>
      <div className="about-content row">
        <div className="about-img col-md-4">
          <motion.div
            className="circle"
            animate={{ scale: [0.95, 1, 0.95] }}
            transition={{ repeat: Infinity, duration: 3 }}
            style={{ borderRadius: "50%" }}
          ></motion.div>
          <img
            src="Images/me.jpg"
            style={{
              borderRadius: "50%",
              width: "350px", // Adjust the width as needed
              height: "350px",
              display: "block",
              margin: "auto",
            }}
            alt="Profile Picture"
          />
        </div>
        <div className="about-text col-md-6">
          I am a seasoned web developer with experience in both frontend and
          backend technologies. My skill set includes proficiency in HTML5, CSS,
          JavaScript, React, Git, GitHub, SQL, MongoDB, Node.js, and Express.js.
          I am driven by a strong desire to continue learning and enhancing my
          skills in the ever-evolving field of web development. With a
          commitment to staying updated with the latest trends and technologies,
          I am dedicated to delivering high-quality web solutions and staying at
          the forefront of the industry
          <br />
          <a
            className="btn red-btn"
            href="My-Portfolio\aiyudubie_ediagbonya_CV (1).docx" // Use the correct path
            download="Aiyudubie's Resume"
          >
             Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
