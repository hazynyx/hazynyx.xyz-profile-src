import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    name: "dingus-os",
    desc: "Browser-based OS / Rust VFS",
    url: "https://github.com/hazynyx/dingus-os"
  },
  {
    name: "Edith-3d",
    desc: "Interactive Hand-tracked WebGL",
    url: "https://github.com/hazynyx/Edith-3d"
  },
  {
    name: "datakeep",
    desc: "Encrypted Local Storage",
    url: "https://github.com/hazynyx/datakeep"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="content-wrapper" style={{ justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15vh', width: '100%' }}>
        {projects.map((project, idx) => (
          <motion.a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            key={idx}
            className="link-minimal"
            initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-20%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              display: 'block', 
              textAlign: idx % 2 === 0 ? 'left' : 'right',
              paddingLeft: idx % 2 === 0 ? '0' : '20%',
              paddingRight: idx % 2 !== 0 ? '0' : '20%'
            }}
          >
            <h2 style={{ 
              fontSize: 'clamp(4rem, 8vw, 8rem)', 
              lineHeight: '1',
              color: 'var(--text-primary)'
            }}>
              {project.name}
            </h2>
            <p style={{ 
              marginTop: '1rem', 
              fontSize: '1.2rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}>
              {project.desc}
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
