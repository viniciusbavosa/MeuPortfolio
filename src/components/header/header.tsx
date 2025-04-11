import InstagramIcon from "~/components/instagram-icon/instagram";
import LinkedinIcon from "~/components/linkedin-icon/linkedin";
import GithubIcon from "~/components/github-icon/github";
import { Link } from "react-router-dom";
import { useHeader } from "~/hooks/useHeader/useHeader";

export default function Header() {
  const { isOpen, toggleMenuState } = useHeader();
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
      {/* Desktop Header */}
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
      <button
        className={`${isOpen ? "open" : "closed"} menu-toggle`}
        role="button"
        onClick={toggleMenuState}
      >
        <div className="hamburger"></div>
      </button>
      {/* Mobile Header */}
      <header className="header-mobile">
        <nav className="nav nav-mobile">
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
