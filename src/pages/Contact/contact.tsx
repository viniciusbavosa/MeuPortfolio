export function Contact() {
  const mainTitle = "Entre em contato comigo!";
  const subtitle =
    "Você pode me mandar uma mensagem através das redes sociais.";

  const social = [
    {
      name: "Instagram",
      path: "https://instagram.com/viniciusbavosa",
    },
    {
      name: "Linkedin",
      path: "https://www.linkedin.com/in/vinicius-bavosa",
    },
    {
      name: "Github",
      path: "https://github.com/viniciusbavosa",
    },
    {
      name: "Whatsapp",
      path: "https://wa.me/5538991168986",
    },
    {
      name: "Email",
      path: "viniciusbavosa@outlook.com",
      subject: "Oportunidade de colaboração",
      body: encodeURIComponent(`
          Olá Vinícius, 
          
          Vi seu portfólio e gostaria de conversar sobre uma possível colaboração. Podemos agendar uma conversa?

          Agradeço
        `),
    },
  ];
  return (
    <>
      <section className="contact-section">
        <div className="section-content-wrapper contact-content-wrapper">
          <h1 className="section-title contact-title">{mainTitle}</h1>
          <h2 className="section-subtitle contact-subtitle">{subtitle}</h2>
          <ul className="contact-list-wrapper">
            {social.map((s, i) => (
              <li key={i} className="contact-item">
                <a
                  href={
                    s.name != "Email"
                      ? s.path
                      : `mailto:${s.path}?subject=${s.subject}&body=${s.body}`
                  }
                  target="_blank"
                  rel="noreferrer, no opener"
                  className="contact-link"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
