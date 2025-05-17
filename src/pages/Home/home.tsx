import { Link } from "@tanstack/react-router";
import Vinicius from "~/assets/imgs/Image.webp";
import YellowBG from "~/assets/imgs/YellowCircle.webp";

export default function Home() {
  const mainTitle = "Vinícius Bavosa. Desenvolvedor Web.";
  const subtitle =
    " De Minas Gerais, escrevendo código e contando histórias digitais.";

  return (
    <>
      <section className="home-section">
        <div className="section-content-wrapper home-content-wrapper">
          <h1 className="section-title home-title">{mainTitle}</h1>
          <h2 className="section-subtitle home-subtitle">{subtitle}</h2>

          <Link to={"/contato"} className="home-bttn" viewTransition>
            Entre em contato
          </Link>
          <div className="home-img-wrapper">
            <img
              src={YellowBG}
              width={400}
              height={400}
              className="home-img-bg"
              alt="Fundo amarelo em formato circular"
            />
            <img
              src={Vinicius}
              width={400}
              height={400}
              className="home-img-vinicius"
              alt="Uma imagem do Vinícius Bavosa, dono desse portfólio"
            />
          </div>
        </div>
      </section>
    </>
  );
}
