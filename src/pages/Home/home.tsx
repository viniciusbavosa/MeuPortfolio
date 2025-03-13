import { Link } from "react-router-dom";
import Vinicius from "~/assets/imgs/Image.webp";
import YellowBG from "~/assets/imgs/YellowCircle.webp";

export default function Home() {
  const mainTitle = "Vinícius Bavosa. Desenvolvedor Web.";
  const subtitle =
    " De Minas Gerais, escrevendo código e contando histórias digitais.";

  const myInfo = [
    {
      name: "Vinícius M. Bavosa",
      age: "26 anos",
      location: "Pirapora, Minas Gerais",
      hobbies:
        "Gosto de estudar música, jogar RPGs e desenvolver aplicações úteis para o meu dia a dia.",
    },
  ];

  return (
    <>
      <section className="home-section">
        <div className="section-content-wrapper home-content-wrapper">
          <h1 className="section-title home-title">{mainTitle}</h1>
          <h2 className="section-subtitle home-subtitle">{subtitle}</h2>

          <Link to={"/contact"} className="home-bttn" viewTransition>
            Entre em contato
          </Link>
          <div className="home-img-wrapper" tabIndex={0}>
            <div className="home-img-text-wrapper">
              {myInfo.map((info, index) => (
                <ul key={index}>
                  <li className="home-img-name">{info.name}</li>
                  <li className="home-img-state">{info.location}</li>
                  <li className="home-img-age">{info.age}</li>
                  <li className="home-img-hobbies">{info.hobbies}</li>
                </ul>
              ))}
            </div>
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
