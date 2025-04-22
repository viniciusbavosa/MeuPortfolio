import { useSuspenseQuery } from "@tanstack/react-query";
import { getData } from "~/helpers/fetch";

interface articleData {
  canonical_url: string;
  type_of: string;
  title: string;
  published_at: string;
}

export function Articles() {
  const title = "Meus artigos";
  const subtitle = "Da comunidade, para a comunidade";

  const { data } = useSuspenseQuery<articleData[]>({
    queryKey: ["articles"],
    queryFn: () =>
      getData("https://dev.to/api/articles?username=viniciusbavosa"),
  });

  return (
    <>
      <section className="articles-section section-content-wrapper">
        <h1 className="section-title">{title}</h1>
        <h2 className="section-subtitle">{subtitle}</h2>
        <ul className="articles-list-wrapper">
          {data.map((a: articleData, i: number) => (
            <li key={i} className="article-item">
              <article className="article-wrapper">
                <h1 className="article-title">
                  <a
                    href={a.canonical_url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="article-link"
                  >
                    {a.title}
                  </a>
                </h1>
                <span className="article-date">
                  Publicado em{" "}
                  {new Date(a.published_at).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "long",
                  })}
                </span>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
