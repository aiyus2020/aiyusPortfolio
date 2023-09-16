import Project from "./Project";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h1 className="header">Projects</h1>
      <div className="projects-container">
        <Project
          heading="Brass banking App"
          details="this is a banking App, built with:"
          tools={["HTML", "CSS", "React"]}
          filename="brass.PNG"
          githubURL="https://github.com/aiyus2020/brass-banking"
          projectURL="https://trybrasses.netlify.app/"
        />
        <Project
          heading="My Portfolio"
          details="This is my portfolio site done with React. Built this with:"
          tools={["HTML", "SASS", "Bootstrap", "React", "Framer Motion"]}
          filename="portfolio.PNG"
          isPortfolio
        />
        <Project
          heading="Weather App"
          details="this a weather App, you can type any known location and the weather infomation of the location will display. Built this with:"
          tools={["HTML", "CSS", "javascript", "Api"]}
          filename="weather.PNG"
          githubURL="https://github.com/aiyus2020/weather-app"
          projectURL="https://aiyusweather.netlify.app/"
        />
        <Project
          heading="Age Calculator"
          details="This is an age calculator App, it returns you age in years, months and days. Built this landing page with:"
          tools={["HTML", "Css", "JavaScript"]}
          filename="age.PNG"
          githubURL="https://github.com/aiyus2020/age-calculato"
          projectURL="https://aiyus2020.github.io/age-calculator/"
        />
        <Project
          heading="Music player"
          details="This is an audio music player, it can play only one song for now. Built this landing page with:"
          tools={["HTML", "Css", "JavaScript"]}
          filename="player.PNG"
          githubURL="https://github.com/aiyus2020/audio-player"
          projectURL="https://aiyus2020.github.io/audio-player/"
        />
      </div>
    </div>
  );
};

export default Projects;
