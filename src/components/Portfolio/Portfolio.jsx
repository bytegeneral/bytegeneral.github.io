import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import './Portfolio.css'
import { projects } from "./projects.js"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

export default function Portfolio() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>My Projects</h1>
        <p>A showcase of selected work I've built</p>
      </header>

      {/* Projects Grid */}
      <section className="stats-row">
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            className="stat-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={i}
            whileHover={{ y: -5 }}
          >
            {/* Image */}
            <div className="project-image-container">
              <img src={p.img} alt={p.name} className="project-image" />
              <div className="project-image-overlay" />
            </div>

            {/* Content */}
            <div className="project-content">
              <div className="project-header">
                <h3 className="stat-label">{p.name}</h3>
                <a href={p.link} target="_blank" rel="noreferrer">
                  <ExternalLink className="link-icon" />
                </a>
              </div>
              <p className="stat-value">{p.desc}</p>

              {/* Tech Tags as badges */}
              <div className="tech-grid">
                {p.tags.map((tag) => (
                  <img key={tag.name} src={tag.img} alt={tag.name} />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA Button */}
      <section className="cta-row">
        <motion.a
          href="https://github.com/g-kassis"
          target="_blank"
          rel="noreferrer"
          className="cta-btn primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Github className="link-icon" /> View More on GitHub
        </motion.a>
      </section>
    </div>
  );
}
