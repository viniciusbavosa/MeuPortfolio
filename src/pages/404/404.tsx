import { Link } from "react-router-dom";
import ToTheMoon from "~/components/to-the-moon-icon/toTheMoon";

export default function NotFound() {
  const title = "Desculpe, mas não encontramos o que procura!";
  return (
    <>
      <section className="section-content-wrapper section-error">
        <h1 className="section-title error-title">{title}</h1>
        <div className="img-wrapper">
          <ToTheMoon />
        </div>
        <Link to={"/"} viewTransition>
          Voltar a página inicial
        </Link>
      </section>
    </>
  );
}
