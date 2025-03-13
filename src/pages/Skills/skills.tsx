export default function Skills() {
  const mainTitle = "Minhas tecnologias e conhecimentos";
  const subtitle =
    "Domínio técnico e criatividade para construir soluções eficientes.";

  const skills = [
    "JavaScript",
    "CSS",
    "HTML",
    "Web Components",
    "React",
    "TypeScript",
    "NodeJS",
    "Fastify",
    "Express",
    "Electron",
    "Git",
    "Github",
    "Tailwind",
    "Shadcui",
    "PostCSS",
    "NPM",
    "Arquitetura REST",
    "API Restful",
    "Protocolo HTTP",
    "CORS",
    "Cache",
    "Prisma",
    "MongoDB",
    "SQLite",
    "MySQL",
    "Zod",
    "Figma",
  ];
  return (
    <>
      <section className="skills-section">
        <div className="section-content-wrapper skills-content-wrapper">
          <h1 className="section-title creations-title">{mainTitle}</h1>
          <h2 className="section-subtitle creations-subtitle">{subtitle}</h2>
          <ul
            className="skills-wrapper"
            aria-label="Lista de habilidades de Vinícius Bavosa"
          >
            {skills.map((s, index) => (
              <li key={index} tabIndex={0} className="skill-item">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
