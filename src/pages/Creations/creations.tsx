import Kartus from "~/assets/imgs/kartusPreview.webp";
import Alloy from "~/assets/imgs/AlloyPreview.webp";
import Tale from "~/assets/imgs/TaleElementsPreview.webp";
import Soluciona from "~/assets/imgs/SolucionaPlusPreview.webp";
import Tarefando from "~/assets/imgs/TarefandoPreview.webp";
import ArrowLeft from "~/components/arrow-left-icon/arrowLeft";
import ArrowRight from "~/components/arrow-right-icon/arrowRight";
import useCreation from "~/hooks/useCreation/useCreation";

export default function Creations() {
  const mainTitle = "Meus projetos e criações";
  const subtitle =
    "Soluções que desenvolvi, desafios que superei e ideias que transformei em código.";

  const projects = [
    {
      name: "Kartus",
      description:
        "Desenvolvi o front-end da Kartus com React, TypeScript e CSS. Implementei o design do Figma, criei componentes reutilizáveis, otimizei o carregamento e melhorei a acessibilidade. Foi meu primeiro trabalho para outra pessoa. ",
      image: Kartus,
      path: "https://github.com/viniciusbavosa/Kartus",
      alt: "Um quadrado de bordas arredondadas, plano de fundo composto por um gradiente roxo-azulado com o nome Kartus à frente.",
    },
    {
      name: "Alloy",
      description:
        "Um hub de redes sociais. Siga e gerencie seus perfis favoritos em um só lugar, de forma fácil e eficiente. Desenvolvido com Electron.",
      image: Alloy,
      path: "https://github.com/viniciusbavosa/Alloy",
      alt: "Um quadrado de bordas arredondadas, plano de fundo de cor verde escuro com o nome Alloy à frente.",
    },
    {
      name: "Tale Elements",
      description:
        "Uma biblioteca de componentes reutilizáveis. Desenvolvido com Web Components.",
      image: Tale,
      path: "https://github.com/viniciusbavosa/TaleElements",
      alt: "Um quadrado de bordas arredondadas, plano de fundo de cor vermelho claro com o nome Tale Elements à frente.",
    },
    {
      name: "Soluciona+",
      description:
        "Um sistema de gerenciamento de tickets projetado para conectar usuários que precisam de ajuda com aqueles que podem fornecer assistência. Desenvolvido com React, Fastify e PostgreSQL.",
      image: Soluciona,
      path: "https://github.com/viniciusbavosa/SolucionaPlus",
      alt: "Um quadrado de bordas arredondadas, plano de fundo de cor azul marinho e rosa com o nome Soluciona+ à frente.",
    },
    {
      name: "Tarefando",
      description:
        "Um gerenciador de tarefas simples, mas prático, para organizar sua rotina diária! Desenvolvido com JavaScript e IndexedDB.",
      image: Tarefando,
      path: "https://github.com/viniciusbavosa/Tarefando",
      alt: "Um quadrado de bordas arredondadas, plano de fundo de cor azul escuro. Exibe uma ilustração de uma menina lendo um livro com o nome Tarefando à frente.",
    },
  ];

  const { carouselRef, itemRef, handleLeftClick, handleRightClick } =
    useCreation();

  return (
    <>
      <section className="creations-section">
        <div className="section-content-wrapper creations-content-wrapper">
          <h1 className="section-title creations-title">{mainTitle}</h1>
          <h2 className="section-subtitle creations-subtitle">{subtitle}</h2>

          <div className="creations-list-wrapper">
            <div className="arrow-left-wrapper">
              <button
                className="arrow-left-bttn"
                onClick={handleLeftClick}
                title="Retornar"
              >
                <ArrowLeft />
              </button>
            </div>
            <ul
              className="carousel"
              ref={carouselRef}
              aria-label="Projetos de Vinícius Bavosa"
            >
              {projects.map((p, index) => (
                <li
                  key={index}
                  tabIndex={0}
                  className="creation-item"
                  ref={itemRef}
                >
                  <figure className="creation-img-wrapper">
                    <picture>
                      <img
                        className="creation-img"
                        loading="lazy"
                        width={400}
                        height={400}
                        src={p.image}
                        alt={p.alt}
                      />
                    </picture>
                    <figcaption className="creation-img-caption">
                      <h1 className="creation-title">{p.name}</h1>
                      <p className="creation-description">{p.description}</p>
                      <a
                        href={p.path}
                        target="_blank"
                        rel="noreferrer, noopener"
                        className="creation-caption-link"
                      >
                        Confira
                      </a>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
            <div className="arrow-right-wrapper">
              <button
                className="arrow-left-bttn"
                onClick={handleRightClick}
                title="Avançar"
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
