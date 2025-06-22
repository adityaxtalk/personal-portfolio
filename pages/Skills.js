import { motion } from "framer-motion";

const categorizedSkills = {
  "Programming Languages": [
    { name: "C#", icon: "uil-brackets-curly", level: 75 },
    { name: "JavaScript", icon: "uil-brackets-curly", level: 80 },
    { name: "SQL", icon: "uil-database", level: 70 },
    { name: "HTML5", icon: "uil-html5", level: 85 },
    { name: "CSS3", icon: "uil-css3-simple", level: 80 },
    { name: "Python", icon: "uil-brackets-curly", level: 65 },
  ],
  "Frameworks & Libraries": [
    { name: ".NET Core", icon: "uil-layer-group", level: 75 },
    { name: ".NET Web API", icon: "uil-layer-group", level: 70 },
    { name: "ASP.NET Core", icon: "uil-layer-group", level: 70 },
    { name: "React", icon: "uil-react", level: 80 },
    { name: "Redux", icon: "uil-vector-square", level: 70 },
    { name: "jQuery", icon: "uil-code", level: 60 },
  ],
  "Tools & Platforms": [
    { name: "Git", icon: "uil-github", level: 85 },
    { name: "Postman", icon: "uil-envelope", level: 75 },
    { name: "MongoDB", icon: "uil-database", level: 65 },
    { name: "SQL Server", icon: "uil-server", level: 70 },
    { name: "Azure", icon: "uil-cloud", level: 60 },
  ],
  "CS Fundamentals": [
    { name: "OOPs", icon: "uil-brain", level: 90 },
    { name: "Database Management", icon: "uil-database", level: 80 },
    { name: "Agile Methodology", icon: "uil-sitemap", level: 75 },
  ],
  "Soft Skills": [
    { name: "Analytical Thinking", icon: "uil-lightbulb-alt", level: 85 },
  ],
};

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <motion.h2
        className="section__title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>
      <motion.span
        className="section__subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Technical & Soft Skills with Proficiency
      </motion.span>

      <motion.div
        className="skills__container container grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {Object.entries(categorizedSkills).map(([category, skills], idx) => (
          <motion.div
            className="skills__category"
            key={idx}
            variants={itemVariants}
          >
            <h3 className="skills__category-title">{category}</h3>
            <div className="skills__list">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skills__data"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="skills__titles">
                    <h4 className="skills__name">
                      {skill.icon && (
                        <i className={`uil ${skill.icon}`} style={{ marginRight: "8px" }}></i>
                      )}
                      {skill.name}
                    </h4>
                    <span className="skills__number">{skill.level}%</span>
                  </div>
                  <div className="skills__bar">
                    <motion.span
                      className="skills__percentage"
                      style={{ width: `${skill.level}%` }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
