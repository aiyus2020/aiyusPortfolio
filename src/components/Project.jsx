import { motion } from "framer-motion";

const Project = ({
  heading,
  details,
  tools,
  filename,
  isPortfolio,
  githubURL,
  projectURL,
}) => {
  return (
    <div className="project row">
      <motion.div
        className="project-text col-md-5"
        initial={{ translateX: -200 }}
        whileInView={{ translateX: 0 }}
        viewport={{ once: true }}
      >
        <h2>{heading}</h2>
        <p>{details}</p>
        <ul className="tools">
          {tools.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
        <div className="d-flex">
          <a href={githubURL} className="btn code-btn" target="_blank">
            <i className="fa-brands fa-github"></i> View Code
          </a>
          {!isPortfolio && projectURL && (
            <a href={projectURL} className="btn red-btn" target="_blank">
              {" "}
              <i className="fa-solid fa-arrow-up-right-from-square"></i> Visit
              Site
            </a>
          )}
        </div>
      </motion.div>
      <motion.div
        className="project-img col-md-5"
        initial={{ translateX: 200 }}
        whileInView={{ translateX: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", bounce: 0.4 }}
      >
        <img src={"Images/Projects/" + filename} alt={heading} />
      </motion.div>
    </div>
  );
};

export default Project;
