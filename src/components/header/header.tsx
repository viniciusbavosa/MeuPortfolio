import InstagramIcon from "~/components/instagram-icon/instagram";
import LinkedinIcon from "~/components/linkedin-icon/linkedin";
import GithubIcon from "~/components/github-icon/github";
import { Link } from "@tanstack/react-router";
import HamburguerMenu from "~/components/hamburguer/hamburguer-menu";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuState = () => setIsOpen(!isOpen);

  const navLinks = [
    {
      name: "Início",
      path: "/",
    },
    {
      name: "Criações",
      path: "/projetos",
    },
    {
      name: "Competências",
      path: "/habilidades",
    },
    {
      name: "Artigos",
      path: "/artigos",
    },
    {
      name: "Contato",
      path: "/contato",
    },
  ];

  const socialLinks = [
    {
      name: "instagram",
      svg: <InstagramIcon width="64" height="64" />,
      path: "https://www.instagram.com/viniciusbavosa/",
      ariaLabel: "Instagram",
    },
    {
      name: "linkedin",
      svg: <LinkedinIcon width="64" height="64" />,
      path: "https://www.linkedin.com/in/vinicius-bavosa",
      ariaLabel: "Linkedin",
    },
    {
      name: "github",
      svg: <GithubIcon width="64" height="64" />,
      path: "https://github.com/viniciusbavosa",
      ariaLabel: "Github",
    },
  ];

  return (
    <>
      <header className="header">
        <nav className="nav">
          <ul className="nav-items-wrapper">
            {navLinks.map((l, i) => (
              <li key={i} className="nav-item">
                <Link to={l.path} viewTransition className="nav-link">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <HamburguerMenu menuState={isOpen} setMenuStateFn={toggleMenuState} />
      <header className="header-mobile">
        <nav className="nav-mobile">
          <ul className="nav-items-wrapper">
            {navLinks.map((l, i) => (
              <li key={i} className="nav-item">
                <Link
                  to={l.path}
                  viewTransition
                  className="nav-link"
                  onClick={toggleMenuState}
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <section className="social-section">
        <ul className="social-content-wrapper">
          {socialLinks.map((s, index) => (
            <li
              key={index}
              className="social-item"
              title={s.ariaLabel}
              aria-label={s.ariaLabel}
            >
              <a
                aria-label={`${s.name}-icon`}
                href={s.path}
                target="_blank"
                rel="noreferrer, noopener"
                className={`${s.name}-social-link`}
              >
                {s.svg}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
