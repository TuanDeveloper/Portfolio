import htmlIcon from '../../assets/images/html.png';
import cssIcon from '../../assets/images/css.svg';
import jsIcon from '../../assets/images/js.webp';
import reactIcon from '../../assets/images/react.png';
import nodejsIcon from '../../assets/images/nodejs.png';
import expressIcon from '../../assets/images/express-js.png';
import mongoIcon from '../../assets/images/mongo.png';
import mysqlIcon from '../../assets/images/mysql.png';
import pythonIcon from '../../assets/images/python.png';
import javaIcon from '../../assets/images/java.png';
import csharpIcon from '../../assets/images/c.png';
import tsIcon from '../../assets/images/ts.png';
import gitIcon from '../../assets/images/git.png';
import dockerIcon from '../../assets/images/docker.png';
import tailwindIcon from '../../assets/images/Tailwind_CSS_Logo.png';
import bootstrapIcon from '../../assets/images/Bootstrap_logo.svg.png';
import firebaseIcon from '../../assets/images/Firebase1.png';
import postmanIcon from '../../assets/images/Postman.png';
import figmaIcon from '../../assets/images/Figma-logo.svg';
import photoshopIcon from '../../assets/images/Photoshop.png';

const Skills = () => {
  const skills = [
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "React", icon: reactIcon },
    { name: "Node.js", icon: nodejsIcon },
    { name: "Express.js", icon: expressIcon },
    { name: "MongoDB", icon: mongoIcon },
    { name: "MySQL", icon: mysqlIcon },
    { name: "Python", icon: pythonIcon },
    { name: "Java", icon: javaIcon },
    { name: "C#", icon: csharpIcon },
    { name: "TypeScript", icon: tsIcon },
    { name: "GitHub", icon: gitIcon },
    { name: "Docker", icon: dockerIcon },
    { name: "Tailwind CSS", icon: tailwindIcon },
    { name: "Bootstrap", icon: bootstrapIcon },
    { name: "Firebase", icon: firebaseIcon },
    { name: "Postman", icon: postmanIcon },
    { name: "Figma", icon: figmaIcon },
    { name: "Photoshop", icon: photoshopIcon },
  ];

  return (
    <section className="mt-20 max-w-xl mx-auto text-center text-sm text-white/70 leading-relaxed">
      <p data-aos="fade-up">
        The technologies 
        <a className="text-purple-500 hover:underline" href="#"> I know</a>
      </p>

      <div className="mt-6 flex justify-center flex-wrap gap-4 max-w-md mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="relative skill-icon-container">
            <img
              alt={`${skill.name} logo icon`}
              className="w-10 h-10 skill-icon"
              height="24"
              src={skill.icon}
              width="24"
              data-aos="zoom-in"
              data-aos-delay={100 + (index * 50)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;