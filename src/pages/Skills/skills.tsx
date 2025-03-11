export default function Skills() {
  const mainTitle = "Minhas tecnologias e Conhecimentos";
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
          <ul className="skills-wrapper">
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
